<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section 
      class="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${retailPopupsHero})`
      }"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Showcase Your Retail Space — Inside and Out
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          From flagship stores to pop-up activations, Xplor helps brands, landlords, and retail marketers 
          bring their physical locations to life with immersive 360° experiences — with multiple zones in one listing.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6">
            📩 Contact the Xplor Team
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
            ➕ Add a Retail Space
          </Button>
        </div>
      </div>
    </section>

    <!-- Why Xplor Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Xplor is the Best for Retail & Pop-Ups
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">🧭 Multi-Zone Retail Tours</h3>
              <p class="text-muted-foreground">
                Display the entrance, retail floor, back-of-house, fitting rooms, cashier area, 
                product displays — all within one experience.
              </p>
            </CardContent>
          </Card>

          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingBag class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">🛍️ Perfect for Pop-Ups & Events</h3>
              <p class="text-muted-foreground">
                Show off temporary installations, branded activations, and seasonal venues 
                before they open or travel.
              </p>
            </CardContent>
          </Card>

          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Store class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">🏬 Landlord & Mall Ready</h3>
              <p class="text-muted-foreground">
                Highlight multiple units inside a single retail complex or mall wing, 
                including shared spaces.
              </p>
            </CardContent>
          </Card>

          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">🛒 Support Sales, Leasing & Marketing</h3>
              <p class="text-muted-foreground">
                Connect your tour to ecommerce links, rental pages, or lead capture forms.
              </p>
            </CardContent>
          </Card>

          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Globe class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">🌍 Attract Tenants & Buyers Globally</h3>
              <p class="text-muted-foreground">
                Allow remote brands, franchisees, and leasing agents to explore locations from anywhere.
              </p>
            </CardContent>
          </Card>

          <Card class="text-center p-6">
            <CardContent class="space-y-4">
              <div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">📱 Made for Sharing</h3>
              <p class="text-muted-foreground">
                Integrate directly into your brand site, listings, marketing materials, and QR campaigns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 px-4 bg-accent/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Use Case Inspiration for Clients
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card class="overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-primary/20 to-primary/40"></div>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold mb-2">Flagship Retail Stores</h3>
              <p class="text-sm text-muted-foreground">
                Give shoppers or brand partners an inside look at your best-in-class experience.
              </p>
            </CardContent>
          </Card>

          <Card class="overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-secondary/20 to-secondary/40"></div>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold mb-2">Malls & Mixed-Use Retail</h3>
              <p class="text-sm text-muted-foreground">
                Offer leasing teams or investors a view of multiple available units, kiosks, 
                and shared amenities in one listing.
              </p>
            </CardContent>
          </Card>

          <Card class="overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-accent/20 to-accent/40"></div>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold mb-2">Pop-Up Shops & Brand Activations</h3>
              <p class="text-sm text-muted-foreground">
                Document temporary installations and limited-run collaborations for PR, 
                case studies, and future brand partners.
              </p>
            </CardContent>
          </Card>

          <Card class="overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold mb-2">Franchise Models & Chains</h3>
              <p class="text-sm text-muted-foreground">
                Standardize virtual previews of store formats for potential partners, 
                landlords, and global investors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        <div class="space-y-8">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              1
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Create Your Retail Listing</h3>
              <p class="text-muted-foreground">
                Upload your shop details, location, visual branding, and immersive tour content.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              2
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Add All Spaces</h3>
              <p class="text-muted-foreground">
                Connect individual areas (floor sections, fitting rooms, kiosks, adjacent stores, etc.) 
                into a single navigable experience.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              3
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Go Live on Xplor</h3>
              <p class="text-muted-foreground">
                Share the experience across your website, sales deck, social media, or real estate listings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 px-4 bg-accent/5">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Platform Comparison
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-card rounded-lg shadow-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left p-4 font-semibold">Feature</th>
                <th class="text-center p-4 font-semibold">Xplor</th>
                <th class="text-center p-4 font-semibold">Standard Lease Portals</th>
                <th class="text-center p-4 font-semibold">Broker PDFs</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-4">Multi-space Virtual Tour</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="p-4">Pop-Up & Seasonal Friendly</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><AlertTriangle class="w-5 h-5 text-yellow-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="p-4">Lead Collection</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><AlertTriangle class="w-5 h-5 text-yellow-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="p-4">Store Navigation & Info Tags</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="p-4">Mobile, VR, and Web Support</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><AlertTriangle class="w-5 h-5 text-yellow-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr>
                <td class="p-4">Global Platform Visibility</td>
                <td class="text-center p-4"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="text-center p-4"><X class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Let People Step Inside Your Retail Space?
        </h2>
        <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Whether you're showcasing a high-end store, a startup pop-up, or a shopping destination, 
          Xplor gives you the tools to present it in full immersive detail — with no app required.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6">
            📩 Contact the Xplor Team
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6">
            ➕ Add a Retail Space
          </Button>
          <Button size="lg" variant="secondary" class="text-lg px-8 py-6">
            🔗 Upload Your Space
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Store, MapPin, Users, Globe, Smartphone, Check, X, AlertTriangle } from "lucide-vue-next";
import retailPopupsHero from "@/assets/retail-popups-hero.jpg";
</script>

<style scoped>
/* Any additional component-specific styles can go here */
</style>
