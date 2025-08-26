<template>
  <div
    v-bind="$attrs"
    class="relative w-full overflow-hidden rounded-full bg-secondary h-2"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="clamped"
  >
    <div
      class="h-full bg-primary transition-[width] duration-300 ease-in-out"
      :style="{ width: `${clamped}%` }"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: Number, default: 0 },
})

defineOptions({ inheritAttrs: false })

const clamped = computed(() =>
  Math.max(0, Math.min(100, Number.isFinite(props.value) ? props.value : 0))
)
</script>

