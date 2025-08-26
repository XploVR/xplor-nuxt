<template>
  <div class="w-full h-full">
    <svg :width="width" :height="height" class="overflow-visible">
      <!-- Grid lines -->
      <g class="grid">
        <line
          v-for="i in 5"
          :key="`h-${i}`"
          :x1="margin.left"
          :y1="margin.top + (i - 1) * ((height - margin.top - margin.bottom) / 4)"
          :x2="width - margin.right"
          :y2="margin.top + (i - 1) * ((height - margin.top - margin.bottom) / 4)"
          stroke="#e5e7eb"
          stroke-width="1"
        />
      </g>
      
      <!-- Areas -->
      <path
        :d="spacesPath"
        fill="#6366F1"
        fill-opacity="0.6"
        stroke="#6366F1"
        stroke-width="2"
      />
      <path
        :d="viewsPath"
        fill="#10B981"
        fill-opacity="0.6"
        stroke="#10B981"
        stroke-width="2"
      />
      
      <!-- X-axis labels -->
      <g class="x-axis">
        <text
          v-for="(item, index) in data"
          :key="`x-${index}`"
          :x="margin.left + (index * xStep)"
          :y="height - margin.bottom + 20"
          text-anchor="middle"
          class="text-xs fill-gray-600"
        >
          {{ item.month }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 250
  }
})

const margin = { top: 20, right: 20, bottom: 40, left: 40 }

const xStep = computed(() => 
  (props.width - margin.left - margin.right) / (props.data.length - 1)
)

const maxSpaces = computed(() => 
  Math.max(...props.data.map(d => d.spaces))
)

const maxViews = computed(() => 
  Math.max(...props.data.map(d => d.views))
)

const spacesPath = computed(() => {
  const chartHeight = props.height - margin.top - margin.bottom
  let path = `M ${margin.left} ${props.height - margin.bottom}`
  
  props.data.forEach((item, index) => {
    const x = margin.left + (index * xStep.value)
    const y = margin.top + chartHeight - ((item.spaces / maxSpaces.value) * chartHeight)
    path += ` L ${x} ${y}`
  })
  
  path += ` L ${margin.left + ((props.data.length - 1) * xStep.value)} ${props.height - margin.bottom} Z`
  return path
})

const viewsPath = computed(() => {
  const chartHeight = props.height - margin.top - margin.bottom
  let path = `M ${margin.left} ${props.height - margin.bottom}`
  
  props.data.forEach((item, index) => {
    const x = margin.left + (index * xStep.value)
    const y = margin.top + chartHeight - ((item.views / maxViews.value) * chartHeight)
    path += ` L ${x} ${y}`
  })
  
  path += ` L ${margin.left + ((props.data.length - 1) * xStep.value)} ${props.height - margin.bottom} Z`
  return path
})
</script>
