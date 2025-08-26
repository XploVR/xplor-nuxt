<template>
  <div class="min-h-screen bg-background">
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Bring Your Fleet to Life with Immersive, Multi-Space Virtual Tours</h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">Showcase wheelhouse to cargo holds, machinery spaces and accommodation in one tour.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6 bg-blue-700 hover:bg-blue-800 text-white">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">➕ Add a Ship</Button>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Why Xplor is Built for Merchant Shipping</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <Card v-for="f in features" :key="f.title" class="text-center p-6 bg-white/80 dark:bg-card/80 backdrop-blur">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <component :is="f.icon" class="w-8 h-8 text-blue-700 dark:text-blue-400" />
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
import { Anchor, Search, Wrench, Globe, Package, Monitor } from 'lucide-vue-next'
import hero from '@/assets/merchant-shipping-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url(${hero})` }

const features = [
  { icon: Anchor, title:'⚓ Multi-Space Navigation', desc:'Bridge to engine room and cargo zones in one experience.' },
  { icon: Search, title:'🔎 Transparency for Inspection & Sales', desc:'Support pre-charter checks, insurance and fleet sales.' },
  { icon: Wrench, title:'🛠 Training & Handover', desc:'Familiarize crew with layout, procedures, and equipment.' },
  { icon: Globe, title:'🌍 Remote Access', desc:'For buyers, inspectors and stakeholders unable to travel.' },
  { icon: Package, title:'📦 Charter & Logistics Confidence', desc:'Show readiness, capacity, systems and loading gear.' },
  { icon: Monitor, title:'🖥 Link Specs & Manuals', desc:'Attach certs, logs, GA plans and videos in-tour.' },
]
</script>