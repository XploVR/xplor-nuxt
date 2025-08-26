
<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Crew Instructions: Promote Your Yacht, Get Booked, Earn Fairly
        </h1>
        <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          As a crew member, you play a critical role in helping your yacht stand out. Here's everything you need to know to upload, manage, and maintain your yacht on Xplor — and to stay eligible for FairShare commission.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary text-lg px-8" @click="go('/yacht-brokerage')">
            <Upload class="mr-2 h-5 w-5 inline" /> Upload a Yacht
          </button>
          <button class="btn btn-outline text-lg px-8" @click="go('/fairshare-crew')">
            <Users class="mr-2 h-5 w-5 inline" /> Join FairShare
          </button>
        </div>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <!-- Step 1 -->
      <section>
        <div class="flex items-center gap-3 mb-8">
          <span class="inline-block text-lg px-4 py-2 bg-muted rounded">Step 1</span>
          <h2 class="text-3xl font-bold">Upload Your Yacht to Xplor</h2>
        </div>

        <div class="border rounded">
          <div class="p-6 border-b">
            <h3 class="flex items-center gap-2 text-lg font-semibold">
              <CheckCircle class="h-6 w-6 text-green-500" /> Upload the following:
            </h3>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="(item, i) in uploadItems" :key="i" class="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5" />
                <div class="flex items-start gap-2">
                  <component :is="item.icon" class="h-4 w-4 mt-0.5 text-primary" />
                  <span class="text-sm">{{ item.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Step 2 -->
      <section>
        <div class="flex items-center gap-3 mb-8">
          <span class="inline-block text-lg px-4 py-2 bg-muted rounded">Step 2</span>
          <h2 class="text-3xl font-bold">Keep It Current — Always</h2>
        </div>

        <p class="text-lg text-muted-foreground mb-6">
          Guests want accuracy. Brokers need clarity. You must keep your listing up to date to stay discoverable and eligible.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, i) in updateItems" :key="i" class="border rounded">
            <div class="p-6 border-b">
              <h4 class="flex items-center gap-2 text-lg font-semibold">
                <component :is="item.icon" class="h-5 w-5 text-primary" /> {{ item.title }}
              </h4>
            </div>
            <div class="p-6">
              <p class="text-sm text-muted-foreground">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Step 3 -->
      <section>
        <div class="flex items-center gap-3 mb-8">
          <span class="inline-block text-lg px-4 py-2 bg-muted rounded">Step 3</span>
          <h2 class="text-3xl font-bold">Earn Your Fair Share of the Charter Commission</h2>
        </div>

        <div class="border rounded">
          <div class="p-6 border-b">
            <h3 class="flex items-center gap-2 text-lg font-semibold">
              <DollarSign class="h-6 w-6 text-green-500" /> How to stay eligible:
            </h3>
          </div>
          <div class="p-6 space-y-4">
            <div v-for="(item, i) in eligibilityItems" :key="i" class="flex items-start gap-3">
              <CheckCircle class="h-5 w-5 text-green-500 mt-0.5" />
              <span>{{ item }}</span>
            </div>

            <div class="my-6 h-px bg-border" />

            <div class="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <Heart class="h-5 w-5 text-red-500" /> Reminder:
              </h4>
              <p class="text-muted-foreground">
                When your yacht is chartered through Xplor, 50% of the net commission is split equally among all verified crew. No tiers. No tricks. Just fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pro Tips -->
      <section>
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-2">
          <TrendingUp class="h-8 w-8 text-primary" /> Pro Tips for Better Visibility & More Bookings
        </h2>

        <div class="border rounded overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b bg-muted/50">
                  <th class="text-left p-4 font-semibold">Tip</th>
                  <th class="text-left p-4 font-semibold">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(tip, i) in proTips" :key="i" class="border-b last:border-b-0 hover:bg-muted/25">
                  <td class="p-4 font-medium">{{ tip.tip }}</td>
                  <td class="p-4 text-muted-foreground">{{ tip.benefit }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-12">
        <h2 class="text-3xl font-bold mb-4">Start Promoting Your Yacht the Right Way</h2>
        <p class="text-xl text-muted-foreground mb-8">
          Create a complete profile. Keep it updated. Get booked. Get paid.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-primary text-lg px-8" @click="go('/yacht-brokerage')">
            <Ship class="mr-2 h-5 w-5 inline" /> Upload a Yacht Now
          </button>
          <button class="btn btn-outline text-lg px-8" @click="go('/fairshare-crew')">
            <Users class="mr-2 h-5 w-5 inline" /> Register for FairShare
          </button>
          <button class="btn btn-outline text-lg px-8" @click="go('/about')">
            <MessageCircle class="mr-2 h-5 w-5 inline" /> Contact Support
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Upload, Users, DollarSign, CheckCircle, MapPin, Settings, Camera, FileText, Star, TrendingUp, Heart, MessageCircle, Info, Ship, Calendar, ChefHat, Anchor } from 'lucide-vue-next'

const router = useRouter()
function go(path: string) {
  router.push(path)
}

const uploadItems = [
  { icon: Info, text: 'Basic Info: Yacht name, type, builder, length, year' },
  { icon: Settings, text: 'Specifications: Speed, engines, range, stabilizers, GT' },
  { icon: Star, text: 'Amenities: Jacuzzi, beach club, spa, AV systems' },
  { icon: Anchor, text: 'Water Toys & Equipment: Tenders, jet skis, scuba gear, etc.' },
  { icon: DollarSign, text: 'Charter Rates: Summer/winter rates, APA, tax info' },
  { icon: Camera, text: 'Photos & Media: Matterport/360° tours, high-res images, deck plans' },
  { icon: Users, text: 'Crew Highlights: Captain bio, chef specialties, sample menus' }
]

const updateItems = [
  { icon: MapPin, title: 'Current Location & Availability', desc: 'Update cruising region regularly, mark blackout dates' },
  { icon: Settings, title: 'Equipment & Toys', desc: 'Add new water toys or gear, remove outdated features' },
  { icon: ChefHat, title: 'Food & Service', desc: 'Update seasonal menus, mention new dietary options' },
  { icon: Camera, title: 'Media Refresh', desc: 'Add new guest photos, replace old images after refits' },
  { icon: Calendar, title: 'Charter Status', desc: "Mark yacht as 'Available,' 'Booked,' 'For Sale,' etc." }
]

const eligibilityItems = [
  'Make sure the yacht is listed for charter with Xplor (central agent or brokered)',
  'Register yourself as active crew via the FairShare Crew Form',
  'Keep your role and crew status up to date',
  'Make sure the yacht profile is complete and current',
  'Keep proof of crew contract or employment uploaded'
]

const proTips = [
  { tip: 'Add a virtual tour', benefit: 'Increases listing views and time spent on page' },
  { tip: 'Keep descriptions guest-focused', benefit: 'Highlight experiences, not just specs' },
  { tip: 'Feature the crew', benefit: "Clients love knowing who's onboard" },
  { tip: 'Mention special itineraries', benefit: 'Caribbean holidays, wellness retreats, etc.' },
  { tip: 'Respond to inquiries quickly', benefit: 'Boosts ranking and guest confidence' }
]
</script>

<style scoped>
.btn { @apply inline-flex items-center justify-center font-medium; }
.btn-primary { @apply bg-primary text-primary-foreground hover:opacity-90; }
.btn-outline { @apply border border-input text-foreground hover:bg-muted; }
</style>
