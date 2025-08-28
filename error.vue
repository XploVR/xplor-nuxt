<!-- error.vue -->
<template>
  <div class="min-h-screen grid place-items-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
      <p v-if="error">{{ error.statusCode }} — {{ error.message }}</p>
      <NuxtLink to="/" class="underline">Go home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
