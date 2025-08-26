// Shared injection key + types
import type { Ref, InjectionKey } from 'vue'

export interface SidebarContext {
  isOpen: Ref<boolean>
  isMobile: Ref<boolean>
  setOpen: (v: boolean) => void
  toggleSidebar: () => void
}

export const SidebarKey: InjectionKey<SidebarContext> = Symbol('sidebar-context')
