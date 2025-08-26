
<template>
  <BaseDialog v-model:open="innerOpen" class="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col" title="Create Hotel/Resort Listing">
    <template #description>Create a comprehensive hotel or resort listing with room profiles and amenities.</template>

    <div class="flex-1 overflow-auto">
      <form @submit.prevent="onSubmit" class="space-y-6">
        <HotelUploadForm ref="formRef" />
        <div class="flex gap-2 pt-4 border-t">
          <button type="button" class="px-3 py-2 rounded-md border" :disabled="isSubmitting" @click="innerOpen=false">Cancel</button>
          <button type="submit" class="px-3 py-2 rounded-md bg-primary text-primary-foreground" :disabled="isSubmitting">
            {{ isSubmitting ? 'Creating...' : 'Create Listing' }}
          </button>
        </div>
      </form>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import HotelUploadForm from '@/components/forms/HotelUploadForm.vue'
import BaseDialog from '@/components/common/BaseDialog.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
const isSubmitting = ref(false)
const formRef = ref<InstanceType<typeof HotelUploadForm> | null>(null)

watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))

async function onSubmit(){
  try{
    isSubmitting.value = true  # will be fixed below
  }finally{
    isSubmitting.value = false
  }
}
</script>
