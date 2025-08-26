
<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
      <DialogHeader>
        <DialogTitle class="flex items-center gap-2">
          <Car class="h-5 w-5" />
          Create Car/Vehicle Listing
        </DialogTitle>
        <DialogDescription>
          Create a comprehensive car or vehicle listing with detailed specifications and virtual tours.
        </DialogDescription>
      </DialogHeader>
      <div class="flex-1 overflow-auto">
        <CarUploadForm :isSubmitting="isSubmitting" @submit="handleSubmit" @cancel="() => emit('update:open', false)" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Car } from 'lucide-vue-next'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import CarUploadForm from "@/components/forms/CarUploadForm.vue";
import { toast } from 'vue-sonner'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{(e:'update:open', val:boolean):void}>()

const isSubmitting = ref(false)

async function handleSubmit(data: any) {
  try {
    isSubmitting.value = true
    console.log('Car/Vehicle data submitted:', data)
    toast.success('Car/Vehicle listing created successfully!')
    emit('update:open', false)
  } catch (e) {
    toast.error('Failed to create listing. Please try again.')
    throw e
  } finally {
    isSubmitting.value = false
  }
}
</script>
