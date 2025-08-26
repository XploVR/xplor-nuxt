<template>
  <div class="min-h-screen bg-background">
    <section class="relative py-20 px-4 bg-cover bg-center bg-no-repeat" :style="heroStyle">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Showcase Your Facility. Demonstrate Your Standards. Impress the World.</h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">Capture production — from R&D labs to assembly lines and loading bays — in one secure, immersive 360° listing.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white">📩 Contact the Xplor Team</Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">➕ Add Manufacturing Facility</Button>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gradient-to-b from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Why Xplor is Built for Manufacturing</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <Card v-for="f in features" :key="f.title" class="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30">
                <component :is="f.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
import { Factory, Cog, ClipboardCheck, GraduationCap, Globe, FileText } from 'lucide-vue-next'
import hero from '@/assets/manufacturing-hero.jpg'

const heroStyle = { backgroundImage: `linear-gradient(rgba(30,41,59,0.8), rgba(30,41,59,0.8)), url(${hero})` }

const features = [
  { icon: Factory, title:'🏭 Multi-Space Walkthroughs', desc:'Lines, QA, warehousing, R&D, offices, cleanrooms, docks — one experience.' },
  { icon: Cog, title:'⚙️ For B2B Clients & Investors', desc:'Show capabilities, quality systems, and scale remotely.' },
  { icon: ClipboardCheck, title:'📋 Compliance & Certification', desc:'Document safety zones, signage, exits, and ISO/OSHA readiness.' },
  { icon: GraduationCap, title:'🧑‍🏫 Training & Onboarding', desc:'Onboard workers, technicians, engineers, and visitors.' },
  { icon: Globe, title:'🌐 Remote Global Access', desc:'Secure links for suppliers, auditors, or partners anywhere.' },
  { icon: FileText, title:'🗂 Attach SOPs & Docs', desc:'Link MSDS, manuals, procedures, and process videos to zones.' },
]
</script>