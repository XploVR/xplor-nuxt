<template>
  <div class="min-h-screen bg-background">
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img :src="hero" alt="Cruise ship" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-6xl font-bold">Cruise Ships</h1>
        <p class="text-lg text-white/90 max-w-3xl mx-auto mt-4">Connect decks, cabins, restaurants, theaters, and facilities into one immersive listing.</p>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="f in features" :key="f.title"><CardContent class="p-6"><h3 class="font-semibold">{{ f.title }}</h3><p class="text-muted-foreground">{{ f.desc }}</p></CardContent></Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import hero from '@/assets/cruise-ships-hero.jpg'

const features = [
  { title:'Deck-by-Deck Tours', desc:'From bridge to engine room.* (access controlled)' },
  { title:'Cabin Categories', desc:'Suites, balconies, interiors — browse and compare.' },
  { title:'Entertainment & Dining', desc:'Theaters, pools, bars, restaurants, spas, and shops.' },
  { title:'Embarkation to Excursions', desc:'Map the entire passenger journey.' },
  { title:'Crew Training & Safety', desc:'Use private tours for drills and orientations.' },
  { title:'B2B & Marketing', desc:'Trade partners can preview ship facilities remotely.' },
]
</script>