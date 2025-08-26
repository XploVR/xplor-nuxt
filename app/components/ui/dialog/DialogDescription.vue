<template>
  <p class="dialog-description" :class="className">
    <slot />
  </p>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.dialog-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0.5rem 0 0 0;
}
</style>
