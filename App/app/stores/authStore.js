import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // { id, email, name } or whatever you need
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(user) {
      this.user = user
      // optional persistence
      try {
        localStorage.setItem('auth:user', JSON.stringify(user))
      } catch {}
    },
    loadFromStorage() {
      try {
        const raw = localStorage.getItem('auth:user')
        this.user = raw ? JSON.parse(raw) : null
      } catch {
        this.user = null
      }
    },
    signOut() {
      this.user = null
      try {
        localStorage.removeItem('auth:user')
      } catch {}
    },
  },
})
