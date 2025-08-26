<template>
  <div class="min-h-screen bg-background">
    <!-- Crew Call-to-Action Banner -->
    <section class="bg-xplor-black text-white py-4">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-lg font-medium">
          CALLING ALL YACHT CREW, The <span class="font-typografix">xplor</span> brokerage has been set up to allow crew to get their share of charter commissions, Interested ?
          <button class="underline ml-1 hover:text-gray-700 transition-colors" @click="goToCrewOffer">
            click here
          </button>
        </p>
      </div>
    </section>

    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 py-16">
        <div class="space-y-6">
          <div class="space-y-2">
            <Badge class="bg-gray-700/20 text-gray-700 font-medium">
              YACHT BROKERAGE SERVICES
            </Badge>
            <h1 class="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Showcase yachts like never before.
            </h1>
          </div>
          <p class="text-xl text-muted-foreground">Digital twin technology feels like it was specifically designed for the yachting industry. From helping buyers experience every detail of your yacht remotely, helping close deals faster, to making weekly progress scans of your new build yacht still in construction.....and then think of the implications of the unprecedented visual details (and accurate measurements) for planned maintenance & design changes. </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="navigateToDashboard">
              <Anchor class="h-5 w-5 mr-2" />
              Add Your Yacht
            </Button>
            <Button size="lg" variant="outline" @click="goToVRCameras">
              <Camera class="h-5 w-5 mr-2" />
              Marine Equipment
            </Button>
          </div>
        </div>
        <div class="space-y-4">
          <img :src="yachtHeroImage" alt="Professional man on yacht deck showcasing yacht capture services" class="w-full h-auto rounded-lg shadow-medium" />
          <div class="flex justify-center">
            <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="openCalendly">
              <Globe class="h-5 w-5 mr-2" />
              Find a Technician Near You
            </Button>
          </div>
          <div class="text-center mt-2">
            <p class="text-sm text-muted-foreground">
              Are you a technician or capture service provider who wants to add yachts to your Portfolio & skill set? <a href="/capture-business-signup" class="text-gray-700 underline hover:text-gray-800 transition-colors">Click Here</a>
            </p>
          </div>
          
          <!-- Demo Yachts Section -->
          <div class="mt-12">
            <h3 class="text-2xl font-bold text-center text-foreground mb-8">Experience Virtual Yacht Tours</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <Card v-for="demo in demoYachts" :key="demo.name" class="border-border hover:shadow-medium transition-shadow">
                <div class="aspect-video rounded-t-lg relative overflow-hidden">
                  <img :src="getDemoImage(demo.name)" alt="Yacht Virtual Tour" class="w-full h-full object-cover" />
                </div>
                <CardHeader></CardHeader>
                <CardContent>
                  <Button class="w-full bg-xplor-yellow hover:bg-xplor-yellow-dark text-xplor-black" @click="openYachtTour(demo.name)">
                    Yacht Tour
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <!-- Powered By Banner -->
            <div class="mt-8 text-center">
              <a 
                href="https://theatro360.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-muted hover:bg-muted/80 transition-colors rounded-lg px-6 py-3 border border-border"
              >
                <span class="text-sm font-medium text-muted-foreground">
                  Powered By THEATRO 360™
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Xplor and Virtual Tours Are Excellent for Yachts -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Why <span class="font-typografix">xplor</span> and Virtual Tours Are Excellent for Yachts
          </h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a comprehensive list of reasons why <span class="font-typografix">xplor</span> and virtual tours are excellent for yachts, tailored for charter, sale, marketing, and operational use.
          </p>
        </div>

        <!-- Why Xplor is Excellent for Yachts - Organized by Category -->
        <div class="space-y-12">
          <!-- For Charter and Sales Marketing -->
          <div>
            <h3 class="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              🔹 For Charter and Sales Marketing
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card v-for="(benefit, index) in charterBenefits" :key="index" class="border-border">
                <CardContent class="p-6">
                  <h4 class="font-semibold text-foreground mb-2">{{ benefit.title }}</h4>
                  <p class="text-sm text-muted-foreground">{{ benefit.description }}</p>
                </CardContent>
              </Card>
            </div>
            <div class="text-center mt-8">
              <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="navigateToDashboard">
                <Anchor class="h-5 w-5 mr-2" />
                Add Your Yacht
              </Button>
            </div>
          </div>

          <!-- For Yacht Owners -->
          <div>
            <h3 class="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              🔹 For Yacht Owners
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card v-for="(benefit, index) in ownerBenefits" :key="index" class="border-border">
                <CardContent class="p-6">
                  <h4 class="font-semibold text-foreground mb-2">{{ benefit.title }}</h4>
                  <p class="text-sm text-muted-foreground">
                    <template v-if="benefit.description.includes('through xplor')">
                      Guests who've virtually toured a yacht are more likely to book directly through <span class="font-typografix">xplor</span>, reducing third-party commission outflows.
                    </template>
                    <template v-else>
                      {{ benefit.description }}
                    </template>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div class="text-center mt-8">
              <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="navigateToDashboard">
                <Anchor class="h-5 w-5 mr-2" />
                Add Your Yacht
              </Button>
            </div>
          </div>

          <!-- For Captains & Crew -->
          <div>
            <h3 class="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              🔹 For Captains & Crew
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card v-for="(benefit, index) in crewBenefits" :key="index" class="border-border">
                <CardContent class="p-6">
                  <h4 class="font-semibold text-foreground mb-2">{{ benefit.title }}</h4>
                  <p class="text-sm text-muted-foreground">{{ benefit.description }}</p>
                </CardContent>
              </Card>
            </div>
            <div class="text-center mt-8">
              <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="navigateToDashboard">
                <Anchor class="h-5 w-5 mr-2" />
                Add Your Yacht
              </Button>
            </div>
          </div>

          <!-- For Yacht Brokers & Central Agents -->
          <div>
            <h3 class="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              🔹 For Yacht Brokers & Central Agents
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <Card v-for="(benefit, index) in brokerBenefits" :key="index" class="border-border">
                <CardContent class="p-6">
                  <h4 class="font-semibold text-foreground mb-2">{{ benefit.title }}</h4>
                  <p class="text-sm text-muted-foreground">{{ benefit.description }}</p>
                </CardContent>
              </Card>
            </div>
            <div class="text-center mt-8">
              <Button size="lg" class="bg-gray-700 hover:bg-gray-800 text-white" @click="navigateToDashboard">
                <Anchor class="h-5 w-5 mr-2" />
                Add Your Yacht
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upload Dialog -->
    <UploadSpaceDialog v-model:open="uploadDialogOpen" category="yacht" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Anchor, Camera, Globe } from 'lucide-vue-next'
import UploadSpaceDialog from '@/components/UploadSpaceDialog.vue'

import yachtHeroImage from '@/assets/yacht-hero-man-with-equipment.jpg'
import northropJohnsonLogo from '@/assets/northrop-johnson-logo.jpg'
import burgessYachtsLogo from '@/assets/burgess-yachts-logo.jpg'
import fraserYachtsLogo from '@/assets/fraser-yachts-logo.jpg'
import edmistonLogo from '@/assets/edmiston-logo.jpg'
import camperNicholsonsLogo from '@/assets/camper-nicholsons-logo.jpg'

const router = useRouter()
const uploadDialogOpen = ref(false)

const yachtServices = [
  {
    id: "listing",
    label: "Yacht Listings",
    title: "Immersive yacht showcase experiences",
    description: "Create stunning virtual tours that allow potential buyers to explore every inch of your yacht remotely, increasing qualified leads and accelerating sales."
  }, 
  {
    id: "marketing",
    label: "Marketing & Sales",
    title: "Elevate your yacht marketing",
    description: "Stand out in competitive markets with high-quality virtual tours that showcase your yacht's unique features and luxury amenities."
  }, 
  {
    id: "documentation",
    label: "Documentation",
    title: "Comprehensive yacht documentation",
    description: "Create detailed digital records for insurance claims, maintenance planning, and condition assessments with millimeter-accurate 3D scans."
  }
]

const yachtFeatures = [
  "Professional marine-certified capture technicians",
  "Waterproof and marine-grade 3D scanning equipment",
  "360° virtual tours of all decks and interior spaces",
  "High-resolution 4K photography and videography",
  "Detailed measurements and floor plans",
  "Virtual staging and enhancement options",
  "Drone exterior footage (where permitted)",
  "Fast 24-48 hour turnaround time"
]

const premiumFeatures = [
  "Dedicated yacht marketing specialist",
  "Custom virtual tour branding and themes",
  "Interactive hotspots with yacht specifications",
  "Virtual reality headset compatibility",
  "Multi-language support for international buyers",
  "Integration with major yacht listing platforms",
  "Professional copywriting and descriptions",
  "Ongoing tour optimization and analytics"
]

const yachtBrokers = [
  {
    name: "Northrop & Johnson",
    logo: northropJohnsonLogo
  }, 
  {
    name: "Burgess Yachts",
    logo: burgessYachtsLogo
  }, 
  {
    name: "Fraser Yachts",
    logo: fraserYachtsLogo
  }, 
  {
    name: "Edmiston",
    logo: edmistonLogo
  }, 
  {
    name: "Camper & Nicholsons",
    logo: camperNicholsonsLogo
  }, 
  {
    name: "Worth Avenue Yachts",
    logo: "/logos/worth-avenue-yachts-logo.png"
  }
]

const yachtFaqs = [
  {
    question: "Can you capture yachts while they're in the water?",
    answer: "Yes, our marine-certified technicians are equipped to safely capture yachts both in marinas and while moored, using specialized waterproof equipment designed for marine environments."
  }, 
  {
    question: "How long does it take to capture a yacht?",
    answer: "Capture time varies by yacht size - typically 2-4 hours for motor yachts up to 100ft, and 4-8 hours for superyachts. Weather conditions may affect scheduling."
  }, 
  {
    question: "Do you capture exterior deck spaces and equipment?",
    answer: "Absolutely. We capture all accessible areas including upper decks, flybridge, swim platforms, tender garages, and exterior equipment areas to provide a complete virtual experience."
  }, 
  {
    question: "Can virtual tours be integrated with yacht listing websites?",
    answer: "Yes, our virtual tours integrate seamlessly with major yacht listing platforms like YachtWorld, Boat Trader, and custom broker websites."
  }, 
  {
    question: "What about international yacht captures?",
    answer: "We have a global network of certified marine capture technicians in major yachting destinations worldwide including Monaco, Fort Lauderdale, Newport, and the Caribbean."
  }, 
  {
    question: "How much does yacht capture service cost?",
    answer: "Pricing depends on yacht size, location, and services required. Standard captures start at $650 for yachts under 50ft, with premium packages available for superyachts."
  }
]

const demoYachts = [
  {
    name: "Sunseeker 76 Yacht (DEMO)",
    type: "Motor Yacht"
  }, 
  {
    name: "Ferretti 920 (DEMO)",
    type: "Luxury Motor Yacht"
  }, 
  {
    name: "Princess S78 Sportbridge (DEMO)",
    type: "Sport Yacht"
  }
]

const charterBenefits = [
  {
    title: "24/7 Global Showcase",
    description: "Prospects can explore the yacht anytime, anywhere—no need to wait for a boat show or in-person visit."
  }, 
  {
    title: "Higher-Quality Leads",
    description: "Virtual tours qualify serious clients early by providing an immersive pre-screening experience."
  }, 
  {
    title: "Faster Decision-Making",
    description: "Buyers and charterers feel more confident making decisions after a detailed virtual walkthrough."
  }, 
  {
    title: "Reduced Time on Market",
    description: "Virtual access accelerates interest and inquiry conversion for both sales and charters."
  }, 
  {
    title: "Pre-Charter Familiarization",
    description: "Guests can preview staterooms, lounges, and deck layouts before boarding, improving their overall satisfaction."
  }, 
  {
    title: "Repeat Charterer Retention",
    description: "Past guests can relive their experience and share it with friends, increasing repeat bookings and word-of-mouth."
  }, 
  {
    title: "Eliminates Geographical Barriers",
    description: "Brokers and clients in different countries can still tour the yacht without travel costs or delays."
  }, 
  {
    title: "Stronger Online Listings",
    description: "Listings with virtual tours stand out on charter and sales platforms, attracting more engagement."
  }, 
  {
    title: "Increased Broker Efficiency",
    description: "Brokers can share virtual tours in seconds, replacing or enhancing traditional brochures and slide decks."
  }
]

const ownerBenefits = [
  {
    title: "Better ROI on Marketing",
    description: "A single virtual tour investment can be used across websites, broker networks, social media, and presentations."
  }, 
  {
    title: "More Control Over Presentation",
    description: "Owners ensure their yacht is shown in its best light, consistently, no matter who presents it."
  }, 
  {
    title: "Attracts More Direct Bookings",
    description: "Guests who've virtually toured a yacht are more likely to book directly through xplor, reducing third-party commission outflows."
  }, 
  {
    title: "Reduces Need for Physical Showings",
    description: "Minimizes crew disruption and operational costs for in-person visits that may not result in bookings."
  }, 
  {
    title: "Permanent Showcase for Sale",
    description: "Even if the yacht is moved or unavailable, a virtual tour keeps it accessible for prospective buyers."
  }
]

const crewBenefits = [
  {
    title: "Operational Clarity",
    description: "Guests or clients can see layouts and amenities before arrival, reducing repetitive questions and special requests."
  }, 
  {
    title: "Crew Onboarding & Training",
    description: "New crew can familiarize themselves with yacht layout, safety equipment locations, and guest areas virtually."
  }, 
  {
    title: "Enhances Guest Preparation",
    description: "Helps guests know what to pack, where they'll stay, and what facilities they'll use."
  }, 
  {
    title: "Smoother Turnarounds",
    description: "Less need for guided tours during back-to-back charters—guests already know the vessel layout."
  }, 
  {
    title: "Showcases Crew Excellence",
    description: "Virtual tours can highlight crew interaction areas or branded moments that emphasize professionalism."
  }
]

const brokerBenefits = [
  {
    title: "Stronger Pitch to Owners",
    description: "Offering professional virtual tours adds value to your brokerage proposition and sets you apart."
  }, 
  {
    title: "More Compelling Marketing Packages",
    description: "Combine with photography, specs, and drone video for a powerful listing presentation."
  }, 
  {
    title: "Easier Sharing Across Networks",
    description: "Tours can be embedded or linked in MLS systems, emails, WhatsApp, and social posts."
  }, 
  {
    title: "Supports Live Negotiations",
    description: "During calls or negotiations, brokers can walk through the yacht in real-time with clients using the tour."
  }
]

const openCalendly = () => {
  window.open('https://calendly.com/xplor-info/30min', '_blank')
}

const goToCrewOffer = () => {
  router.push('/yacht-crew-offer')
}

const navigateToDashboard = () => {
  router.push({ 
    path: '/dashboard',
    state: { openUpload: true, category: 'yacht' }
  })
}

const goToVRCameras = () => {
  window.location.href = '/vr-cameras'
}

const getDemoImage = (name) => {
  if (name === "Ferretti 920 (DEMO)") return "/lovable-uploads/8c6e6096-eb45-49a6-8406-e3732a079818.png"
  if (name === "Princess S78 Sportbridge (DEMO)") return "/lovable-uploads/fc30b054-22ce-4d7a-8111-1dbea54aa6b0.png"
  return "/lovable-uploads/9f1ae7dd-e9ce-420d-80a5-fe2f58249a56.png"
}

const openYachtTour = (name) => {
  let url
  if (name === "Ferretti 920 (DEMO)") url = 'https://burgess.theatro360.com/tour/EO-K9W3'
  else if (name === "Princess S78 Sportbridge (DEMO)") url = 'https://burgess.theatro360.com/tour/HO-FW8W'
  else url = 'https://burgess.theatro360.com/tour/E4-3OOL'
  
  window.open(url, '_blank')
}
</script>
