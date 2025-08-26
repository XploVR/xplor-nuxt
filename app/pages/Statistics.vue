<template>
  <div class="p-6 space-y-8 bg-background min-h-screen">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-foreground">Statistics & Analytics</h1>
        <p class="text-muted-foreground">Track performance and engagement across all your spaces</p>
      </div>
      <div class="flex items-center gap-3">
        <Button variant="outline">Export CSV</Button>
        <Button>Export PDF</Button>
      </div>
    </div>

    <Card>
      <CardHeader><CardTitle>Views (7 days)</CardTitle></CardHeader>
      <CardContent>
        <p class="text-muted-foreground">[Chart placeholder: integrate Recharts/echarts as needed]</p>
      </CardContent>
    </Card>

    <div class="grid lg:grid-cols-3 gap-6">
      <Card class="lg:col-span-2">
        <CardHeader><CardTitle>Top Performing Spaces</CardTitle></CardHeader>
        <CardContent class="space-y-3">
          <div v-for="s in topSpaces" :key="s.name" class="flex items-center justify-between border rounded p-3">
            <div class="font-medium">{{ s.name }}</div>
            <div class="text-sm text-muted-foreground">{{ s.views }} views • {{ s.uniqueViews }} unique</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Devices</CardTitle></CardHeader>
        <CardContent>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>Desktop — 65%</li>
            <li>Mobile — 25%</li>
            <li>Tablet — 10%</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const topSpaces = [
  { name:'Downtown Office Tour', views:1247, uniqueViews:934 },
  { name:'Luxury Apartment Showcase', views:1089, uniqueViews:823 },
  { name:'Restaurant Virtual Tour', views:856, uniqueViews:645 },
]
</script>