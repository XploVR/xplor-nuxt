<template>
  <div class="min-h-screen bg-background">
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Let Them Step Inside Before They Step In</h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">Show workspaces, showrooms, and creative studios in 360° with connected zones.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">➕ Add Offices, Showrooms & Studios</Button>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gradient-to-b from-background via-background to-accent/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Why Xplor is the Ultimate Tool for Commercial Spaces</h2>
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
import { Building2, Globe, Sofa, Mic, Lock, Paperclip } from 'lucide-vue-next'
import hero from '@/assets/offices-showrooms-studios-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})` }

const features = [
  { icon: Building2, title:'🏢 Multi-Zone Virtual Tours', desc:'Reception, meeting rooms, workstations, studios, and more.' },
  { icon: Globe, title:'🌍 Remote Leasing & Sales', desc:'Explore configurations before stepping onsite.' },
  { icon: Sofa, title:'🛋 Design & Fit-Out Visualization', desc:'Renovations, mockups, and design options.' },
  { icon: Mic, title:'🎙 Content & Creator Spaces', desc:'Show recording studios and creative setups.' },
  { icon: Lock, title:'🔐 Private or Public Access', desc:'Gated tours or public marketing — your choice.' },
  { icon: Paperclip, title:'📎 Attach Floorplans & Specs', desc:'Add PDFs, plans, sizes, or leasing details in-tour.' },
]
</script>