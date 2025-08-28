<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-24 px-4 overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="jetsAviationHero"
          alt="Private jets and aviation facilities"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/70 to-purple-900/80"></div>
      </div>
      <div class="max-w-7xl mx-auto text-center relative z-10">
        <span class="inline-block mb-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded text-sm">
          Aviation Excellence
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Take Clients Inside the <span class="text-blue-200">Cabin</span> Before They Even Take Off
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Xplor helps you showcase aircraft interiors, simulators, hangars, and lounges in 3D — while integrating charter, training, or test flight bookings through simple API plugins.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" @click="handleListAircraft" class="text-lg px-8">
            List Your Aircraft or Service
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8 text-white border-white hover:bg-white hover:text-black">
            View an Aircraft Tour
          </Button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Aviation Is Visual. It Deserves to Be Immersive.
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(feature, index) in features" :key="index" class="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary">
                  <component :is="feature.icon" class="h-6 w-6" />
                </div>
                <CardTitle class="text-lg">{{ feature.title }}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription class="text-base">
                {{ feature.description }}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- API Integration Section -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            From 3D Cabin Tour to Real-World Action — Instantly
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Xplor can connect to your aviation CRM, charter system, or training platform via API or plugin. Your virtual walkthroughs become direct conversion points for bookings, test flights, or flight school trials.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card v-for="(useCase, index) in useCases" :key="index" class="text-center">
            <CardContent class="pt-6">
              <div class="text-3xl mb-3">{{ useCase.icon }}</div>
              <h3 class="font-semibold text-sm">{{ useCase.title }}</h3>
            </CardContent>
          </Card>
        </div>

        <div class="bg-white rounded-lg p-8 mb-8 border">
          <h3 class="text-xl font-semibold mb-4">Example Platforms & Tools:</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(platform, index) in platforms" :key="index" class="flex items-center gap-2">
              <CheckCircle class="h-4 w-4 text-green-500" />
              <span class="text-sm">{{ platform }}</span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Enable API Plugin</Button>
            <Button size="lg" variant="outline">Talk to Integration Team</Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            See It in Action
          </h2>
          <p class="text-xl text-muted-foreground">
            Experience aviation spaces like never before
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="space-y-4">
            <Card 
              v-for="option in demoOptions"
              :key="option.id" 
              :class="['cursor-pointer transition-all', activeDemo === option.id ? 'ring-2 ring-primary' : '']"
              @click="activeDemo = option.id"
            >
              <CardContent class="p-4">
                <h3 class="font-semibold mb-2">{{ option.title }}</h3>
                <p class="text-sm text-muted-foreground">{{ option.description }}</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="lg:col-span-2">
            <div class="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div class="text-center">
                <Plane class="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 class="text-xl font-semibold mb-2">
                  {{ activeDemoOption?.title }}
                </h3>
                <p class="text-muted-foreground mb-4">Interactive demo coming soon</p>
                <div class="flex gap-2 justify-center">
                  <Button size="sm" variant="outline">Book This Jet</Button>
                  <Button size="sm" variant="outline">Schedule Test Flight</Button>
                </div>
                <span class="inline-block mt-4 bg-primary/10 text-primary px-3 py-1 rounded text-sm">
                  Powered by Xplor + API Plugin Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <Card v-for="(step, index) in steps" :key="index" class="text-center">
            <CardHeader>
              <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {{ step.step }}
              </div>
              <CardTitle>{{ step.title }}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription class="text-base">
                {{ step.description }}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Target Audience -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Built for the Entire Aviation Industry
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <Card v-for="(type, index) in audienceTypes" :key="index" class="text-center hover:shadow-lg transition-shadow">
            <CardContent class="pt-6">
              <div class="text-3xl mb-3">{{ type.icon }}</div>
              <h3 class="font-semibold text-sm">{{ type.title }}</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Virtual Tours That Convert at 30,000 Feet
          </h2>
        </div>
        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <Card class="text-center">
            <CardContent class="pt-6">
              <TrendingUp class="h-8 w-8 text-primary mx-auto mb-4" />
              <div class="text-3xl font-bold text-primary mb-2">2x</div>
              <p class="text-muted-foreground">Longer engagement with virtual tours</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardContent class="pt-6">
              <Users class="h-8 w-8 text-primary mx-auto mb-4" />
              <div class="text-3xl font-bold text-primary mb-2">Higher</div>
              <p class="text-muted-foreground">Value clients from immersive listings</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardContent class="pt-6">
              <Zap class="h-8 w-8 text-primary mx-auto mb-4" />
              <div class="text-3xl font-bold text-primary mb-2">Faster</div>
              <p class="text-muted-foreground">Inquiries and pre-qualified leads</p>
            </CardContent>
          </Card>
          <Card class="text-center">
            <CardContent class="pt-6">
              <CheckCircle class="h-8 w-8 text-primary mx-auto mb-4" />
              <div class="text-3xl font-bold text-primary mb-2">Better</div>
              <p class="text-muted-foreground">Transparency in expectations</p>
            </CardContent>
          </Card>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent class="pt-6">
              <div class="flex items-center gap-2 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote class="text-lg italic mb-4">
                "We booked 4 new training trials after uploading our flight sim to Xplor."
              </blockquote>
              <cite class="text-sm text-muted-foreground">– Flight School Director</cite>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <div class="flex items-center gap-2 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote class="text-lg italic mb-4">
                "Our charter clients loved walking through the cabin before ever stepping onboard."
              </blockquote>
              <cite class="text-sm text-muted-foreground">– Jet Broker, Monaco</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Let the World Explore Your Aircraft — and Take Action
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Upload your jet, training center, or new model to Xplor. Connect your charter or booking system. Convert explorers into clients.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" @click="handleListAircraft" class="text-lg px-8">
            List Your Jet or Facility
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8">
            Request Plugin Integration
          </Button>
          <Button size="lg" variant="secondary" class="text-lg px-8">
            View a Demo Tour
          </Button>
        </div>
      </div>
    </section>

    <!-- Footer Legal -->
    <section class="py-12 px-4 bg-gray-100 border-t">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-sm text-muted-foreground">
          <strong>Legal & Compliance:</strong> Xplor supports 360° and 3D virtual tours of aircraft, hangars, training centers, and lounges. API/plugin integrations are available for leading charter and CRM platforms. Contact us to check compatibility with your system.
        </p>
      </div>
    </section>

    <AviationUploadDialog 
      :open="uploadDialogOpen" 
      @update:open="uploadDialogOpen = $event" 
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Plane, 
  Calendar, 
  Users, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  Zap, 
  Wrench, 
  GraduationCap, 
  MapPin 
} from 'lucide-vue-next'
import Button from '~/components/ui/button/Button.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AviationUploadDialog from '@/components/AviationUploadDialog.vue'
import jetsAviationHero from '@/assets/jets-aviation-hero.jpg'

const activeDemo = ref('cabin')
const uploadDialogOpen = ref(false)

const handleListAircraft = () => {
  uploadDialogOpen.value = true
}

const features = [
  {
    icon: Plane,
    title: "Showcase the Jet, Not Just the Specs",
    description: "Give clients a real sense of the space with 360° cabin, cockpit, and lounge tours"
  },
  {
    icon: Calendar,
    title: "Live Charter & Test Flight Booking",
    description: "Enable real-time flight inquiries, reservations, or test flight scheduling via plugin"
  },
  {
    icon: GraduationCap,
    title: "Flight Training Simulation",
    description: "Let prospects explore your simulator rooms or training centers"
  },
  {
    icon: MapPin,
    title: "New Model Launches",
    description: "Launch new aircraft models virtually to a global audience"
  },
  {
    icon: Globe,
    title: "Global Viewer Access",
    description: "Reach HNWI clients, brokers, and aviation fans worldwide"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Works perfectly on mobile, desktop, or in VR headsets"
  }
]

const useCases = [
  { icon: "✈️", title: "Charter Bookings" },
  { icon: "🧪", title: "Test Flight Registration" },
  { icon: "🧑‍✈️", title: "Flight School / Simulator Booking" },
  { icon: "🆕", title: "New Model Launch RSVP" },
  { icon: "🛬", title: "Maintenance / Service Facility Booking" }
]

const platforms = [
  "Avinode / CharterPad", 
  "Calendly / HubSpot", 
  "Traxxall / CAMP for MRO", 
  "FlightLogger", 
  "Talon Systems", 
  "Custom Aviation CRMs"
]

const audienceTypes = [
  { title: "Private Jet Operators", icon: "🛩️" },
  { title: "Jet Charter Brokers", icon: "✈️" },
  { title: "Aircraft Manufacturers", icon: "🏭" },
  { title: "Maintenance Providers", icon: "🔧" },
  { title: "Flight Training Academies", icon: "🎓" },
  { title: "Airport Lounge Managers", icon: "🏢" },
  { title: "Aircraft Dealerships", icon: "🏪" }
]

const steps = [
  {
    step: "1",
    title: "Create Your Profile",
    description: "Upload your aircraft, facility, or training academy"
  },
  {
    step: "2", 
    title: "Add Your Virtual Tour",
    description: "Show cabins, hangars, showrooms, or simulators in immersive 3D"
  },
  {
    step: "3",
    title: "Enable Bookings",
    description: "Connect bookings, charter inquiries, or training demos via API"
  }
]

const demoOptions = [
  { id: "cabin", title: "Private Jet Cabin Tour", description: "Explore luxury seating and amenities" },
  { id: "cockpit", title: "Cockpit Simulation", description: "See the pilot's perspective and controls" },
  { id: "hangar", title: "Hangar Walkthrough", description: "Tour maintenance and storage facilities" },
  { id: "simulator", title: "Flight Training Center", description: "Experience simulator rooms and classrooms" }
]

const activeDemoOption = computed(() => {
  return demoOptions.find(option => option.id === activeDemo.value)
})
</script>