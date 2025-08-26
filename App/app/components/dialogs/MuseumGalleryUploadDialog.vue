
<template>
  <BaseDialog v-model:open="innerOpen">
    <template #title>Create Museum/Art Gallery Listing</template>
    <template #description>Create a comprehensive listing with detailed information and virtual tours.</template>
    <div class="flex-1 overflow-auto">
      <MuseumGalleryForm />
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'
import MuseumGalleryForm from '@/components/forms/MuseumGalleryForm.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))
</script>
