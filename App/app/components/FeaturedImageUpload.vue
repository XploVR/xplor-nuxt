
<template>
  <div class="space-y-2">
    <input type="file" @change="onPick" />
    <p class="text-sm text-muted-foreground" v-if="file">Selected: {{ file.name }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const file = ref<File | null>(null)
function onPick(e: Event){ const input = e.target as HTMLInputElement; file.value = input.files?.[0] ?? null }
</script>
