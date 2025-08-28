<!-- sidebar.vue -->
<template>
  <component :is="tag" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, ref, reactive, provide, inject, onMounted, onUnmounted, watchEffect, type Ref, type InjectionKey, type CSSProperties } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { PanelLeft } from 'lucide-vue-next'
import { useIsMobile } from '@/hooks/usemobile.js'
import { cn } from '@/utils/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: Ref<"expanded" | "collapsed">
  open: Ref<boolean>
  setOpen: (open: boolean) => void
  openMobile: Ref<boolean>
  setOpenMobile: (open: boolean) => void
  isMobile: Ref<boolean>
  toggleSidebar: () => void
}

const SidebarContextKey: InjectionKey<SidebarContext> = Symbol('SidebarContext')

export function useSidebar() {
  const context = inject(SidebarContextKey)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return context
}
</script>

<!-- SidebarProvider.vue -->
<template>
  <TooltipProvider :delay-duration="0">
    <div
      ref="rootRef"
      :style="rootStyle"
      :class="cn(
        'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
        className
      )"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { computed, ref, provide, onMounted, onUnmounted, type CSSProperties } from 'vue'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/utils/utils'
import { TooltipProvider } from '@/components/ui/tooltip'

interface Props {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: CSSProperties
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: true
})

const rootRef = ref<HTMLDivElement>()
const isMobile = useIsMobile()
const openMobile = ref(false)
const _open = ref(props.defaultOpen)

const open = computed(() => props.open ?? _open.value)

const setOpen = (value: boolean | ((value: boolean) => boolean)) => {
  const openState = typeof value === "function" ? value(open.value) : value
  if (props.onOpenChange) {
    props.onOpenChange(openState)
  } else {
    _open.value = openState
  }
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
}

const setOpenMobile = (value: boolean) => {
  openMobile.value = value
}

const toggleSidebar = () => {
  return isMobile.value
    ? setOpenMobile(!openMobile.value)
    : setOpen(!open.value)
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (
    event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
    (event.metaKey || event.ctrlKey)
  ) {
    event.preventDefault()
    toggleSidebar()
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown)
})

const state = computed(() => open.value ? "expanded" : "collapsed")

const rootStyle = computed<CSSProperties>(() => ({
  "--sidebar-width": SIDEBAR_WIDTH,
  "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
  ...props.style,
}))

provide(SidebarContextKey, {
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
})

defineExpose({ rootRef })
</script>

<!-- Sidebar.vue -->
<template>
  <div v-if="collapsible === 'none'"
    ref="rootRef"
    :class="cn(
      'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
  
  <Sheet v-else-if="isMobile" :open="openMobile" @update:open="setOpenMobile" v-bind="$attrs">
    <SheetContent
      data-sidebar="sidebar"
      data-mobile="true"
      class="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
      }"
      :side="side"
    >
      <div class="flex h-full w-full flex-col">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
  
  <div v-else
    ref="rootRef"
    class="group peer hidden md:block text-sidebar-foreground"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
  >
    <div
      :class="cn(
        'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
        'group-data-[collapsible=offcanvas]:w-0',
        'group-data-[side=right]:rotate-180',
        variant === 'floating' || variant === 'inset'
          ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
          : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
      )"
    />
    <div
      :class="cn(
        'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
        side === 'left'
          ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
          : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        variant === 'floating' || variant === 'inset'
          ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
          : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
        className
      )"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from './sidebar'
import { cn } from '@/utils/utils'
import { Sheet, SheetContent } from '@/components/ui/sheet'

interface Props {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: "left",
  variant: "sidebar",
  collapsible: "offcanvas"
})

const rootRef = ref<HTMLDivElement>()
const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

const SIDEBAR_WIDTH_MOBILE = "18rem"

defineExpose({ rootRef })
</script>

<!-- SidebarTrigger.vue -->
<template>
  <Button
    ref="buttonRef"
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', className)"
    @click="handleClick"
    v-bind="$attrs"
  >
    <PanelLeft />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './sidebar'
import { cn } from '@/utils/utils'
import { Button } from '@/components/ui/button'

interface Props {
  className?: string
  onClick?: (event: MouseEvent) => void
}

const props = defineProps<Props>()
const buttonRef = ref()
const { toggleSidebar } = useSidebar()

const handleClick = (event: MouseEvent) => {
  props.onClick?.(event)
  toggleSidebar()
}

defineExpose({ buttonRef })
</script>

<!-- SidebarRail.vue -->
<template>
  <button
    ref="buttonRef"
    data-sidebar="rail"
    aria-label="Toggle Sidebar"
    :tabindex="-1"
    @click="toggleSidebar"
    title="Toggle Sidebar"
    :class="cn(
      'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
      '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
      '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
      'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
      '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
      '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
      className
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from './sidebar'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const buttonRef = ref<HTMLButtonElement>()
const { toggleSidebar } = useSidebar()

defineExpose({ buttonRef })
</script>

<!-- SidebarInset.vue -->
<template>
  <main
    ref="mainRef"
    :class="cn(
      'relative flex min-h-svh flex-1 flex-col bg-background',
      'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const mainRef = ref<HTMLElement>()

defineExpose({ mainRef })
</script>

<!-- SidebarInput.vue -->
<template>
  <Input
    ref="inputRef"
    data-sidebar="input"
    :class="cn(
      'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
      className
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'
import { Input } from '@/components/ui/input'

interface Props {
  className?: string
}

defineProps<Props>()

const inputRef = ref()

defineExpose({ inputRef })
</script>

<!-- SidebarHeader.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="header"
    :class="cn('flex flex-col gap-2 p-2', className)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarFooter.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="footer"
    :class="cn('flex flex-col gap-2 p-2', className)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarSeparator.vue -->
<template>
  <Separator
    ref="separatorRef"
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-sidebar-border', className)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'
import { Separator } from '@/components/ui/separator'

interface Props {
  className?: string
}

defineProps<Props>()

const separatorRef = ref()

defineExpose({ separatorRef })
</script>

<!-- SidebarContent.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="content"
    :class="cn(
      'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarGroup.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="group"
    :class="cn('relative flex w-full min-w-0 flex-col p-2', className)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarGroupLabel.vue -->
<template>
  <component
    :is="asChild ? 'slot' : 'div'"
    ref="compRef"
    data-sidebar="group-label"
    :class="cn(
      'duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
  asChild?: boolean
}

withDefaults(defineProps<Props>(), {
  asChild: false
})

const compRef = ref()

defineExpose({ compRef })
</script>

<!-- SidebarGroupAction.vue -->
<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    ref="compRef"
    data-sidebar="group-action"
    :class="cn(
      'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'after:absolute after:-inset-2 after:md:hidden',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
  asChild?: boolean
}

withDefaults(defineProps<Props>(), {
  asChild: false
})

const compRef = ref()

defineExpose({ compRef })
</script>

<!-- SidebarGroupContent.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="group-content"
    :class="cn('w-full text-sm', className)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarMenu.vue -->
<template>
  <ul
    ref="ulRef"
    data-sidebar="menu"
    :class="cn('flex w-full min-w-0 flex-col gap-1', className)"
    v-bind="$attrs"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const ulRef = ref<HTMLUListElement>()

defineExpose({ ulRef })
</script>

<!-- SidebarMenuItem.vue -->
<template>
  <li
    ref="liRef"
    data-sidebar="menu-item"
    :class="cn('group/menu-item relative', className)"
    v-bind="$attrs"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const liRef = ref<HTMLLIElement>()

defineExpose({ liRef })
</script>

<!-- SidebarMenuButton.vue -->
<template>
  <Tooltip v-if="tooltip">
    <TooltipTrigger as-child>
      <component
        :is="asChild ? 'slot' : 'button'"
        ref="buttonRef"
        data-sidebar="menu-button"
        :data-size="size"
        :data-active="isActive"
        :class="cn(sidebarMenuButtonVariants({ variant, size }), className)"
        v-bind="$attrs"
      >
        <slot />
      </component>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      align="center"
      v-show="state === 'collapsed' && !isMobile"
      v-bind="typeof tooltip === 'string' ? { children: tooltip } : tooltip"
    />
  </Tooltip>
  <component
    v-else
    :is="asChild ? 'slot' : 'button'"
    ref="buttonRef"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), className)"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { useSidebar } from './sidebar'
import { cn } from '@/utils/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>

interface Props extends ButtonVariants {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | Record<string, any>
  className?: string
}

withDefaults(defineProps<Props>(), {
  asChild: false,
  isActive: false,
  variant: "default",
  size: "default"
})

const buttonRef = ref()
const { isMobile, state } = useSidebar()

defineExpose({ buttonRef })
</script>

<!-- SidebarMenuAction.vue -->
<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    ref="buttonRef"
    data-sidebar="menu-action"
    :class="cn(
      'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
      'after:absolute after:-inset-2 after:md:hidden',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
      showOnHover &&
        'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
  asChild?: boolean
  showOnHover?: boolean
}

withDefaults(defineProps<Props>(), {
  asChild: false,
  showOnHover: false
})

const buttonRef = ref()

defineExpose({ buttonRef })
</script>

<!-- SidebarMenuBadge.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="menu-badge"
    :class="cn(
      'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none',
      'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const divRef = ref<HTMLDivElement>()

defineExpose({ divRef })
</script>

<!-- SidebarMenuSkeleton.vue -->
<template>
  <div
    ref="divRef"
    data-sidebar="menu-skeleton"
    :class="cn('rounded-md h-8 flex gap-2 px-2 items-center', className)"
    v-bind="$attrs"
  >
    <Skeleton
      v-if="showIcon"
      class="size-4 rounded-md"
      data-sidebar="menu-skeleton-icon"
    />
    <Skeleton
      class="h-4 flex-1 max-w-[--skeleton-width]"
      data-sidebar="menu-skeleton-text"
      :style="{
        '--skeleton-width': width,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/utils/utils'
import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  className?: string
  showIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  showIcon: false
})

const divRef = ref<HTMLDivElement>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})

defineExpose({ divRef })
</script>

<!-- SidebarMenuSub.vue -->
<template>
  <ul
    ref="ulRef"
    data-sidebar="menu-sub"
    :class="cn(
      'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  className?: string
}

defineProps<Props>()

const ulRef = ref<HTMLUListElement>()

defineExpose({ ulRef })
</script>

<!-- SidebarMenuSubItem.vue -->
<template>
  <li ref="liRef" v-bind="$attrs">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const liRef = ref<HTMLLIElement>()

defineExpose({ liRef })
</script>

<!-- SidebarMenuSubButton.vue -->
<template>
  <component
    :is="asChild ? 'slot' : 'a'"
    ref="anchorRef"
    data-sidebar="menu-sub-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(
      'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
      size === 'sm' && 'text-xs',
      size === 'md' && 'text-sm',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/utils/utils'

interface Props {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  asChild: false,
  size: "md"
})

const anchorRef = ref<HTMLAnchorElement>()

defineExpose({ anchorRef })
</script>

<!-- index.ts -->
<script lang="ts">
export { default as Sidebar } from './Sidebar.vue'
export { default as SidebarContent } from './SidebarContent.vue'
export { default as SidebarFooter } from './SidebarFooter.vue'
export { default as SidebarGroup } from './SidebarGroup.vue'
export { default as SidebarGroupAction } from './SidebarGroupAction.vue'
export { default as SidebarGroupContent } from './SidebarGroupContent.vue'
export { default as SidebarGroupLabel } from './SidebarGroupLabel.vue'
export { default as SidebarHeader } from './SidebarHeader.vue'
export { default as SidebarInput } from './SidebarInput.vue'
export { default as SidebarInset } from './SidebarInset.vue'
export { default as SidebarMenu } from './SidebarMenu.vue'
export { default as SidebarMenuAction } from './SidebarMenuAction.vue'
export { default as SidebarMenuBadge } from './SidebarMenuBadge.vue'
export { default as SidebarMenuButton } from './SidebarMenuButton.vue'
export { default as SidebarMenuItem } from './SidebarMenuItem.vue'
export { default as SidebarMenuSkeleton } from './SidebarMenuSkeleton.vue'
export { default as SidebarMenuSub } from './SidebarMenuSub.vue'
export { default as SidebarMenuSubButton } from './SidebarMenuSubButton.vue'
export { default as SidebarMenuSubItem } from './SidebarMenuSubItem.vue'
export { default as SidebarProvider } from './SidebarProvider.vue'
export { default as SidebarRail } from './SidebarRail.vue'
export { default as SidebarSeparator } from './SidebarSeparator.vue'
export { default as SidebarTrigger } from './SidebarTrigger.vue'
export { useSidebar } from './Sidebar.vue'
</script>
