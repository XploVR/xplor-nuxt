<template>
  <div class="min-h-screen bg-background p-6">
    <div class="max-w-5xl mx-auto space-y-6">
      <div class="flex items-center gap-3">
        <Search class="h-5 w-5 text-muted-foreground" />
        <Input v-model="query" placeholder="Search FAQs..." />
      </div>

      <div v-for="group in grouped" :key="group.category">
        <h2 class="text-xl font-semibold mt-6 mb-2">{{ group.category }}</h2>
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem v-for="(faq, idx) in group.items" :key="idx" :value="`${group.category}-${idx}`">
            <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
            <AccordionContent>{{ faq.answer }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <MatterportAdBanner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import MatterportAdBanner from '@/components/MatterportAdBanner.vue'

interface FAQ { question: string; answer: string; category: string }
const faqs: FAQ[] = [
  { category:'General', question:'What is Xplor?', answer:'Xplor is a platform that lets you explore, upload, and monetize immersive virtual tours of real-world spaces — including yachts, homes, hotels, cars, restaurants, and jets.'},
  { category:'General', question:'Who can use Xplor?', answer:'Anyone can browse spaces. Owners, crew, agents, and professionals can upload and manage listings.'},
  { category:'Uploading', question:'How do I upload a space?', answer:'Click [Upload a Space] and follow the form. Add media, tours, booking links, and documents.'},
  { category:'FairShare', question:'What is FairShare?', answer:"FairShare is Xplor's commission-sharing model. It splits 50% of the net charter commission equally among active crew on eligible yachts."},
  { category:'Pricing', question:'Is it free to list?', answer:'Yes — basic listings are free with fair usage limits. Premium features available on paid plans.'},
]

const query = ref('')
const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  if (!q) return faqs
  return faqs.filter(f => (f.question + ' ' + f.answer + ' ' + f.category).toLowerCase().includes(q))
})
const grouped = computed(() => {
  const map: Record<string, FAQ[]> = {}
  for (const f of filtered.value) { (map[f.category] ||= []).push(f) }
  return Object.entries(map).map(([category, items]) => ({ category, items }))
})
</script>