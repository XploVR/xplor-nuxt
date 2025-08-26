
<template>
  <div class="max-w-7xl mx-auto p-6">
    <div class="text-center space-y-2 mb-8">
      <h1 class="text-3xl font-bold">Upload Manufacturing Facility</h1>
      <p class="text-muted-foreground">
        Showcase, lease, sell, or document manufacturing spaces with technical and operational details
      </p>
    </div>

    <div class="flex gap-6">
      <div class="w-64 flex-shrink-0">
        <div class="sticky top-6">
          <nav class="space-y-2">
            <button
              v-for="t in tabs" :key="t.id"
              class="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3"
              :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'"
              @click="activeTab=t.id"
            >
              <span class="text-lg">{{ t.icon }}</span>
              <span class="font-medium">{{ t.label }}</span>
            </button>
          </nav>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <section v-if="activeTab==='basic-info'" class="space-y-6">
            <Card>
              <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label class="md:col-span-2 block">
                  <span class="text-sm font-medium">Listing Title *</span>
                  <input v-model="form.listingTitle" class="input" placeholder="e.g., Steel Fabrication Plant – Barcelona">
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Facility Type *</span>
                  <select v-model="form.facilityType" class="input">
                    <option value="" disabled>Select facility type</option>
                    <option v-for="t in facilityTypes" :key="t" :value="t">{{ t }}</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Year Built</span>
                  <input v-model="form.yearBuilt" class="input" placeholder="e.g., 2010">
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Current Use *</span>
                  <input v-model="form.currentUse" class="input" placeholder="e.g., Operational production">
                </label>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='location'" class="space-y-6">
            <Card>
              <CardHeader><CardTitle>Location</CardTitle></CardHeader>
              <CardContent class="space-y-4">
                <MapboxLocationPicker
                  :coordinates="form.coordinates"
                  @update:coordinates="(c) => form.coordinates = c"
                  class="h-64 rounded-lg overflow-hidden border"
                />
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='media'" class="space-y-6">
            <Card>
              <CardHeader class="flex items-center justify-between">
                <CardTitle>Media &amp; Files</CardTitle>
                <button class="btn" @click.prevent="addMedia('image')">Add Image</button>
              </CardHeader>
              <CardContent>
                <div v-for="m in mediaFiles" :key="m.id" class="p-3 border rounded-lg flex items-center justify-between gap-3">
                  <input v-model="m.name" class="input" placeholder="Name">
                  <select v-model="m.visibility" class="input w-40">
                    <option>public</option>
                    <option>admin</option>
                    <option>pin</option>
                  </select>
                  <button class="text-red-600" @click.prevent="removeMedia(m.id)">Remove</button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='visibility'" class="space-y-6">
            <Card>
              <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label class="block">
                  <span class="text-sm font-medium">Status</span>
                  <select v-model="form.listingStatus" class="input">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </label>
                <label class="block">
                  <span class="text-sm font-medium">Visibility</span>
                  <select v-model="form.visibility" class="input">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </label>
              </CardContent>
            </Card>
          </section>

          <div class="flex justify-end gap-2 pt-2">
            <button type="button" class="px-3 py-2 rounded-md border" @click="reset()">Reset</button>
            <button type="submit" class="btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import MapboxLocationPicker from './MapboxLocationPicker.vue'
const Card = (await import('@/components/ui/card/index.ts')).default || {}
const CardHeader = (await import('@/components/ui/card/CardHeader.vue')).default || {}
const CardTitle = (await import('@/components/ui/card/CardTitle.vue')).default || {}
const CardContent = (await import('@/components/ui/card/CardContent.vue')).default || {}

type MediaFile = { id: string; name: string; description?: string; tag?: string; visibility: 'public'|'admin'|'pin'; type: 'image'|'video'|'document'|'tour'|'plan'; url?: string }

const form = reactive({
  listingTitle:'', facilityType:'', description:'', yearBuilt:'', currentUse:'', status:'',
  listingStatus:'draft', visibility:'public', coordinates: null as null | {lat:number; lng:number}
})

const tabs = [
  { id:'basic-info', label:'Basic Info', icon:'📋' },
  { id:'facility-details', label:'Facility Details', icon:'🏭' },
  { id:'production', label:'Production & Equipment', icon:'⚙️' },
  { id:'utilities', label:'Utilities & Compliance', icon:'🔧' },
  { id:'media', label:'Media & Files', icon:'📸' },
  { id:'location', label:'Location', icon:'📍' },
  { id:'visibility', label:'Visibility', icon:'👁️' },
]
const activeTab = ref('basic-info')
const facilityTypes = ["General Manufacturing","Heavy Industry","Food Processing","Pharmaceutical","Automotive Assembly","Chemical Plant","Electronics / Semiconductor","Textile Mill","Warehouse & Distribution","Research & Development","Other"]

const mediaFiles = ref<MediaFile[]>([])
function addMedia(type: MediaFile['type']){ mediaFiles.value.push({ id: Math.random().toString(36).slice(2), name:'', visibility:'public', type }) }
function removeMedia(id: string){ mediaFiles.value = mediaFiles.value.filter(m=>m.id!==id) }

function onSubmit(){ console.log('submit', form); alert('Manufacturing facility listing saved!') }
function reset(){ Object.assign(form, { listingTitle:'', facilityType:'', description:'', yearBuilt:'', currentUse:'', status:'', listingStatus:'draft', visibility:'public', coordinates:null }) }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
</style>




