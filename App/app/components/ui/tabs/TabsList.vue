<script setup lang="ts">
import { inject } from 'vue'
defineOptions({ name: 'TabsList' })
const props = defineProps<{ className?: string }>()
const ctx = inject<any>('tabsCtx')
</script>

<template>
  <div role="tablist" :aria-orientation="ctx?.orientation" :class="['tabs-list', props.className]">
    <slot />
  </div>
</template>
