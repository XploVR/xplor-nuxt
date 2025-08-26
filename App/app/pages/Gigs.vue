<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div class="absolute inset-0 bg-cover bg-center opacity-20" :style="{ backgroundImage: `url(${hero})` }" />
      <div class="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <Button size="lg" variant="outline" class="mb-8 text-xl px-12 py-6 bg-background/80 backdrop-blur-sm border-2 h-auto" @click="showFinderForm=true">
          <MapPin class="mr-3 h-6 w-6" /> Find an xplor Tour Pro in your area
        </Button>
        <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6">Become a Tour Pro for <span class="font-typografix text-xplor-grey">xplor</span></h1>
        <p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Capture spaces. Earn income. Work anywhere.</p>
        <div class="flex justify-center">
          <Button size="lg" class="text-lg px-8 py-4" @click="showVerificationForm=true">
            <CheckCircle class="mr-2 h-5 w-5" /> Become a Verified Tour Pro
          </Button>
        </div>
      </div>

      <Dialog :open="showFinderForm" @update:open="val => showFinderForm = val">
        <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto">
          <TourProFinderForm @close="showFinderForm=false" />
        </DialogContent>
      </Dialog>

      <Dialog :open="showVerificationForm" @update:open="val => showVerificationForm = val">
        <DialogContent class="max-w-2xl">
          <VerificationForm @close="showVerificationForm=false" />
        </DialogContent>
      </Dialog>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { MapPin, CheckCircle } from 'lucide-vue-next'
import VerificationForm from '@/components/VerificationForm.vue'
import TourProFinderForm from '@/components/TourProFinderForm.vue'
import hero from '@/assets/gigs-hero.jpg'

const showFinderForm = ref(false)
const showVerificationForm = ref(false)
</script>