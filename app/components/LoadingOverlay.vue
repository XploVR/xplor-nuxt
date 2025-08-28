<template>
  <div v-if="show" class="fixed inset-0 grid place-items-center bg-background/60 backdrop-blur">
    <div class="flex flex-col items-center gap-4">
      <svg class="h-8 w-8 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="2" opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-width="2"/>
      </svg>
      <p>Loading…</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = useState('globalLoading', () => false)
</script>
<style scoped></style>