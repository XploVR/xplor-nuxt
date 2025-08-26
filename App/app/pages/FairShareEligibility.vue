<template>
  <div class="min-h-screen bg-background p-6">
    <div class="max-w-3xl mx-auto">
      <Card>
        <CardHeader class="text-center">
          <CardTitle>FairShare Eligibility Checklist</CardTitle>
        </CardHeader>
        <CardContent class="space-y-3">
          <div v-for="item in items" :key="item.key" class="flex items-start gap-3 p-3 border rounded-lg">
            <Checkbox :id="item.key" v-model:checked="form[item.key]" />
            <Label :for="item.key" class="cursor-pointer">{{ item.label }}</Label>
          </div>
          <div class="space-y-2">
            <Label for="signature">Digital Signature (optional)</Label>
            <Input id="signature" v-model="form.digitalSignature" placeholder="Type your name" />
          </div>
          <div class="flex gap-3 pt-4">
            <Button class="w-full" @click="submit">Confirm Eligibility</Button>
            <Button class="w-full" variant="outline" @click="requestAgreement">Request Agreement</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'vue-sonner'

const form = reactive({
  activelyEmployed:false, validSTCW:false, validENG1:false, crewManifest:false,
  completedProfile:false, yachtProfileUpdated:false, minimumDays:false, commissionSharing:false, termsAccepted:false,
  digitalSignature:'',
})

const items = [
  { key:'activelyEmployed', label:'I am actively employed on a yacht listed for charter on Xplor.' },
  { key:'validSTCW', label:'I hold a valid STCW Basic Safety Training certificate.' },
  { key:'validENG1', label:'I hold a valid ENG1 or equivalent seafarer medical certificate.' },
  { key:'crewManifest', label:'I am listed on the official crew manifest during charter operations.' },
  { key:'completedProfile', label:'I have completed my Xplor crew profile with certifications and position.' },
  { key:'yachtProfileUpdated', label:'I help keep our yacht profile updated on Xplor.' },
  { key:'minimumDays', label:'I served a minimum of 7 consecutive days onboard during a qualifying charter.' },
  { key:'commissionSharing', label:'I agree that commission is shared equally among eligible crew unless otherwise agreed.' },
  { key:'termsAccepted', label:'I accept the terms of the FairShare Agreement.' },
]

function submit(){
  const allOk = items.every(i => (form as any)[i.key])
  if (!allOk) { toast.error('Please confirm all requirements'); return }
  toast.success('Eligibility confirmed. Agreement link will be emailed.')
}
function requestAgreement(){
  toast.success('Agreement requested — check your email shortly.')
}
</script>