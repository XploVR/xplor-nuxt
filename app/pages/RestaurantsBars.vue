<template>
  <div class="min-h-screen bg-background">
    <section class="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="hero" alt="Elegant restaurant dining room" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-red-800/60 to-purple-900/70"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-white mb-6">
            Make Them Feel the <span class="text-orange-200">Vibe</span> Before They Book the Table
          </h1>
          <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Xplor lets guests explore your restaurant or bar virtually — then connect it to your booking engine.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90" @click="uploadDialogOpen=true">
              Add Your Venue <ArrowRight class="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" class="flex items-center gap-2">
              <Play class="w-5 h-5" /> See a Sample Tour
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">You Don't Just Sell Food. You Sell Experience.</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(feature,i) in features" :key="i" class="text-center">
            <CardHeader>
              <component :is="feature.icon" class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle class="text-lg">{{ feature.title }}</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>{{ feature.description }}</CardDescription></CardContent>
          </Card>
        </div>
      </div>
    </section>

    <RestaurantBarUploadDialog :open="uploadDialogOpen" @update:open="v => uploadDialogOpen = v" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import RestaurantBarUploadDialog from '@/components/RestaurantBarUploadDialog.vue'
import { Wine, Camera, Calendar, Globe, Smartphone, ArrowRight, Play, PartyPopper } from 'lucide-vue-next'
import hero from '@/assets/restaurants-bars-hero.jpg'

const uploadDialogOpen = ref(false)
const features = [
  { icon: Wine, title:'Atmosphere Is Everything', description:'Let guests see your vibe, seating layout, and ambiance before visiting.' },
  { icon: Camera, title:'Full-Space Tours', description:'Showcase indoor/outdoor, VIP, private dining, and bar areas.' },
  { icon: Calendar, title:'Integrated Reservations', description:'Use your current booking system with Xplor’s API plugin.' },
  { icon: PartyPopper, title:'Book Events or Tables', description:'Enable dinners, birthdays, corporate events and more.' },
  { icon: Globe, title:'Global Visibility', description:'Reach locals and travelers exploring nearby experiences.' },
  { icon: Smartphone, title:'Desktop + Mobile', description:'Fully responsive immersive experiences on all devices.' },
]
</script>