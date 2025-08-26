
<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
      <DialogHeader>
        <DialogTitle class="flex items-center gap-2">
          <Plane class="h-5 w-5" />
          Create Aviation Listing
        </DialogTitle>
        <DialogDescription>
          Create a comprehensive listing for airports, aircraft, hangars, and aviation services with detailed specifications and virtual tours.
        </DialogDescription>
      </DialogHeader>
      <div class="flex-1 overflow-auto">
        <AviationForm @submit="handleSubmit" @cancel="emit('update:open', false)" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Plane } from 'lucide-vue-next'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// If AviationForm.vue is a default export, use:
import AviationForm from '@/components/forms/AviationForm.vue'
// If it's a named export, ensure the file and export match exactly:
import { toast } from 'vue-sonner'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{(e:'update:open', val:boolean):void}>()

async function handleSubmit(data: any) {
  try {
    console.log('Aviation data:', data)
    toast.success('Aviation listing created successfully!')
    emit('update:open', false)
  } catch (e) {
    toast.error('Failed to create listing. Please try again.')
    throw e
  }
}
</script>
