<!-- src/components/ui/sidebar/SidebarTrigger.vue -->
<script setup>
import { inject } from 'vue'
const sidebar = inject('sidebar', null)
const toggle = () => sidebar?.toggleSidebar?.()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:bg-muted"
    @click="toggle"
  >
    <slot />
  </button>
</template>








