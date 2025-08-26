
<template>
  <form @submit.prevent="submit" class="space-y-6">
    <div class="w-full">
      <div class="grid w-full grid-cols-4 lg:grid-cols-8 gap-2">
        <button v-for="t in tabs" :key="t.id" type="button" class="px-3 py-2 rounded border text-left"
                :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : ''"
                @click="activeTab=t.id">{{ t.label }}</button>
      </div>

      <Card v-if="activeTab==='basic-info'" class="mt-4">
        <CardHeader><CardTitle>Basic Information</CardTitle><CardDescription>General details</CardDescription></CardHeader>
        <CardContent class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block"><span class="text-sm">Listing Title *</span><input v-model="model.listingTitle" class="input" placeholder="The Botanist Rooftop Bar" /></label>
            <label class="block"><span class="text-sm">Venue Type *</span>
              <select v-model="model.venueType" class="input"><option disabled value="">Select</option><option value="restaurant">Restaurant</option><option value="cafe">Café</option><option value="bar-pub">Bar / Pub</option><option value="rooftop-bar">Rooftop Bar</option><option value="nightclub">Nightclub</option><option value="other">Other</option></select>
            </label>
          </div>
          <label class="block"><span class="text-sm">Description</span><textarea v-model="model.description" class="input min-h-[100px]" /></label>
        </CardContent>
      </Card>

      <Card v-else-if="activeTab==='media'" class="mt-4">
        <CardHeader><CardTitle>Media</CardTitle></CardHeader>
        <CardContent class="space-y-3">
          <input type="file" multiple @change="onFiles" />
          <ul class="list-disc ml-6">
            <li v-for="(f,i) in media" :key="i" class="flex justify-between"><span>{{ f.name }}</span><button class="text-red-600" @click="remove(i)">Remove</button></li>
          </ul>
        </CardContent>
      </Card>

      <Card v-else-if="activeTab==='location'" class="mt-4">
        <CardHeader><CardTitle>Location</CardTitle></CardHeader>
        <CardContent class="space-y-3">
          <MapboxLocationPicker :coordinates="coords" @update:coordinates="v=>coords=v" />
        </CardContent>
      </Card>

      <Card v-else-if="activeTab==='visibility'" class="mt-4">
        <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
        <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select v-model="model.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select>
          <select v-model="model.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select>
        </CardContent>
      </Card>

      <div class="flex justify-end gap-2">
        <button type="button" class="px-3 py-2 rounded-md border" @click="reset">Reset</button>
        <button type="submit" class="btn">Save</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import MapboxLocationPicker from './MapboxLocationPicker.vue'
import Card from 'ui/card/index.vue'
import CardHeader from 'ui/card/CardHeader.vue'
import CardTitle from 'ui/card/CardTitle.vue'
import CardDescription from 'ui/card/CardDescription.vue'
import CardContent from 'ui/card/CardContent.vue'

const tabs = [
  { id:'basic-info', label:'Basic Info' },
  { id:'venue-details', label:'Venue Details' },
  { id:'food-drink', label:'Food & Drink' },
  { id:'amenities', label:'Amenities' },
  { id:'access', label:'Access & Rules' },
  { id:'media', label:'Media' },
  { id:'location', label:'Location' },
  { id:'visibility', label:'Visibility' }
]
const activeTab = ref('basic-info')

const model = reactive<any>({ listingTitle:'', venueType:'', description:'', listingStatus:'draft', visibility:'public' })
const media = ref<File[]>([])
const coords = ref<{lat:number; lng:number} | null>(null)

function onFiles(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; media.value = [...media.value, ...Array.from(input.files)] }
function remove(i:number){ media.value.splice(i,1) }
function submit(){ console.log('restaurant', model, coords.value); alert('Restaurant/Bar saved!') }
function reset(){ Object.assign(model, { listingTitle:'', venueType:'', description:'', listingStatus:'draft', visibility:'public' }); media.value=[]; coords.value=null }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
</style>

