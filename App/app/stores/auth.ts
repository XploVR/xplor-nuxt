import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ email?: string; role?: string } | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin' || user.value?.email === 'info@xplor.io')

  async function login(credentials: { email: string; password: string }) {
    // TODO hook up to your API
    user.value = { email: credentials.email, role: 'user' }
    token.value = 'fake-token'
    localStorage.setItem('token', token.value)
    return { user: user.value, token: token.value }
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }

  async function checkAuth() {
    // TODO: verify token with your backend if needed
    return !!token.value
  }

  return { user, token, isAuthenticated, isAdmin, login, logout, checkAuth }
})

