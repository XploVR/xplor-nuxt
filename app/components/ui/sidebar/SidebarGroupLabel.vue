<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <div :class="['px-2 py-1 text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/70', $props.class]">
    <slot />
  </div>
</template>


