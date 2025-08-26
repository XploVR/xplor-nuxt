
<template>
  <div class="max-w-7xl mx-auto p-6">
    <div class="text-center space-y-2 mb-8">
      <h1 class="text-3xl font-bold">Upload Merchant Shipping Listing</h1>
      <p class="text-muted-foreground">Upload specifications, media, and compliance data for merchant vessels</p>
    </div>

    <div class="flex gap-6">
      <div class="w-64 flex-shrink-0">
        <div class="sticky top-6">
          <nav class="space-y-2">
            <button v-for="t in tabs" :key="t.id" type="button"
              class="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3"
              :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'"
              @click="activeTab=t.id">
              <span class="text-lg">{{ t.icon }}</span>
              <span class="font-medium">{{ t.label }}</span>
            </button>
          </nav>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <section v-if="activeTab==='basic-info'">
            <Card>
              <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label class="md:col-span-2 block">
                  <span class="text-sm font-medium">Listing Title *</span>
                  <input v-model="form.listingTitle" class="input" placeholder="e.g., MV Nordic Carrier – 50,000 DWT Tanker">
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Vessel Type *</span>
                  <select v-model="form.vesselType" class="input">
                    <option disabled value="">Select vessel type</option>
                    <option v-for="v in vesselTypes" :key="v">{{ v }}</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-medium">IMO Number *</span>
                  <input v-model="form.imoNumber" class="input" placeholder="e.g., 9123456">
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Flag State *</span>
                  <select v-model="form.flagState" class="input">
                    <option disabled value="">Select flag state</option>
                    <option v-for="v in flagStates" :key="v">{{ v }}</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Year Built *</span>
                  <input v-model="form.yearBuilt" class="input" placeholder="2010">
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Operational Status *</span>
                  <select v-model="form.operationalStatus" class="input">
                    <option value="active">Active</option>
                    <option value="laid-up">Laid Up</option>
                    <option value="under-refit">Under Refit</option>
                    <option value="decommissioned">Decommissioned</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-sm font-medium">Listing Type *</span>
                  <select v-model="form.listingType" class="input">
                    <option value="showcase">Showcase</option>
                    <option value="for-sale">For Sale</option>
                    <option value="for-charter">For Charter</option>
                    <option value="documentation-only">Documentation Only</option>
                  </select>
                </label>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='vessel-details'">
            <Card>
              <CardHeader><CardTitle>Vessel Specifications</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label class="block"><span class="text-sm font-medium">Gross Tonnage (GT)</span><input v-model="form.grossTonnage" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Deadweight (DWT)</span><input v-model="form.deadweightTonnage" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Length Overall (m)</span><input v-model="form.lengthOverall" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Beam (m)</span><input v-model="form.beam" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Draft (m)</span><input v-model="form.draft" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Engine Type</span><input v-model="form.engineType" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Main Engine Power</span><input v-model="form.mainEnginePower" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Service Speed</span><input v-model="form.serviceSpeed" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">Fuel Types</span><input v-model="form.fuelTypes" class="input" placeholder="e.g., HFO, MGO" /></label>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='compliance'">
            <Card>
              <CardHeader><CardTitle>Compliance & Classification</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label class="block"><span class="text-sm font-medium">Class Society</span><input v-model="form.classificationSociety" class="input" /></label>
                <label class="block"><span class="text-sm font-medium">ISM Certified</span><input type="checkbox" v-model="form.ismCertified" /></label>
                <label class="block"><span class="text-sm font-medium">ISPS Compliant</span><input type="checkbox" v-model="form.ispsCompliant" /></label>
                <label class="block"><span class="text-sm font-medium">MLC Certified</span><input type="checkbox" v-model="form.mlcCertified" /></label>
                <label class="block"><span class="text-sm font-medium">SOLAS Compliant</span><input type="checkbox" v-model="form.solasCompliant" /></label>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='media'">
            <Card>
              <CardHeader class="flex items-center justify-between"><CardTitle>Media & Files</CardTitle><button class="btn" @click.prevent="addMedia('image')">Add Image</button></CardHeader>
              <CardContent class="space-y-3">
                <div v-for="m in mediaFiles" :key="m.id" class="p-3 border rounded-lg grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                  <input v-model="m.name" class="input" placeholder="Name" />
                  <select v-model="m.type" class="input"><option>image</option><option>video</option><option>document</option><option>tour</option></select>
                  <select v-model="m.visibility" class="input"><option>public</option><option>admin</option><option>pin</option></select>
                  <button class="text-red-600" @click.prevent="removeMedia(m.id)">Remove</button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='location'">
            <Card>
              <CardHeader><CardTitle>Location</CardTitle></CardHeader>
              <CardContent class="space-y-4">
                <input v-model="form.currentLocation" class="input" placeholder="Current location (port/city)" />
                <MapboxLocationPicker :coordinates="form.coordinates" @update:coordinates="(c)=> form.coordinates=c" />
              </CardContent>
            </Card>
          </section>

          <section v-else-if="activeTab==='visibility'">
            <Card>
              <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
              <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label class="block"><span class="text-sm font-medium">Status</span><select v-model="form.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select></label>
                <label class="block"><span class="text-sm font-medium">Visibility</span><select v-model="form.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select></label>
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
import { Card } from "@/components/ui/card/index.ts"
import { CardHeader } from "@/components/ui/card/index.ts"
import { CardTitle } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"

type Media = { id: string; name: string; type: 'image'|'video'|'document'|'tour'; visibility: 'public'|'admin'|'pin' }

const form = reactive({
  listingTitle:'', vesselType:'', imoNumber:'', flagState:'', yearBuilt:'', builder:'', hullMaterial:'',
  operationalStatus:'active', listingType:'showcase',
  grossTonnage:'', deadweightTonnage:'', lengthOverall:'', beam:'', draft:'', engineType:'', mainEnginePower:'', serviceSpeed:'',
  fuelTypes:'', classificationSociety:'', ismCertified:false, ispsCompliant:false, mlcCertified:false, solasCompliant:false,
  currentLocation:'', coordinates: null as null | {lat:number; lng:number},
  listingStatus:'draft', visibility:'public'
})

const tabs = [
  { id:'basic-info', label:'Basic Info', icon:'📋' },
  { id:'vessel-details', label:'Vessel Details', icon:'🚢' },
  { id:'compliance', label:'Compliance', icon:'📜' },
  { id:'media', label:'Media & Files', icon:'📸' },
  { id:'location', label:'Location', icon:'📍' },
  { id:'visibility', label:'Visibility', icon:'👁️' }
]
const activeTab = ref('basic-info')
const vesselTypes = ["Bulk Carrier","Container Ship","General Cargo","Tanker","LPG Carrier","LNG Carrier","Ro-Ro Vessel","Reefer","Car Carrier","Dredger","OSV","Research Vessel","Cable Layer","Other"]
const flagStates = ["Liberia","Marshall Islands","Panama","Singapore","Malta","Bahamas","Cyprus","Greece","Japan","Norway","United Kingdom","Germany","Other"]

const mediaFiles = ref<Media[]>([])
function addMedia(type: Media['type']){ mediaFiles.value.push({ id: Math.random().toString(36).slice(2), name:'', type, visibility:'public' }) }
function removeMedia(id:string){ mediaFiles.value = mediaFiles.value.filter(m=>m.id!==id) }

function onSubmit(){ console.log('submit', form); alert('Merchant shipping listing saved!') }
function reset(){ Object.assign(form, { listingTitle:'', vesselType:'', imoNumber:'', flagState:'', yearBuilt:'', operationalStatus:'active', listingType:'showcase', grossTonnage:'', deadweightTonnage:'', lengthOverall:'', beam:'', draft:'', engineType:'', mainEnginePower:'', serviceSpeed:'', fuelTypes:'', classificationSociety:'', ismCertified:false, ispsCompliant:false, mlcCertified:false, solasCompliant:false, currentLocation:'', coordinates:null, listingStatus:'draft', visibility:'public' }) }

</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
</style>





