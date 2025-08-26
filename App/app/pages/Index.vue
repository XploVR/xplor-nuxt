<template>
  <!-- Hero Section - Platform-Led, Offer-Aware -->
  <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="/lovable-uploads/aa974283-f5dc-4cca-bfc2-703fe4393e5c.png" 
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
            <router-link to="/fairshare">
              <Button size="sm" class="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full text-xs py-1">
                Yacht Crew
              </Button>
            </router-link>
            <router-link to="/yacht-owners-clients">
              <Button size="sm" class="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium w-full text-xs py-1">
                Yacht Owners
              </Button>
            </router-link>
            <router-link to="/yacht-owners-clients">
              <Button size="sm" variant="outline" class="font-medium w-full text-xs py-1">
                Charter Clients
              </Button>
            </router-link>
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
          <router-link to="/fairshare-crew">
            Join FairShare Crew
          </router-link>
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
        <router-link 
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
        </router-link>
      </div>

      <!-- Replaced old DropdownMenu with a robust teleporting panel -->
      <div class="text-center">
        <MoreSpaceCategories />
      </div>
    </div>
  </section>

  <!-- FairShare for Charter Crew -->
  <section class="py-20 bg-accent/20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Crew, It's Time You Got a <span class="text-muted-foreground">FairShare</span>.
        </h2>
        <p class="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          If you're crew on a yacht listed with Xplor for charter — either as the central agent or as a 
          3rd-party broker — we split 50% of our net commission equally among the crew. No tiers. No favorites. Just fair.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <Check class="w-6 h-6 text-xplor-yellow mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-foreground mb-1">Available for charter deals only</h3>
                <p class="text-muted-foreground">Only applies to yacht charter bookings through our platform</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <Check class="w-6 h-6 text-xplor-yellow mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-foreground mb-1">Applies if Xplor is central agent or 3rd-party broker</h3>
                <p class="text-muted-foreground">Whether we're the main agent or working with other brokers</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <Check class="w-6 h-6 text-xplor-yellow mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-foreground mb-1">Payout split equally among all active crew</h3>
                <p class="text-muted-foreground">Every crew member on the chartered vessel gets an equal share</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <Check class="w-6 h-6 text-xplor-yellow mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-foreground mb-1">Automatic and transparent</h3>
                <p class="text-muted-foreground">No backdoor deals — everything is handled automatically</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="bg-card p-6 rounded-lg border">
              <h4 class="font-bold text-foreground mb-2">Example Payout:</h4>
              <p class="text-muted-foreground">6 crew members = €2,000 each from a typical charter commission</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <Card class="bg-gradient-to-br from-primary/10 to-xplor-yellow/10 border-2 border-dashed border-xplor-yellow/50">
            <CardContent class="p-8 text-center">
              <div class="space-y-6">
                <div class="flex items-center justify-center gap-4">
                  <DollarSign class="w-8 h-8 text-primary" />
                  <ArrowRight class="w-6 h-6 text-muted-foreground" />
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary">50%</div>
                    <div class="text-sm text-muted-foreground">to Xplor</div>
                  </div>
                </div>
                
                <div class="border-t border-dashed border-muted pt-6">
                  <div class="flex items-center justify-center gap-4">
                    <Users class="w-8 h-8 text-xplor-yellow" />
                    <div class="text-center">
                      <div class="text-2xl font-bold text-xplor-yellow">50%</div>
                      <div class="text-sm text-muted-foreground">divided equally among crew</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div class="text-center">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" as-child>
            <router-link to="/fairshare-eligibility">Check Eligibility</router-link>
          </Button>
          <Button size="lg" class="bg-xplor-yellow hover:bg-xplor-yellow/90 text-xplor-black" as-child>
            <router-link to="/fairshare-crew">Join FairShare Now</router-link>
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-foreground mb-4">3 Simple Steps to Earning Your FairShare</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card 
          v-for="(step, index) in howItWorksSteps" 
          :key="index" 
          class="text-center relative"
        >
          <CardContent class="p-8">
            <div class="w-12 h-12 bg-xplor-yellow text-xplor-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {{ step.step }}
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">{{ step.title }}</h3>
            <p class="text-muted-foreground">{{ step.description }}</p>
            <ArrowRight 
              v-if="index < howItWorksSteps.length - 1"
              class="w-6 h-6 text-muted-foreground absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block" 
            />
          </CardContent>
        </Card>
      </div>

      <div class="text-center">
        <p class="text-muted-foreground italic">
          "We handle the contracts, compliance, and payouts. You just do your job — and get rewarded."
        </p>
      </div>
    </div>
  </section>

  <!-- Why We Built This -->
  <section class="py-20 bg-accent/10">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-foreground mb-6">Why We Built This</h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Brokers have been keeping it all for decades. We're building a platform that shares the rewards 
        with the people who make charters magical: <span class="text-xplor-yellow font-semibold">you</span>.
      </p>
    </div>
  </section>

  <!-- About Xplor -->
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-foreground mb-6">About Xplor</h2>
      <p class="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Xplor is the platform to find and share immersive virtual tours of any space. From yachts to homes to resorts, 
        we're building the world's most explorable map — and helping people earn along the way.
      </p>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 bg-gradient-to-r from-primary/10 to-xplor-yellow/10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left">
          <h2 class="text-4xl font-bold text-foreground mb-6">Ready to Explore?</h2>
          <p class="text-xl text-muted-foreground mb-8">
            Discover amazing spaces or start earning as charter crew
          </p>
          <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey" as-child>
            <a href="https://xplor.io/map" target="_blank" rel="noopener noreferrer">
              Browse Spaces on Xplor
            </a>
          </Button>
        </div>
        
        <div class="text-center lg:text-left">
          <h2 class="text-4xl font-bold text-foreground mb-6">Join FairShare</h2>
          <p class="text-xl text-muted-foreground mb-8">
            Charter crew members can start earning their fair share today
          </p>
          <Button size="lg" class="bg-xplor-yellow hover:bg-xplor-yellow/90 text-xplor-black" as-child>
            <router-link to="/fairshare-crew">Join FairShare as Charter Crew</router-link>
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer with Legal Clarity -->
  <section class="py-12 bg-muted/30 border-t">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <p class="text-sm text-muted-foreground max-w-4xl mx-auto">
          <strong>Legal Disclaimer:</strong> FairShare applies only to yacht charters where Xplor is the central 
          or participating brokerage. Payouts are based on the net commission Xplor receives and are divided 
          equally among verified crew.
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center text-sm">
        <Button variant="link" class="text-muted-foreground">Commission Terms PDF</Button>
        <Button variant="link" class="text-muted-foreground">Privacy Policy</Button>
        <Button variant="link" class="text-muted-foreground">Contact</Button>
      </div>
    </div>
  </section>

  <!-- Upload Dialogs -->
  <MuseumGalleryUploadDialog 
    v-if="selectedCategory === 'museums-art'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <SchoolEducationUploadDialog 
    v-if="selectedCategory === 'schools-education'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <ExperienceUploadDialog 
    v-if="selectedCategory === 'experiences'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <CruiseShipUploadDialog 
    v-if="selectedCategory === 'cruise-ships'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <DevelopmentUploadDialog 
    v-if="selectedCategory === 'developments'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <GolfCourseUploadDialog 
    v-if="selectedCategory === 'golf-courses'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <TrainTramUploadDialog 
    v-if="selectedCategory === 'train-tram'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <UAEDevelopmentUploadDialog 
    v-if="selectedCategory === 'uae-developments'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <RetailPopUpUploadDialog 
    v-if="selectedCategory === 'retail-popup'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <GovHospitalUploadDialog 
    v-if="selectedCategory === 'gov-hospital'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <RestaurantBarUploadDialog 
    v-if="selectedCategory === 'restaurant-bar'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <SetsStagesVenuesUploadDialog 
    v-if="selectedCategory === 'sets-stages'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <HeritageWorshipUploadDialog 
    v-if="selectedCategory === 'heritage-worship'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <MerchantShippingUploadDialog 
    v-if="selectedCategory === 'merchant-shipping'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <ManufacturingFacilityUploadDialog 
    v-if="selectedCategory === 'manufacturing'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <MaritimeInfrastructureUploadDialog 
    v-if="selectedCategory === 'maritime-infrastructure'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <OfficesShowroomsStudiosUploadDialog 
    v-if="selectedCategory === 'offices-showrooms'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <SportsStadiumsThemeParksUploadDialog 
    v-if="selectedCategory === 'sports-theme-parks'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen" 
  />
  <YachtsUploadDialog 
    v-if="selectedCategory === 'yachts'" 
    :open="uploadDialogOpen" 
    @update:open="setUploadDialogOpen"
  />
</template>

<script setup>
import MoreSpaceCategories from '@/components/MoreSpaceCategories.vue'
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Ship, 
  Home, 
  Building, 
  Car, 
  Plane, 
  Utensils, 
  ArrowRight, 
  Check, 
  Users, 
  DollarSign, 
} from "lucide-vue-next"

import MuseumGalleryUploadDialog from "@/components/dialogs/MuseumGalleryUploadDialog.vue"
import SchoolEducationUploadDialog from "@/components/dialogs/SchoolEducationUploadDialog.vue"
import AviationUploadDialog from "@/components/dialogs/AviationUploadDialog.vue"
import ExperienceUploadDialog from "@/components/dialogs/ExperienceUploadDialog.vue"
import CruiseShipUploadDialog from "@/components/dialogs/CruiseShipUploadDialog.vue"
import DevelopmentUploadDialog from "@/components/dialogs/DevelopmentUploadDialog.vue"
import GolfCourseUploadDialog from "@/components/dialogs/GolfCourseUploadDialog.vue"
import TrainTramUploadDialog from "@/components/dialogs/TrainTramUploadDialog.vue"
import UAEDevelopmentUploadDialog from "@/components/dialogs/UAEDevelopmentUploadDialog.vue"
import RetailPopUpUploadDialog from "@/components/dialogs/RetailPopUpUploadDialog.vue"
import GovHospitalUploadDialog from "@/components/dialogs/GovHospitalUploadDialog.vue"
import RestaurantBarUploadDialog from "@/components/dialogs/RestaurantBarUploadDialog.vue"
import SetsStagesVenuesUploadDialog from "@/components/dialogs/SetsStagesVenuesUploadDialog.vue"
import HeritageWorshipUploadDialog from "@/components/dialogs/HeritageWorshipUploadDialog.vue"
import MerchantShippingUploadDialog from "@/components/dialogs/MerchantShippingUploadDialog.vue"
import ManufacturingFacilityUploadDialog from "@/components/dialogs/ManufacturingFacilityUploadDialog.vue"
import MaritimeInfrastructureUploadDialog from "@/components/dialogs/MaritimeInfrastructureUploadDialog.vue"
import OfficesShowroomsStudiosUploadDialog from "@/components/dialogs/OfficesShowroomsStudiosUploadDialog.vue"
import SportsStadiumsThemeParksUploadDialog from "@/components/dialogs/SportsStadiumsThemeParksUploadDialog.vue"
import YachtsUploadDialog from "@/components/dialogs/YachtsUploadDialog.vue"

const uploadDialogOpen = ref(false)
const selectedCategory = ref("")

const setUploadDialogOpen = (value) => {
  uploadDialogOpen.value = value
}

const spaceCategories = [
  { title: "Yachts",              icon: Ship,     url: "/yacht-brokerage" },
  { title: "Villas & Homes",      icon: Home,     url: "/real-estate" },
  { title: "Hotels & Resorts",    icon: Building, url: "/hotels" },
  { title: "Restaurants & Bars",  icon: Utensils, url: "/restaurants-bars" },
  { title: "Cars & Showrooms",    icon: Car,      url: "/cars-vehicles" },
  { title: "Jets & Aviation",     icon: Plane,    url: "/jets-aviation" },
]

const howItWorksSteps = [
  { step: "1", title: "Yacht is listed with Xplor for charter", description: "Your yacht gets added to our charter platform" },
  { step: "2", title: "Xplor books a charter as central or 3rd-party agent", description: "We handle the booking process and client management" },
  { step: "3", title: "You (the crew) get paid a fair share — automatically", description: "50% of our commission is split equally among all crew" },
]
</script>