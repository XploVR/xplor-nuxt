<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <ul :class="['flex flex-col gap-1', $props.class]">
    <slot />
  </ul>
</template>

