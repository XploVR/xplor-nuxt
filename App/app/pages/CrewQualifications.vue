<template>
  <div class="max-w-4xl mx-auto p-6 space-y-6">
    <h1 class="text-3xl font-bold">Crew Qualifications</h1>
    <p class="text-muted-foreground">Track and upload your maritime certificates.</p>

    <Card>
      <CardHeader><CardTitle>Required Certificates</CardTitle></CardHeader>
      <CardContent class="space-y-3">
        <div v-for="(c, i) in certs" :key="i" class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">{{ c.name }}</div>
            <div class="text-xs text-muted-foreground">Validity: {{ c.validity }}</div>
          </div>
          <div class="flex items-center gap-2">
            <Input type="date" v-model="c.expiry" class="w-44" />
            <Button variant="outline">Upload</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const certs = ref([
  { name:'STCW Basic Safety', validity:'5 years', expiry:'' },
  { name:'ENG1 Medical', validity:'2 years', expiry:'' },
  { name:'Powerboat Level 2', validity:'No expiry (recommend refresh)', expiry:'' },
])
</script>