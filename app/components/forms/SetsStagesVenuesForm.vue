
<template>
  <form @submit.prevent="submit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label class="block">
        <span class="text-sm font-medium">Listing Title *</span>
        <input v-model="form.listingTitle" class="input" placeholder="Soundstage 7 – Burbank" />
      </label>
      <label class="block">
        <span class="text-sm font-medium">Venue Category *</span>
        <select v-model="form.venueCategory" class="input">
          <option disabled value="">Select venue type</option>
          <option v-for="v in venueCategories" :key="v">{{ v }}</option>
        </select>
      </label>
      <label class="md:col-span-2 block">
        <span class="text-sm font-medium">Description *</span>
        <textarea v-model="form.description" class="input min-h-[100px]" />
      </label>
      <label class="block"><span class="text-sm">Year Built</span><input v-model="form.yearBuilt" class="input" /></label>
      <label class="block"><span class="text-sm">Capacity</span><input v-model="form.capacity" class="input" placeholder="500 seated / 800 standing" /></label>
      <label class="block"><span class="text-sm">Ownership</span><input v-model="form.ownership" class="input" /></label>
      <label class="block"><span class="text-sm">Listing Type *</span>
        <select v-model="form.listingType" class="input"><option value="hire">Available for Hire</option><option value="sale">For Sale</option><option value="showcase">Showcase Only</option></select>
      </label>
      <label class="block"><span class="text-sm">Status *</span>
        <select v-model="form.status" class="input"><option value="available">Available</option><option value="in-use">In Use</option><option value="renovation">Under Renovation</option><option value="archived">Archived</option></select>
      </label>
    </div>

    <ui-card>
      <ui-card-header><ui-card-title>Venue Type & Layout</ui-card-title></ui-card-header>
      <ui-card-content class="space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input v-model="form.floorArea" class="input" placeholder="Floor Area (e.g., 2000 sq ft)" />
          <input v-model="form.ceilingHeight" class="input" placeholder="Ceiling Height (e.g., 20 ft)" />
          <select v-model="form.floorType" class="input"><option value="">Floor Type</option><option>wood</option><option>concrete</option><option>rubberized</option><option>custom</option><option>other</option></select>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.fixedSeating" /> <span>Fixed Seating</span></label>
          <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.dressingRooms" /> <span>Dressing Rooms</span></label>
          <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.greenRooms" /> <span>Green Rooms</span></label>
          <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.controlRoom" /> <span>Control Room</span></label>
        </div>
        <input v-model="form.stageDimensions" class="input" placeholder="Stage dimensions (optional)" />
      </ui-card-content>
    </ui-card>

    <ui-card>
      <ui-card-header><ui-card-title>Specifications & Features</ui-card-title></ui-card-header>
      <ui-card-content class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input v-model="form.acousticRating" class="input" placeholder="Acoustic rating" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.soundproofing" /> <span>Soundproofing</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.lightingGrid" /> <span>Lighting Grid</span></label>
        <input v-model="form.lightingHeight" class="input" placeholder="Lighting height" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.naturalLight" /> <span>Natural Light</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.blackoutCurtains" /> <span>Blackout Curtains</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.wifi" /> <span>Wi‑Fi</span></label>
        <input v-model="form.internetSpeed" class="input" placeholder="Internet speed" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.controlBoothAccess" /> <span>Control Booth Access</span></label>
        <input v-model="form.powerSupply" class="input" placeholder="Power supply" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.generatorBackup" /> <span>Generator Backup</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.fireCertification" /> <span>Fire Certification</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.adaAccessible" /> <span>ADA Accessible</span></label>
        <input v-model="form.emergencyExits" class="input" placeholder="Emergency exits (notes)" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.sprinklerSystem" /> <span>Sprinkler</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.firstAidStation" /> <span>First Aid</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.onsiteSecurity" /> <span>Onsite Security</span></label>
      </ui-card-content>
    </ui-card>

    <ui-card>
      <ui-card-header><ui-card-title>Access & Usage</ui-card-title></ui-card-header>
      <ui-card-content class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input v-model="form.entryType" class="input" placeholder="Entry type" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.bookingRequired" /> <span>Booking Required</span></label>
        <input v-model="form.minimumNotice" class="input" placeholder="Minimum notice" />
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.insuranceRequired" /> <span>Insurance Required</span></label>
        <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.staffingIncluded" /> <span>Staffing Included</span></label>
        <input v-model="form.staffingDetails" class="input" placeholder="Staffing details" />
      </ui-card-content>
    </ui-card>

    <ui-card>
      <ui-card-header><ui-card-title>Location</ui-card-title></ui-card-header>
      <ui-card-content class="space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input v-model="form.address" class="input" placeholder="Address *" />
          <input v-model="form.city" class="input" placeholder="City *" />
          <input v-model="form.region" class="input" placeholder="Region *" />
          <input v-model="form.country" class="input" placeholder="Country *" />
        </div>
        <MapboxLocationPicker :coordinates="form.coordinates" @update:coordinates="(c)=> form.coordinates=c" />
      </ui-card-content>
    </ui-card>

    <ui-card>
      <ui-card-header><ui-card-title>Visibility</ui-card-title></ui-card-header>
      <ui-card-content class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select v-model="form.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select>
        <select v-model="form.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select>
        <label class="inline-flex items-center gap-2 md:col-span-2"><input type="checkbox" v-model="form.pinProtection" /> <span>PIN protection</span></label>
        <input v-if="form.pinProtection" v-model="form.pinCode" class="input md:col-span-2" placeholder="PIN code" />
      </ui-card-content>
    </ui-card>

    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-2 rounded-md border" @click="reset">Reset</button>
      <button type="submit" class="px-3 py-2 rounded-md bg-primary text-primary-foreground">Save</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MapboxLocationPicker from './MapboxLocationPicker.vue'
import { Card as UiCard } from "@/components/ui/card/index.ts"
import { CardHeader as UiCardHeader } from "@/components/ui/card/index.ts"
import { CardTitle as UiCardTitle } from "@/components/ui/card/index.ts"
import { CardContent as UiCardContent } from "@/components/ui/card/index.ts"

const venueCategories = ["Soundstage","Film Set","Television Studio","Theater","Music Venue","Concert Hall","Event Space","Arena / Stadium","Rehearsal Hall","Immersive Experience Venue","Recording Studio","Multi-Use Venue","Other"]

const form = reactive<any>({
  listingTitle:'', venueCategory:'', description:'', yearBuilt:'', capacity:'', ownership:'', listingType:'hire', status:'available',
  floorArea:'', ceilingHeight:'', floorType:'', fixedSeating:false, dressingRooms:false, greenRooms:false, controlRoom:false, stageDimensions:'',
  acousticRating:'', soundproofing:false, lightingGrid:false, lightingHeight:'', naturalLight:false, blackoutCurtains:false, wifi:false, internetSpeed:'', controlBoothAccess:false, powerSupply:'', generatorBackup:false, fireCertification:false, adaAccessible:false, emergencyExits:'', sprinklerSystem:false, firstAidStation:false, onsiteSecurity:false,
  entryType:'', bookingRequired:false, minimumNotice:'', insuranceRequired:false, staffingIncluded:false, staffingDetails:'',
  address:'', city:'', region:'', country:'', coordinates: null as null | {lat:number; lng:number},
  listingStatus:'draft', visibility:'public', pinProtection:false, pinCode:''
})

function submit(){ if(!form.listingTitle || !form.venueCategory || !form.description || !form.address || !form.city || !form.region || !form.country){ alert('Please complete required fields.'); return } console.log('sets-stages-venues', form); alert('Listing saved!') }
function reset(){ Object.assign(form, { listingTitle:'', venueCategory:'', description:'', yearBuilt:'', capacity:'', ownership:'', listingType:'hire', status:'available', floorArea:'', ceilingHeight:'', floorType:'', fixedSeating:false, dressingRooms:false, greenRooms:false, controlRoom:false, stageDimensions:'', acousticRating:'', soundproofing:false, lightingGrid:false, lightingHeight:'', naturalLight:false, blackoutCurtains:false, wifi:false, internetSpeed:'', controlBoothAccess:false, powerSupply:'', generatorBackup:false, fireCertification:false, adaAccessible:false, emergencyExits:'', sprinklerSystem:false, firstAidStation:false, onsiteSecurity:false, entryType:'', bookingRequired:false, minimumNotice:'', insuranceRequired:false, staffingIncluded:false, staffingDetails:'', address:'', city:'', region:'', country:'', coordinates:null, listingStatus:'draft', visibility:'public', pinProtection:false, pinCode:'' }) }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
ui-card, ui-card-header, ui-card-title, ui-card-content { display: block; }
</style>





