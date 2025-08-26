<template>
  <div class="max-w-4xl mx-auto p-6 space-y-6">
    <h1 class="text-3xl font-bold">What is CRI+ (Crew Rating Index)?</h1>
    <p class="text-muted-foreground">
      CRI+ is an objective, numbers-only rating that reflects a yacht crew member’s experience, competency, and contribution.
      It avoids subjective opinions by relying solely on verifiable metrics.
    </p>

    <Card>
      <CardHeader><CardTitle>Key Components & Weights</CardTitle></CardHeader>
      <CardContent>
        <ul class="list-disc ml-6 space-y-1">
          <li>Experience (years) — 20%</li>
          <li>Vessel Size (largest meters) — 15%</li>
          <li>Tenure (longest months) — 15%</li>
          <li>Sea Miles — 15%</li>
          <li>Ocean Crossings — 10%</li>
          <li>Canal Transits — 5%</li>
          <li>Qualifications — 10%</li>
          <li>Revenue Contribution — 10%</li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Verification</CardTitle></CardHeader>
      <CardContent class="space-y-2">
        <p>All numbers should be evidenced (sea service letters, logbooks, certificates). Optional admin verification can lock scores.</p>
        <p>Penalties apply for disciplinary flags or unverifiable claims.</p>
      </CardContent>
    </Card>

    <div class="flex gap-3">
      <Button @click="$router.push({ name:'cri-calculator' })">Try the CRI+ Calculator</Button>
      <Button variant="outline" @click="$router.push({ name:'fairshare-join' })">Join FairShare</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>