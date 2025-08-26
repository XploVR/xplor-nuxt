<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <img :src="hero" alt="Golf course aerial view" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-emerald-800/50 to-emerald-700/40"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Showcase Your Golf Course Like Never Before — <span class="text-emerald-300">Hole by Hole</span>
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">Walkthrough of your course, clubhouse, and amenities — all in one immersive listing.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="bg-white text-emerald-800 hover:bg-white/90 px-8 py-4 text-lg font-semibold">
            <Mail class="mr-2 h-5 w-5" /> Contact the Xplor Team
          </Button>
          <Button size="lg" class="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 text-lg font-semibold">
            <Plus class="mr-2 h-5 w-5" /> Add Your Golf Course
          </Button>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card class="p-8 text-center hover:shadow-lg transition-shadow" v-for="c in cards" :key="c.title">
          <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <component :is="c.icon" class="h-8 w-8 text-emerald-600" />
          </div>
          <h3 class="text-xl font-bold text-foreground mb-4">{{ c.title }}</h3>
          <p class="text-muted-foreground">{{ c.desc }}</p>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Users, Trophy, Globe, TrendingUp, Puzzle, Mail, Plus } from 'lucide-vue-next'
import hero from '@/assets/golf-courses-hero.jpg'

const cards = [
  { icon: MapPin, title:'Hole-by-Hole Virtual Tours', desc:'Show every tee, fairway, bunker, and green in 360° clarity.' },
  { icon: Puzzle, title:'Multi-Space Listing System', desc:'Connect course, clubhouse, locker rooms, spa, restaurants, and pro shop.' },
  { icon: Trophy, title:'Perfect for Events & Sponsors', desc:'Pre-visualize venues for tournaments and corporate days.' },
  { icon: Users, title:'For Golf Communities', desc:'Link course listings to adjacent villas, apartments, and amenities.' },
  { icon: TrendingUp, title:'Increase Membership & Bookings', desc:'Interactive content that converts curiosity into visits.' },
  { icon: Globe, title:'Global Visibility', desc:'Be discovered by golfers, organizers, and travelers worldwide.' },
]
</script>