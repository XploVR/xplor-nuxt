<template>
  <div>
    <!-- Meta tags -->
    <Head>
      <title>Xplor for UAE Developments – The Premier Platform for Immersive Real Estate Showcases</title>
      <meta name="description" content="Showcase your UAE development with immersive, multi-space 360° listings on Xplor. Perfect for villas, towers, showrooms, and branded residences." />
    </Head>

    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img
            :src="uaeDevelopmentsHero"
            alt="UAE luxury development"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-800/60 to-yellow-900/70"></div>
        </div>
        
        <div class="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <Badge variant="outline" class="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
            UAE Development Platform
          </Badge>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Showcase Your UAE Development
            <span class="text-amber-200 block">to the World — Virtually</span>
          </h1>
          <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            With Xplor, you can present your entire development in stunning 360° — from masterplans and show units to towers, malls, and amenities — all connected in one immersive listing.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <Mail class="mr-2 h-5 w-5" />
              Contact the Xplor Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              class="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
              @click="uploadDialogOpen = true"
            >
              <Plus class="mr-2 h-5 w-5" />
              Add UAE Development
            </Button>
          </div>
        </div>
      </section>

      <!-- Why Xplor is Built for UAE Developments -->
      <section class="py-20 bg-muted/30">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Why Xplor is Built for UAE Developments
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium features designed specifically for the UAE luxury real estate market
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card v-for="(feature, index) in features" :key="index" class="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent class="p-0">
                <div class="mb-4">
                  <component :is="feature.icon" />
                </div>
                <h3 class="text-xl font-semibold mb-3 text-foreground">{{ feature.title }}</h3>
                <p class="text-muted-foreground">{{ feature.description }}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Inspiration for Potential Clients -->
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Inspiration for Potential Clients
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how different types of UAE developments leverage Xplor's capabilities
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card v-for="(useCase, index) in useCases" :key="index" class="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div class="aspect-video overflow-hidden">
                <img 
                  :src="useCase.image" 
                  :alt="useCase.title"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
      <section class="py-20 bg-muted/30">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to showcase your UAE development
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(step, index) in steps" :key="index" class="text-center">
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
              Compare Platforms
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Xplor compares to traditional portals and developer microsites
            </p>
          </div>

          <Card class="overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-muted">
                  <tr>
                    <th class="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th class="text-center p-4 font-semibold text-foreground">Xplor</th>
                    <th class="text-center p-4 font-semibold text-foreground">Traditional Portals</th>
                    <th class="text-center p-4 font-semibold text-foreground">Developer Microsites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in comparisonFeatures" :key="index" class="border-t border-border">
                    <td class="p-4 font-medium text-foreground">{{ item.feature }}</td>
                    <td class="p-4 text-center">
                      <component :is="renderComparisonIcon(item.xplor)" />
                    </td>
                    <td class="p-4 text-center">
                      <component :is="renderComparisonIcon(item.traditional)" />
                    </td>
                    <td class="p-4 text-center">
                      <component :is="renderComparisonIcon(item.microsites)" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <!-- Final Contact Section -->
      <section class="py-20 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-yellow-500/10">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Let Investors, Buyers, and Agents Step Inside Your Vision
          </h2>
          <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're selling towers, villas, or mixed-use communities, Xplor is the immersive platform that brings your development to life — and to the world.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <Mail class="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              class="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
              @click="uploadDialogOpen = true"
            >
              <Plus class="mr-2 h-5 w-5" />
              Add UAE Development
            </Button>
          </div>
        </div>
      </section>
    </div>

    <UAEDevelopmentUploadDialog 
      :open="uploadDialogOpen" 
      @update:open="uploadDialogOpen = $event" 
    />
  </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { Head } from '@vueuse/head';
import Button from '~/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { Badge } from '@/components/ui/badge'
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
  Mail, 
  Crown, 
  Zap, 
  Camera 
} from 'lucide-vue-next';
import UAEDevelopmentUploadDialog from '@/components/UAEDevelopmentUploadDialog.vue';
import uaeDevelopmentsHero from '@/assets/uae-developments-hero.jpg';

const uploadDialogOpen = ref(false);

const features = ref([
  {
    icon: h(Building2, { class: 'h-8 w-8 text-primary' }),
    title: "Multi-Space Virtual Listings",
    description: "Add and connect multiple units, amenities, commercial spaces, and lobbies under one development umbrella."
  },
  {
    icon: h(Ruler, { class: 'h-8 w-8 text-primary' }),
    title: "From Masterplan to Model Room",
    description: "Showcase the full lifecycle: renders, construction progress, and finished units with immersive storytelling."
  },
  {
    icon: h(Crown, { class: 'h-8 w-8 text-primary' }),
    title: "Tailored for the UAE Market",
    description: "Optimized for luxury real estate, multi-tower projects, and branded residences."
  },
  {
    icon: h(Globe, { class: 'h-8 w-8 text-primary' }),
    title: "Global Exposure",
    description: "Attract investors, agents, and HNWIs from around the world — especially GCC, UK, Russia, and Asia."
  },
  {
    icon: h(Camera, { class: 'h-8 w-8 text-primary' }),
    title: "Interactive & Multimedia Ready",
    description: "Embed videos, floorplans, availability charts, maps, branded sales material, and walk-throughs."
  },
  {
    icon: h(Users, { class: 'h-8 w-8 text-primary' }),
    title: "Built for Sales & Leasing Teams",
    description: "Collect leads, guide virtual viewings, and empower remote decision-making."
  }
]);

const useCases = ref([
  {
    title: "Emaar or Aldar-style Master Developments",
    description: "Showcase show villas, sales suites, tower lobbies, gyms, and multiple unit types from a central listing.",
    image: "/lovable-uploads/luxury-property-1.jpg"
  },
  {
    title: "Branded Residences & Hotel-Linked Properties",
    description: "Offer luxury buyers a guided virtual preview of lifestyle offerings, from interiors to private beach access.",
    image: "/lovable-uploads/luxury-interior.jpg"
  },
  {
    title: "Commercial Parks & Mixed-Use Communities",
    description: "Present business towers, retail zones, and urban planning components in one cohesive tour.",
    image: "/lovable-uploads/modern-house.jpg"
  },
  {
    title: "Boutique Developers in Dubai, Abu Dhabi, Sharjah",
    description: "Elevate smaller projects with world-class presentation — win attention, trust, and conversions.",
    image: "/lovable-uploads/luxury-yacht-1.jpg"
  }
]);

const steps = ref([
  {
    number: "01",
    title: "Create Your Development Profile",
    description: "Add your brand, masterplan, project renders, and progress visuals."
  },
  {
    number: "02",
    title: "Add Spaces: Units, Amenities, Zones",
    description: "Showcase model units, pools, gyms, lobbies, rooftops, showrooms, and more — as connected tour elements."
  },
  {
    number: "03",
    title: "Go Live on Xplor",
    description: "Share the full listing with brokers, agents, investors, and public audiences."
  }
]);

const comparisonFeatures = ref([
  { feature: "Multi-space 360° Listing", xplor: true, traditional: false, microsites: "limited" },
  { feature: "VR/AR Integration", xplor: true, traditional: false, microsites: "limited" },
  { feature: "Interactive Navigation", xplor: true, traditional: false, microsites: false },
  { feature: "Global Discovery Platform", xplor: true, traditional: false, microsites: false },
  { feature: "Lead Capture & CRM-Ready", xplor: true, traditional: "basic", microsites: "basic" },
  { feature: "Integrated Media & Docs", xplor: true, traditional: "limited", microsites: true }
]);

const renderComparisonIcon = (value) => {
  if (value === true) return h(CheckCircle, { class: 'h-5 w-5 text-emerald-500' });
  if (value === false) return h(X, { class: 'h-5 w-5 text-red-500' });
  return h(Badge, { variant: 'outline', class: 'text-xs' }, () => value);
};
</script>
