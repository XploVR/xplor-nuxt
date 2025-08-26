
<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="step==='form'" class="space-y-6">
      <h2 class="text-2xl font-bold">Find a Tour Pro</h2>
      <form @submit.prevent="doSearch" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <select v-model="form.country" class="input">
            <option disabled value="">Country</option>
            <option v-for="c in countries" :key="c">{{ c }}</option>
          </select>
          <input v-model="form.cityZip" class="input" placeholder="City / ZIP" />
          <input v-model="form.radius" class="input" placeholder="Radius (km)" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Services</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <label v-for="s in serviceTypes" :key="s" class="inline-flex items-center gap-2">
              <input type="checkbox" :value="s" v-model="form.services" /> <span>{{ s }}</span>
            </label>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <select v-model="form.indoorOutdoor" class="input"><option disabled value="">Indoor/Outdoor</option><option>Indoor</option><option>Outdoor</option><option>Both</option></select>
          <input v-model="form.spaceSize" class="input" placeholder="Space Size (sq ft)" />
          <input v-model="form.timeframe" class="input" placeholder="Timeframe" />
        </div>
        <div class="flex justify-end"><button class="px-3 py-2 rounded-md bg-primary text-primary-foreground">Search</button></div>
      </form>
    </div>

    <div v-else class="space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Available Tour Pros Near You</h2>
        <button class="px-3 py-2 rounded-md border" @click="step='form'">Modify Search</button>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="pro in mockTourPros" :key="pro.id" class="rounded-2xl border hover:shadow-lg transition-shadow">
          <div class="p-4 border-b">
            <div class="flex items-center justify-between"><span class="font-semibold">{{ pro.name }}</span><span class="text-sm">★ {{ pro.rating }} ({{ pro.reviews }})</span></div>
            <div class="text-sm text-muted-foreground mt-1">📍 {{ pro.city }}</div>
          </div>
          <div class="p-4 space-y-3">
            <div>
              <p class="text-sm font-medium mb-2">Services:</p>
              <div class="flex flex-wrap gap-1">
                <span v-for="s in pro.services" :key="s" class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{{ s }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-2">
                <input v-model="contactForm.name" class="input" placeholder="Your name" />
                <input v-model="contactForm.email" class="input" placeholder="Email" type="email" />
              </div>
              <input v-model="contactForm.phone" class="input" placeholder="Phone (optional)" />
              <textarea v-model="contactForm.description" class="input" placeholder="Brief project description" />
              <select v-model="contactForm.contactMethod" class="input"><option disabled value="">Preferred contact</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select>
              <button class="px-3 py-2 rounded-md bg-primary text-primary-foreground w-full" @click="send(pro.id)">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const step = ref<'form'|'results'>('form')
const form = reactive({ country:'', cityZip:'', radius:'', services: [] as string[], indoorOutdoor:'', spaceSize:'', timeframe:'' })

const countries = ['United States','Canada','United Kingdom','Australia','Germany','France','Spain','Italy','Netherlands','Other']
const serviceTypes = ['Real Estate','Yachts','Hotels/Resorts','Restaurants','Commercial Spaces','Drone Footage','Aerial Mapping','Virtual Tour (360°)','Photography','Video','Other']

const mockTourPros = [
  { id:1, name:'Sarah Johnson', services:['Real Estate','Commercial Spaces','Photography'], city:'Miami, FL', rating:4.9, reviews:47 },
  { id:2, name:'Mike Chen', services:['Yachts','Drone Footage','Video'], city:'Fort Lauderdale, FL', rating:4.8, reviews:32 },
  { id:3, name:'Emma Rodriguez', services:['Hotels/Resorts','Virtual Tour (360°)','Photography'], city:'Key Biscayne, FL', rating:5.0, reviews:23 }
]

const contactForm = reactive({ name:'', email:'', phone:'', description:'', contactMethod:'' })

function doSearch(){ step.value='results' }
function send(proId:number){ console.log('Contact request to', proId, contactForm); alert('Your request has been sent to the Tour Pro!') }
</script>
<style scoped>.input { @apply w-full border rounded-md px-3 py-2 bg-background; }</style>

