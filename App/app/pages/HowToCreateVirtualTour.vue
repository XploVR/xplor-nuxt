<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div class="relative overflow-hidden rounded-2xl mb-16">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${hero})` }" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div class="relative text-center py-32 px-8">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">Create Stunning Virtual Tours for Any Space</h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">This guide walks you through tools, techniques, and the expert network available on Xplor.</p>
        </div>
      </div>

      <Card class="mb-16">
        <CardHeader><CardTitle class="text-3xl text-primary text-center mb-8">Step-by-Step Guide</CardTitle></CardHeader>
        <CardContent>
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="(s, i) in steps" :key="i" :value="`step-${i}`">
              <AccordionTrigger class="text-left">
                <div class="flex items-center gap-4">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                    <component :is="s.icon" class="h-5 w-5" />
                  </div>
                  <span class="text-lg font-semibold">{{ s.title }}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent class="text-muted-foreground ml-14 text-base">{{ s.content }}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Settings, Camera, Upload, Share2 } from 'lucide-vue-next'
import hero from '@/assets/how-to-create-virtual-tour-hero.jpg'

const steps = [
  { title:'Plan Your Tour', icon: Settings, content:'Define objectives, identify key areas, create a shot list and flow.' },
  { title:'Capture the Space', icon: Camera, content:'Use 360° cameras or DSLR rigs. Ensure proper lighting and coverage.' },
  { title:'Choose Your Virtual Tour Software', icon: Settings, content:'3DVista, Matterport, Kuula, or Pano2VR based on needs.' },
  { title:'Edit and Build the Tour', icon: Settings, content:'Add hotspots, seamless navigation, multimedia elements.' },
  { title:'Host Your Tour', icon: Upload, content:'Upload to a reliable platform. Xplor.io is optimized for virtual tours.' },
  { title:'Share & Embed', icon: Share2, content:'Links, website embeds, social media, and email campaigns.' },
]
</script>