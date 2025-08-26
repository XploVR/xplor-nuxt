<template>
  <div
    v-bind="attrs"
    :role="decorative ? undefined : 'separator'"
    :aria-orientation="!decorative && orientation === 'vertical' ? 'vertical' : undefined"
    :aria-hidden="decorative ? 'true' : undefined"
    :class="classes"
    :style="styleObj"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs, defineProps } from 'vue'

const attrs = useAttrs()

const props = defineProps<{
  /** 'horizontal' or 'vertical' */
  orientation?: 'horizontal' | 'vertical'
  /** purely visual if true (no accessibility role) */
  decorative?: boolean
  /** adds a small side inset/margin */
  inset?: boolean
  /** line thickness in pixels */
  thickness?: number
  /** additional classes */
  class?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
}>()

const orientation = props.orientation ?? 'horizontal'
const decorative = props.decorative ?? true
const inset = props.inset ?? false
const thickness = props.thickness ?? 1

const classes = computed(() => [
  'bg-border shrink-0',
  orientation === 'horizontal' ? 'w-full' : 'h-full',
  inset ? 'mx-4' : '',
  props.class || ''
])

const styleObj = computed(() =>
  orientation === 'horizontal'
    ? { height: `${thickness}px` }
    : { width: `${thickness}px` }
)
</script>
