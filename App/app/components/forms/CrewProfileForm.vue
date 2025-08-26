
<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle class="flex items-center gap-2">
          <UserCheck class="h-5 w-5" /> Crew Profile Management
        </DialogTitle>
        <DialogDescription>Create comprehensive profiles for all crew members</DialogDescription>
      </DialogHeader>

      <Form @submit="submit" class="space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium">Crew Member:</span>
            <Select v-model="currentIndexStr">
              <SelectTrigger class="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem v-for="(m,i) in members" :key="i" :value="String(i)">
                  {{ m.fullName || `Crew Member ${i+1}` }}
                </SelectItem>
              </SelectContent>
            </Select>
            <Button type="button" variant="outline" @click="addMember">Add Crew</Button>
            <Button v-if="members.length>1" type="button" variant="destructive" @click="removeMember">Remove</Button>
          </div>
          <div class="text-sm text-muted-foreground">{{ currentIndex+1 }} of {{ members.length }}</div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2"><User class="h-4 w-4" /> Basic Identification</CardTitle>
          </CardHeader>
          <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <Input v-model="current.fullName" placeholder="Enter full name" />
            </FormItem>
            <FormItem>
              <FormLabel>Job Title *</FormLabel>
              <Select v-model="current.jobTitle">
                <SelectTrigger><SelectValue placeholder="Select job title" /></SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="t in jobTitles" :key="t" :value="t">{{ t }}</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem>
              <FormLabel>Nationality *</FormLabel>
              <Input v-model="current.nationality" placeholder="Enter nationality" />
            </FormItem>
          </CardContent>
        </Card>

        <div class="flex justify-end gap-2">
          <Button type="button" variant="outline" @click="emit('update:open', false)">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </Form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { UserCheck, User } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{(e:'update:open', val:boolean):void}>()

type Crew = { fullName:string; jobTitle:string; nationality:string }
const jobTitles = ['Captain','Chief Stewardess','Engineer','First Officer','Chef','Stewardess','Deckhand','Bosun']

const members = reactive<Crew[]>([{ fullName:'', jobTitle:'', nationality:'' }])
const currentIndex = ref(0)
const currentIndexStr = computed({
  get: () => String(currentIndex.value),
  set: (v: string) => { currentIndex.value = parseInt(v) }
})
const current = computed(() => members[currentIndex.value])

function addMember(){ members.push({ fullName:'', jobTitle:'', nationality:'' }); currentIndex.value = members.length-1 }
function removeMember(){ if(members.length>1){ members.splice(currentIndex.value,1); currentIndex.value = Math.max(0, currentIndex.value-1) } }

function submit(e: Event){
  e.preventDefault()
  toast.success('Crew profile(s) saved successfully!')
  emit('update:open', false)
}
</script>

