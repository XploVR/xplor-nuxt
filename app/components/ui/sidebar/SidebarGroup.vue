<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <div :class="['flex flex-col', $props.class]">
    <slot />
  </div>
</template>
