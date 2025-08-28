
<template>
  <Card class="sticky top-4 border-2 border-gradient-to-br from-blue-500/20 to-purple-500/20 bg-gradient-to-br from-blue-50/5 to-purple-50/5 dark:from-blue-950/10 dark:to-purple-950/10">
    <CardContent class="p-6 space-y-4">
      <div class="text-center">
        <span class="inline-block mb-3 px-2 py-1 rounded bg-blue-600 text-white text-xs">Professional Partner</span>
        <div class="flex items-center justify-center gap-2 mb-2">
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600"><circle cx="12" cy="12" r="10" fill="currentColor" /></svg>
          <h3 class="text-xl font-bold text-foreground">Matterport</h3>
        </div>
        <p class="text-sm text-muted-foreground">Industry-leading 3D capture technology</p>
      </div>

      <div class="space-y-3">
        <div class="flex items-start gap-2">
          <span class="w-4 h-4 mt-0.5 inline-block rounded-full"></span>
          <div>
            <p class="text-sm font-medium">4K Quality Scans</p>
            <p class="text-xs text-muted-foreground">Ultra-high resolution virtual tours</p>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <span class="w-4 h-4 mt-0.5 inline-block rounded-full"></span>
          <div>
            <p class="text-sm font-medium">Any Space Type</p>
            <p class="text-xs text-muted-foreground">Yachts, homes, jets, showrooms</p>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <span class="w-4 h-4 mt-0.5 inline-block rounded-full"></span>
          <div>
            <p class="text-sm font-medium">Quick Processing</p>
            <p class="text-xs text-muted-foreground">Ready in 24–48 hours</p>
          </div>
        </div>
      </div>

      <div class="relative bg-muted rounded-lg overflow-hidden">
        <div class="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
          <div class="text-center">
            <div class="w-8 h-8 mx-auto mb-2 rounded-full border flex items-center justify-center">▶</div>
            <p class="text-xs text-muted-foreground">Watch Demo</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-3 text-center">
        <p class="text-sm font-semibold text-foreground mb-1">Xplor Members Save 15%</p>
        <p class="text-xs text-muted-foreground">Professional capture starts at $299</p>
      </div>

      <div class="space-y-2">
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md" @click="openMatterport">
          Get a Quote
        </button>
        <button class="w-full border px-3 py-2 rounded-md" @click="watchDemo">View Examples</button>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'

function openMatterport(){ window.open('https://matterport.com', '_blank') }
function watchDemo(){ alert('Demo video placeholder') }
</script>

