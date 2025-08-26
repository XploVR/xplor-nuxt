<template>
  <div class="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4">
    <div class="max-w-3xl mx-auto">
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="text-2xl font-bold">FairShare Crew Application</CardTitle>
          <CardDescription>Join the FairShare program and link to your yacht</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <form @submit.prevent="submit">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="fullName">Full Name</Label>
                <Input id="fullName" v-model="form.fullName" required />
              </div>
              <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" v-model="form.email" required />
              </div>
              <div class="space-y-2 md:col-span-2">
                <Label for="yachtName">Yacht Name</Label>
                <Input id="yachtName" v-model="form.yachtName" required />
              </div>
              <div class="space-y-2">
                <Label for="role">Role Onboard</Label>
                <Input id="role" v-model="form.role" required />
              </div>
              <div class="space-y-2">
                <Label for="social">Social Media (optional)</Label>
                <Input id="social" v-model="form.socialMedia" placeholder="https://..." />
              </div>
            </div>
            <div class="flex items-center space-x-2 mt-2">
              <Checkbox id="active" v-model:checked="form.isActiveCrew" />
              <Label for="active">I confirm I am currently active crew</Label>
            </div>
            <div class="mt-6 flex gap-3">
              <Button type="submit" class="w-full">Submit Application</Button>
              <Button type="button" variant="outline" class="w-full" @click="reset">Reset</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card v-if="submitted" class="mt-6">
        <CardHeader class="text-center">
          <CheckCircle class="h-12 w-12 text-green-500 mx-auto mb-2" />
          <CardTitle>Thanks for joining!</CardTitle>
          <CardDescription>We will verify your status shortly.</CardDescription>
        </CardHeader>
        <CardContent class="flex gap-3">
          <Button class="w-full" @click="showDashboard = true">View Dashboard</Button>
          <Button variant="outline" class="w-full" @click="submitted=false">Submit Another</Button>
        </CardContent>
      </Card>

      <div v-if="showDashboard" class="grid md:grid-cols-3 gap-6 mt-6">
        <Card><CardHeader><CardTitle>Yacht(s) Linked</CardTitle></CardHeader><CardContent><div class="p-3 border rounded">Lady Sarah — Captain</div></CardContent></Card>
        <Card><CardHeader><CardTitle>Status</CardTitle></CardHeader><CardContent><div class="text-sm flex items-center gap-2"><AlertCircle class="h-4 w-4 text-yellow-500" /> Awaiting Verification</div></CardContent></Card>
        <Card><CardHeader><CardTitle>Estimated Payout</CardTitle></CardHeader><CardContent><div class="text-2xl font-bold">$0</div><p class="text-xs text-muted-foreground">Updates after completed charters</p></CardContent></Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckCircle, AlertCircle } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const form = ref({ fullName:'', email:'', yachtName:'', role:'', socialMedia:'', isActiveCrew:false })
const submitted = ref(false)
const showDashboard = ref(false)

function submit() {
  if (!form.value.isActiveCrew) { toast.error('Please confirm you are currently active crew'); return }
  submitted.value = true
  toast.success('Application submitted successfully!')
}
function reset() { form.value = { fullName:'', email:'', yachtName:'', role:'', socialMedia:'', isActiveCrew:false } }
</script>