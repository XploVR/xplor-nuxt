export function useAuth(): {
  user: import('vue').Ref<any>
  signOut: () => Promise<void>
}