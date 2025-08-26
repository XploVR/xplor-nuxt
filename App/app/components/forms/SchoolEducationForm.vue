
<template>
  <form @submit.prevent="submit" class="space-y-6">
    <div class="grid w-full grid-cols-4 lg:grid-cols-8 gap-2">
      <button v-for="t in tabs" :key="t.id" type="button" class="px-3 py-2 rounded border text-left"
              :class="activeTab===t.id ? 'bg-primary text-primary-foreground' : ''"
              @click="activeTab=t.id">{{ t.label }}</button>
    </div>

    <Card v-if="activeTab==='basic-info'">
      <CardHeader><CardTitle>Basic Information</CardTitle><CardDescription>Essential details</CardDescription></CardHeader>
      <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label class="block"><span class="text-sm">Institution Name *</span><input v-model="form.institutionName" class="input" /></label>
        <label class="block"><span class="text-sm">Institution Type *</span>
          <select v-model="form.institutionType" class="input">
            <option disabled value="">Select type</option>
            <option v-for="t in institutionTypes" :key="t" :value="t">{{ t }}</option>
          </select>
        </label>
        <label class="md:col-span-2 block"><span class="text-sm">Description *</span><textarea v-model="form.description" class="input" rows="4" /></label>
      </CardContent>
    </Card>

    <Card v-else-if="activeTab==='education-programs'">
      <CardHeader><CardTitle>Programs</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <label class="block"><span class="text-sm">Levels Offered</span><input v-model="form.levelsOffered" class="input" placeholder="Comma separated" /></label>
        <label class="block"><span class="text-sm">Curriculums</span><input v-model="form.curriculums" class="input" placeholder="Comma separated" /></label>
        <label class="block"><span class="text-sm">Languages</span><input v-model="form.languagesOfInstruction" class="input" placeholder="Comma separated" /></label>
      </CardContent>
    </Card>

    <Card v-else-if="activeTab==='facilities'">
      <CardHeader><CardTitle>Facilities</CardTitle></CardHeader>
      <CardContent>
        <div v-for="(f,i) in facilities" :key="i" class="p-3 border rounded-lg grid grid-cols-1 md:grid-cols-3 gap-3">
          <input v-model="f.name" class="input" placeholder="Space name" />
          <input v-model="f.type" class="input" placeholder="Type (Classroom, Lab...)" />
          <input v-model="f.description" class="input" placeholder="Description" />
          <button class="text-red-600 md:col-span-3 text-left" @click.prevent="removeFacility(i)">Remove</button>
        </div>
        <button class="btn mt-3" @click.prevent="addFacility">Add Facility</button>
      </CardContent>
    </Card>

    <Card v-else-if="activeTab==='media'">
      <CardHeader><CardTitle>Media & Files</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <input type="file" multiple @change="onFiles" />
        <ul class="list-disc ml-6"><li v-for="(f,i) in media" :key="i">{{ f.name }}</li></ul>
      </CardContent>
    </Card>

    <Card v-else-if="activeTab==='location'">
      <CardHeader><CardTitle>Location</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <input v-model="form.address" class="input" placeholder="Address" />
        <MapboxLocationPicker :coordinates="coords" @update:coordinates="v=>coords=v" />
      </CardContent>
    </Card>

    <Card v-else-if="activeTab==='visibility'">
      <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
      <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select v-model="form.listingStatus" class="input"><option value="draft">Draft</option><option value="published">Published</option></select>
        <select v-model="form.visibility" class="input"><option value="public">Public</option><option value="private">Private</option></select>
      </CardContent>
    </Card>

    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-2 rounded-md border" @click="reset">Reset</button>
      <button type="submit" class="btn">Submit</button>
    </div>
  </form>
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
  { id:'basic-info', label:'Basic' },
  { id:'education-programs', label:'Programs' },
  { id:'facilities', label:'Facilities' },
  { id:'admissions', label:'Admissions' },
  { id:'access-rules', label:'Access' },
  { id:'media', label:'Media' },
  { id:'location', label:'Location' },
  { id:'visibility', label:'Visibility' }
]
const activeTab = ref('basic-info')

const institutionTypes = ['Kindergarten','Primary School','Secondary School','High School','College / University','Technical / Trade School','Language School','Online Learning Center','Other']

const form = reactive<any>({
  institutionName:'', institutionType:'', description:'', levelsOffered:'', curriculums:'', languagesOfInstruction:'',
  address:'', listingStatus:'draft', visibility:'public'
})

const facilities = ref<Array<{name:string; type:string; description:string}>>([])
const media = ref<File[]>([])
const coords = ref<{lat:number; lng:number} | null>(null)

function addFacility(){ facilities.value.push({ name:'', type:'', description:'' }) }
function removeFacility(i:number){ facilities.value.splice(i,1) }
function onFiles(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; media.value = [...media.value, ...Array.from(input.files)] }
function submit(){ console.log('school', form, facilities.value, coords.value); alert('School/Education saved!') }
function reset(){ Object.assign(form, { institutionName:'', institutionType:'', description:'', levelsOffered:'', curriculums:'', languagesOfInstruction:'', address:'', listingStatus:'draft', visibility:'public' }); facilities.value=[]; media.value=[]; coords.value=null }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
</style>





