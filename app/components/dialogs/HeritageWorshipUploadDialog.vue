
<template>
  <BaseDialog v-model:open="open" title="Upload Heritage Site &amp; Place of Worship" class="max-w-6xl">
    <HeritageWorshipForm />
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import HeritageWorshipForm from '@/components/forms/HeritageWorshipForm.vue'
import BaseDialog from '@/components/common/BaseDialog.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const open = ref(props.open)
watch(() => props.open, v => open.value = v)
watch(open, v => emit('update:open', v))
</script>
