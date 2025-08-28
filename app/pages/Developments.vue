<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-40"
        :style="{ backgroundImage: `url(${developmentsHero})` }"
      />
      
      <div class="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <span class="inline-block mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded text-sm">
          Property Development Platform
        </span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          The Complete Platform for
          <span class="text-primary block">Showcasing Property Developments</span>
          <span class="text-2xl md:text-3xl lg:text-4xl font-normal block mt-4">— In Full Immersion</span>
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Present your entire project with precision — from masterplan to model units, amenities, and everything in between — all in one immersive Xplor listing.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            @click="uploadDialogOpen = true"
            class="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
          >
            <Plus class="mr-2 h-5 w-5" />
            Upload Your Development
          </Button>
          <Button size="lg" variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
            <Mail class="mr-2 h-5 w-5" />
            Contact the Xplor Team
          </Button>
        </div>
      </div>
    </section>

    <!-- Why Developers Use Xplor -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why Developers Use Xplor
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            The only platform designed specifically for comprehensive development showcasing
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            v-for="(feature, index) in features" 
            :key="index" 
            class="p-6 hover:shadow-lg transition-all duration-300"
          >
            <CardContent class="p-0">
              <div class="mb-4">
                <component :is="feature.icon" class="h-8 w-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold mb-3 text-foreground">{{ feature.title }}</h3>
              <p class="text-muted-foreground">{{ feature.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Use Case Examples -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Use Case Examples
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how different types of developments leverage Xplor's multi-space capabilities
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <Card 
            v-for="(useCase, index) in useCases" 
            :key="index" 
            class="overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div class="aspect-video overflow-hidden bg-gray-200 flex items-center justify-center">
              <Building2 class="h-16 w-16 text-gray-400" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-foreground">{{ useCase.title }}</h3>
              <p class="text-muted-foreground">{{ useCase.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to showcase your entire development
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="text-center"
          >
            <div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {{ step.number }}
            </div>
            <h3 class="text-xl font-semibold mb-4 text-foreground">{{ step.title }}</h3>
            <p class="text-muted-foreground">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            What Makes Xplor Unique for Developments
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare Xplor's development-focused features with traditional property portals
          </p>
        </div>

        <Card class="overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th class="text-center p-4 font-semibold text-foreground">Xplor</th>
                  <th class="text-center p-4 font-semibold text-foreground">Traditional Property Portals</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item, index) in comparisonFeatures" 
                  :key="index" 
                  class="border-t border-border hover:bg-gray-50"
                >
                  <td class="p-4 font-medium text-foreground">{{ item.feature }}</td>
                  <td class="p-4 text-center">
                    <CheckCircle v-if="item.xplor === true" class="h-5 w-5 text-emerald-500 inline-block" />
                    <X v-else-if="item.xplor === false" class="h-5 w-5 text-red-500 inline-block" />
                    <span v-else class="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{{ item.xplor }}</span>
                  </td>
                  <td class="p-4 text-center">
                    <CheckCircle v-if="item.traditional === true" class="h-5 w-5 text-emerald-500 inline-block" />
                    <X v-else-if="item.traditional === false" class="h-5 w-5 text-red-500 inline-block" />
                    <span v-else class="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{{ item.traditional }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>

    <!-- Final Contact Section -->
    <section class="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Ready to Showcase Your Entire Development the Right Way?
        </h2>
        <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Xplor is the only platform that supports complete, immersive, multi-space listings for developments of all sizes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            @click="uploadDialogOpen = true"
            class="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
          >
            <Plus class="mr-2 h-5 w-5" />
            Upload Your Development
          </Button>
          <Button size="lg" variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
            <Mail class="mr-2 h-5 w-5" />
            Contact Us to Get Started
          </Button>
        </div>
      </div>
    </section>

    <!-- Upload Dialog -->
    <DevelopmentUploadDialog 
      :open="uploadDialogOpen" 
      @update:open="uploadDialogOpen = $event" 
    />
  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue'
import Button from '~/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import DevelopmentUploadDialog from '@/components/DevelopmentUploadDialog.vue'
import { 
  Building2, 
  MapPin, 
  Users, 
  Globe, 
  Ruler, 
  Brain, 
  CheckCircle, 
  X, 
  Plus, 
  Mail 
} from 'lucide-vue-next'
import developmentsHero from '@/assets/developments-hero.jpg'

const uploadDialogOpen = ref(false)

const features = ref([
  {
    icon: markRaw(Building2),
    title: "Masterplan-to-Model Room",
    description: "Showcase the entire development lifecycle — from vision to final units."
  },
  {
    icon: markRaw(MapPin),
    title: "Multiple Spaces in One Listing",
    description: "Add apartments, offices, showrooms, clubhouses, gyms, and lobbies as connected virtual spaces."
  },
  {
    icon: markRaw(Users),
    title: "Designed for Sales Teams",
    description: "Built-in tools for lead generation, contact capture, and real estate CRM integrations."
  },
  {
    icon: markRaw(Globe),
    title: "Global Visibility",
    description: "Be discovered by investors, agents, and buyers browsing immersive listings worldwide."
  },
  {
    icon: markRaw(Ruler),
    title: "Professional Presentation",
    description: "Present scale, finish, lifestyle, and spatial flow with total clarity and control."
  },
  {
    icon: markRaw(Brain),
    title: "Smart Tagging & Navigation",
    description: "Link between spaces, highlight features, and guide users through the experience."
  }
])

const useCases = ref([
  {
    title: "Luxury Apartment Development",
    description: "One listing, multiple show units, rooftop spaces, and amenity walkthroughs."
  },
  {
    title: "Mixed-Use Projects",
    description: "Showcase retail, co-working, hospitality, and residential zones in one cohesive journey."
  },
  {
    title: "Branded Residences or Hotel Condos",
    description: "Preview branded styling, operator benefits, and various layouts from a single entry point."
  }
])

const steps = ref([
  {
    number: "01",
    title: "Upload Your Development",
    description: "Add your masterplan, building exteriors, and digital media."
  },
  {
    number: "02",
    title: "Add Your Spaces",
    description: "Create individual rooms or zones: show units, amenities, lobbies, etc."
  },
  {
    number: "03",
    title: "Go Live and Generate Leads",
    description: "Your virtual development is ready for global viewing, embedded sharing, and agent outreach."
  }
])

const comparisonFeatures = ref([
  { feature: "Multi-space Listings", xplor: true, traditional: false },
  { feature: "360°/VR Capability", xplor: true, traditional: "limited" },
  { feature: "Masterplan Visualization", xplor: true, traditional: false },
  { feature: "Custom Navigation Links", xplor: true, traditional: false },
  { feature: "Global Immersive Discovery", xplor: true, traditional: false },
  { feature: "Real-Time Lead Collection", xplor: true, traditional: "basic" }
])
</script>