
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Enter the basic details about your institution</CardDescription>
      </CardHeader>
      <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label class="block">
          <span class="text-sm font-medium">Name *</span>
          <input v-model="form.name" class="input" placeholder="Institution name" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">Type *</span>
          <select v-model="form.type" class="input">
            <option value="museum">Museum</option>
            <option value="art-gallery">Art Gallery</option>
            <option value="cultural-center">Cultural Center</option>
            <option value="exhibition-hall">Exhibition Hall</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label class="md:col-span-2 block">
          <span class="text-sm font-medium">Description (max 500)</span>
          <textarea v-model="form.description" maxlength="500" rows="4" class="input" />
        </label>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Exhibitions & Rooms</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <div v-for="(ex, i) in form.exhibits" :key="ex.id" class="p-3 border rounded-lg grid grid-cols-1 md:grid-cols-5 gap-3">
          <input v-model="ex.name" class="input" placeholder="Room/Exhibit name" />
          <select v-model="ex.type" class="input">
            <option value="permanent">permanent</option>
            <option value="temporary">temporary</option>
            <option value="private">private</option>
            <option value="vip">vip</option>
            <option value="outdoor">outdoor</option>
          </select>
          <input v-model="ex.tourUrl" class="input" placeholder="Tour URL (optional)" />
          <input v-model="ex.floor" class="input" placeholder="Floor" />
          <input v-model="ex.associatedArtist" class="input" placeholder="Artist (optional)" />
          <button class="text-red-600 md:col-span-5 text-left" @click.prevent="removeExhibit(i)">Remove</button>
        </div>
        <button class="btn" @click.prevent="addExhibit">Add Exhibit</button>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Location</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input v-model="form.country" class="input" placeholder="Country" />
          <input v-model="form.city" class="input" placeholder="City" />
          <input v-model="form.address" class="input md:col-span-2" placeholder="Address" />
        </div>
        <MapboxLocationPicker :coordinates="coords" @update:coordinates="(c)=>{ coords=c; form.latitude=c.lat; form.longitude=c.lng }" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Visibility & Submitter</CardTitle></CardHeader>
      <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select v-model="form.visibility" class="input">
          <option value="public">Public</option>
          <option value="link-only">Link Only</option>
          <option value="private">Private</option>
        </select>
        <input v-model="form.submitterName" class="input" placeholder="Submitter name *" />
        <input v-model="form.submitterEmail" class="input" placeholder="Submitter email *" />
        <label class="inline-flex items-center gap-2 md:col-span-2">
          <input type="checkbox" v-model="form.agreeToTerms" />
          <span>I agree to the terms</span>
        </label>
      </CardContent>
    </Card>

    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-2 rounded-md border" @click="reset()">Reset</button>
      <button type="submit" class="btn">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Card } from "@/components/ui/card/index.ts"
import { CardHeader } from "@/components/ui/card/index.ts"
import { CardTitle } from "@/components/ui/card/index.ts"
import { CardDescription } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"
import MapboxLocationPicker from './MapboxLocationPicker.vue'

type Exhibit = { id: string; name: string; type: 'permanent'|'temporary'|'private'|'vip'|'outdoor'; description?: string; tourUrl?: string; floor?: string; associatedArtist?: string }
const coords = ref<{lat:number; lng:number} | null>(null)

const form = reactive({
  name:'', type:'museum', description:'', exhibits: [] as Exhibit[],
  country:'', city:'', address:'', latitude:undefined as number|undefined, longitude:undefined as number|undefined,
  visibility:'public', submitterName:'', submitterEmail:'', agreeToTerms:false
})

function addExhibit(){ form.exhibits.push({ id: Math.random().toString(36).slice(2), name:'', type:'permanent' }) }
function removeExhibit(i:number){ form.exhibits.splice(i,1) }
function handleSubmit(){ if(!form.name || !form.submitterName || !form.submitterEmail || !form.agreeToTerms){ alert('Please fill required fields and agree to terms.'); return } console.log('museum', form); alert('Museum/Gallery submitted!') }
function reset(){ Object.assign(form, { name:'', type:'museum', description:'', exhibits:[], country:'', city:'', address:'', latitude:undefined, longitude:undefined, visibility:'public', submitterName:'', submitterEmail:'', agreeToTerms:false }); coords.value=null }
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
</style>







