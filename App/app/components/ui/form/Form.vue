<script setup lang="ts">
const emit = defineEmits<{ (e: 'submit', ev: Event): void }>()
defineProps<{ class?: string }>()

function onSubmit(e: Event) {
  emit('submit', e)
}
</script>

<template>
  <form :class="class" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>
