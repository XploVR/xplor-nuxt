<!-- src/components/Cart/CartButton.vue -->
<script setup>
import { ShoppingCart } from 'lucide-vue-next';
import Button from '~/components/ui/button/Button.vue';
</script>

<template>
  <Button variant="ghost" size="sm" class="min-h-touch min-w-touch p-mobile-sm sm:p-2">
    <ShoppingCart class="h-4 w-4" />
    <span class="sr-only">Open Cart</span>
  </Button>
</template>

