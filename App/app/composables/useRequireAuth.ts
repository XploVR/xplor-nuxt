// Composable to check auth before continuing
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export function useRequireAuth() {
  const auth = useAuthStore()
  const router = useRouter()
  async function ensure() {
    if (!auth.user) {
      router.push({ path: '/auth', query: { redirect: router.currentRoute.value.fullPath } })
      return false
    }
    return true
  }
  return { ensure }
}
