<script setup lang="ts">
import { useSidebar } from './useSidebar'

const props = defineProps<{ class?: string }>()
const { open, state } = useSidebar()
</script>

<template>
  <aside
    :data-state="state"
    class="flex h-screen flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-[width] duration-200 ease-linear overflow-hidden"
    :class="props.class"
    :style="{
      width: open ? 'var(--sidebar-width,16rem)' : 'var(--sidebar-width-icon,3rem)'
    }"
    aria-expanded="open"
  >
    <slot />
  </aside>
</template>



