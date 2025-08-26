<template>
  <div v-if="isAuthenticated">
    <slot />
  </div>
  <div v-else>
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">Authentication Required</h2>
        <p class="text-gray-600 mb-4">Please log in to access this page.</p>
        <router-link to="/auth" class="btn btn-primary">
          Go to Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import RealEstateForm from '@/components/forms/RealEstateForm.vue'

const authStore = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => authStore.isAuthenticated)

onMounted(async () => {
  await authStore.checkAuth()
  
  if (!isAuthenticated.value) {
    router.push('/auth')
  }
})
</script>
