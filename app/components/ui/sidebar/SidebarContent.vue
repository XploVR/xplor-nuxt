<script setup lang="ts">
defineProps<{ class?: string }>()
</script>
<template>
  <div :class="['p-2 h-full overflow-y-auto flex flex-col gap-2', $props.class]">
    <slot />
  </div>
</template>

