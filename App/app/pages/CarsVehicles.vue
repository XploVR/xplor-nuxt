<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-24 px-4 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="carsVehicles2Hero" alt="Premium automotive showroom" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-gray-900/80"></div>
      </div>
      <div class="max-w-7xl mx-auto text-center relative z-10">
        <span class="inline-block mb-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded">Automotive Excellence</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Don't Just Show Cars — Let People <span class="text-blue-200">Step Inside Them</span>
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Xplor lets buyers experience your cars in stunning detail — from interior tours to full showrooms — with direct booking for rentals, test drives, or viewings via API integration.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary text-lg px-8" @click="uploadDialogOpen=true">Add Your Vehicle or Showroom</button>
          <button class="btn btn-outline text-lg px-8">View a Virtual Test Drive</button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">More Than a Gallery — This Is the Experience</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(f, i) in features" :key="i" class="border rounded-lg hover:shadow-lg transition-shadow">
            <div class="p-4">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary" v-html="f.icon"></div>
                <h4 class="text-lg font-semibold">{{ f.title }}</h4>
              </div>
              <p class="text-base text-muted-foreground mt-2">{{ f.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Integration -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">From Virtual Tour to Real Booking — Instantly</h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Xplor connects to your existing CRM, dealership platform, or rental system via API or plugin integration. Guests can book test drives, reserve rentals, or schedule appointments without ever leaving the tour.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div v-for="(useCase, i) in useCases" :key="i" class="border rounded text-center">
            <div class="pt-6 p-4">
              <div class="text-3xl mb-3">{{ useCase.icon }}</div>
              <h3 class="font-semibold text-sm">{{ useCase.title }}</h3>
            </div>
          </div>
        </div>

        <div class="bg-card rounded-lg p-8 mb-8">
          <h3 class="text-xl font-semibold mb-4">Supported Platforms:</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(platform, i) in platforms" :key="i" class="flex items-center gap-2">
              <CheckCircle class="h-4 w-4 text-green-500" />
              <span class="text-sm">{{ platform }}</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn btn-primary px-6 py-3 rounded">Request Booking Plugin</button>
            <button class="btn btn-outline px-6 py-3 rounded">Talk to Integration Team</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
          <p class="text-xl text-muted-foreground">Experience how virtual tours drive real engagement</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="space-y-4">
            <div
              v-for="option in demoOptions"
              :key="option.id"
              class="border rounded cursor-pointer transition-all"
              :class="activeDemo === option.id ? 'ring-2 ring-primary' : ''"
              @click="activeDemo = option.id"
            >
              <div class="p-4">
                <h3 class="font-semibold mb-2">{{ option.title }}</h3>
                <p class="text-sm text-muted-foreground">{{ option.description }}</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2">
            <div class="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div class="text-center">
                <Car class="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 class="text-xl font-semibold mb-2">{{ currentDemoTitle }}</h3>
                <p class="text-muted-foreground">Interactive demo coming soon</p>
                <span class="inline-block mt-2 px-2 py-1 rounded bg-primary/10 text-sm">Powered by Xplor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="i" class="border rounded text-center">
            <div class="p-6">
              <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{{ step.step }}</div>
              <h4 class="font-semibold">{{ step.title }}</h4>
              <p class="text-base text-muted-foreground mt-2">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Audience Types -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Built for All Automotive Experiences</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <div v-for="(type, i) in audienceTypes" :key="i" class="border rounded text-center hover:shadow-lg transition-shadow">
            <div class="pt-6 p-4">
              <div class="text-3xl mb-3">{{ type.icon }}</div>
              <h3 class="font-semibold text-sm">{{ type.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Virtual Tours Drive Real Results</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="border rounded text-center p-6">
            <TrendingUp class="h-8 w-8 text-primary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">2x</div>
            <p class="text-muted-foreground">More time spent on page with tours</p>
          </div>
          <div class="border rounded text-center p-6">
            <Clock class="h-8 w-8 text-primary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">Higher</div>
            <p class="text-muted-foreground">Intent from direct tour bookings</p>
          </div>
          <div class="border rounded text-center p-6">
            <Users class="h-8 w-8 text-primary mx-auto mb-4" />
            <div class="text-3xl font-bold text-primary mb-2">35%</div>
            <p class="text-muted-foreground">More inbound leads from immersive viewings</p>
          </div>
        </div>

        <div class="max-w-2xl mx-auto border rounded p-6">
          <div class="flex items-center gap-2 mb-4">
            <Star v-for="i in 5" :key="i" class="h-4 w-4 text-yellow-400 fill-yellow-400" />
          </div>
          <blockquote class="text-lg italic mb-4">
            "It's like letting someone walk through our showroom without needing to be here. We're seeing better quality leads."
          </blockquote>
          <cite class="text-sm text-muted-foreground">– Dealer in UAE</cite>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Let Them Explore the Drive — Then Book It</h2>
        <p class="text-xl text-muted-foreground mb-8">
          Upload your cars and showrooms to Xplor today. Connect your booking engine. Convert browsers into buyers.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary text-lg px-8" @click="uploadDialogOpen=true">List My Vehicle or Showroom</button>
          <button class="btn btn-outline text-lg px-8">Request API Integration</button>
          <button class="btn text-lg px-8 border rounded">Book a Demo</button>
        </div>
      </div>
    </section>

    <!-- Upload Modal (simple stub) -->
    <div v-if="uploadDialogOpen" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" @click.self="uploadDialogOpen=false">
      <div class="bg-background rounded-lg max-w-3xl w-[90vw] p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold">Upload Vehicle / Showroom</h3>
          <button class="text-sm opacity-70 hover:opacity-100" @click="uploadDialogOpen=false">✕</button>
        </div>
        <p class="text-muted-foreground">Hook up your real CarUploadDialog.vue here.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Car, MapPin, Calendar, Users, Smartphone, Globe, Clock, TrendingUp, Star, CheckCircle } from 'lucide-vue-next'
import carsVehicles2Hero from '@/assets/cars-vehicles-2-hero.jpg'

const activeDemo = ref('interior')
const uploadDialogOpen = ref(false)

const features = [
  { icon: `<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'><path d='M3 12h18'/></svg>`, title: 'Immersive Vehicle Tours', description: 'Let users explore inside and around your cars, SUVs, classics, or EVs' },
  { icon: `<span class='inline-block'>📍</span>`, title: 'Full Showroom Walkthroughs', description: 'Showcase the layout, service area, or dealership vibe' },
  { icon: `<span class='inline-block'>📅</span>`, title: 'API Booking Plugins', description: 'Accept real-time requests for test drives, rentals, or showroom visits' },
  { icon: `<span class='inline-block'>🏷️</span>`, title: 'Launch New Models Virtually', description: 'Debut your next release in immersive 3D before it hits the road' },
  { icon: `<span class='inline-block'>📱</span>`, title: 'Mobile-Ready and Interactive', description: 'Optimized for desktop, tablet, mobile, and VR' },
  { icon: `<span class='inline-block'>🌍</span>`, title: 'Reach Local and Global Buyers', description: 'Make your inventory explorable from anywhere in the world' }
]

const useCases = [
  { icon: '🚘', title: 'Test Drive Scheduling' },
  { icon: '🚙', title: 'Rental Booking' },
  { icon: '🧾', title: 'Sales Appointment Setting' },
  { icon: '🆕', title: 'New Model Launch Registration' },
  { icon: '📍', title: 'Dealer Visit or Event Booking' }
]

const platforms = ['DealerSocket', 'Salesforce Automotive', 'Turo / Getaround APIs', 'Rent Centric', 'Calendly / Appointlet', 'Custom API integrations']

const audienceTypes = [
  { title: 'Luxury Dealerships', icon: '🏆' },
  { title: 'Exotic Rentals', icon: '🏎️' },
  { title: 'Auto Event Organizers', icon: '🎪' },
  { title: 'Classic Car Sellers', icon: '🚗' },
  { title: 'EV Manufacturers', icon: '⚡' },
  { title: 'Fleet Owners', icon: '🚐' },
  { title: 'Brand Showrooms', icon: '🏢' }
]

const steps = [
  { step: '1', title: 'Upload Your Car or Showroom', description: 'Use 360° or 3D media + vehicle details' },
  { step: '2', title: 'Add Booking Integration', description: 'Let users take action: book, reserve, schedule' },
  { step: '3', title: 'Convert Views into Revenue', description: 'Drive qualified leads, test drives, or rental bookings' }
]

const demoOptions = [
  { id: 'interior', title: 'Car Interior Tour', description: 'Experience the dashboard, seats, and features' },
  { id: 'showroom', title: 'Showroom Walkthrough', description: 'Explore our luxury dealership space' },
  { id: 'booking', title: 'Booking Integration', description: 'See how customers can book instantly' }
]

const currentDemoTitle = computed(() => demoOptions.find(d => d.id === activeDemo.value)?.title ?? 'Demo')
</script>

<style scoped>
.btn { @apply inline-flex items-center justify-center font-medium; }
.btn-primary { @apply bg-primary text-primary-foreground hover:opacity-90; }
.btn-outline { @apply border border-input text-foreground hover:bg-gray-100; }
</style>