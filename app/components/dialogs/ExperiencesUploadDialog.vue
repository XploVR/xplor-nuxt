<template>
  <BaseDialog v-model:open="isOpen" :title="dialogTitle">
    <div class="space-y-4">
      <p class="text-sm text-gray-600">Upload details for this space type.</p>
      
      <!-- Form content will go here -->
      <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p class="text-sm text-gray-500">Form component placeholder - replace with actual form</p>
      </div>
      
      <div class="flex justify-end space-x-2 pt-4">
        <button
          @click="isOpen = false"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          @click="handleSubmit"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Upload
        </button>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'

const props = defineProps({
  open: Boolean,
  title: String
})

const emit = defineEmits(['update:open', 'submit'])

const isOpen = ref(props.open)

const dialogTitle = computed(() => props.title || 'Upload Space')

watch(() => props.open, (newVal) => {
  isOpen.value = newVal
})

watch(isOpen, (newVal) => {
  emit('update:open', newVal)
})

const handleSubmit = () => {
  // Handle form submission logic here
  emit('submit')
  isOpen.value = false
}
</script>

