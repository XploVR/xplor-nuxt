<script setup lang="ts">
import { provide, ref, watch, computed } from 'vue'

defineOptions({ name: 'Tabs' })

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const inner = ref<string>(props.modelValue ?? props.defaultValue ?? '')
watch(() => props.modelValue, v => { if (v != null) inner.value = v })

function setValue(v: string) {
  if (props.modelValue === undefined) inner.value = v
  emit('update:modelValue', v)
  emit('change', v)
}

const ctx = {
  value: inner,
  setValue,
  orientation: computed(() => props.orientation ?? 'horizontal')
}

provide('tabsCtx', ctx)
</script>

<template>
  <div :data-orientation="ctx.orientation" :class="['tabs-root', props.className]">
    <slot />
  </div>
</template>
