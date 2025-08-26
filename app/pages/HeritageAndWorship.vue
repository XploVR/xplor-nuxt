<template>
  <div class="min-h-screen bg-background">
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
          Preserve the Past. Inspire the Present. Share the Sacred — Virtually.
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Xplor lets you showcase heritage sites, temples, mosques, churches, synagogues, and sacred landmarks
          in a way that honors their beauty, spirit, and history — with multiple connected spaces, stories,
          and details all in one immersive listing.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6 bg-amber-700 hover:bg-amber-800 text-white">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">➕ Add a Heritage Site or Place of Worship</Button>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gradient-to-b from-amber-50/50 to-stone-50/50 dark:from-amber-950/20 dark:to-stone-950/20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-serif">
          Why Xplor is Ideal for Heritage & Worship Spaces
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <Card v-for="f in features" :key="f.title" class="text-center p-6 bg-white/80 dark:bg-card/80 backdrop-blur">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center" :class="f.bg">
                <component :is="f.icon" class="w-8 h-8" :class="f.color" />
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
import { MapPin, BookOpen, Heart, GraduationCap, Globe, Navigation } from 'lucide-vue-next'
import hero from '@/assets/heritage-worship-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${hero})` }

const features = [
  { icon: MapPin, title:'🕌 Multi-Space Virtual Journeys', desc:'Link all areas — sanctuaries, chapels, courtyards, towers — into one flowing tour.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
  { icon: BookOpen, title:'🏛️ Preservation Through Immersion', desc:'Digitally archive your heritage for global access and education.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
  { icon: Heart, title:'🕊️ Spiritual Experience with Context', desc:'Add prayers, narrations, inscriptions, and teachings within the tour.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
  { icon: GraduationCap, title:'🎓 Educational & Accessible', desc:'Ideal for students, researchers, and remote visitors.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
  { icon: Globe, title:'🌐 Global Cultural Discovery', desc:'Reach audiences worldwide interested in heritage and architecture.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
  { icon: Navigation, title:'🧭 Respectful, Custom Navigation', desc:'Guided paths, restricted areas, or story-driven flows.', bg:'bg-amber-100 dark:bg-amber-900/30', color:'text-amber-700 dark:text-amber-400' },
]
</script>