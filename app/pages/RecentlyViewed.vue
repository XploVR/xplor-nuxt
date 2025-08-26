<template>
  <div class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-foreground mb-2">Recently Viewed</h1>
        <p class="text-muted-foreground">Your browsing history of luxury spaces and virtual tours</p>
      </div>
      <Button variant="outline" @click="clearHistory">
        <Eye class="w-4 h-4 mr-2" /> Clear History
      </Button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="space in recentSpaces" :key="space.id" class="overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
        <div class="relative">
          <img :src="space.thumbnail" :alt="space.title" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute top-4 left-4">
            <Badge variant="secondary" class="bg-background/80 backdrop-blur-sm">{{ space.type }}</Badge>
          </div>
          <div class="absolute top-4 right-4">
            <div class="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
              <Eye class="w-3 h-3 text-muted-foreground" />
              <span class="text-xs text-muted-foreground">{{ space.views }}</span>
            </div>
          </div>
        </div>

        <CardHeader class="pb-3">
          <CardTitle class="line-clamp-1">{{ space.title }}</CardTitle>
          <div class="flex items-center gap-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1"><Calendar class="w-4 h-4" /> {{ space.viewedAt }}</div>
            <div class="flex items-center gap-1"><MapPin class="w-4 h-4" /> {{ space.location }}</div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription class="line-clamp-2">{{ space.description }}</CardDescription>
          <div class="mt-4 flex items-center gap-2">
            <Button size="sm" variant="outline">Open</Button>
            <Button size="sm" variant="ghost" class="flex items-center gap-2">
              <Share2 class="w-4 h-4" /> Share
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, Calendar, MapPin, Share2 } from 'lucide-vue-next'

const recentSpaces = ref([
  { id:1, title:'Modern Luxury Villa - Monaco', type:'Property', viewedAt:'2 hours ago', location:'Monaco, French Riviera', thumbnail:'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=400&q=80', description:'Stunning contemporary villa with panoramic ocean views', views:1247 },
  { id:2, title:'Superyacht Azure Dreams', type:'Yacht', viewedAt:'1 day ago', location:'Cannes, France', thumbnail:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80', description:'180ft luxury superyacht with full crew and amenities', views:892 },
  { id:3, title:'Penthouse Suite - Manhattan', type:'Property', viewedAt:'3 days ago', location:'New York, USA', thumbnail:'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=400&q=80', description:'Exclusive penthouse with 360° city views', views:2103 },
  { id:4, title:'Historic Castle Estate', type:'Property', viewedAt:'1 week ago', location:'Tuscany, Italy', thumbnail:'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=400&q=80', description:'Restored 16th century castle with vineyard', views:567 },
])
function clearHistory(){ recentSpaces.value = [] }
</script>