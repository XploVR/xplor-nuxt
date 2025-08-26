<!-- src/components/MoreSpaceCategoriesDropdown.vue -->
<template>
  <div ref="rootRef" class="relative inline-block">
    <!-- Trigger -->
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
      @click="toggle"
      :aria-expanded="open ? 'true' : 'false'"
      aria-haspopup="listbox"
    >
      <Plus class="h-5 w-5" />
      More Space Categories
      <ChevronDown v-if="!open" class="h-5 w-5" />
      <ChevronUp v-else class="h-5 w-5" />
    </button>

    <!-- Panel -->
    <transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        ref="panelRef"
        class="absolute z-50 mt-2 w-[22rem] rounded-md border bg-white shadow-xl md:w-[28rem]"
        :class="alignmentClass"
        @keydown.stop="onPanelKeydown"
      >
        <!-- Search -->
        <div class="sticky top-0 border-b bg-white p-2">
          <label class="sr-only" for="msc-search">Search categories</label>
          <input
            id="msc-search"
            ref="searchRef"
            v-model="query"
            type="text"
            placeholder="Search categories…"
            class="block w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            @keydown.stop="onSearchKeydown"
          />
        </div>

        <!-- List -->
        <ul
          ref="listRef"
          role="listbox"
          :aria-activedescendant="activeId"
          tabindex="0"
          class="max-h-96 overflow-y-auto p-2 grid gap-1"
          :class="gridClass"
          @keydown.stop="onListKeydown"
        >
          <li
            v-for="(item, i) in filtered"
            :key="item.to"
            role="option"
            :id="`msc-opt-${i}`"
            :aria-selected="i === activeIndex"
            class="col-span-1"
          >
            <RouterLink
              :to="item.to"
              class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent focus:bg-accent outline-none"
              :class="i === activeIndex ? 'bg-accent' : ''"
              @click="close"
              @mouseenter="activeIndex = i"
            >
              <component v-if="item.icon" :is="item.icon" class="h-4 w-4" />
              <span v-else class="inline-block h-2 w-2 rounded-full bg-muted-foreground/40" />
              <span class="truncate">{{ item.label }}</span>
            </RouterLink>
          </li>

          <li v-if="filtered.length === 0" class="col-span-full px-3 py-6 text-center text-sm text-muted-foreground">
            No categories match “{{ query }}”
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import {
  Plus,
  ChevronDown,
  ChevronUp,
  Landmark,
  GraduationCap,
  Sparkles,
  Ship,
  Flag,
  Train,
  Building2,
  Store,
  Hospital,
  Clapperboard,
  Church,
  Factory,
  Waves,
  Building,
  Trophy,
} from 'lucide-vue-next'

type IconComp = any
type Item = { label: string; to: string; icon?: IconComp }

const props = withDefaults(
  defineProps<{
    items?: Item[]
    align?: 'left' | 'right'
    columns?: number // desktop column count
  }>(),
  {
    align: 'left',
    columns: 2,
    items: () => [
      { label: 'Museums & Art Galleries', to: '/museums-galleries', icon: Landmark },
      { label: 'Schools & Education', to: '/education-and-schools', icon: GraduationCap },
      { label: 'Experiences & Attractions', to: '/experiences-and-attractions', icon: Sparkles },
      { label: 'Cruise Ships', to: '/cruise-ships', icon: Ship },
      { label: 'Developments', to: '/developments', icon: Building2 },
      { label: 'Golf Courses', to: '/golf-courses', icon: Flag },
      { label: 'Train & Tram', to: '/trains-and-trams', icon: Train },
      { label: 'UAE Developments', to: '/uae-developments', icon: Building },
      { label: 'Retail & Pop-Up', to: '/retail-and-popups', icon: Store },
      { label: 'Government & Hospital', to: '/government-and-healthcare', icon: Hospital },
      { label: 'Sets, Stages & Venues', to: '/sets-stages-and-venues', icon: Clapperboard },
      { label: 'Heritage & Worship', to: '/heritage-and-worship', icon: Church },
      { label: 'Merchant Shipping', to: '/merchant-shipping', icon: Ship },
      { label: 'Manufacturing Facility', to: '/manufacturing-facilities', icon: Factory },
      { label: 'Maritime Infrastructure', to: '/maritime-infrastructure', icon: Waves },
      { label: 'Offices, Showrooms & Studios', to: '/offices-showrooms-studios', icon: Building2 },
      { label: 'Sports Stadiums & Theme Parks', to: '/sports-stadiums-theme-parks', icon: Trophy },
    ],
  }
)

const open = ref(false)
const query = ref('')
const activeIndex = ref(0)

const rootRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

const alignmentClass = computed(() =>
  props.align === 'right' ? 'right-0' : 'left-0'
)

const gridClass = computed(() => {
  const cols = Math.max(1, Number(props.columns) || 2)
  return `md:grid-cols-${cols} grid-cols-1`
})

// NOTE: Tailwind doesn't generate dynamic classes like md:grid-cols-${n} automatically.
// If your build strips them, add safelist in tailwind.config or fallback to 2 columns:
watch(
  () => props.columns,
  (c) => {
    if (![1, 2, 3, 4].includes(Number(c))) {
      // eslint-disable-next-line no-console
      console.warn('[MoreSpaceCategoriesDropdown] columns should be 1–4 for Tailwind safelist unless you safelist classes yourself.')
    }
  },
  { immediate: true }
)

const normalized = computed(() =>
  props.items.map((i) => ({
    ...i,
    _k: `${i.label}__${i.to}`,
  }))
)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return normalized.value
  return normalized.value.filter((i) => i.label.toLowerCase().includes(q))
})

const activeId = computed(() =>
  open.value && filtered.value[activeIndex.value]
    ? `msc-opt-${activeIndex.value}`
    : undefined
)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function openAndFocus() {
  open.value = true
  nextTick(() => {
    // Focus search first; if not, focus list
    if (searchRef.value) {
      searchRef.value.focus()
      searchRef.value.select?.()
    } else {
      listRef.value?.focus()
    }
  })
  // reset active index to first visible
  activeIndex.value = 0
}

function onPanelKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  }
}

function onSearchKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    // move focus to list and highlight current active
    listRef.value?.focus()
  } else if (e.key === 'Enter') {
    // if only one result, go to it
    if (filtered.value.length === 1) {
      e.preventDefault()
      const one = filtered.value[0]
      router.push(one.to)
      close()
    }
  } else if (e.key === 'Escape') {
    e.preventDefault()
    close()
  }
}

function onListKeydown(e: KeyboardEvent) {
  if (!filtered.value.length) return
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % filtered.value.length
    scrollActiveIntoView()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value =
      (activeIndex.value - 1 + filtered.value.length) % filtered.value.length
    scrollActiveIntoView()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const item = filtered.value[activeIndex.value]
    if (item) {
      router.push(item.to)
      close()
    }
  } else if (e.key === 'Escape') {
    e.preventDefault()
    close()
  }
}

function scrollActiveIntoView() {
  const id = `msc-opt-${activeIndex.value}`
  const el = panelRef.value?.querySelector<HTMLElement>('#' + id)
  el?.scrollIntoView({ block: 'nearest' })
}

// open: focus search and reset index
watch(open, (v) => {
  if (v) {
    openAndFocus()
  }
})

// click outside to close
function onDocMousedown(e: MouseEvent) {
  const target = e.target as Node
  if (!rootRef.value) return
  if (!rootRef.value.contains(target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', onDocMousedown)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocMousedown)
})

const router = useRouter()
</script>

<style scoped>
/* Ensure we have utility classes for 1–4 columns at md breakpoint.
   If Purge strips dynamic classes, safelist these in tailwind.config:
   md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4
*/
@media (min-width: 768px) {
  .md\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
</style>
