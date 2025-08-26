<template>
  <div class="featured-image-upload">
    <label class="block text-sm font-medium mb-2">Featured Image</label>
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      <input
        type="file"
        @change="handleFileChange"
        accept="image/*"
        class="hidden"
        ref="fileInput"
      />
      <div v-if="!selectedImage" @click="$refs.fileInput.click()" class="cursor-pointer">
        <p class="text-gray-500">Click to upload featured image</p>
      </div>
      <div v-else class="relative">
        <img :src="selectedImage.preview" alt="Featured" class="max-h-48 mx-auto rounded" />
        <button @click="removeImage" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const selectedImage = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImage.value = {
        file,
        preview: e.target.result
      }
      emit('update:modelValue', selectedImage.value)
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  selectedImage.value = null
  emit('update:modelValue', null)
}
</script>

