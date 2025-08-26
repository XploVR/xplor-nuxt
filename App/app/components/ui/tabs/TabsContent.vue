<script setup lang="ts">
import { inject, computed } from 'vue'
defineOptions({ name: 'TabsContent' })
const props = defineProps<{ value: string; className?: string }>()
const ctx = inject<any>('tabsCtx')
const selected = computed(() => ctx?.value?.value === props.value)
</script>

<template>
  <div v-show="selected" role="tabpanel" :data-state="selected ? 'active' : 'inactive'" :class="['tabs-content', props.className]">
    <slot />
  </div>
</template>

