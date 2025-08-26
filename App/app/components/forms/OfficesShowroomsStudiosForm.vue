
<template>
  <div class="max-w-4xl mx-auto p-6 space-y-6">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-foreground mb-2">Upload Office, Showroom or Studio</h1>
      <p class="text-muted-foreground">Create an immersive listing for your commercial space</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-6">
        <Card>
          <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <input v-model="form.title" class="input" placeholder="Listing Title *" />
            <select v-model="form.category" class="input">
              <option disabled value="">Select category</option>
              <option v-for="c in categoryOptions" :key="c">{{ c }}</option>
            </select>
            <textarea v-model="form.description" rows="4" class="input" placeholder="Description" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Space & Layout</CardTitle></CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex gap-2">
              <input v-model="form.floorArea" class="input" placeholder="Floor area" />
              <select v-model="form.areaUnit" class="input w-24"><option>sq-ft</option><option>sq-m</option></select>
            </div>
            <div class="flex gap-2">
              <input v-model="form.ceilingHeight" class="input" placeholder="Ceiling height" />
              <select v-model="form.heightUnit" class="input w-16"><option>ft</option><option>m</option></select>
            </div>
            <input v-model="form.numberOfRooms" class="input" placeholder="Number of rooms/zones" />
            <input v-model="form.floorNumber" class="input" placeholder="Floor number" />
            <select v-model="form.layoutType" class="input">
              <option value="">Select layout</option>
              <option>Open Plan</option><option>Cubicle-Based</option><option>Divided Offices</option><option>Studio Layout</option><option>Retail Layout</option><option>Soundstage / Warehouse</option><option>Flexible / Modular</option>
            </select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Media & Files</CardTitle></CardHeader>
          <CardContent>
            <input type="file" multiple @change="onFiles" />
            <ul class="mt-3 list-disc ml-6">
              <li v-for="(f,i) in uploaded" :key="i" class="flex justify-between items-center">
                <span>{{ f.name }}</span>
                <button class="text-red-600" @click="remove(i)">Remove</button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader><CardTitle>Location</CardTitle></CardHeader>
          <CardContent class="space-y-3">
            <input v-model="form.address" class="input" placeholder="Address" />
            <MapboxLocationPicker :coordinates="form.coordinates" @update:coordinates="(c)=> form.coordinates=c" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
          <CardContent class="space-y-3">
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
import { Card } from "@/components/ui/card/index.ts"
import { CardHeader } from "@/components/ui/card/index.ts"
import { CardTitle } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"
import MapboxLocationPicker from './MapboxLocationPicker.vue'

const categoryOptions = ["Office","Co-Working Space","Private Suite","Corporate Headquarters","Retail Showroom","Art/Design Studio","Photography Studio","Film Set / Production Space","Podcast Studio","Multi-Use Commercial Space","Other"]

const form = reactive({
  title:'', category:'', description:'', floorArea:'', areaUnit:'sq-ft', ceilingHeight:'', heightUnit:'ft', numberOfRooms:'', floorNumber:'', layoutType:'',
  address:'', coordinates: null as null | {lat:number; lng:number}, listingStatus:'draft', visibility:'public'
})

const uploaded = ref<File[]>([])
function onFiles(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; uploaded.value = [...uploaded.value, ...Array.from(input.files)] }
function remove(i:number){ uploaded.value.splice(i,1) }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>





