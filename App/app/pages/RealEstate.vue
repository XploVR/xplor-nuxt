<!-- src/views/RealEstate.vue -->
<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="realEstateHero"
          alt="Luxury real estate properties"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-800/60 to-gray-900/70"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-white mb-6">
            Real Estate That <span class="text-green-200">Sells Itself</span> — Because It's Already Been Seen
          </h1>
          <p class="text-xl text-white/90 mb-8">
            Xplor lets you showcase properties like never before — with immersive 3D tours that engage real buyers and renters. No more time-wasters. No more static listings.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              class="bg-primary text-primary-foreground hover:bg-primary/90"
              @click="goToUpload"
            >
              <span class="flex items-center gap-2">
                List a Property
                <ArrowRight class="w-5 h-5" />
              </span>
            </Button>
            <Button size="lg" variant="outline" class="flex items-center gap-2">
              <Play class="w-5 h-5" />
              See Real Estate in Action
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Xplor Works -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Why Professionals Are Moving to Xplor
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card class="text-center">
            <CardHeader>
              <Camera class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Immersive Virtual Tours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Let buyers explore every corner from their phone or laptop
              </CardDescription>
            </CardContent>
          </Card>

          <Card class="text-center">
            <CardHeader>
              <Globe class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Xplor is built for international exposure — not just local listings
              </CardDescription>
            </CardContent>
          </Card>

          <Card class="text-center">
            <CardHeader>
              <Users class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Qualified Leads Only</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Buyers and renters who view a tour are far more serious
              </CardDescription>
            </CardContent>
          </Card>

          <Card class="text-center">
            <CardHeader>
              <FileText class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Professional Upload Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                List with rich media, documents, maps, and more
              </CardDescription>
            </CardContent>
          </Card>

          <Card class="text-center">
            <CardHeader>
              <Building class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Perfect for Sales or Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Use Xplor for open houses, furnished apartments, or luxury estates
              </CardDescription>
            </CardContent>
          </Card>

          <Card class="text-center">
            <CardHeader>
              <DollarSign class="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Built for Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                CTA buttons in tours: Inquire, Book Viewing, or Apply Now
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-16 bg-muted/50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-foreground mb-6">
            Virtual Tours Are Not the Future. They're the Standard.
          </h2>
          <p class="text-lg text-muted-foreground mb-8">
            Listings with virtual tours generate 49% more qualified leads and close 31% faster. So why are you still using flat images?
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardContent class="p-6">
                <div class="flex items-start gap-4">
                  <Star class="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p class="text-foreground italic mb-2">
                      "Every time we list with a 3D tour on Xplor, we get better inquiries and fewer no-shows."
                    </p>
                    <p class="text-sm text-muted-foreground">— Agent in Dubai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent class="p-6">
                <div class="flex items-start gap-4">
                  <Star class="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p class="text-foreground italic mb-2">
                      "Renting our furnished apartments remotely was only possible through Xplor."
                    </p>
                    <p class="text-sm text-muted-foreground">— Property Manager, Lisbon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Get Started in Minutes
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-2">Create a Listing</h3>
            <p class="text-muted-foreground">
              Add property details, price, media, and optional virtual tour
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-2">Publish & Promote</h3>
            <p class="text-muted-foreground">
              Your listing appears on Xplor with global exposure
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-2">Get Leads & Close</h3>
            <p class="text-muted-foreground">
              Receive qualified inquiries directly from the tour page
            </p>
          </div>
        </div>

        <div class="text-center mt-8">
          <Button
            size="lg"
            class="bg-primary text-primary-foreground hover:bg-primary/90"
            @click="goToUpload"
          >
            List Your Property
          </Button>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-16 bg-muted/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Xplor vs Traditional Listings
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <Card>
            <CardContent class="p-0">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b">
                      <th class="text-left p-4 font-semibold">Feature</th>
                      <th class="text-center p-4 font-semibold">Xplor</th>
                      <th class="text-center p-4 font-semibold">Traditional Portals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="p-4">Virtual Tours</td>
                      <td class="p-4 text-center">
                        <CheckCircle class="w-5 h-5 text-green-500 mx-auto" />
                        <span class="sr-only">Fully integrated</span>
                      </td>
                      <td class="p-4 text-center text-red-500">✗</td>
                    </tr>
                    <tr class="border-b">
                      <td class="p-4">Interactive Maps</td>
                      <td class="p-4 text-center">
                        <CheckCircle class="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                      <td class="p-4 text-center text-red-500">✗</td>
                    </tr>
                    <tr class="border-b">
                      <td class="p-4">Document Uploads</td>
                      <td class="p-4 text-center">
                        <CheckCircle class="w-5 h-5 text-green-500 mx-auto" />
                        <div class="text-xs text-muted-foreground">Floor plans, brochures, PDFs</div>
                      </td>
                      <td class="p-4 text-center text-red-500">✗</td>
                    </tr>
                    <tr class="border-b">
                      <td class="p-4">Mobile-Friendly Tours</td>
                      <td class="p-4 text-center">
                        <CheckCircle class="w-5 h-5 text-green-500 mx-auto" />
                        <div class="text-xs text-muted-foreground">Optimized</div>
                      </td>
                      <td class="p-4 text-center text-yellow-500">〜</td>
                    </tr>
                    <tr>
                      <td class="p-4">Monetization Tools</td>
                      <td class="p-4 text-center">
                        <CheckCircle class="w-5 h-5 text-green-500 mx-auto" />
                        <div class="text-xs text-muted-foreground">Coming soon</div>
                      </td>
                      <td class="p-4 text-center text-red-500">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Property Types -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Property Types We Support
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <div class="text-center">
            <Home class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Villas & Houses</p>
          </div>
          <div class="text-center">
            <Building class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Apartments & Penthouses</p>
          </div>
          <div class="text-center">
            <Key class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Furnished Rentals</p>
          </div>
          <div class="text-center">
            <Building class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Commercial Spaces</p>
          </div>
          <div class="text-center">
            <Users class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Co-living Spaces</p>
          </div>
          <div class="text-center">
            <Camera class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Vacation Rentals</p>
          </div>
          <div class="text-center">
            <TrendingUp class="w-12 h-12 text-primary mx-auto mb-3" />
            <p class="text-sm font-medium">Developments</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-foreground mb-6">
            Make Every Viewing Count — Before They Even Arrive
          </h2>
          <p class="text-xl text-muted-foreground mb-8">
            List your property with a virtual tour on Xplor and attract real buyers and renters instantly.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              class="bg-primary text-primary-foreground hover:bg-primary/90"
              @click="goToUpload"
            >
              <span class="flex items-center gap-2">
                List Your Property Now
                <ArrowRight class="w-5 h-5" />
              </span>
            </Button>
            <Button size="lg" variant="outline" class="flex items-center gap-2">
              <Eye class="w-5 h-5" />
              Explore a Sample Tour
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Note -->
    <section class="py-8 bg-muted/30">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-sm text-muted-foreground">
            Xplor supports all formats of virtual tours, including Matterport, Kuula, iStaging, and custom 360° uploads.
            Need help capturing your space? Get matched with a photographer.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import {
  Camera,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Building,
  Home,
  Key,
  FileText,
  DollarSign,
  Star,
  Eye
} from 'lucide-vue-next'

import realEstateHero from '@/assets/real-estate-hero.jpg'

const router = useRouter()
const goToUpload = () => router.push('/upload-space')

// Head management (replacement for react-helmet-async)
onMounted(() => {
  const title = 'Real Estate Virtual Tours - Sell Properties Faster | Xplor'
  const description =
    'Transform property marketing with immersive virtual tours. List your real estate on Xplor for better exposure, qualified leads, and faster sales.'

  document.title = title

  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', description)
})
</script>
