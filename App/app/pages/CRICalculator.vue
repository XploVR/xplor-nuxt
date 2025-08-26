<template>
  <div class="min-h-screen bg-background p-6">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
      <Card class="lg:col-span-2">
        <CardHeader>
          <CardTitle>CRI+ Calculator</CardTitle>
          <CardDescription>Enter your objective data to estimate your Crew Rating Index (CRI+).</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="space-y-1"><Label>Total Years Yachting</Label><Input type="number" v-model.number="f.years" min="0" /></div>
            <div class="space-y-1"><Label>Largest Yacht (m)</Label><Input type="number" v-model.number="f.largestMeters" min="0" /></div>
            <div class="space-y-1"><Label>Longest Tenure (months)</Label><Input type="number" v-model.number="f.longestMonths" min="0" /></div>
            <div class="space-y-1"><Label>Sea Miles</Label><Input type="number" v-model.number="f.miles" min="0" /></div>
            <div class="space-y-1"><Label>Crossings (total)</Label><Input type="number" v-model.number="f.crossings" min="0" /></div>
            <div class="space-y-1"><Label>Canal Transits (total)</Label><Input type="number" v-model.number="f.transits" min="0" /></div>
            <div class="space-y-1"><Label>Qualifications Score</Label><Input type="number" v-model.number="f.qualScore" min="0" max="100" /></div>
            <div class="space-y-1"><Label>Charter Revenue Contributed ($)</Label><Input type="number" v-model.number="f.revenue" min="0" /></div>
            <div class="space-y-1"><Label>Disciplinary Flags</Label><Input type="number" v-model.number="f.flags" min="0" /></div>
          </div>
          <Button @click="reset" variant="outline">Reset</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Live Score</CardTitle></CardHeader>
        <CardContent>
          <div class="text-5xl font-bold">{{ score }}</div>
          <Progress :model-value="score" class="mt-4" />
          <p class="text-muted-foreground text-sm mt-2">{{ verdict }}</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const f = reactive({ years:0, largestMeters:0, longestMonths:0, miles:0, crossings:0, transits:0, qualScore:0, revenue:0, flags:0 })

const score = computed(() => {
  let s = 0
  s += Math.min(20, f.years)                           // Experience
  s += Math.min(15, f.largestMeters/5)                 // Vessel size
  s += Math.min(15, f.longestMonths/6)                 // Longevity
  s += Math.min(15, f.miles/10000)                     // Sea miles
  s += Math.min(10, (f.crossings))                     // Ocean crossings
  s += Math.min(5, (f.transits))                       // Canal transits
  s += Math.min(10, f.qualScore/10)                    // Qualifications (normalized)
  s += Math.min(10, f.revenue/100000)                  // Revenue contribution
  s -= Math.min(10, f.flags * 2)                       // Penalty for flags
  return Math.max(0, Math.round(Math.min(100, s)))
})

const verdict = computed(() => {
  if (score.value >= 85) return 'Outstanding CRI+'
  if (score.value >= 70) return 'Strong CRI+'
  if (score.value >= 50) return 'Developing CRI+'
  return 'Entry-level CRI+'
})

function reset(){
  Object.assign(f, { years:0, largestMeters:0, longestMonths:0, miles:0, crossings:0, transits:0, qualScore:0, revenue:0, flags:0 })
}
</script>