
<template>
  <div style="padding:16px;border:1px dashed #bbb;border-radius:8px">
    <h3>UploadSpaceDialog — placeholder</h3>
    <p>Replace with your real dialog implementation.</p>
    <div style="margin-top:8px">
      <button @click="$emit('close')" style="padding:6px 10px;border:1px solid #ddd;border-radius:6px">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open?: boolean }>()
defineEmits<{ (e:'close'): void }>()
</script>
