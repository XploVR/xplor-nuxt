<template>
  <div class="container mx-auto p-6 space-y-6" v-if="ready && shouldAllowAccess">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <Shield class="h-8 w-8 text-primary" />
        <div>
          <h1 class="text-3xl font-bold">Admin Console</h1>
          <p class="text-muted-foreground">
            Welcome, {{ user?.email }} • Manage your platform and users
          </p>
        </div>
      </div>
      <Badge variant="default" class="bg-green-100 text-green-800 border-green-200">
        Admin Access Active
      </Badge>
    </div>

    <Tabs v-model="activeTab" orientation="vertical" class="flex gap-6">
      <TabsList class="flex flex-col h-fit w-64 space-y-1">
        <TabsTrigger
          v-for="t in adminTabs"
          :key="t.id"
          :value="t.id"
          class="w-full justify-start gap-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <component :is="t.icon" class="h-4 w-4" />
          <span>{{ t.label }}</span>
        </TabsTrigger>
      </TabsList>

      <div class="flex-1">
        <TabsContent value="dashboard" class="space-y-6 m-0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card v-for="s in stats" :key="s.label">
              <CardHeader class="pb-2">
                <CardTitle class="text-base flex items-center gap-2">
                  <component :is="s.icon" class="h-4 w-4" />
                  {{ s.label }}
                </CardTitle>
                <CardDescription>{{ s.change }} vs last month</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="text-3xl font-bold">{{ s.value }}</div>
              </CardContent>
            </Card>
          </div>
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="users"><UserManagement /></TabsContent>
        <TabsContent value="spaces"><SpaceManagement /></TabsContent>
        <TabsContent value="tours"><TourManagement /></TabsContent>
        <TabsContent value="hotels"><HotelManagement /></TabsContent>
        <TabsContent value="fairshare"><FairShareMembersManagement /></TabsContent>
        <TabsContent value="categories"><CategoryManagement /></TabsContent>
        <TabsContent value="storage"><StorageMonitoring /></TabsContent>
        <TabsContent value="analytics"><AnalyticsDashboard /></TabsContent>
        <TabsContent value="system"><SystemSettings /></TabsContent>
      </div>
    </Tabs>
  </div>

  <div v-else-if="ready && !user" class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <AlertTriangle class="h-12 w-12 text-yellow-500" />
    <div class="text-center">
      <h2 class="text-xl font-semibold">Authentication Required</h2>
      <p class="text-muted-foreground">Please log in to access the admin console.</p>
      <Button class="mt-4" variant="outline" @click="$router.push({ name: 'home' })">Go to Login</Button>
    </div>
  </div>

  <div v-else-if="ready && !shouldAllowAccess" class="container mx-auto p-6">
    <div class="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <Shield class="h-16 w-16 text-muted-foreground" />
      <div class="text-center space-y-2">
        <h2 class="text-2xl font-semibold">Access Denied</h2>
        <p class="text-muted-foreground max-w-md">
          Admin privileges are required to access this console.
        </p>
        <p v-if="user?.email" class="text-sm text-muted-foreground">
          Logged in as: <span class="font-mono">{{ user.email }}</span>
        </p>
      </div>
      <div class="flex gap-2">
        <Button @click="$router.push({ name: 'home' })" variant="default">Return Home</Button>
      </div>
    </div>
  </div>

  <div v-else class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    <div class="text-center">
      <div class="font-medium">Loading admin panel...</div>
      <div class="text-sm text-muted-foreground mt-1">
        Verifying admin privileges for {{ user?.email || '...' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent, defineComponent, h } from 'vue'
import { useAuth } from '@/stores/auth'

// UI
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Icons
import {
  Shield, Users, FileText, Building, Settings, BarChart3,
  AlertTriangle, Database, Zap, MapPin, Ship
} from 'lucide-vue-next'

// ------------ auth & access ------------
const auth = useAuth()
const user = computed(() => auth.user)
const isAdmin = computed(() => auth.isAdmin)
const isDevelopment = import.meta.env.DEV
const shouldAllowAccess = computed(
  () => isAdmin.value || user.value?.email === 'info@xplor.io' || isDevelopment
)

const ready = ref(false)
onMounted(() => { ready.value = true })

const activeTab = ref('dashboard')

const adminTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'spaces', label: 'Spaces', icon: MapPin },
  { id: 'tours', label: 'Tours', icon: FileText },
  { id: 'hotels', label: 'Hotels', icon: Building },
  { id: 'fairshare', label: 'FairShare Members', icon: Ship },
  { id: 'categories', label: 'Categories', icon: Settings },
  { id: 'storage', label: 'Storage', icon: Database },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'system', label: 'System', icon: Zap },
]

// ------------ stats ------------
const stats = [
  { label: 'Total Users', value: '2,348', change: '+12%', icon: Users },
  { label: 'Active Tours', value: '1,234', change: '+8%', icon: FileText },
  { label: 'Storage Used', value: '45.2 GB', change: '+5%', icon: Database },
  { label: 'Monthly Revenue', value: '$12,480', change: '+15%', icon: BarChart3 },
]

// ------------ safe async loader for admin modules ------------
/**
 * We only reference files that actually exist, so Vite's dep scan won't fail.
 * Any missing module renders a small placeholder instead of crashing.
 */
const adminModules = import.meta.glob('/src/components/admin/*.vue')

const Placeholder = (title: string) =>
  defineComponent({
    name: `${title}Placeholder`,
    setup() {
      return () =>
        h('div', { class: 'p-6' }, [
          h('h2', { class: 'text-xl font-semibold' }, title),
          h('p', { class: 'text-muted-foreground' }, 'This module is not available yet.'),
        ])
    },
  })

function loadAdmin(name: string) {
  const path = `/src/components/admin/${name}.vue`
  const loader = adminModules[path]
  return defineAsyncComponent(() =>
    loader
      ? (loader() as Promise<any>).then((m) => m.default)
      : Promise.resolve(Placeholder(name))
  )
}

// Async components (safe even if files don't exist)
const AnalyticsDashboard = loadAdmin('AnalyticsDashboard')
const UserManagement = loadAdmin('UserManagement')
const SpaceManagement = loadAdmin('SpaceManagement')
const TourManagement = loadAdmin('TourManagement')
const HotelManagement = loadAdmin('HotelManagement')
const CategoryManagement = loadAdmin('CategoryManagement')
const StorageMonitoring = loadAdmin('StorageMonitoring')
const SystemSettings = loadAdmin('SystemSettings')
const FairShareMembersManagement = loadAdmin('FairShareMembersManagement')
</script>
