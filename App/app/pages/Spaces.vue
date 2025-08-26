<template>
  <div class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold">Your Spaces</h1>
        <p class="text-muted-foreground">Manage, share, and edit your uploaded tours</p>
      </div>
      <div class="flex gap-2">
        <Button variant="outline" @click="showFilters = !showFilters"><Filter class="w-4 h-4 mr-2" /> Filters</Button>
        <Button @click="uploadDialogOpen=true"><Plus class="w-4 h-4 mr-2" /> New Space</Button>
      </div>
    </div>

    <div v-if="showFilters" class="p-4 border rounded-lg">
      <div class="grid md:grid-cols-4 gap-4">
        <div><Label>Status</Label><Select multiple><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger><SelectContent><SelectItem value="Active">Active</SelectItem><SelectItem value="Draft">Draft</SelectItem><SelectItem value="Processing">Processing</SelectItem></SelectContent></Select></div>
        <div><Label>Visibility</Label><Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger><SelectContent><SelectItem value="Public">Public</SelectItem><SelectItem value="Unlisted">Unlisted</SelectItem><SelectItem value="Private">Private</SelectItem></SelectContent></Select></div>
        <div><Label>Type</Label><Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger><SelectContent><SelectItem value="Office">Office</SelectItem><SelectItem value="Residential">Residential</SelectItem></SelectContent></Select></div>
        <div><Label>Sort</Label><Select v-model="sortBy"><SelectTrigger><SelectValue :placeholder="sortByLabel" /></SelectTrigger><SelectContent><SelectItem value="recommended">Recommended</SelectItem><SelectItem value="newest">Newest</SelectItem><SelectItem value="views-high">Views (high→low)</SelectItem></SelectContent></Select></div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="s in sortedSpaces" :key="s.id" class="overflow-hidden">
        <img :src="s.thumbnail" :alt="s.name" class="w-full h-40 object-cover" />
        <CardHeader class="pb-2"><CardTitle class="line-clamp-1">{{ s.name }}</CardTitle><CardDescription>{{ s.type }} • {{ s.status }} • {{ s.visibility }}</CardDescription></CardHeader>
        <CardContent class="flex items-center justify-between">
          <div class="text-sm text-muted-foreground">{{ s.views }} views</div>
          <div class="flex gap-2">
            <Button size="sm" variant="outline" @click="openShare(s)">Share</Button>
            <Button size="sm" variant="ghost">Edit</Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <ShareDialog v-if="shareDialogOpen" :open="shareDialogOpen" @update:open="v=>shareDialogOpen=v" :space="selectedSpace" />
    <UploadSpaceDialog :open="uploadDialogOpen" @update:open="v=>uploadDialogOpen=v" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Filter, Plus } from 'lucide-vue-next'
import ShareDialog from '@/components/ShareDialog.vue'
import UploadSpaceDialog from '@/components/UploadSpaceDialog.vue'

const showFilters = ref(false)
const shareDialogOpen = ref(false)
const uploadDialogOpen = ref(false)
const selectedSpace = ref<any>(null)
const sortBy = ref('recommended')

const spaces = ref([
  { id:1, name:'Downtown Office Tour', description:'Professional office space showcase', status:'Active', visibility:'Public', views:1247, created:'2024-01-15', type:'Office', thumbnail:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
  { id:2, name:'Luxury Apartment Showcase', description:'High-end residential property tour', status:'Active', visibility:'Unlisted', views:856, created:'2024-01-12', type:'Residential', thumbnail:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id:3, name:'Restaurant Virtual Tour', description:'Interactive dining experience', status:'Processing', visibility:'Public', views:2103, created:'2024-01-10', type:'Restaurant', thumbnail:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
])

const sortByLabel = computed(() => ({ recommended:'Recommended', newest:'Newest', 'views-high':'Views (high→low)' } as any)[sortBy.value] || 'Recommended')

const sortedSpaces = computed(() => {
  const arr = [...spaces.value]
  if (sortBy.value === 'newest') return arr.sort((a,b)=>+new Date(b.created)-+new Date(a.created))
  if (sortBy.value === 'views-high') return arr.sort((a,b)=>b.views-a.views)
  return arr
})

function openShare(s:any){ selectedSpace.value = s; shareDialogOpen.value = true }
</script>