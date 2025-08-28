<template>
  <div class="min-h-screen bg-gradient-to-b from-background to-gray-50">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img 
        :src="hero" 
        alt="Experiences & attractions" 
        class="absolute inset-0 w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-gradient-to-br from-coral-900/70 via-orange-800/60 to-teal-900/70"></div>
      <div class="relative z-10 text-center text-white px-4 max-w-6xl">
        <span class="inline-block mb-6 bg-primary/20 text-white border border-white/20 px-3 py-1 rounded text-sm">
          Trusted by Leading Attractions Worldwide
        </span>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn Your Experience into an <span class="underline">Immersive Journey</span>
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Previews, bookings, and storytelling in one place.
        </p>
        
        <!-- CTA Button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            @click="uploadDialogOpen = true"
            class="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
          >
            Upload Your Experience
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            class="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-black"
          >
            View Demo Tours
          </Button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Xplor for Your Attraction?
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just photos — create immersive experiences that convert visitors into bookings
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="feature in features" :key="feature.title" class="hover:shadow-lg transition-shadow">
            <CardContent class="p-6 space-y-2">
              <component :is="feature.icon" class="h-8 w-8 text-primary" />
              <h3 class="font-semibold">{{ feature.title }}</h3>
              <p class="text-muted-foreground">{{ feature.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p class="text-xl text-muted-foreground">
            Get your experience online in three simple steps
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <Card v-for="step in steps" :key="step.title" class="text-center">
            <CardContent class="p-6">
              <div class="text-3xl font-bold text-primary mb-4">{{ step.number }}</div>
              <div class="font-semibold text-lg mb-2">{{ step.title }}</div>
              <p class="text-muted-foreground">{{ step.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Xplor vs. Traditional Solutions
          </h2>
          <p class="text-xl text-muted-foreground">
            See how we compare to basic apps and booking sites
          </p>
        </div>
        
        <div class="bg-white rounded-lg border overflow-hidden">
          <div class="grid grid-cols-4 gap-4 font-semibold p-4 bg-gray-50 border-b">
            <div>Feature</div>
            <div class="text-center">Xplor</div>
            <div class="text-center">Basic Apps</div>
            <div class="text-center">Booking Sites</div>
          </div>
          <div 
            v-for="comparison in comparisonFeatures" 
            :key="comparison.feature" 
            class="grid grid-cols-4 gap-4 items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
          >
            <div class="font-medium">{{ comparison.feature }}</div>
            <div class="text-center">
              <CheckCircle 
                v-if="comparison.xplor === 'full'" 
                class="h-5 w-5 text-green-500 mx-auto"
              />
              <AlertTriangle 
                v-else-if="comparison.xplor === 'limited'" 
                class="h-5 w-5 text-yellow-500 mx-auto"
              />
              <X 
                v-else 
                class="h-5 w-5 text-red-500 mx-auto"
              />
            </div>
            <div class="text-center">
              <CheckCircle 
                v-if="comparison.basicApps === 'full'" 
                class="h-5 w-5 text-green-500 mx-auto"
              />
              <AlertTriangle 
                v-else-if="comparison.basicApps === 'limited'" 
                class="h-5 w-5 text-yellow-500 mx-auto"
              />
              <X 
                v-else 
                class="h-5 w-5 text-red-500 mx-auto"
              />
            </div>
            <div class="text-center">
              <CheckCircle 
                v-if="comparison.bookingSites === 'full'" 
                class="h-5 w-5 text-green-500 mx-auto"
              />
              <AlertTriangle 
                v-else-if="comparison.bookingSites === 'limited'" 
                class="h-5 w-5 text-yellow-500 mx-auto"
              />
              <X 
                v-else 
                class="h-5 w-5 text-red-500 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Showcase Your Experience?
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Join thousands of attractions using Xplor to increase bookings and engagement
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            @click="uploadDialogOpen = true"
            class="text-lg px-8 py-3"
          >
            Upload Your Experience
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            class="text-lg px-8 py-3"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>

    <!-- Upload Dialog -->
    <ExperienceUploadDialog 
      :open="uploadDialogOpen" 
      @update:open="uploadDialogOpen = $event" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import ExperienceUploadDialog from '@/components/ExperienceUploadDialog.vue'
import { 
  CheckCircle, 
  AlertTriangle, 
  X, 
  Compass, 
  CreditCard, 
  Globe, 
  Backpack, 
  Headphones, 
  Eye 
} from 'lucide-vue-next'
import hero from '@/assets/experiences-attractions-hero.jpg'

const uploadDialogOpen = ref(false)

interface Feature {
  icon: any
  title: string
  description: string
}

interface Step {
  number: string
  title: string
  description: string
}

interface ComparisonFeature {
  feature: string
  xplor: 'full' | 'limited' | 'none'
  basicApps: 'full' | 'limited' | 'none'
  bookingSites: 'full' | 'limited' | 'none'
}

const features: Feature[] = [
  { 
    icon: Compass, 
    title: 'Immersive Previews', 
    description: 'Let guests explore venues and trails before booking — VR-ready.' 
  },
  { 
    icon: CreditCard, 
    title: 'Drive More Bookings', 
    description: 'Link to ticketing platforms and booking engines.' 
  },
  { 
    icon: Globe, 
    title: 'Global Discovery', 
    description: 'Be part of a platform visited by travelers worldwide.' 
  },
  { 
    icon: Backpack, 
    title: 'Tour Operators & Venues', 
    description: 'From parks to festivals — show what makes you unforgettable.' 
  },
  { 
    icon: Headphones, 
    title: 'Multi-Sensory Storytelling', 
    description: 'Add audio guides, voiceovers, or pop-ups.' 
  },
  { 
    icon: Eye, 
    title: 'Trust-Building', 
    description: 'Show exactly what to expect; reduce no-shows.' 
  },
]

const steps: Step[] = [
  { 
    number: '01', 
    title: 'Create Your Virtual Experience', 
    description: 'Upload your tour, photos, highlights, or booking details.' 
  },
  { 
    number: '02', 
    title: 'Customize & Tell Your Story', 
    description: 'Add maps, voiceovers, schedules, reviews, or offers.' 
  },
  { 
    number: '03', 
    title: 'Go Live & Get Discovered', 
    description: 'Visitors can view, share, and book from anywhere.' 
  },
]

const comparisonFeatures: ComparisonFeature[] = [
  { 
    feature: '360° / VR Ready', 
    xplor: 'full', 
    basicApps: 'limited', 
    bookingSites: 'none' 
  },
  { 
    feature: 'Tour Monetization', 
    xplor: 'full', 
    basicApps: 'none', 
    bookingSites: 'limited' 
  },
  { 
    feature: 'Embedded Storytelling', 
    xplor: 'full', 
    basicApps: 'limited', 
    bookingSites: 'none' 
  },
  { 
    feature: 'Global Experience Directory', 
    xplor: 'full', 
    basicApps: 'none', 
    bookingSites: 'none' 
  },
  { 
    feature: 'Custom Branding & Control', 
    xplor: 'full', 
    basicApps: 'limited', 
    bookingSites: 'none' 
  },
]
</script>