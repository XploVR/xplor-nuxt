<template>
  <div class="w-full h-full flex items-center justify-center">
    <svg :width="size" :height="size" class="transform -rotate-90">
      <circle
        v-for="(segment, index) in segments"
        :key="index"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke="segment.color"
        :stroke-width="strokeWidth"
        :stroke-dasharray="segment.dashArray"
        :stroke-dashoffset="segment.dashOffset"
        fill="transparent"
        class="transition-all duration-300"
      />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <div class="text-2xl font-bold">{{ totalValue }}</div>
        <div class="text-sm text-muted-foreground">Total</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  size: {
    type: Number,
    default: 200
  }
})

const center = computed(() => props.size / 2)
const radius = computed(() => props.size / 2 - 40)
const strokeWidth = computed(() => 30)
const circumference = computed(() => 2 * Math.PI * radius.value)

const totalValue = computed(() => 
  props.data.reduce((sum, item) => sum + item.value, 0)
)

const segments = computed(() => {
  let cumulativePercentage = 0
  
  return props.data.map(item => {
    const percentage = (item.value / totalValue.value) * 100
    const dashArray = `${(percentage / 100) * circumference.value} ${circumference.value}`
    const dashOffset = -((cumulativePercentage / 100) * circumference.value)
    
    cumulativePercentage += percentage
    
    return {
      ...item,
      dashArray,
      dashOffset
    }
  })
})
</script>
