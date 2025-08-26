<template>
  <Dialog :open="model" @update:open="v => emit('update:open', v)">
    <DialogContent v-bind="$attrs" class="sm:max-w-lg">
      <DialogHeader v-if="title || description">
        <DialogTitle v-if="title">{{ title }}</DialogTitle>
        <DialogDescription v-if="description">{{ description }}</DialogDescription>
      </DialogHeader>

      <!-- Handles async children without warnings -->
      <Suspense>
        <template #default>
          <slot />
        </template>
        <template #fallback>
          <div class="flex items-center justify-center py-8 text-sm text-muted-foreground">
            Loading…
          </div>
        </template>
      </Suspense>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
defineOptions({ inheritAttrs: false })

const props = defineProps<{ open: boolean; title?: string; description?: string }>()
const emit  = defineEmits<{ (e:'update:open', v:boolean): void }>()

const model = computed({
  get: () => props.open,
  set: (v: boolean) => emit('update:open', v),
})
</script>

