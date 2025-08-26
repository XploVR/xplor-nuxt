<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex"
      @click="handleBackdropClick"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <!-- Sheet Content -->
      <div
        :class="sheetClasses"
        @click.stop
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <div>
              <slot name="header">
                <h2 v-if="title" class="text-lg font-semibold">{{ title }}</h2>
              </slot>
            </div>
            <button
              @click="close"
              class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Content -->
          <div class="flex-1 overflow-auto p-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  side: {
    type: String,
    default: 'right',
    validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:open'])

const isOpen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value)
})

const sheetClasses = computed(() => {
  const baseClasses = 'fixed bg-background shadow-lg border'
  const sideClasses = {
    right: 'right-0 top-0 h-full w-[400px] sm:w-[540px] animate-in slide-in-from-right',
    left: 'left-0 top-0 h-full w-[400px] sm:w-[540px] animate-in slide-in-from-left',
    top: 'top-0 left-0 right-0 h-auto max-h-[80vh] animate-in slide-in-from-top',
    bottom: 'bottom-0 left-0 right-0 h-auto max-h-[80vh] animate-in slide-in-from-bottom'
  }
  
  return `${baseClasses} ${sideClasses[props.side]} ${props.class}`
})

const close = () => {
  isOpen.value = false
}

const handleBackdropClick = () => {
  close()
}

// Handle escape key
watch(isOpen, (newValue) => {
  if (newValue) {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        close()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
@keyframes slide-in-from-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-in-from-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-in-from-top {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-in {
  animation-duration: 0.2s;
  animation-fill-mode: both;
}

.slide-in-from-right {
  animation-name: slide-in-from-right;
}

.slide-in-from-left {
  animation-name: slide-in-from-left;
}

.slide-in-from-top {
  animation-name: slide-in-from-top;
}

.slide-in-from-bottom {
  animation-name: slide-in-from-bottom;
}
</style>
