
<template>
  <div class="min-h-screen bg-background">
    <!-- Ad Banner -->
    <div class="bg-yellow-300 py-3 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-sm md:text-base text-black font-medium">
          Are you a Photographer, Virtual Tour creator, Capture specialist, or perhaps someone who wants to get started in this field?
          <button class="underline font-semibold hover:no-underline transition-all" @click="isVerificationFormOpen = true">
            Click Here to find out more and join xplor
          </button>
        </p>
      </div>
    </div>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 py-16">
        <div class="space-y-6">
          <div class="space-y-2">
            <span class="inline-block bg-yellow-300 text-black font-medium px-3 py-1 rounded">CAPTURE SERVICES</span>
            <h1 class="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Let us create your digital twin for you.
            </h1>
          </div>
          <p class="text-xl text-muted-foreground">
            Professional 3D capture services that transform your spaces into detailed digital twins,
            so you can access, manage, and promote your properties anytime, from anywhere.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary px-6 py-3 rounded-md bg-yellow-300 text-black" @click="openCalendly">Book Now</button>

            <!-- Finder Dialog -->
            <button class="btn btn-outline px-6 py-3 rounded-md" @click="showFinderForm = true">
              <MapPin class="mr-2 h-4 w-4 inline" /> Find Tour Pro
            </button>
            <button class="btn btn-outline px-6 py-3 rounded-md" @click="goto('/vr-cameras')">VR Cameras & Equipment</button>
          </div>
        </div>
        <div class="relative">
          <img :src="captureHeroImage" alt="Professional capture technician with 3D scanning equipment" class="w-full h-auto rounded-lg shadow" />
        </div>
      </div>
    </section>

    <!-- Industry Tabs -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            3D solutions for every type of business.
          </h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capture Services is ready to transform all your properties into detailed digital twins,
            so you can access, manage, and promote your spaces anytime, from anywhere.
          </p>
        </div>

        <div class="w-full">
          <div class="grid w-full grid-cols-3 mb-8">
            <button
              v-for="tab in industryTabs"
              :key="tab.id"
              class="px-3 py-2 border rounded-l-none rounded-r-none first:rounded-l last:rounded-r"
              :class="activeTab === tab.id ? 'bg-primary text-primary-foreground' : 'bg-background'"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div v-for="tab in industryTabs" :key="tab.id" v-show="activeTab === tab.id" class="space-y-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-foreground mb-2">{{ tab.title }}</h3>
              <p class="text-muted-foreground">{{ tab.description }}</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <!-- Card 1 -->
              <div class="border rounded-lg overflow-hidden hover:shadow transition-shadow">
                <div class="aspect-video bg-gradient-to-br from-red-500/20 to-red-700/20 relative">
                  <img :src="bangkokVirtualTour" alt="Bangkok Virtual Tour 360" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/20" />
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-semibold">Bangkok Virtual Tour 360</h4>
                  <p class="text-sm text-muted-foreground">Professional 3D & 360° Virtual Tours in Thailand</p>
                  <p class="text-sm text-muted-foreground mt-3">
                    Specializing in Matterport 3D virtual tours and 360° panoramic photography for real estate and hospitality.
                  </p>
                  <button class="btn btn-outline w-full mt-4" @click="open('https://www.bangkokvirtualtour360.com/')">Visit Website</button>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="border rounded-lg overflow-hidden hover:shadow transition-shadow">
                <div class="aspect-video bg-gradient-to-br from-blue-500/20 to-teal-600/20 relative flex items-center justify-center">
                  <img :src="emiratesIcon" alt="360 Emirates" class="h-16 w-16 object-contain relative z-10" />
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-semibold">360 Emirates</h4>
                  <p class="text-sm text-muted-foreground">Leading 360 VR & 3D Solutions in UAE</p>
                  <p class="text-sm text-muted-foreground mt-3">
                    18+ years experience providing 360° virtual tours, 3D property scans, and VR solutions across the Emirates.
                  </p>
                  <button class="btn btn-outline w-full mt-4" @click="open('https://360emirates.com/')">Visit Website</button>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="border rounded-lg overflow-hidden hover:shadow transition-shadow">
                <div class="aspect-video bg-gradient-to-br from-gray-500/20 to-blue-600/20 relative">
                  <img :src="virtual360nyHero" alt="Virtual360NY" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/30" />
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-semibold">Virtual360NY</h4>
                  <p class="text-sm text-muted-foreground">NYC Commercial & Corporate Virtual Tours</p>
                  <p class="text-sm text-muted-foreground mt-3">
                    Architectural photography and Google-authorized virtual tours for NYC commercial properties and corporate spaces.
                  </p>
                  <button class="btn btn-outline w-full mt-4" @click="open('https://www.virtual360ny.com/')">Visit Website</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Speed & Accuracy -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-foreground mb-6">Speed, accuracy, and worldwide availability.</h2>
        <p class="text-lg text-muted-foreground mb-8">
          After your appointment, your digital twins will be ready for you to start using in as fast as 24-48 hours.
          Use your digital twin to collaborate with your team and create transformative experiences for your customers.
        </p>
        <button class="btn btn-primary px-6 py-3 rounded-md bg-yellow-300 text-black" @click="openCalendly">Book Now</button>
      </div>
    </section>

    <!-- Plans -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">For teams and spaces of all sizes.</h2>
          <p class="text-lg text-muted-foreground">
            Capture Service solutions are designed to support a variety of business needs and sizes.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- On-Demand -->
          <div class="border rounded-lg">
            <div class="p-6">
              <h3 class="text-2xl">On-Demand</h3>
              <p class="text-lg text-muted-foreground">Let us create a high-quality digital twin for you.</p>
            </div>
            <div class="p-6 space-y-3">
              <div v-for="(feature, i) in onDemandFeatures" :key="i" class="flex items-start gap-3">
                <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
                <span class="text-sm text-muted-foreground">{{ feature }}</span>
              </div>
              <button class="btn btn-primary w-full mt-4 bg-yellow-300 text-black" @click="openCalendly">Book Now</button>
            </div>
          </div>

          <!-- Enterprise -->
          <div class="border rounded-lg">
            <div class="p-6">
              <h3 class="text-2xl">Enterprise Service</h3>
              <p class="text-lg text-muted-foreground">Includes all benefits of On-Demand, and more powerful tools for your team.</p>
            </div>
            <div class="p-6 space-y-3">
              <div v-for="(feature, i) in enterpriseFeatures" :key="i" class="flex items-start gap-3">
                <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
                <span class="text-sm text-muted-foreground">{{ feature }}</span>
              </div>
              <button class="btn btn-outline w-full mt-4">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Companies -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-foreground mb-8">Trusted by leading companies worldwide</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div v-for="c in companyLogos" :key="c.name" class="text-center">
              <div class="mb-2 flex justify-center" v-html="c.logo"></div>
              <span class="text-sm text-muted-foreground">{{ c.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="border rounded-lg">
            <div class="p-8">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p class="text-muted-foreground mb-6 italic">
                "Today, prospects and existing clients alike expect xplor scans to be part of the process
                as they find commercial spaces perfectly suited to their needs. Fortunately, we can now
                more easily meet the demands with xplor Capture Services."
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <Users class="h-6 w-6 text-black" />
                </div>
                <div>
                  <p class="font-semibold text-foreground">Sarah Dreyer</p>
                  <p class="text-sm text-muted-foreground">VP & Head of Americas Research | Savills</p>
                </div>
              </div>
            </div>
          </div>

          <div class="border rounded-lg">
            <div class="p-8">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p class="text-muted-foreground mb-6 italic">
                "Using xplor Capture Services On-Demand costs 30 percent less than if we send someone
                who lives in the same city to do it, and it costs 70 percent less than sending someone
                long distance. It makes sense to delegate this to people who capture spaces for a living."
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <Shield class="h-6 w-6 text-black" />
                </div>
                <div>
                  <p class="font-semibold text-foreground">Lance Amato</p>
                  <p class="text-sm text-muted-foreground">Head of Compliance | Canoa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Commitment -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block bg-green-100 text-green-800 rounded px-3 py-1 mb-4">Certified Capture Technicians</span>
            <h2 class="text-3xl font-bold text-foreground mb-6">Committed to providing the highest quality.</h2>
            <p class="text-lg text-muted-foreground mb-6">
              Digital Pro media packages are produced by xplor-certified capture technicians who are
              highly vetted, expertly trained, and bring years of experience. Their expertise ensures
              exceptional service and delivers the most effective assets to elevate your property marketing.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn btn-primary bg-yellow-300 text-black px-6 py-3 rounded">Order Digital Pro Now</button>
              <button class="btn btn-outline px-6 py-3 rounded" @click="isVerificationFormOpen = true">Become a Verified Tour Pro</button>
            </div>
          </div>
          <div class="relative">
            <div class="border rounded p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <Camera class="h-6 w-6 text-black" />
                </div>
                <div>
                  <p class="font-semibold text-foreground">Joseph Williams</p>
                  <p class="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <Star class="h-4 w-4 text-yellow-300 fill-yellow-300" />
                  <span class="font-semibold">4.9</span>
                </div>
                <span class="text-sm text-muted-foreground">428 models completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pro3 Experience -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img :src="pro3CameraImage" alt="Pro3 LiDAR camera" class="w-full h-auto rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-6">Experience Pro3 lidar capture.</h2>
            <p class="text-lg text-muted-foreground mb-8">
              Our team is ready to create your digital twins worldwide using the most innovative
              3D <strong>Lidar</strong> camera on the market.
            </p>
            <button class="btn btn-primary bg-yellow-300 text-black px-6 py-3 rounded" @click="openCalendly">Book Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Capture Services FAQs</h2>

        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i" class="border rounded-lg px-6">
            <button class="w-full flex justify-between items-center py-6 text-left" @click="toggleFaq(i)">
              <span class="font-medium text-foreground">{{ faq.question }}</span>
              <ChevronDown class="h-4 w-4" :class="openFaq === i ? 'rotate-180 transition' : 'transition'" />
            </button>
            <div v-show="openFaq === i" class="pb-6 text-muted-foreground">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Finder Modal -->
    <div v-if="showFinderForm" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" @click.self="showFinderForm=false">
      <div class="bg-background rounded-lg max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold">Find Tour Pro</h3>
          <button class="text-sm opacity-70 hover:opacity-100" @click="showFinderForm=false">✕</button>
        </div>
        <div class="p-2">
          <p class="text-muted-foreground">TourProFinderForm goes here (import your real component if available).</p>
        </div>
      </div>
    </div>

    <!-- Verification Modal -->
    <div v-if="isVerificationFormOpen" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" @click.self="isVerificationFormOpen=false">
      <div class="bg-background rounded-lg max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold">Become a Verified Tour Pro</h3>
          <button class="text-sm opacity-70 hover:opacity-100" @click="isVerificationFormOpen=false">✕</button>
        </div>
        <div class="p-2">
          <p class="text-muted-foreground">If you have VerificationForm.vue, import and render it here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Camera, Clock, MapPin, Shield, Star, CheckCircle, ChevronDown, Users } from 'lucide-vue-next'
import captureHeroImage from '@/assets/capture-services-hero.jpg'
import pro3CameraImage from '@/assets/pro3-camera.jpg'
import bangkokVirtualTour from '@/assets/bangkok-virtual-tour.jpg'
import emiratesIcon from '@/assets/360emirates-icon.png'
import virtual360nyHero from '@/assets/virtual360ny-hero.jpg'

const isVerificationFormOpen = ref(false)
const showFinderForm = ref(false)
const activeTab = ref('design')
const openFaq = ref<number | null>(null)

function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

function openCalendly() {
  window.open('https://calendly.com/xplor-info/30min', '_blank')
}
function open(url: string) {
  window.open(url, '_blank')
}
function goto(path: string) {
  window.location.href = path
}

const industryTabs = [
  {
    id: 'design',
    label: 'Design & Construction',
    title: '3D solutions for Design & Construction',
    description: 'Transform your construction and design projects with precise digital twins that enhance collaboration and streamline workflows.'
  },
  {
    id: 'marketing',
    label: 'Property Marketing',
    title: 'Elevate your property marketing',
    description: 'Create immersive virtual tours that captivate potential buyers and tenants, increasing engagement and accelerating sales.'
  },
  {
    id: 'facilities',
    label: 'Facilities Management',
    title: 'Smart facilities management',
    description: 'Manage your properties more efficiently with detailed digital records and remote access capabilities.'
  }
]

const onDemandFeatures = [
  'See availability instantly and choose a time that works best for you',
  'Available in 200+ cities around the world',
  'Created by fully vetted and skilled local capture technicians',
  'Receive your digital twin in as fast as 24–48 hours',
  'Property size up to 30,000 sq. ft.',
  'Priced by property location and size',
  'Secure credit card checkout',
  'Starting at $238 (excludes subscription to host and share your twin)'
]

const enterpriseFeatures = [
  'Enhanced Enterprise services to manage and support your projects',
  'Available in 700+ cities around the world',
  "Customized service plans to support your organization's needs",
  'No property size limit',
  'Access to a Customer Success Manager',
  'Access to robust APIs & SDKs for enterprise-scale automation and integrations',
  'Flexible billing and payment options',
  'Volume discount pricing'
]

// Simple logos: provide as HTML img for flexibility
const companyLogos = [
  { name: 'Marriott International', logo: `<img src="/logos/marriott-logo.png" alt="Marriott" class="h-8 w-auto max-w-24 object-contain" />` },
  { name: 'Hilton Worldwide', logo: `<img src="/lovable-uploads/9bfb88d3-dbb4-4763-8f50-fcb672976283.png" alt="Hilton" class="h-8 w-auto max-w-20 object-contain" />` },
  { name: 'H World Group', logo: `<img src="/lovable-uploads/6ad3281a-a5d0-44a9-a553-384f5d39e7fa.png" alt="H World Group" class="h-8 w-auto max-w-16 object-contain" />` },
  { name: 'InterContinental Hotels Group', logo: `<img src="/logos/ihg-logo.png" alt="IHG" class="h-8 w-auto max-w-16 object-contain" />` },
  { name: 'Wyndham Hotels & Resorts', logo: `<img src="/lovable-uploads/6cdc2896-6f3e-4e17-8888-9a915dc6fc19.png" alt="Wyndham" class="h-8 w-auto max-w-24 object-contain" />` },
  { name: 'Accor', logo: `<img src="/lovable-uploads/0c8d415d-b85e-416b-8605-6efa731d96e1.png" alt="Accor" class="h-8 w-auto max-w-16 object-contain" />` }
]

const faqs = [
  { question: 'Is a xplor subscription required to use Capture Services?', answer: 'Yes, you\'ll need an active xplor subscription to host and share your digital twins. We offer various subscription plans to meet your needs.' },
  { question: 'How long does it take to capture a space?', answer: 'Capture time depends on the size and complexity of your space. Typically, it takes 1-3 hours for most properties, and your digital twin will be ready in 24-48 hours.' },
  { question: 'How do Capture Technicians capture my space?', answer: 'Our certified technicians use professional 3D LiDAR cameras to scan your space, capturing millions of data points to create an accurate digital twin.' },
  { question: 'How do I access my models after my property is captured?', answer: 'Once processing is complete, you\'ll receive an email with access to your digital twin through your xplor account dashboard.' },
  { question: 'What if I\'m not satisfied with the quality of a capture?', answer: 'We guarantee high-quality results. If you\'re not satisfied, we\'ll work with you to recapture the space at no additional cost.' },
  { question: 'How much does it cost?', answer: 'Pricing varies by location and property size. On-Demand services start at $238, while Enterprise solutions offer volume discounts for larger projects.' }
]
</script>

<style scoped>
.btn { @apply inline-flex items-center justify-center font-medium; }
.btn-primary { @apply bg-primary text-primary-foreground hover:opacity-90; }
.btn-outline { @apply border border-input text-foreground hover:bg-muted; }
</style>
