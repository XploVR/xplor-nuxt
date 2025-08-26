<template>
  <h2 class="dialog-title" :class="className">
    <slot />
  </h2>
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
.dialog-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}
</style>
