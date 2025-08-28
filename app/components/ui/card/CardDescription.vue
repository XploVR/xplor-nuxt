<!-- CardDescription.vue -->
<template>
  <p
    :class="cn('text-sm text-muted-foreground', $attrs.class)"
    v-bind="$attrs"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
import { cn } from '@/utils/utils'

defineOptions({
  inheritAttrs: false
})
</script>
