
<template>
  <BaseDialog v-model:open="innerOpen">
    <template #title>Share</template>
    <template #description>{{ spaceName }}</template>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="md:col-span-2">
          <label class="text-sm font-medium">Share link</label>
          <input :value="shareUrl" readonly class="input" />
        </div>
        <button class="px-3 py-2 rounded-md bg-primary text-primary-foreground self-end" @click="copy">
          {{ copied ? 'Copied!' : 'Copy Link' }}
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button class="border rounded-md px-3 py-2" @click="open('https://www.facebook.com/sharer/sharer.php?u=' + encUrl)">Facebook</button>
        <button class="border rounded-md px-3 py-2" @click="open('https://twitter.com/intent/tweet?url=' + encUrl + '&text=' + encText)">X / Twitter</button>
        <button class="border rounded-md px-3 py-2" @click="open('https://www.linkedin.com/sharing/share-offsite/?url=' + encUrl)">LinkedIn</button>
        <button class="border rounded-md px-3 py-2" @click="open('https://pinterest.com/pin/create/button/?url=' + encUrl + '&description=' + encText)">Pinterest</button>
        <button class="border rounded-md px-3 py-2" @click="open('https://wa.me/?text=' + encTextPlusUrl)">WhatsApp</button>
        <button class="border rounded-md px-3 py-2" @click="open('https://t.me/share/url?url=' + encUrl + '&text=' + encText)">Telegram</button>
        <button class="border rounded-md px-3 py-2" @click="mailto()">Email</button>
        <button class="border rounded-md px-3 py-2" @click="copyAlert('Discord')">Discord</button>
      </div>
    </div>
  </BaseDialog>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import BaseDialog from '@/components/common/BaseDialog.vue'

const props = defineProps<{ open: boolean; spaceName: string; spaceDescription: string; spaceUrl?: string }>()
const emit = defineEmits<{ (e:'update:open', v:boolean): void }>()

const innerOpen = ref(props.open)
watch(() => props.open, v => innerOpen.value = v)
watch(innerOpen, v => emit('update:open', v))

const shareUrl = computed(() => props.spaceUrl ?? window.location.href)
const shareText = computed(() => `Check out this amazing virtual space: ${props.spaceName} - ${props.spaceDescription}`)
const encUrl = computed(() => encodeURIComponent(shareUrl.value))
const encText = computed(() => encodeURIComponent(shareText.value))
const encTextPlusUrl = computed(() => encodeURIComponent(`${shareText.value} ${shareUrl.value}`))

const copied = ref(false)
async function copy(){
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    copied.value = true
    setTimeout(()=>copied.value=false, 2000)
  } catch {
    alert('Failed to copy. Please copy manually.')
  }
}

function open(url: string){ window.open(url, '_blank', 'width=600,height=400') }
function mailto(){
  const subject = encodeURIComponent(`Check out this virtual space: ${props.spaceName}`)
  const body = encodeURIComponent(`${shareText.value}\n\nView the space here: ${shareUrl.value}`)
  window.location.href = `mailto:?subject=${subject}&body=${body}`
}
function copyAlert(platform: string){ copy(); alert(`Link copied. Paste it into ${platform}.`) }
</script>
<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>
