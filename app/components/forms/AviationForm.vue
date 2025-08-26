<template>
  <form class="space-y-4" @submit.prevent="$emit('submit', form)">
    <div class="grid gap-2">
      <label class="text-sm">Aircraft / Project Name</label>
      <input v-model="form.name" class="border rounded px-2 py-1" placeholder="e.g. Gulfstream Demo" />
    </div>
    <div class="grid gap-2">
      <label class="text-sm">Description</label>
      <textarea v-model="form.description" class="border rounded px-2 py-1" rows="3" />
    </div>
    <button type="submit" class="border rounded px-3 py-1">Save (placeholder)</button>
  </form>
</template>

<script setup lang="ts">
const form = reactive({ name: '', description: '' })
defineEmits<{ (e: 'submit', payload: typeof form): void }>()
</script>

