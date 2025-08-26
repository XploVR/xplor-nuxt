<!-- src/layouts/AppLayout.vue -->
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'

import { User, LogOut } from 'lucide-vue-next'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import CartButton from '@/components/Cart/CartButton.vue'
import CartSheet from '@/components/Cart/CartSheet.vue'
import { useAuth } from '@/composables/useAuth.js'
import { ref, provide, onMounted, computed } from 'vue'

defineOptions({ name: 'AppLayout' })

const router = useRouter()
const { user, signOut } = useAuth()

// Sidebar state management
const isOpen = ref(true)
const isMobile = ref(false)

// Media query for mobile detection
let mediaQuery: MediaQueryList | null = null

const updateMobileState = () => {
  if (mediaQuery) {
    isMobile.value = mediaQuery.matches
    // On mobile, start with sidebar closed
    if (mediaQuery.matches) {
      isOpen.value = false
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia('(max-width: 767px)')
    updateMobileState()
    mediaQuery.addEventListener('change', updateMobileState)
  }
})

// Provide sidebar state to child components
provide('sidebar', {
  isOpen,
  isMobile,
  toggleSidebar: () => { isOpen.value = !isOpen.value },
  setOpen: (value: boolean) => { isOpen.value = value }
})

// Calculate main content margin based on sidebar state
const mainContentStyle = computed(() => {
  if (isMobile.value) {
    // On mobile, sidebar overlays content
    return { marginLeft: '0px' }
  }
  // On desktop, margin matches sidebar width
  return {
    marginLeft: isOpen.value ? '16rem' : '3.25rem'
  }
})

function handleSignOut() {
  router.push('/')
  Promise.resolve(signOut()).catch((err) =>
    console.error('Background signOut error:', err)
  )
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Fixed sidebar -->
    <AppSidebar />

    <!-- Main content area with responsive margin -->
    <div 
      class="min-h-screen flex flex-col transition-[margin-left] duration-200 ease-linear"
      :style="mainContentStyle"
    >
      <!-- Header -->
      <header class="h-14 sm:h-16 border-b border-border bg-background flex items-center justify-between px-3 sm:px-4 shrink-0">
        <div class="flex items-center gap-2">
          <h1 class="text-sm font-medium text-foreground hidden sm:block">
            <span class="font-typografix">xplor</span> Workspace
          </h1>
          <h1 class="text-sm font-medium text-foreground sm:hidden">
            <span class="font-typografix">xplor</span>
          </h1>
        </div>

        <div class="flex items-center gap-2">
          <CartButton />

          <template v-if="user">
            <RouterLink
              to="/accounts"
              class="hidden sm:inline-flex min-h-[36px] items-center rounded-md px-3 py-1.5 text-sm border border-border hover:bg-muted"
            >
              <User class="h-4 w-4 mr-2" />
              Account
            </RouterLink>

            <RouterLink
              to="/accounts"
              aria-label="Account"
              class="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:bg-muted"
            >
              <User class="h-4 w-4" />
            </RouterLink>

            <button
              class="min-h-[36px] inline-flex items-center rounded-md px-3 py-1.5 text-sm border border-border hover:bg-muted"
              @click="handleSignOut"
            >
              <LogOut class="h-4 w-4 mr-2" />
              <span class="hidden sm:inline">Sign Out</span>
            </button>
          </template>

          <template v-else>
            <RouterLink
              to="/auth"
              class="min-h-[36px] inline-flex items-center rounded-md px-3 py-1.5 text-sm border border-border hover:bg-muted"
            >
              <User class="h-4 w-4 mr-2" />
              <span class="hidden sm:inline">Sign In</span>
            </RouterLink>
          </template>

          <button
            class="min-h-[36px] inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black"
          >
            <span class="hidden sm:inline">Upgrade</span>
            <span class="sm:hidden">Pro</span>
          </button>
        </div>
      </header>

      <!-- Cart component -->
      <CartSheet />

      <!-- Main content -->
      <main class="flex-1 overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>