<script setup lang="ts">
defineProps<{ for?: string; class?: string }>()
</script>

<template>
  <label :for="for" class="text-sm font-medium" :class="class">
    <slot />
  </label>
</template>
