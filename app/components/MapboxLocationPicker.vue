
<template>
  <div class="border rounded-lg h-64 flex items-center justify-center text-sm text-muted-foreground">
    <div class="space-y-2 text-center">
      <p>Mapbox placeholder</p>
      <button class="px-3 py-1 rounded border" @click="emit('update:coordinates', { lat: 25.2048, lng: 55.2708 })">
        Drop pin (Dubai demo)
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{ (e:'update:coordinates', v:{lat:number; lng:number}): void }>()
</script>
