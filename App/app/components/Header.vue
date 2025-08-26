<template>
  <header class="w-full border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
    <div class="container mx-auto px-4 h-14 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- Burger -->
        <BurgerMenu />

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span class="text-primary-foreground font-bold text-sm">X</span>
          </div>
          <span class="font-semibold text-lg text-foreground font-typografix">xplor</span>
        </RouterLink>
      </div>

      <!-- Right side actions (optional) -->
      <div class="flex items-center gap-2">
        <!-- … your buttons … -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BurgerMenu from '@/components/BurgerMenu.vue'
</script>
