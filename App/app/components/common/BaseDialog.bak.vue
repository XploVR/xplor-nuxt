
<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="$emit('update:modelValue', false)"></div>
    <div class="relative bg-white text-black dark:bg-neutral-900 dark:text-white w-[90vw] max-w-5xl max-h-[90vh] rounded shadow-lg overflow-auto">
      <header class="sticky top-0 bg-inherit border-b p-4 text-lg font-semibold">
        <slot name="title">Dialog</slot>
      </header>
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ (e:'update:modelValue', v:boolean): void }>()
</script>
