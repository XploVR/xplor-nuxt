
<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 px-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        :style="`background-image: url(${aboutHero})`"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      <div class="relative max-w-4xl mx-auto space-y-6 z-10">
        <h1 class="text-5xl font-bold text-foreground">
          We're Building the World's Most Immersive Map.
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Xplor is the first global platform where anyone can discover, upload, or monetize immersive virtual tours of real-world spaces — from superyachts and villas to restaurants, showrooms, and jet cabins.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button class="btn btn-primary px-6 py-3 rounded-md">Explore the Platform</button>
          <button class="btn btn-outline px-6 py-3 rounded-md">List a Space</button>
        </div>
      </div>
    </section>

    <!-- What We've Built -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-12">
          From Yacht Charters to Skyscrapers — We're Mapping the World in 3D.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(vertical, i) in verticals"
            :key="i"
            class="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <component :is="vertical.icon" class="h-8 w-8 text-primary" />
                <span class="text-green-600 font-semibold">{{ vertical.status }}</span>
              </div>
              <h3 class="font-semibold text-foreground">{{ vertical.label }}</h3>
              <p class="text-sm text-muted-foreground">{{ vertical.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FairShare Program -->
    <section class="py-16 px-6 bg-secondary/5">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold text-foreground">
          A Platform That Pays the People Who Make It Possible.
        </h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          With FairShare, Xplor is redefining commission. Crew members, insiders, or staff can now earn 50% of the net commission we earn on charter deals — fairly and transparently. Starting with yachting, FairShare will expand into other industries soon.
        </p>
        <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg">
          <div class="flex items-center justify-center space-x-4 text-lg font-semibold text-foreground">
            <span>Platform Revenue</span>
            <ArrowRight class="h-5 w-5" />
            <span class="text-primary">50% to Crew/Partners</span>
            <ArrowRight class="h-5 w-5" />
            <span>50% to Xplor</span>
          </div>
        </div>
        <button class="btn btn-primary px-6 py-3 rounded-md mt-6">Join FairShare</button>
      </div>
    </section>

    <!-- Why Xplor -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-12">
          Because Photos Aren't Enough Anymore.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(pillar, i) in whyXplorPillars" :key="i" class="text-center space-y-4">
            <component :is="pillar.icon" class="h-12 w-12 text-primary mx-auto" />
            <h3 class="text-xl font-semibold text-foreground">{{ pillar.title }}</h3>
            <p class="text-muted-foreground">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bigger Vision -->
    <section class="py-16 px-6 bg-secondary/5">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold text-foreground">
          We're Building the World's Immersive Index.
        </h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Just like Google indexed websites, Xplor is indexing real-world spaces — one virtual tour at a time. We're creating a searchable, explorable, monetizable map of everything physical: homes, hotels, yachts, jets, retail, everything.
        </p>
        <div class="flex items-center justify-center space-x-2 text-primary font-semibold">
          <Globe class="h-8 w-8 animate-spin" />
          <span class="text-lg">2,000+ spaces mapped and growing</span>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-12">
          Built by Explorers, for Explorers.
        </h2>
        <div class="bg-card rounded-lg p-8 shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-foreground mb-4">Company Details</h3>
              <div class="space-y-2 text-muted-foreground">
                <p><strong>Company:</strong> XPLORVR Media Group FZCO</p>
                <p><strong>HQ:</strong> Dubai, UAE</p>
                <p><strong>Founder:</strong> Capt. Johnny Drummond</p>
                <p><strong>Experience:</strong> 20+ years in yachting</p>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p class="text-muted-foreground">
                To create the world's most comprehensive immersive platform, connecting physical spaces with digital experiences while empowering creators and industry professionals through innovative monetization models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-16 px-6 bg-secondary/5">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold text-foreground">
          Let's Talk
        </h2>
        <p class="text-lg text-muted-foreground">
          Ready to explore partnerships, press opportunities, or learn more about what we're building?
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary px-6 py-3 rounded-md">
            <Mail class="mr-2 h-4 w-4 inline" />
            Contact Us
          </button>
          <button class="btn btn-outline px-6 py-3 rounded-md">Partner With Xplor</button>
          <button class="btn btn-outline px-6 py-3 rounded-md">Press Kit</button>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
      <div class="max-w-4xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-foreground">
          Ready to Explore What Xplor Can Do?
        </h2>
        <p class="text-xl text-muted-foreground">
          Whether you're listing a superyacht, a skyscraper, or your café — if it can be walked through, it can be explored on Xplor.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary px-6 py-3 rounded-md">Upload a Space</button>
          <button class="btn btn-outline px-6 py-3 rounded-md">Browse the Map</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import aboutHero from '@/assets/about-hero.jpg'
import { Ship, Home, Hotel, Car, Plane, Building2, MapPin, Globe, Users, Heart, ArrowRight, CheckCircle, Mail, Target, Eye, DollarSign } from 'lucide-vue-next'

type Vertical = { icon: any; label: string; description: string; status: string; link: string }

const verticals: Vertical[] = [
  { icon: Ship, label: 'Yachts', description: 'List & explore yachts for sale or charter + FairShare program', status: '✅', link: '/yacht-brokerage' },
  { icon: Home, label: 'Real Estate', description: 'Properties for sale or rent — with immersive walkthroughs', status: '✅', link: '/real-estate' },
  { icon: Hotel, label: 'Hotels', description: 'Full property tours, rooms, amenities + booking API', status: '✅', link: '/hotels' },
  { icon: Building2, label: 'Restaurants & Bars', description: 'Showcase ambiance, tables, layouts + reservation plugin', status: '✅', link: '/restaurants-bars' },
  { icon: Car, label: 'Cars & Vehicles', description: '360° car walkarounds, test drives, full showrooms', status: '✅', link: '/cars-vehicles-2' },
  { icon: Plane, label: 'Jets & Aviation', description: 'Cabin tours, charters, training + test flights API', status: '✅', link: '/jets-aviation' },
  { icon: Building2, label: 'Developments', description: 'Off-plan projects, branded residences, investor pages', status: '✅', link: '/real-estate' }
]

const whyXplorPillars = [
  { icon: Eye, title: 'Immersion', description: '360° or 3D walkthroughs that show everything — not just pretty angles' },
  { icon: Target, title: 'Action', description: 'Tours that convert: Book, Contact, Refer, or Apply — all from within' },
  { icon: Globe, title: 'Reach', description: 'Global visibility, even for small local businesses' },
  { icon: DollarSign, title: 'Monetization', description: 'Tools like FairShare let creators and insiders earn from traffic or deals' },
  { icon: Users, title: 'Access', description: 'Anyone can list a space. No gatekeepers. No exclusivity walls.' }
]
</script>

<style scoped>
.btn { @apply inline-flex items-center justify-center font-medium; }
.btn-primary { @apply bg-primary text-primary-foreground hover:opacity-90; }
.btn-outline { @apply border border-input text-foreground hover:bg-muted; }
</style>
