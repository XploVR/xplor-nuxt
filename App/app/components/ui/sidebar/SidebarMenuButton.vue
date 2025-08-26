<script setup lang="ts">
defineProps<{
  asChild?: boolean
  isActive?: boolean
  class?: string
}>()
</script>

<template>
  <!-- asChild=true: keep the slot as the clickable element but still provide layout/styling wrapper -->
  <div
    v-if="asChild"
    :class="[
      'w-full inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors',
      isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-xplor-yellow'
               : 'hover:bg-sidebar-accent/50 text-sidebar-foreground',
      $props.class
    ]"
  >
    <slot />
  </div>

  <!-- asChild=false: make this button clickable itself -->
  <button
    v-else
    type="button"
    :class="[
      'w-full inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors',
      isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-xplor-yellow'
               : 'hover:bg-sidebar-accent/50 text-sidebar-foreground',
      $props.class
    ]"
  >
    <slot />
  </button>
</template>

