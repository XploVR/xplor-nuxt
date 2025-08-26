<template>
  <div class="relative inline-block text-left" ref="root">
    <!-- Burger button -->
    <button
      @click="toggle"
      class="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :aria-expanded="open.toString()"
    >
      <Menu class="h-6 w-6" />
      <span class="sr-only">Open menu</span>
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-48 origin-top-right rounded-md border bg-white shadow-lg z-50"
      >
        <div class="py-1">
          <RouterLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            @click="close"
          >
            <component :is="item.icon" class="h-4 w-4" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, Home, Info, FolderOpen, Users } from 'lucide-vue-next'

// State
const open = ref(false)
const root = ref<HTMLElement | null>(null)

// Menu links
const menuItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: Info },
  { label: 'Pricing', to: '/pricing', icon: FolderOpen },
  { label: 'Users', to: '/users', icon: Users },
]

// Toggle & close
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

// Close on outside click
const onClickOutside = (e: MouseEvent) => {
  if (root.value && !root.value.contains(e.target as Node)) {
    close()
  }
}

// Close on ESC
const onEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEsc)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onEsc)
})
</script>

<style scoped>
/* Optional: tweak dropdown shadow */
</style>
