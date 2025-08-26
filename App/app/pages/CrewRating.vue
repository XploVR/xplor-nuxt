<template>
  <div class="max-w-6xl mx-auto p-6 space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Crew Rating Overview</h1>
      <Button @click="$router.push({ name:'cri-calculator' })">Open CRI+ Calculator</Button>
    </div>

    <Card>
      <CardHeader><CardTitle>Your Current CRI+</CardTitle></CardHeader>
      <CardContent class="grid md:grid-cols-3 gap-6">
        <div class="p-4 border rounded-lg">
          <div class="text-sm text-muted-foreground">Overall Score</div>
          <div class="text-4xl font-bold">{{ 78 }}</div>
        </div>
        <div class="p-4 border rounded-lg">
          <div class="text-sm text-muted-foreground">Verified</div>
          <div class="text-xl font-semibold">Pending</div>
        </div>
        <div class="p-4 border rounded-lg">
          <div class="text-sm text-muted-foreground">Updated</div>
          <div class="text-xl font-semibold">2 weeks ago</div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>