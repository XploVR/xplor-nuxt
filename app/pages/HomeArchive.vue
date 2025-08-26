<template>
<template>
  <div class="min-h-screen bg-background">
    <Header />
    
    <main>
      <!-- Hero Section -->
      <section class="relative h-[60vh] sm:h-[70vh] flex items-start pt-8 sm:pt-12 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/lovable-uploads/aa974283-f5dc-4cca-bfc2-703fe4393e5c.png" alt="Luxury Properties Worldwide Map" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/10"></div>
        </div>
        
        <!-- Crew Member Button - Top Right -->
        <div class="fixed top-1/2 right-4 transform -translate-y-1/2 z-20">
          <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey px-6 py-4 font-medium w-64 h-16 rounded-lg">
          </Button>
        </div>

        <!-- FairShare Program Box - Top Right -->
        <div class="absolute top-4 right-4 z-20 hidden md:block">
          <Card class="bg-white/95 backdrop-blur-sm border-primary/20 max-w-xs">
            <CardContent class="p-4 bg-gray-700">
              <h3 class="text-sm font-bold text-foreground mb-2">
                <span class="text-primary">FairShare</span> Program
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
        
        <div class="relative z-10 text-white w-full max-w-md lg:max-w-lg xl:max-w-xl px-mobile-md sm:px-8 lg:px-16">
          <h1 class="text-mobile-5xl sm:text-7xl md:text-8xl font-bold mb-mobile-sm sm:mb-2 font-typografix text-black">
            xplor
          </h1>
          <h2 class="text-mobile-lg sm:text-2xl md:text-3xl font-light mb-mobile-lg sm:mb-6 opacity-90 text-gray-700">
            The World's Map of Virtual Spaces
          </h2>
          <p class="text-mobile-sm sm:text-base md:text-lg mb-mobile-xl sm:mb-8 opacity-90 leading-relaxed text-gray-700">
            Discover, share, and explore immersive 3D tours of real-world locations — from luxury homes and yachts to cultural landmarks and travel destinations.
          </p>
          <div class="flex flex-col sm:flex-row gap-mobile-md sm:gap-4">
            <Button size="lg" class="bg-primary hover:bg-primary/90 !text-xplor-grey text-mobile-base sm:text-lg px-mobile-xl sm:px-8 py-mobile-md sm:py-3 min-h-touch-comfortable font-medium">
              Map
            </Button>
            <Dialog v-model:open="showFinderForm">
              <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto">
                <TourProFinderForm @close="showFinderForm = false" />
              </DialogContent>
            </Dialog>
            <Button size="lg" class="bg-primary hover:bg-primary/90 !text-xplor-grey text-mobile-base sm:text-lg px-mobile-xl sm:px-8 py-mobile-md sm:py-3 min-h-touch-comfortable font-medium">
              <router-link to="/auth">
                Sign In
              </router-link>
            </Button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-mobile-2xl sm:py-20 bg-background">
        <div class="container mx-auto px-mobile-md sm:px-4">
          <div class="text-center mb-mobile-2xl sm:mb-16">
            <h2 class="text-mobile-3xl sm:text-4xl font-bold text-foreground mb-mobile-md sm:mb-4">XPLOR FIND UPLOAD SHOWCASE SELL RENT BUY CHARTER DESIGN DREA</h2>
            <p class="text-mobile-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From exclusive yachts to stunning properties, curate your perfect luxury getaway
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-mobile-lg sm:gap-8">
            <router-link to="/yacht-brokerage">
              <Card class="text-center hover:shadow-medium transition-all duration-200 group hover:bg-gradient-card cursor-pointer">
                <CardHeader class="p-mobile-lg sm:p-6">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 bg-xplor-yellow rounded-full flex items-center justify-center mx-auto mb-mobile-md sm:mb-4 group-hover:scale-110 transition-transform">
                    <Ship class="w-6 h-6 sm:w-8 sm:h-8 text-xplor-black" />
                  </div>
                  <CardTitle class="text-mobile-lg sm:text-xl">Yachts</CardTitle>
                  <CardDescription class="text-mobile-sm sm:text-base">
                    Charter world-class luxury yachts with professional crews and premium amenities
                  </CardDescription>
                </CardHeader>
              </Card>
            </router-link>

            <Card class="text-center hover:shadow-medium transition-all duration-200 group hover:bg-gradient-card">
              <CardHeader class="p-mobile-lg sm:p-6">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-xplor-black rounded-full flex items-center justify-center mx-auto mb-mobile-md sm:mb-4 group-hover:scale-110 transition-transform">
                  <Home class="w-6 h-6 sm:w-8 sm:h-8 text-xplor-yellow" />
                </div>
                <CardTitle class="text-mobile-lg sm:text-xl">Properties</CardTitle>
                <CardDescription class="text-mobile-sm sm:text-base">
                  Stay in extraordinary luxury properties and exclusive architectural marvels
                </CardDescription>
              </CardHeader>
            </Card>

            <Card class="text-center hover:shadow-medium transition-all duration-200 group hover:bg-gradient-card sm:col-span-2 md:col-span-1">
              <CardHeader class="p-mobile-lg sm:p-6">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-xplor-grey rounded-full flex items-center justify-center mx-auto mb-mobile-md sm:mb-4 group-hover:scale-110 transition-transform">
                  <Landmark class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle class="text-mobile-lg sm:text-xl">Experiences</CardTitle>
                <CardDescription class="text-mobile-sm sm:text-base">
                  Personalized service and exclusive access to the world's finest experiences
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      <!-- Gigs CTA Section -->
      <section class="py-20 bg-accent/30">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold text-foreground mb-6">
                Exclusive Property <span class="text-xplor-yellow">Partnerships</span>
              </h2>
              <p class="text-lg text-muted-foreground mb-8">
                Partner with us to showcase your luxury properties to discerning clients worldwide. 
                From modern architectural masterpieces to historic estates, we connect property owners 
                with guests seeking extraordinary accommodations.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <router-link to="/gigs">
                  <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey font-medium">
                    List Your Property
                  </Button>
                </router-link>
                <Button size="lg" variant="outline">
                  Partnership Info
                </Button>
              </div>
            </div>
            <div class="relative">
              <img :src="luxuryProperty1" alt="Luxury Property Architecture" class="rounded-lg shadow-medium w-full" />
            </div>
          </div>
        </div>
      </section>

      <!-- VR Store Section -->
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <img :src="modernHouse" alt="Luxury Glass Architecture" class="rounded-lg shadow-medium w-full" />
            </div>
            <div>
              <h2 class="text-4xl font-bold text-foreground mb-6">
                Premium <span class="text-xplor-yellow">Virtual Tours</span> & Documentation
              </h2>
              <p class="text-lg text-muted-foreground mb-8">
                Showcase your luxury properties and yachts with cutting-edge virtual reality technology. 
                Our professional 3D scanning and VR services create immersive experiences that allow 
                clients to explore every detail before their visit.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-sm text-muted-foreground">Property Virtual Tours</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-sm text-muted-foreground">Yacht Documentation</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-sm text-muted-foreground">3D Interactive Experiences</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-sm text-muted-foreground">Premium Marketing Materials</span>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <router-link to="/vr-cameras">
                  <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey font-medium">
                    Request Virtual Tour
                  </Button>
                </router-link>
                <router-link to="/capture-services">
                  <Button size="lg" variant="outline">
                    Documentation Services
                  </Button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Luxury Yachts Section -->
      <section class="py-20 bg-accent/20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-foreground mb-4">
              Luxury <span class="text-xplor-yellow">Yacht</span> Experiences
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the ultimate in maritime luxury with our exclusive yacht charter collection
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-3xl font-bold text-foreground mb-6">
                Charter Premium Vessels
              </h3>
              <p class="text-lg text-muted-foreground mb-8">
                Experience the ocean like never before aboard our fleet of luxury yachts. 
                From intimate sunset cruises to extended voyages, our professionally crewed 
                vessels offer unparalleled comfort and sophistication.
              </p>
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-muted-foreground">Professional crew and captain</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-muted-foreground">Gourmet dining and beverages</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-muted-foreground">Water sports and amenities</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-xplor-yellow rounded-full"></div>
                  <span class="text-muted-foreground">Custom itineraries available</span>
                </div>
              </div>
              <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey font-medium">
                Explore Yacht Charters
              </Button>
            </div>
            <div class="relative">
              <img :src="luxuryYacht1" alt="Luxury yacht on ocean waves" class="rounded-lg shadow-medium w-full object-cover h-[400px]" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Luxury Properties Section -->
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-foreground mb-4">
              Luxury <span class="text-xplor-yellow">Property</span> Experiences
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay in extraordinary properties designed for the ultimate luxury experience
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card class="overflow-hidden hover:shadow-medium transition-all duration-300 group">
              <div class="relative">
                <img :src="luxuryInterior" alt="Modern architectural property" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute top-4 left-4">
                  <span class="bg-xplor-yellow text-xplor-black px-3 py-1 rounded-full text-sm font-medium">
                    Modern
                  </span>
                </div>
              </div>
              <CardContent class="p-6">
                <h3 class="text-xl font-bold text-foreground mb-2">Contemporary Villas</h3>
                <p class="text-muted-foreground mb-4">
                  Sleek, modern architecture with cutting-edge amenities and breathtaking views.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-muted-foreground">From $2,500/night</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card class="overflow-hidden hover:shadow-medium transition-all duration-300 group">
              <div class="relative">
                <img :src="yachtDetail" alt="Glass tower luxury property" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute top-4 left-4">
                  <span class="bg-xplor-yellow text-xplor-black px-3 py-1 rounded-full text-sm font-medium">
                    Urban
                  </span>
                </div>
              </div>
              <CardContent class="p-6">
                <h3 class="text-xl font-bold text-foreground mb-2">Sky Penthouses</h3>
                <p class="text-muted-foreground mb-4">
                  Exclusive penthouses offering panoramic city views and world-class luxury.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-muted-foreground">From $4,000/night</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card class="overflow-hidden hover:shadow-medium transition-all duration-300 group">
              <div class="relative">
                <img :src="luxuryYacht2" alt="Unique wavy architecture property" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute top-4 left-4">
                  <span class="bg-xplor-yellow text-xplor-black px-3 py-1 rounded-full text-sm font-medium">
                    Iconic
                  </span>
                </div>
              </div>
              <CardContent class="p-6">
                <h3 class="text-xl font-bold text-foreground mb-2">Architectural Marvels</h3>
                <p class="text-muted-foreground mb-4">
                  One-of-a-kind properties featuring innovative design and artistic excellence.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-muted-foreground">From $3,500/night</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div class="text-center">
            <Button size="lg" class="bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black mr-4">
              Browse All Properties
            </Button>
            <Button size="lg" variant="outline">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>

      <!-- Luxury Experience CTA -->
      <section class="py-20 bg-gradient-to-r from-primary/10 to-xplor-yellow/10">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-foreground mb-6">
            Ready for the Ultimate Luxury Experience?
          </h2>
          <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our concierge team create a bespoke experience combining luxury yachts, 
            exclusive properties, and unforgettable adventures tailored just for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="bg-primary hover:bg-primary/90 text-xplor-grey font-medium">
              Start Planning
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-xplor-yellow mb-2">500+</div>
              <div class="text-muted-foreground">Luxury Properties</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-xplor-black mb-2">150+</div>
              <div class="text-muted-foreground">Premium Yachts</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-xplor-yellow mb-2">5★</div>
              <div class="text-muted-foreground">Exclusive Rating</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-xplor-black mb-2">24/7</div>
              <div class="text-muted-foreground">Concierge Service</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Ship, Home, Landmark, MapPin } from "lucide-vue-next"
import TourProFinderForm from "@/components/TourProFinderForm.vue"
import luxuryProperty1 from "@/assets/luxury-property-1.jpg"
import modernHouse from "@/assets/modern-house.jpg"
import luxuryYacht1 from "@/assets/luxury-yacht-1.jpg"
import luxuryYacht2 from "@/assets/luxury-yacht-2.jpg"
import luxuryInterior from "@/assets/luxury-interior.jpg"
import yachtDetail from "@/assets/yacht-detail.jpg"

const showFinderForm = ref(false)
</script>
