<template>
  <div class="min-h-screen bg-background">
    <section class="relative h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Showcase Every Carriage, Cabin, and <span class="text-blue-300">Corridor — Seamlessly</span>
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">Display full trains and trams in 360°, with every space linked into a single experience.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 text-lg font-semibold">Contact the Xplor Team</Button>
          <Button size="lg" class="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold">Add Your Train or Tram</Button>
        </div>
      </div>
    </section>

    <section class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Xplor is Best for Trains & Trams</h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">The complete platform for showcasing every aspect of your rail experience</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="f in features" :key="f.title" class="p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="f.icon" class="h-8 w-8 text-slate-600" />
            </div>
            <h3 class="text-xl font-bold text-foreground mb-4">{{ f.title }}</h3>
            <p class="text-muted-foreground">{{ f.desc }}</p>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Train, Users, Mountain, Armchair, Globe, Camera } from 'lucide-vue-next'
import hero from '@/assets/trains-trams-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(30,58,138,0.7), rgba(30,58,138,0.7)), url(${hero})` }
const features = [
  { icon: Train, title:'Multi-Carriage Virtual Tours', desc:'Walk through as if you’re onboard — end to end.' },
  { icon: Users, title:'Multiple Spaces in One Listing', desc:'Cabins, lounges, dining, restrooms, and driver cabins.' },
  { icon: Mountain, title:'Scenic & Heritage Lines', desc:'Promote landscapes and restored classics with immersion.' },
  { icon: Armchair, title:'Luxury & Charter Rail', desc:'Ambience, design, and comfort that convert.' },
  { icon: Globe, title:'Global Reach', desc:'Bring your rail experience to a worldwide audience.' },
  { icon: Camera, title:'Engaging Storytelling', desc:'Add info, clips, narration and booking links in-tour.' },
]
</script>