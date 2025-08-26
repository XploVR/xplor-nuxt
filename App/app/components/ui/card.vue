<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm" :class="$attrs.class">
    <div v-if="$slots.header" class="flex flex-col space-y-1.5 p-6">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.content" class="p-6 pt-0">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})
</script>

