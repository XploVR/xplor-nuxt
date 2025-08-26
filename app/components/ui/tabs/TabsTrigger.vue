<script setup lang="ts">
import { inject, computed } from 'vue'
defineOptions({ name: 'TabsTrigger' })
const props = defineProps<{ value: string; className?: string; disabled?: boolean }>()
const ctx = inject<any>('tabsCtx')
const selected = computed(() => ctx?.value?.value === props.value)
function onClick(){ if (!props.disabled) ctx?.setValue?.(props.value) }
function onKeydown(e: KeyboardEvent){
  if (props.disabled) return
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ctx?.setValue?.(props.value) }
}
</script>

<template>
  <button
    role="tab" type="button"
    :aria-selected="selected" :tabindex="selected ? 0 : -1"
    :data-state="selected ? 'active' : 'inactive'" :disabled="disabled"
    @click="onClick" @keydown="onKeydown"
    :class="[
      'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm',
      'focus-visible:outline-none focus-visible:ring-2 ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      props.className
    ]"
  >
    <slot />
  </button>
</template>

