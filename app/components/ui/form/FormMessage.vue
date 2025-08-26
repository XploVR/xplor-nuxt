<script setup lang="ts">
const props = defineProps<{ message?: string; class?: string }>()
</script>

<template>
  <p class="mt-1 text-xs text-red-500" :class="class">
    <slot>{{ props.message }}</slot>
  </p>
</template>
