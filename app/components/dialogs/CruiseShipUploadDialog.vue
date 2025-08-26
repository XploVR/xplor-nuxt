
<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="max-w-6xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Upload Cruise Ship</DialogTitle>
      </DialogHeader>
      <CruiseShipForm />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import CruiseShipForm from '@/components/forms/CruiseShipForm.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{(e:'update:open', val:boolean):void}>()
</script>
