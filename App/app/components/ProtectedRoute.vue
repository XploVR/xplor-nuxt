
<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-background">
    <div class="flex flex-col items-center space-y-4">
      <svg class="h-8 w-8 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="2" opacity=".25"/>
        <path d="M22 12a10 10 0 0 1-10 10" stroke-width="2"/>
      </svg>
      <p class="text-muted-foreground">Loading...</p>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * This wrapper expects an auth composable that returns { user, isLoading }.
 * Replace `useAuth()` import with your app's auth.
 */
// Example stub (swap for your real auth store/composable)
function useAuth(){ return { user: null as null | { id:string }, isLoading: false } }

const router = useRouter()
const route = useRoute()
const { user, isLoading } = useAuth()

function ensureAuth(){
  if(!isLoading && !user){
    router.replace({ path: '/auth', query: { from: route.fullPath } })
  }
}

onMounted(ensureAuth)
watch(() => isLoading, ensureAuth)
watch(() => user, ensureAuth)
</script>
