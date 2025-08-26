<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <div :class="['flex flex-col gap-1', $props.class]">
    <slot />
  </div>
</template>
