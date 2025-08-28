<template>
  <!-- Hero Section - Platform-Led, Offer-Aware -->
  <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        src="/uploads/aa974283-f5dc-4cca-bfc2-703fe4393e5c.png"
        alt="Luxury Properties Worldwide Map"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- FairShare Program Box - Top Right -->
    <div class="absolute top-4 right-4 z-20 hidden md:block">
      <Card class="bg-white/95 backdrop-blur-sm border-primary/20 max-w-xs">
        <CardContent class="p-4 bg-gray-700">
          <h3 class="text-sm font-bold text-foreground mb-2">
            <span class="text-primary">FairShare</span> Agreement
          </h3>
          <p class="text-xs text-muted-foreground mb-3">
            Crew get 50% of charter commissions
          </p>
          <div class="flex flex-col gap-1">
            <NuxtLink to="/fairshare">
              <Button size="sm" class="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full text-xs py-1">
                Yacht Crew
              </Button>
            </NuxtLink>
            <NuxtLink to="/yacht-owners-clients">
              <Button size="sm" class="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium w-full text-xs py-1">
                Yacht Owners
              </Button>
            </NuxtLink>
            <NuxtLink to="/yacht-owners-clients">
              <Button size="sm" variant="outline" class="font-medium w-full text-xs py-1">
                Charter Clients
              </Button>
            </NuxtLink>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
      <h2 class="text-8xl md:text-9xl font-typografix font-bold mb-4 text-foreground">
        xplor
      </h2>
      <h1 class="text-3xl md:text-5xl font-bold mb-6 font-sans text-foreground">
        The World's Most Immersive Virtual Tour Platform
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Discover and share any real-world space — from luxury yachts to boutique hotels.
        And if you're crew on a yacht, you could start earning through our FairShare charter program.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey text-lg px-8 py-3" as-child>
          <a href="https://xplor.io/map" target="_blank" rel="noopener noreferrer">
            Browse Virtual Tours
          </a>
        </Button>
        <Button size="lg" class="bg-xplor-yellow hover:bg-xplor-yellow/90 text-xplor-black text-lg px-8 py-3" as-child>
          <NuxtLink to="/fairshare-crew">
            Join FairShare Crew
          </NuxtLink>
        </Button>
      </div>
    </div>
  </section>

  <!-- Explore the World in 3D -->
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-foreground mb-4">Explore the World in 3D</h2>
        <p class="text-xl text-muted-foreground">Quick filter grid with icons to tour</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
        <NuxtLink
          v-for="(category, index) in spaceCategories"
          :key="index"
          :to="category.url"
        >
          <Card class="text-center hover:shadow-lg transition-all duration-200 group hover:bg-gradient-card cursor-pointer h-full">
            <CardHeader class="p-6">
              <div class="w-16 h-16 bg-xplor-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <component :is="category.icon" class="w-8 h-8 text-xplor-black" />
              </div>
              <CardTitle class="text-lg">{{ category.title }}</CardTitle>
            </CardHeader>
          </Card>
        </NuxtLink>
      </div>

      <div class="text-center">
        <MoreSpaceCategories />
      </div>
    </div>
  </section>

  <!-- FairShare for Charter Crew -->
  <!-- … (rest of your sections unchanged) … -->

  <!-- Upload Dialogs (unchanged) -->
  <!-- … -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import MoreSpaceCategories from '@/components/MoreSpaceCategories.vue'
import {
  Ship, Home, Building, Car, Plane, Utensils, ArrowRight, Check, Users, DollarSign
} from 'lucide-vue-next'

import MuseumGalleryUploadDialog from '@/components/dialogs/MuseumGalleryUploadDialog.vue'
import SchoolEducationUploadDialog from '@/components/dialogs/SchoolEducationUploadDialog.vue'
import AviationUploadDialog from '@/components/dialogs/AviationUploadDialog.vue'
import ExperienceUploadDialog from '@/components/dialogs/ExperienceUploadDialog.vue'
import CruiseShipUploadDialog from '@/components/dialogs/CruiseShipUploadDialog.vue'
import DevelopmentUploadDialog from '@/components/dialogs/DevelopmentUploadDialog.vue'
import GolfCourseUploadDialog from '@/components/dialogs/GolfCourseUploadDialog.vue'
import TrainTramUploadDialog from '@/components/dialogs/TrainTramUploadDialog.vue'
import UAEDevelopmentUploadDialog from '@/components/dialogs/UAEDevelopmentUploadDialog.vue'
import RetailPopUpUploadDialog from '@/components/dialogs/RetailPopUpUploadDialog.vue'
import GovHospitalUploadDialog from '@/components/dialogs/GovHospitalUploadDialog.vue'
import RestaurantBarUploadDialog from '@/components/dialogs/RestaurantBarUploadDialog.vue'
import SetsStagesVenuesUploadDialog from '@/components/dialogs/SetsStagesVenuesUploadDialog.vue'
import HeritageWorshipUploadDialog from '@/components/dialogs/HeritageWorshipUploadDialog.vue'
import MerchantShippingUploadDialog from '@/components/dialogs/MerchantShippingUploadDialog.vue'
import ManufacturingFacilityUploadDialog from '@/components/dialogs/ManufacturingFacilityUploadDialog.vue'
import MaritimeInfrastructureUploadDialog from '@/components/dialogs/MaritimeInfrastructureUploadDialog.vue'
import OfficesShowroomsStudiosUploadDialog from '@/components/dialogs/OfficesShowroomsStudiosUploadDialog.vue'
import SportsStadiumsThemeParksUploadDialog from '@/components/dialogs/SportsStadiumsThemeParksUploadDialog.vue'
import YachtsUploadDialog from '@/components/dialogs/YachtsUploadDialog.vue'

const uploadDialogOpen = ref(false)
const selectedCategory = ref<string>('')

const setUploadDialogOpen = (value: boolean) => {
  uploadDialogOpen.value = value
}

const spaceCategories = [
  { title: 'Yachts',             icon: Ship,     url: '/yacht-brokerage' },
  { title: 'Villas & Homes',     icon: Home,     url: '/real-estate' },
  { title: 'Hotels & Resorts',   icon: Building, url: '/hotels' },
  { title: 'Restaurants & Bars', icon: Utensils, url: '/restaurants-bars' },
  { title: 'Cars & Showrooms',   icon: Car,      url: '/cars-vehicles' },
  { title: 'Jets & Aviation',    icon: Plane,    url: '/jets-aviation' }
]

const howItWorksSteps = [
  { step: '1', title: 'Yacht is listed with Xplor for charter', description: 'Your yacht gets added to our charter platform' },
  { step: '2', title: 'Xplor books a charter as central or 3rd-party agent', description: 'We handle the booking process and client management' },
  { step: '3', title: 'You (the crew) get paid a fair share — automatically', description: '50% of our commission is split equally among all crew' }
]
</script>
