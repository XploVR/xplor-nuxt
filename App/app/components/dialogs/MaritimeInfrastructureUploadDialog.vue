
<template>
  <BaseDialog v-model:open="innerOpen">
    <template #title>Upload Maritime Infrastructure</template>
    <MaritimeInfrastructureForm />
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'
import MaritimeInfrastructureForm from '@/components/forms/MaritimeInfrastructureForm.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))
</script>
