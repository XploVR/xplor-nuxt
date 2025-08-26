
<template>
  <div class="space-y-2">
    <input type="file" multiple @change="onPick" />
    <ul class="list-disc ml-6">
      <li v-for="(f,i) in files" :key="i">{{ f.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const files = ref<File[]>([])
function onPick(e: Event){ const input = e.target as HTMLInputElement; if(!input.files) return; files.value=[...files.value, ...Array.from(input.files)] }
</script>
