<!-- Hotels.vue -->
<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="hotelsHero"
          alt="Luxury hotel lobby"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-white mb-6">
            Let Guests <span class="text-blue-200">Experience Your Hotel</span> Before They Even Book
          </h1>
          <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Xplor lets travelers explore your rooms, restaurants, pools, and spaces in immersive 3D — and book instantly via API-integrated systems. It's more than visibility. It's conversion.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90" as-child>
              <RouterLink to="/upload-space" class="flex items-center gap-2">
                Add Your Hotel <ArrowRight class="w-5 h-5" />
              </RouterLink>
            </Button>
            <Button size="lg" variant="outline" class="flex items-center gap-2">
              <Play class="w-5 h-5" />
              View Sample Hotel Tour
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Hotels Need Xplor -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Virtual Tours Are Now the First Impression — Make Yours Count
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(feature, index) in features" :key="index" class="text-center">
            <CardHeader>
              <component :is="feature.icon" class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle class="text-lg">{{ feature.title }}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{{ feature.description }}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Interactive Sample Tour -->
    <section class="py-16 bg-muted/50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">
            Experience the Difference: Interactive Hotel Tours
          </h2>
          <p class="text-lg text-muted-foreground mb-8">
            See how guests can explore every detail of your property and book instantly with integrated booking overlays.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <Card class="overflow-hidden">
            <CardContent class="p-0">
              <div class="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <div class="text-center">
                  <Play class="w-16 h-16 text-primary mx-auto mb-4" />
                  <p class="text-lg font-semibold text-foreground mb-2">Interactive Hotel Tour Demo</p>
                  <p class="text-muted-foreground">Click to explore rooms, amenities, and booking flow</p>
                </div>
                <Badge class="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Powered by Xplor Booking API
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- API Plugin Section -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">
            Use Your Existing Booking Engine — Seamlessly
          </h2>
          <p class="text-lg text-muted-foreground">
            Xplor connects to your existing PMS or booking platform through simple plugin integration or custom API setup. Whether you use Cloudbeds, SiteMinder, Opera, or others — guests can check availability and book directly from your tour.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card v-for="(platform, index) in bookingPlatforms" :key="index" class="text-center p-4">
            <CardContent class="p-2">
              <div class="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                <LinkIcon class="w-6 h-6 text-primary" />
              </div>
              <p class="text-sm font-medium">{{ platform }}</p>
            </CardContent>
          </Card>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90">
            Request Booking API Setup
          </Button>
          <Button size="lg" variant="outline">
            Talk to an Integration Specialist
          </Button>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-muted/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ step.number }}
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-2">{{ step.title }}</h3>
            <p class="text-muted-foreground">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why It's a Win for Hotels -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">
            Better Guests. Fewer No-Shows. More Upsells.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card v-for="(benefit, index) in benefits" :key="index" class="text-center">
            <CardContent class="p-6">
              <div class="text-4xl font-bold text-primary mb-2">{{ benefit.stat }}</div>
              <p class="text-muted-foreground">{{ benefit.description }}</p>
            </CardContent>
          </Card>
        </div>

        <div class="max-w-3xl mx-auto">
          <Card>
            <CardContent class="p-6">
              <div class="flex items-start gap-4">
                <Star class="w-6 h-6 text-primary mt-1" />
                <div>
                  <p class="text-foreground italic mb-2 text-lg">
                    "We started getting longer stays and higher-end bookings once we listed our suites with Xplor virtual tours."
                  </p>
                  <p class="text-sm text-muted-foreground">— Hotel Manager, Mykonos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div class="mt-12 text-center">
          <h3 class="text-xl font-semibold text-foreground mb-4">Additional Benefits:</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div class="flex items-center gap-2">
              <CheckCircle class="w-5 h-5 text-primary" />
              <span class="text-muted-foreground">Easier upselling of suites and packages</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle class="w-5 h-5 text-primary" />
              <span class="text-muted-foreground">Showcase on-property experiences</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle class="w-5 h-5 text-primary" />
              <span class="text-muted-foreground">Reduce booking uncertainties</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle class="w-5 h-5 text-primary" />
              <span class="text-muted-foreground">Attract international travelers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Property Types -->
    <section class="py-16 bg-muted/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Property Types We Support
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(type, index) in propertyTypes" :key="index" class="text-center">
            <component :is="type.icon" class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">{{ type.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-foreground mb-6">
            Turn Every Tour into a Booking
          </h2>
          <p class="text-xl text-muted-foreground mb-8">
            List your hotel on Xplor, connect your booking engine, and let guests explore their future stay today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90" as-child>
              <RouterLink to="/upload-space" class="flex items-center gap-2">
                Add Your Hotel Now <ArrowRight class="w-5 h-5" />
              </RouterLink>
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo with Xplor
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 bg-muted/30">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle class="text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-foreground mb-2">Can I connect my current booking engine?</h4>
                  <p class="text-muted-foreground">Yes! Xplor integrates with most major PMS and booking platforms including Cloudbeds, SiteMinder, Opera, and many others through our API system.</p>
                </div>
                <div>
                  <h4 class="font-semibold text-foreground mb-2">What virtual tour formats do you support?</h4>
                  <p class="text-muted-foreground">We support Matterport, iStaging, Kuula, and other standard 360° tour platforms, plus custom uploads.</p>
                </div>
                <div>
                  <h4 class="font-semibold text-foreground mb-2">How long does setup take?</h4>
                  <p class="text-muted-foreground">Basic listing setup takes minutes. API integration typically takes 1-2 weeks depending on your current systems.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Legal Footer -->
    <section class="py-8 bg-muted/20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-sm text-muted-foreground">
            Xplor supports virtual tours created with Matterport, iStaging, Kuula, and other standard platforms. 
            API integrations available for supported PMS and booking systems. Contact us to check compatibility.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { RouterLink } from 'vue-router'
import hotelsHero from '@/assets/hotels-hero.jpg'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Icons from lucide-vue
import {
  Hotel,
  Bed,
  Globe,
  Smartphone,
  BarChart3,
  Play,
  ArrowRight,
  Building,
  Trees,
  Briefcase,
  Users,
  Heart,
  Star,
  CheckCircle,
  Sparkles
} from 'lucide-vue-next'
import { Link as LinkIcon } from 'lucide-vue-next'

useHead({
  title: 'Hotels & Resorts Virtual Tours - Boost Bookings | Xplor',
  meta: [
    {
      name: 'description',
      content:
        'Transform hotel marketing with immersive virtual tours. Let guests experience your property before booking with API-integrated booking systems.'
    }
  ]
})

const features = [
  {
    icon: Bed,
    title: 'Sell the Stay',
    description: 'Let guests see the exact room, view, amenities, and feel before booking'
  },
  {
    icon: Hotel,
    title: 'Full-Property Immersion',
    description: 'Showcase every space: rooms, dining, spa, gym, pool, meeting spaces'
  },
  {
    icon: LinkIcon,
    title: 'API Booking Integration',
    description: 'Guests can view + book directly, using your existing system'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Showcase to international travelers in multiple languages'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Optimized',
    description: 'Explore and book from mobile, anywhere in the world'
  },
  {
    icon: BarChart3,
    title: 'Better Engagement = Better Conversions',
    description: 'Guests who view a tour are more likely to book and less likely to cancel'
  }
]

const steps = [
  {
    number: 1,
    title: 'Create Your Hotel Profile',
    description: 'Add rooms, amenities, property details'
  },
  {
    number: 2,
    title: 'Upload or Link Your Virtual Tours',
    description: 'Add immersive 3D walkthroughs of rooms, lobby, spa, etc.'
  },
  {
    number: 3,
    title: 'Enable Booking Plugin',
    description: 'Let guests book directly inside the tour, synced with your live inventory'
  }
]

const propertyTypes = [
  { icon: Hotel, name: 'Resorts' },
  { icon: Building, name: 'Boutique Hotels' },
  { icon: Building, name: 'Urban Hotels' },
  { icon: Trees, name: 'Eco-Lodges' },
  { icon: Users, name: 'Hostels' },
  { icon: Briefcase, name: 'Business Hotels' },
  { icon: Heart, name: 'Extended Stays' },
  { icon: Sparkles, name: 'Spas & Wellness Retreats' }
]

const bookingPlatforms = [
  'Cloudbeds',
  'SiteMinder',
  'Opera',
  'Little Hotelier',
  'WooCommerce',
  'Booking.com API',
  'RMS Cloud',
  'Hotelogix'
]

const benefits = [
  {
    stat: '300%',
    description: 'more time spent on immersive listings'
  },
  {
    stat: '40%',
    description: 'less likely to cancel after viewing tours'
  },
  {
    stat: '2x',
    description: 'more direct bookings for rooms with virtual tours'
  }
]
</script>
