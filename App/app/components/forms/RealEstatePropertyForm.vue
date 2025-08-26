
<template>
  <div class="w-full max-w-6xl mx-auto">
    <div class="flex gap-6">
      <div class="w-56 shrink-0">
        <div class="flex flex-col h-fit p-1 bg-muted rounded-md space-y-1">
          <button v-for="t in tabs" :key="t.id" class="text-left px-3 py-2 rounded"
                  :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/70'"
                  @click="activeTab=t.id">{{ t.label }}</button>
        </div>
      </div>

      <div class="flex-1 space-y-6">
        <!-- Basic Info -->
        <Card v-if="activeTab==='basic-info'">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">Basic Property Information</CardTitle>
            <CardDescription>Core identifying details about the property</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm font-medium">Property Title</span>
                <input v-model="model.propertyTitle" class="input" placeholder="Enter property title" />
              </label>
              <label class="block">
                <span class="text-sm font-medium">Property Type</span>
                <select v-model="model.propertyType" class="input">
                  <option disabled value="">Select property type</option>
                  <option v-for="opt in propertyTypeOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                </select>
              </label>
              <label class="block">
                <span class="text-sm font-medium">Listing Type</span>
                <select v-model="model.listingType" class="input">
                  <option value="for-sale">For Sale</option>
                  <option value="for-rent">For Rent</option>
                  <option value="leasehold">Leasehold</option>
                  <option value="auction">Auction</option>
                  <option value="short-term">Short-Term</option>
                </select>
              </label>
              <label class="block">
                <span class="text-sm font-medium">Price</span>
                <input v-model.number="model.price" type="number" class="input" placeholder="Enter price" />
              </label>
              <label class="block">
                <span class="text-sm font-medium">Currency</span>
                <select v-model="model.currency" class="input">
                  <option value="usd">USD</option><option value="eur">EUR</option><option value="gbp">GBP</option><option value="cad">CAD</option>
                </select>
              </label>
              <label class="block">
                <span class="text-sm font-medium">Year Built</span>
                <input v-model="model.yearBuilt" type="number" class="input" placeholder="YYYY" />
              </label>
            </div>
          </CardContent>
        </Card>

        <!-- Details & Features -->
        <Card v-else-if="activeTab==='details-features'">
          <CardHeader>
            <CardTitle>Property Details & Features</CardTitle>
            <CardDescription>Technical & structural information</CardDescription>
          </CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="block"><span class="text-sm">Bedrooms</span><input v-model.number="model.bedrooms" type="number" class="input" /></label>
            <label class="block"><span class="text-sm">Full Bathrooms</span><input v-model.number="model.fullBathrooms" type="number" class="input" /></label>
            <label class="block"><span class="text-sm">Half Bathrooms</span><input v-model.number="model.halfBathrooms" type="number" class="input" /></label>
            <div class="grid grid-cols-3 gap-2 md:col-span-3">
              <label class="block"><span class="text-sm">Floor Area</span><input v-model.number="model.floorArea" type="number" class="input" /></label>
              <label class="block"><span class="text-sm">Unit</span>
                <select v-model="model.floorAreaUnit" class="input"><option value="sqft">Sq Ft</option><option value="sqm">Sq M</option></select>
              </label>
              <label class="block"><span class="text-sm">Plot/Lot Size</span><input v-model.number="model.plotLotSize" type="number" class="input" /></label>
            </div>
          </CardContent>
        </Card>

        <!-- Amenities -->
        <Card v-else-if="activeTab==='amenities'">
          <CardHeader><CardTitle>Amenities</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.amenities.wifi" /> <span>Wi‑Fi</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.amenities.parking" /> <span>Parking</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.amenities.pool" /> <span>Pool</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.amenities.security" /> <span>Security</span></label>
          </CardContent>
        </Card>

        <!-- Location -->
        <Card v-else-if="activeTab==='location'">
          <CardHeader><CardTitle>Location</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <input v-model="model.address" class="input" placeholder="Address" />
            <MapboxLocationPicker :coordinates="model.coordinates" @update:coordinates="(c)=> model.coordinates=c" />
          </CardContent>
        </Card>

        <!-- Availability -->
        <Card v-else-if="activeTab==='availability'">
          <CardHeader><CardTitle>Availability</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="block"><span class="text-sm">Available From</span><input v-model="model.availableFrom" type="date" class="input" /></label>
            <label class="block"><span class="text-sm">Open House</span><input v-model="model.openHouse" type="datetime-local" class="input" /></label>
            <label class="block"><span class="text-sm">Viewing By Appointment</span>
              <select v-model="model.viewingByAppt" class="input"><option value="yes">Yes</option><option value="no">No</option></select>
            </label>
          </CardContent>
        </Card>

        <!-- Access & Rules -->
        <Card v-else-if="activeTab==='access-rules'">
          <CardHeader><CardTitle>Access & Rules</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-2 gap-3">
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.rules.noSmoking" /> <span>No Smoking</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.rules.petsAllowed" /> <span>Pets Allowed</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.rules.childrenAllowed" /> <span>Children Allowed</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="model.rules.filmingAllowed" /> <span>Filming Allowed</span></label>
          </CardContent>
        </Card>

        <!-- Media & Files -->
        <Card v-else-if="activeTab==='media-files'">
          <CardHeader><CardTitle>Media & Files</CardTitle></CardHeader>
          <CardContent class="space-y-3">
            <input type="file" multiple @change="onFiles" />
            <ul class="list-disc ml-6">
              <li v-for="(f,i) in media" :key="i" class="flex justify-between"><span>{{ f.name }}</span><button class="text-red-600" @click="removeFile(i)">Remove</button></li>
            </ul>
          </CardContent>
        </Card>

        <!-- Visibility -->
        <Card v-else-if="activeTab==='visibility'">
          <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block"><span class="text-sm font-medium">Status</span>
              <select v-model="model.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select>
            </label>
            <label class="block"><span class="text-sm font-medium">Visibility</span>
              <select v-model="model.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select>
            </label>
          </CardContent>
        </Card>
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
import { CardDescription } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"

const tabs = [
  { id:'basic-info', label:'Basic Info' },
  { id:'details-features', label:'Details & Features' },
  { id:'amenities', label:'Amenities' },
  { id:'location', label:'Location' },
  { id:'availability', label:'Availability' },
  { id:'access-rules', label:'Access & Rules' },
  { id:'media-files', label:'Media & Files' },
  { id:'visibility', label:'Visibility' },
]

const activeTab = ref('basic-info')

const propertyTypeOptions = [
  { value:'apartment', label:'Apartment' }, { value:'villa', label:'Villa' }, { value:'office-space', label:'Office Space' },
  { value:'retail-space', label:'Retail Space' }, { value:'warehouse', label:'Warehouse' }, { value:'residential-land', label:'Residential Land' },
  { value:'commercial-land', label:'Commercial Land' }, { value:'other', label:'Other' }
]

const model = reactive<any>({
  propertyTitle:'', propertyType:'', listingType:'for-sale', price:null, currency:'usd', yearBuilt:'',
  bedrooms:null, fullBathrooms:null, halfBathrooms:null, floorArea:null, floorAreaUnit:'sqft', plotLotSize:null,
  amenities: { wifi:false, parking:false, pool:false, security:false },
  address:'', coordinates: null as null | { lat:number; lng:number },
  availableFrom:'', openHouse:'', viewingByAppt:'no',
  rules: { noSmoking:false, petsAllowed:false, childrenAllowed:false, filmingAllowed:false },
  listingStatus:'draft', visibility:'public'
})

const media = ref<File[]>([])
function onFiles(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; media.value = [...media.value, ...Array.from(input.files)] }
function removeFile(i:number){ media.value.splice(i,1) }

defineExpose({ model })
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>





