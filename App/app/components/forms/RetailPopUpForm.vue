
<template>
  <div class="max-w-7xl mx-auto p-6 space-y-6">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-foreground mb-2">Upload Retail & Pop-Up Experience</h1>
      <p class="text-muted-foreground">Create an immersive listing for your retail space</p>
    </div>

    <div class="flex gap-6">
      <div class="w-64 shrink-0">
        <div class="flex flex-col h-auto w-full bg-muted p-1 space-y-1 rounded-lg">
          <button v-for="t in tabs" :key="t.id" class="w-full text-left px-3 py-2 rounded-md"
                  :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/70'"
                  @click="activeTab=t.id">{{ t.label }}</button>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <Card v-if="activeTab==='basic-info'">
          <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <label class="block"><span class="text-sm">Listing Title *</span><input v-model="form.title" class="input" placeholder="Flagship Streetwear Store in Milan" /></label>
            <label class="block"><span class="text-sm">Category *</span>
              <select v-model="form.category" class="input">
                <option disabled value="">Select retail category</option>
                <option v-for="opt in categoryOptions" :value="opt">{{ opt }}</option>
              </select>
            </label>
            <label class="block"><span class="text-sm">Description</span><textarea v-model="form.description" class="input" rows="4" /></label>
          </CardContent>
        </Card>

        <Card v-else-if="activeTab==='layout-fixtures'">
          <CardHeader><CardTitle>Layout & Fixtures</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex gap-2">
              <input v-model="form.floorArea" class="input" placeholder="Floor area" />
              <select v-model="form.areaUnit" class="input w-24"><option>sq-ft</option><option>sq-m</option></select>
            </div>
            <div class="flex gap-2">
              <input v-model="form.ceilingHeight" class="input" placeholder="Ceiling height" />
              <select v-model="form.heightUnit" class="input w-16"><option>ft</option><option>m</option></select>
            </div>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.wifi" /> <span>Wi‑Fi</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.hvac" /> <span>HVAC</span></label>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="form.securitySystem" /> <span>Security</span></label>
          </CardContent>
        </Card>

        <Card v-else-if="activeTab==='media'">
          <CardHeader><CardTitle>Media & Files</CardTitle></CardHeader>
          <CardContent class="space-y-3">
            <input type="file" multiple @change="onFiles" />
            <ul class="list-disc ml-6"><li v-for="(f,i) in files" :key="i" class="flex justify-between"><span>{{ f.name }}</span><button class="text-red-600" @click="remove(i)">Remove</button></li></ul>
          </CardContent>
        </Card>

        <Card v-else-if="activeTab==='location'">
          <CardHeader><CardTitle>Location</CardTitle></CardHeader>
          <CardContent class="space-y-3">
            <input v-model="form.address" class="input" placeholder="Address" />
            <MapboxLocationPicker :coordinates="form.coordinates" @update:coordinates="(c)=> form.coordinates=c" />
          </CardContent>
        </Card>

        <Card v-else-if="activeTab==='visibility'">
          <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select v-model="form.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select>
            <select v-model="form.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select>
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
import { CardContent } from "@/components/ui/card/index.ts"

const tabs = [
  { id:'basic-info', label:'Basic Info' },
  { id:'type-use', label:'Type & Use' },
  { id:'layout-fixtures', label:'Layout & Fixtures' },
  { id:'access-rules', label:'Access & Rules' },
  { id:'media', label:'Media & Files' },
  { id:'location', label:'Location' },
  { id:'visibility', label:'Visibility' }
]
const activeTab = ref('basic-info')

const categoryOptions = ["Permanent Shop","Boutique","Flagship Store","Department Store","Mall Kiosk","Pop-Up Retail","Experiential Installation","Showroom","Marketplace Stall","Other"]

const form = reactive<any>({
  title:'', category:'', description:'',
  floorArea:'', areaUnit:'sq-ft', ceilingHeight:'', heightUnit:'ft',
  wifi:false, hvac:false, securitySystem:false,
  address:'', coordinates:null as null | {lat:number; lng:number},
  listingStatus:'draft', visibility:'public'
})

const files = ref<File[]>([])
function onFiles(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; files.value = [...files.value, ...Array.from(input.files)] }
function remove(i:number){ files.value.splice(i,1) }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>





