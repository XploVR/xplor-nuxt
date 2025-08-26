<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <li :class="['relative', $props.class]">
    <slot />
  </li>
</template>
