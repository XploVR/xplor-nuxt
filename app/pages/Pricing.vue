<!-- src/views/Pricing.vue -->
<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${pricingHero})` }"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      </div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Simple, Fair Pricing for All Types of Spaces.
          </h1>
          <p class="text-xl text-white/90 mb-8">
            Xplor is free to get started — with professional tools and global exposure included.
            When you're ready for more, unlock advanced features to grow your brand, bookings, and reach.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              to="/spaces"
              class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black transition-colors"
            >
              Upload a Space
            </RouterLink>
            <RouterLink
              to="/fair-share-crew"
              class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Join FairShare
            </RouterLink>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
              @click="onTalkToSales"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16 -mt-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="tier in pricingTiers"
            :key="tier.name"
            :class="[
              'relative border rounded-lg border-border hover:shadow-medium transition-all duration-300 bg-card text-card-foreground',
              tier.name === 'Starter' ? 'border-green-500 shadow-medium' : ''
            ]"
          >
            <div v-if="tier.label" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-xplor-yellow text-xplor-black font-medium px-4 py-1 rounded-md">
                {{ tier.label }}
              </div>
            </div>

            <div class="text-center pb-4 p-6">
              <div class="w-12 h-12 bg-xplor-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <component :is="tier.icon" class="h-6 w-6 text-xplor-yellow" />
              </div>
              <div class="text-2xl font-bold text-foreground">{{ tier.name }}</div>
              <div class="flex items-end justify-center gap-1 mb-2">
                <span class="text-4xl font-bold text-foreground">{{ tier.price }}</span>
              </div>
              <p class="text-center text-muted-foreground">
                {{ tier.description }}
              </p>
            </div>

            <div class="space-y-6 p-6 pt-0">
              <div class="space-y-3">
                <div v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
                  <Check class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span class="text-sm text-muted-foreground">{{ feature }}</span>
                </div>
              </div>

              <RouterLink
                v-if="tier.name !== 'Enterprise / Custom'"
                :to="getTierLink(tier)"
                :class="[
                  'w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background border',
                  tier.buttonVariant === 'default'
                    ? 'bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black border-transparent'
                    : 'bg-transparent text-foreground hover:bg-accent border-input'
                ]"
              >
                {{ tier.buttonText }}
                <ArrowRight class="h-4 w-4 ml-2" />
              </RouterLink>
              <button
                v-else
                type="button"
                :class="[
                  'w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background border',
                  tier.buttonVariant === 'default'
                    ? 'bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black border-transparent'
                    : 'bg-transparent text-foreground hover:bg-accent border-input'
                ]"
                @click="onEnterpriseCall"
              >
                {{ tier.buttonText }}
                <ArrowRight class="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Justification Section -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">
          You Only Pay for What Grows Your Business.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in valueJustifications"
            :key="item.title"
            class="border border-border rounded-lg text-center bg-card text-card-foreground"
          >
            <div class="p-6">
              <div class="w-12 h-12 bg-xplor-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <component :is="item.icon" class="h-6 w-6 text-xplor-yellow" />
              </div>
              <div class="text-lg text-foreground font-bold">{{ item.title }}</div>
            </div>
            <div class="px-6 pb-6 -mt-4">
              <p class="text-muted-foreground text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div
              v-for="(faq, index) in faqs.slice(0, Math.ceil(faqs.length / 2))"
              :key="`faq-left-${index}`"
            >
              <h3 class="font-semibold text-foreground mb-2">{{ faq.question }}</h3>
              <p class="text-muted-foreground text-sm">{{ faq.answer }}</p>
            </div>
          </div>
          <div class="space-y-6">
            <div
              v-for="(faq, index) in faqs.slice(Math.ceil(faqs.length / 2))"
              :key="`faq-right-${index}`"
            >
              <h3 class="font-semibold text-foreground mb-2">{{ faq.question }}</h3>
              <p class="text-muted-foreground text-sm">{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
          >
            Read All FAQs
          </button>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 bg-muted/30">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-foreground mb-6">
          Start Free. Scale Smart. Xplor as You Grow.
        </h2>
        <p class="text-lg text-muted-foreground mb-8">
          Whether you're listing your first yacht, launching a digital dealership, or managing 50 hotel suites — Xplor is built for you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/spaces"
            class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black transition-colors"
          >
            Upload a Space
          </RouterLink>
          <RouterLink
            to="/fair-share-crew"
            class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-input hover:bg-accent transition-colors"
          >
            Join FairShare
          </RouterLink>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-input hover:bg-accent transition-colors"
            @click="onBookCall"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import pricingHero from '@/assets/pricing-hero.jpg'

import {
  Check,
  Star,
  Users,
  BarChart3,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Crown,
  Building,
  Upload,
  Calendar,
  Smartphone,
  Eye,
  Share2,
  Settings,
  TrendingUp,
  Palette,
  Link2,
  Phone,
  Unlock,
  Target,
  HelpCircle
} from 'lucide-vue-next'

interface PricingTier {
  name: string
  price: string
  label: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: 'default' | 'outline'
  popular: boolean
  icon: any
}

interface ValueJustification {
  title: string
  description: string
  icon: any
}

interface FaqItem {
  question: string
  answer: string
}

// Replace with real auth integration if available
const user = ref<unknown | null>(null)

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Free',
    label: '',
    description: 'Perfect for: Crew, agents, or owners listing a few spaces.',
    features: [
      'Upload up to 5 spaces',
      'Unlimited views',
      'Matterport, 360°, video & media uploads',
      'Public exposure on xplor.io',
      'Booking & contact buttons',
      'Eligibility for FairShare program (yacht crew only)',
      'Basic analytics',
      'Editable listings'
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'default',
    popular: false,
    icon: Star
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    label: 'Launching Soon',
    description: 'Perfect for: Agencies, dealerships, photographers, or multi-listing owners.',
    features: [
      'All Starter features',
      'Advanced analytics & lead insights',
      'Calendar integration (for rentals, charters, bookings)',
      'API plugin support (Resy, Cloudbeds, Turo, CharterPad, etc.)',
      'White-labeled listing pages (hide Xplor branding)',
      'Custom branded URLs (e.g. yourbrand.xplor.io)',
      'Upload up to 100 spaces',
      'Priority support & onboarding'
    ],
    buttonText: 'Join Waitlist',
    buttonVariant: 'outline',
    popular: false,
    icon: Zap
  },
  {
    name: 'Enterprise / Custom',
    price: 'Custom',
    label: 'Tailored Solutions',
    description: 'Perfect for: Large brokerages, hotel groups, manufacturers, developers.',
    features: [
      'All Pro features',
      'Unlimited listings',
      'Dedicated account manager',
      'Custom integrations (CRM, PMS, rental systems)',
      'API & data sync',
      'SLA support / data protection agreements'
    ],
    buttonText: 'Book a Discovery Call',
    buttonVariant: 'default',
    popular: false,
    icon: Building
  }
]

const valueJustifications: ValueJustification[] = [
  {
    title: 'Always-Free Core',
    description: 'Upload. Share. Explore. Get seen — without limits on viewers.',
    icon: Unlock
  },
  {
    title: 'Premium Tools = Pro Results',
    description: 'Calendar integrations, advanced analytics, and white labeling to help scale faster.',
    icon: Settings
  },
  {
    title: 'FairShare Is Always Free',
    description: 'We never charge crew to join or earn commission.',
    icon: Share2
  },
  {
    title: 'Designed to Grow With You',
    description: "Whether you're listing one yacht or managing 100 showrooms, we'll match your pace.",
    icon: TrendingUp
  }
]

const faqs: FaqItem[] = [
  {
    question: 'Is Xplor free to use?',
    answer:
      'Yes. The Starter plan is free and includes generous tools for listing and sharing your spaces.'
  },
  {
    question: 'Do I need a subscription to earn with FairShare?',
    answer: 'No. Crew can join and earn FairShare commission 100% free.'
  },
  {
    question: 'What counts as a "space"?',
    answer:
      'Any unique space with a virtual tour or media package — a yacht, villa, hotel suite, car, jet, restaurant, etc.'
  },
  {
    question: 'Can I upgrade later?',
    answer: "Yes — you'll be able to upgrade at any time once Pro is launched."
  },
  {
    question: 'Can I use my own booking system?',
    answer: 'Yes — Pro and Enterprise plans support API plugins or custom links.'
  }
]

function getTierLink(tier: PricingTier) {
  if (tier.buttonText === 'Get Started Free') {
    return user.value ? '/dashboard' : '/auth'
  }
  if (tier.buttonText === 'Join Waitlist') {
    return '/trial'
  }
  return '/trial'
}

function onTalkToSales() {
  window.location.href = '/contact'
}

function onEnterpriseCall() {
  window.location.href = '/contact'
}

function onBookCall() {
  window.location.href = '/contact'
}
</script>
