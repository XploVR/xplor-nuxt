<template>
  <div class="min-h-screen bg-background">
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Step Into Film, Performance, and Production — Virtually</h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">Showcase sets, rehearsal studios, theatres and arenas in immersive 360°.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">➕ Add a Set or Venue</Button>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Why Xplor is the Best for Sets, Stages & Venues</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <Card v-for="f in features" :key="f.title" class="text-center p-6 bg-card/80 backdrop-blur">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <component :is="f.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">{{ f.title }}</h3>
              <p class="text-muted-foreground">{{ f.desc }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Camera, Theater, Music, Globe, Brain, Smartphone } from 'lucide-vue-next'
import hero from '@/assets/sets-stages-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero})` }
const features = [
  { icon: Camera, title:'🎥 Multi-Space Navigation', desc:'Tour sets, wings, green rooms, tech areas, and VIP lounges.' },
  { icon: Theater, title:'🎭 Creative & Live Use', desc:'Perfect for location scouting, rehearsal prep, event planning.' },
  { icon: Music, title:'🎤 Showcase Setup & Flow', desc:'See entry points, tech setups, performer paths and access.' },
  { icon: Globe, title:'🌍 Remote Access', desc:'Great for international clients and showrunners.' },
  { icon: Brain, title:'🧠 Smart Tags & Media', desc:'Embed lighting specs, rigging points and drawings.' },
  { icon: Smartphone, title:'📱 Mobile-First', desc:'Share links with collaborators and vendors instantly.' },
]
</script>