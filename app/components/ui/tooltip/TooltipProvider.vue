<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const tooltipState = ref({
  isVisible: false,
  content: '',
  position: { x: 0, y: 0 }
})

provide('tooltip', tooltipState)
</script>
