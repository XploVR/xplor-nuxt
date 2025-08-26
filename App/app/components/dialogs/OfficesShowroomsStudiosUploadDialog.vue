
<template>
  <BaseDialog v-model:open="innerOpen">
    <template #title>Upload Office, Showroom or Studio</template>
    <OfficesShowroomsStudiosForm />
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'
// Update the import path if the file is located elsewhere, for example:
import OfficesShowroomsStudiosForm from '@/components/forms/OfficesShowroomsStudiosForm.vue'
// Or create the file at src/components/Forms/OfficesShowroomsStudiosForm.vue if it does not exist.

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))
</script>
