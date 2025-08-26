<!-- src/components/ui/sidebar/SidebarProvider.vue -->
<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(true)
const isMobile = ref(false)

let mql
const updateMobile = () => { 
  const newValue = !!mql?.matches
  console.log('Media query update:', newValue, 'screen width:', window.innerWidth)
  isMobile.value = newValue
}

onMounted(() => {
  console.log('SidebarProvider mounted, initial width:', window.innerWidth)
  mql = window.matchMedia('(max-width: 767px)')
  updateMobile()
  
  // Add a small delay to prevent rapid changes
  let timeoutId
  const debouncedUpdate = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(updateMobile, 100)
  }
  
  mql.addEventListener?.('change', debouncedUpdate)
  mql.addListener?.(debouncedUpdate) // Safari legacy
  
  if (isMobile.value) isOpen.value = false
})

onBeforeUnmount(() => {
  mql?.removeEventListener?.('change', updateMobile)
  mql?.removeListener?.(updateMobile)
})

function setOpen(v) { isOpen.value = !!v }
function toggleSidebar() { setOpen(!isOpen.value) }

provide('sidebar', { isOpen, isMobile, setOpen, toggleSidebar })
</script>

<template>
  <slot />
</template>


