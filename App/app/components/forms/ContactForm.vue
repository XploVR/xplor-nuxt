
<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="sm:max-w-md bg-background">
      <DialogHeader>
        <DialogTitle class="text-foreground">Contact Xplor Charters</DialogTitle>
      </DialogHeader>

      <Form @submit="onSubmit" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <Input v-model="model.firstName" placeholder="John" />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <Input v-model="model.lastName" placeholder="Doe" />
          </FormItem>
        </div>

        <FormItem>
          <FormLabel>Email</FormLabel>
          <Input v-model="model.email" type="email" placeholder="john@example.com" />
        </FormItem>

        <div class="grid grid-cols-2 gap-4">
          <FormItem>
            <FormLabel>Phone (Optional)</FormLabel>
            <Input v-model="model.phone" placeholder="+1 (555) 123-4567" />
          </FormItem>
          <FormItem>
            <FormLabel>Company</FormLabel>
            <Input v-model="model.company" placeholder="Acme Co." />
          </FormItem>
        </div>

        <FormItem>
          <FormLabel>Inquiry Type</FormLabel>
          <Select v-model="model.inquiryType">
            <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="support">Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>

        <FormItem>
          <FormLabel>Message</FormLabel>
          <Textarea v-model="model.message" class="min-h-[120px]" />
        </FormItem>

        <div class="flex justify-end gap-2">
          <Button type="button" variant="outline" @click="emit('update:open', false)">Cancel</Button>
          <Button type="submit" :disabled="submitting">
            <Send class="h-4 w-4 mr-2" /> Send
          </Button>
        </div>
      </Form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{(e:'update:open', val:boolean):void}>()

const submitting = ref(false)
const model = reactive({ firstName:'', lastName:'', email:'', phone:'', company:'', inquiryType:'', message:'' })

async function onSubmit(e: Event) {
  e.preventDefault()
  submitting.value = true
  try {
    await new Promise(r => setTimeout(r, 800))
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.")
    Object.assign(model, { firstName:'', lastName:'', email:'', phone:'', company:'', inquiryType:'', message:'' })
    emit('update:open', false)
  } catch (e) {
    toast.error('Failed to send message. Please try again.')
  } finally {
    submitting.value = false
  }
}
</script>

