<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <div :class="['p-3 border-b border-sidebar-border', $props.class]">
    <slot />
  </div>
</template>

