<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Transparent, Accessible, and Immersive — Showcase Public Institutions in Full Detail
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
          Hospitals to city halls and embassies — connect every department and service point in one listing.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
            ➕ Add a Hospital or Government Building
          </Button>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Card v-for="b in benefits" :key="b.title" class="text-center p-6">
          <CardContent class="space-y-4">
            <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <component :is="b.icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">{{ b.title }}</h3>
            <p class="text-muted-foreground">{{ b.desc }}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Heart, MapPin, Shield, Globe, Settings } from 'lucide-vue-next'
import heroImg from '@/assets/government-healthcare-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.7), rgba(59, 130, 246, 0.7)), url(${heroImg})` }

const benefits = [
  { icon: Building2, title:'Multi-Space Virtual Listings', desc:'Connect entrances, departments, surgical rooms, clinics, and counters in one tour.' },
  { icon: Heart, title:'Public Transparency & Accessibility', desc:'Help residents and patients navigate facilities and build trust.' },
  { icon: MapPin, title:'Orientation & Wayfinding', desc:'Preview layouts before arrival to reduce stress and improve access.' },
  { icon: Shield, title:'Training & Preparedness', desc:'Use walkthroughs for onboarding, security, and emergency response.' },
  { icon: Globe, title:'Global Visibility & Collaboration', desc:'Embassies and research hospitals viewable by international partners.' },
  { icon: Settings, title:'Update Spaces with Ease', desc:'Add/remove sections as facilities evolve (e.g., vaccination sites).' },
]
</script>