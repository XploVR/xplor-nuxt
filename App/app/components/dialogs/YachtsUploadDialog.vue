<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50" 
      @click="handleOpenChange(false)"
    ></div>
    
    <!-- Dialog -->
    <div class="relative bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="p-6 border-b">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Ship class="h-5 w-5" />
              Create Yacht Listing
            </h2>
            <p class="text-sm text-gray-600 mt-1">
              Configure yacht rules, access parameters, and charter information.
            </p>
          </div>
          <button
            @click="handleOpenChange(false)"
            class="rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X class="h-4 w-4" />
            <span class="sr-only">Close</span>
          </button>
        </div>
      </div>
      
      <!-- Content -->
      <div class="flex-1 overflow-auto p-6">
        <YachtsUploadForm 
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Ship, X } from 'lucide-vue-next'
import YachtsUploadForm from '@/components/forms/YachtsUploadForm.vue'

const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:open'])

const isSubmitting = ref(false)

const handleOpenChange = (value) => {
  emit('update:open', value)
}

const handleSubmit = async (data) => {
  try {
    isSubmitting.value = true
    // Here you would typically send the data to your backend
    console.log('Yacht data:', data)
    
    // Simple success notification (replace with your preferred method)
    console.log('✅ Yacht listing created successfully!')
    handleOpenChange(false)
  } catch (error) {
    console.error('❌ Failed to create listing. Please try again.')
    throw error
  } finally {
    isSubmitting.value = false
  }
}

const handleCancel = () => {
  handleOpenChange(false)
}
</script>