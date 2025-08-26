<template>
  <div class="dialog-content-wrapper" :class="className">
    <slot />
  </div>
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
.dialog-content-wrapper {
  padding: 1.5rem;
  width: 100%;
}
</style>
