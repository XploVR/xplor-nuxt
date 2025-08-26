<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div data-form-control :class="class">
    <slot />
  </div>
</template>
