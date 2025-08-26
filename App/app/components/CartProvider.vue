<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

// Provide cart store to all child components
provide('cartStore', cartStore)
</script>
