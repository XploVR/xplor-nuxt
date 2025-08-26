
<template>
  <BaseDialog v-model:open="innerOpen">
    <template #title>Create School/Educational Facility Listing</template>
    <template #description>Create a comprehensive listing with details, facilities, and virtual tours.</template>
    <div class="flex-1 overflow-auto">
      <SchoolEducationForm />
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'
import SchoolEducationForm from '@/components/forms/SchoolEducationForm.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))
</script>
