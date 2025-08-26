<!-- src/components/ui/sidebar/SidebarProvider.vue -->
<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(true)
const isMobile = ref(false)

let mql
const updateMobile = () => { isMobile.value = !!mql?.matches }

function setOpen(v) { isOpen.value = !!v }
function toggleSidebar() { setOpen(!isOpen.value) }

const onKey = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault()
    toggleSidebar()
  }
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 767px)')
  updateMobile()
  mql.addEventListener?.('change', updateMobile)
  mql.addListener?.(updateMobile) // Safari
  if (isMobile.value) isOpen.value = false
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  mql?.removeEventListener?.('change', updateMobile)
  mql?.removeListener?.(updateMobile)
  window.removeEventListener('keydown', onKey)
})

provide('sidebar', { isOpen, isMobile, setOpen, toggleSidebar })
</script>

<template>
  <slot />
</template>


