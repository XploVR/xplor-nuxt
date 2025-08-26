<!-- src/components/AppSidebar.vue -->
<script setup lang="ts">
import { inject, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  LayoutDashboard, FolderOpen, Clock, BarChart3, Users, Camera, UserCheck,
  ShoppingCart, Car, Building, Anchor, Settings, Home, Info, GraduationCap,
  Award, ChevronRight, ChevronLeft
} from 'lucide-vue-next'

// Sidebar state from provider
const sb = inject<any>('sidebar', null)
if (!sb) console.warn('[AppSidebar] No <SidebarProvider> found above this component.')

const isOpen   = computed(() => sb?.isOpen?.value ?? true)
const isMobile = computed(() => sb?.isMobile?.value ?? false)
const toggle   = () => sb?.toggleSidebar?.()

// Width behavior: icon-rail on desktop, fully hide on mobile when closed
const width = computed(() => {
  const calculatedWidth = isMobile.value 
    ? (isOpen.value ? '18rem' : '0px')
    : (isOpen.value ? '16rem' : '3.25rem')
  
  console.log('Sidebar - isMobile:', isMobile.value, 'isOpen:', isOpen.value, 'width:', calculatedWidth)
  return calculatedWidth
})

const route = useRoute()
const isActive = (url: string) => route.path === url

const originalItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'About', url: '/about', icon: Info },
  { title: 'Pricing', url: '/pricing', icon: FolderOpen },
  { title: 'How to Create Virtual Tour', url: '/how-to-create-virtual-tour', icon: GraduationCap },
  { title: 'Top 20 Virtual Tour Platforms (2025 Guide)', url: '/virtual-tour-platforms', icon: Award },
  { title: 'FAQs', url: '/faqs', icon: Info },
]

const workspaceItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'My Spaces', url: '/spaces', icon: FolderOpen },
  { title: 'Recently Viewed', url: '/recently-viewed', icon: Clock },
  { title: 'Statistics', url: '/statistics', icon: BarChart3 },
  { title: 'Users', url: '/users', icon: Users },
  { title: 'Capture Services', url: '/capture-services', icon: Camera },
  { title: 'Tour Pros', url: '/gigs', icon: UserCheck },
  { title: 'Xplor Marketplace', url: '/vr-cameras', icon: ShoppingCart },
  { title: 'Cars & Vehicles', url: '/cars-vehicles', icon: Car },
  { title: 'Real Estate', url: '/real-estate', icon: Building },
  { title: 'Yacht Brokerage', url: '/yacht-brokerage', icon: Anchor },
  { title: 'Yacht Owners & Clients', url: '/yacht-owners-clients', icon: Anchor },
  { title: 'FairShare', url: '/fairshare', icon: Anchor },
  { title: 'Settings', url: '/settings', icon: Settings },
]
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-50 h-[100dvh] shrink-0 flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground
           transition-[width] duration-200 ease-linear"
    :style="{ width }"
    :class="{ 'shadow-lg': !isOpen && !isMobile }"
  >
    <!-- Header / Brand row -->
    <div class="h-14 sm:h-16 border-b border-sidebar-border flex items-center shrink-0 relative" 
         :class="isOpen ? 'px-3 justify-between' : 'px-2 justify-center'">
      
      <!-- Brand section - only show when open -->
      <div v-if="isOpen" class="flex items-center gap-2 overflow-hidden">
        <div class="w-8 h-8 bg-xplor-yellow rounded flex items-center justify-center">
          <span class="text-xplor-black font-bold text-sm">X</span>
        </div>
        <span class="font-semibold text-lg font-typografix truncate">xplor</span>
      </div>

      <!-- Collapse button - always visible and positioned -->
      <button
        type="button"
        class="inline-flex items-center justify-center h-8 w-8 rounded-md text-sidebar-foreground
               hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring
               transition-colors shrink-0"
        @click="toggle"
        :aria-label="isOpen ? 'Collapse sidebar' : 'Expand sidebar'"
      >
        <ChevronLeft v-if="isOpen" class="h-4 w-4" />
        <ChevronRight v-else class="h-4 w-4" />
      </button>
    </div>

    <!-- Scrollable content -->
    <div class="flex-1 min-h-0 overflow-y-auto">
      <nav class="p-2 space-y-4">
        <!-- Original nav -->
        <div>
          <div v-if="isOpen" class="px-2 pb-1 text-xs uppercase tracking-wide text-sidebar-foreground/70">
            Navigation
          </div>
          <ul class="space-y-1">
            <li v-for="item in originalItems" :key="item.url">
              <RouterLink
                :to="item.url"
                class="flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                       hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                :class="isActive(item.url)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-xplor-yellow'
                  : 'text-sidebar-foreground'"
              >
                <component :is="item.icon" class="h-4 w-4" />
                <span v-if="isOpen" class="truncate">{{ item.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Workspace -->
        <div>
          <div v-if="isOpen" class="px-2 pb-1 text-xs uppercase tracking-wide text-sidebar-foreground/70">
            Workspace
          </div>
          <ul class="space-y-1">
            <li v-for="item in workspaceItems" :key="item.url">
              <RouterLink
                :to="item.url"
                class="flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                       hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                :class="isActive(item.url)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-xplor-yellow'
                  : 'text-sidebar-foreground'"
              >
                <component :is="item.icon" class="h-4 w-4" />
                <template v-if="isOpen">
                  <span class="flex-1 truncate">{{ item.title }}</span>
                  <ChevronRight class="h-3 w-3 opacity-50" />
                </template>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>