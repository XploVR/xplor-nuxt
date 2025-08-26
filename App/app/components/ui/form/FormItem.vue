<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div data-form-item :class="class">
    <slot />
  </div>
</template>
