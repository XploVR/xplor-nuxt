import { inject } from 'vue'

export type SidebarCtx = {
  open: Ref<boolean>
  isMobile: Ref<boolean>
  setOpen: (v: boolean) => void
  toggleSidebar: () => void
}

export const SIDEBAR_KEY = Symbol('SIDEBAR_CONTEXT')

export function useSidebar<T = any>() {
  const ctx = inject<T>(SIDEBAR_KEY as any)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}
