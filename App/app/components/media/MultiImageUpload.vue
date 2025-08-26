<template>
  <div class="multi-image-upload">
    <label class="block text-sm font-medium mb-2">Additional Images</label>
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      <input
        type="file"
        @change="handleFileChange"
        accept="image/*"
        multiple
        class="hidden"
        ref="fileInput"
      />
      <button @click="$refs.fileInput.click()" class="px-4 py-2 bg-blue-600 text-white rounded">
        Upload Images
      </button>
    </div>
    <div v-if="selectedImages.length > 0" class="mt-4 grid grid-cols-3 gap-2">
      <div v-for="(image, index) in selectedImages" :key="index" class="relative">
        <img :src="image.preview" class="w-full h-24 object-cover rounded" />
        <button @click="removeImage(index)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const selectedImages = ref([])

const handleFileChange = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImages.value.push({
        file,
        preview: e.target.result
      })
      emit('update:modelValue', selectedImages.value)
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  selectedImages.value.splice(index, 1)
  emit('update:modelValue', selectedImages.value)
}
</script>

