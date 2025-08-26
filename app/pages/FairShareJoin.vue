<template>
  <div class="min-h-screen bg-background">
    <section class="py-12 border-b">
      <div class="max-w-6xl mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold">Join FairShare (Crew 50% Commission)</h1>
        <p class="text-muted-foreground mt-2">Fill out your details and track your live CRI+ score.</p>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <!-- Form -->
        <Card class="lg:col-span-2">
          <CardHeader><CardTitle>Crew Application</CardTitle><CardDescription>Numbers only where indicated.</CardDescription></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-1"><Label for="fullName">Full Name</Label><Input id="fullName" v-model="form.fullName" required /></div>
              <div class="space-y-1"><Label for="email">Email</Label><Input id="email" type="email" v-model="form.email" required /></div>
              <div class="space-y-1"><Label for="nationality">Nationality</Label><Input id="nationality" v-model="form.nationality" required /></div>
              <div class="space-y-1"><Label for="department">Primary Department</Label><Input id="department" v-model="form.primaryDepartment" required /></div>
              <div class="space-y-1"><Label for="position">Position Applied For</Label><Input id="position" v-model="form.positionAppliedFor" required /></div>
            </div>
            <Separator />
            <div class="grid md:grid-cols-3 gap-4">
              <div class="space-y-1"><Label>Total Years Yachting</Label><Input type="number" v-model.number="form.totalYearsYachting" min="0" /></div>
              <div class="space-y-1"><Label>Number of Yachts</Label><Input type="number" v-model.number="form.numberOfYachts" min="0" /></div>
              <div class="space-y-1"><Label>Largest GRT</Label><Input type="number" v-model.number="form.largestGRT" min="0" /></div>
              <div class="space-y-1"><Label>Longevity Last Yacht (months)</Label><Input type="number" v-model.number="form.longevityLastYacht" min="0" /></div>
              <div class="space-y-1"><Label>Sea Miles Logged</Label><Input type="number" v-model.number="form.seaMilesLogged" min="0" /></div>
              <div class="space-y-1"><Label>Atlantic Crossings</Label><Input type="number" v-model.number="form.atlanticCrossings" min="0" /></div>
              <div class="space-y-1"><Label>Mediterranean Crossings</Label><Input type="number" v-model.number="form.mediterraneanCrossings" min="0" /></div>
              <div class="space-y-1"><Label>Indian Crossings</Label><Input type="number" v-model.number="form.indianCrossings" min="0" /></div>
              <div class="space-y-1"><Label>Pacific Crossings</Label><Input type="number" v-model.number="form.pacificCrossings" min="0" /></div>
              <div class="space-y-1"><Label>Suez Transits</Label><Input type="number" v-model.number="form.suezTransits" min="0" /></div>
              <div class="space-y-1"><Label>Panama Transits</Label><Input type="number" v-model.number="form.panamaTransits" min="0" /></div>
              <div class="space-y-1"><Label>Corinth Transits</Label><Input type="number" v-model.number="form.corinthTransits" min="0" /></div>
              <div class="space-y-1"><Label>Charter Revenue Contributed ($)</Label><Input type="number" v-model.number="form.charterRevenue" min="0" /></div>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox id="terms" v-model:checked="form.termsAccepted" />
              <Label for="terms">I accept the terms</Label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox id="cri" v-model:checked="form.criAccepted" />
              <Label for="cri">I agree to CRI+ scoring</Label>
            </div>
            <Button class="mt-2" @click="submit">Submit</Button>
          </CardContent>
        </Card>

        <!-- Live CRI+ (placeholder) -->
        <Card>
          <CardHeader><CardTitle>Live CRI+ Score</CardTitle></CardHeader>
          <CardContent>
            <div class="text-5xl font-bold">{{ criScore }}</div>
            <p class="text-muted-foreground text-sm mt-2">Updates as you fill in the form.</p>
            <Progress :model-value="criScore" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { toast } from 'vue-sonner'

const form = reactive({
  fullName:'', email:'', nationality:'', primaryDepartment:'', positionAppliedFor:'',
  totalYearsYachting:0, numberOfYachts:0, largestGRT:0, longevityLastYacht:0, seaMilesLogged:0,
  atlanticCrossings:0, mediterraneanCrossings:0, indianCrossings:0, pacificCrossings:0,
  suezTransits:0, panamaTransits:0, corinthTransits:0, charterRevenue:0,
  termsAccepted:false, criAccepted:false
})

const criScore = computed(() => {
  // simple placeholder scoring
  let s = 0
  s += Math.min(20, form.totalYearsYachting)
  s += Math.min(10, form.numberOfYachts)
  s += Math.min(10, form.largestGRT/1000)
  s += Math.min(15, form.longevityLastYacht/6)
  s += Math.min(15, form.seaMilesLogged/10000)
  s += Math.min(10, (form.atlanticCrossings + form.mediterraneanCrossings + form.indianCrossings + form.pacificCrossings))
  s += Math.min(10, (form.suezTransits + form.panamaTransits + form.corinthTransits))
  s += Math.min(10, form.charterRevenue/100000)
  return Math.round(Math.min(100, s))
})

function submit(){
  if(!form.termsAccepted || !form.criAccepted) { toast.error('Please accept the terms and CRI+'); return }
  toast.success('Application submitted')
}
</script>