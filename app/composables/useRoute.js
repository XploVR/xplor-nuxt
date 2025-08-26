import { ref, computed } from 'vue'

const currentRoute = ref({
  path: '/src/router/index',
  state: null
})

export function useRoute() {
  return {
    state: computed(() => currentRoute.value.state),
    path: computed(() => currentRoute.value.path)
  }
}

export function setRoute(route) {
  currentRoute.value = route
}

// src/composables/useRoute.js

// If you had something like this:
// export const someRoutes = [
//   { path: '/', component: Index }
// ]
// Remove or change it to a non-root path:
export const someRoutes = [
  // { path: '/index', component: Index }
]
