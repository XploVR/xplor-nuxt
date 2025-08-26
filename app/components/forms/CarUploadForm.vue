
<template>
  <Form @submit="onSubmit" class="space-y-6">
    <Tabs v-model="activeTab" class="w-full">
      <TabsList class="grid grid-cols-4 lg:grid-cols-8 w-full h-auto p-1">
        <TabsTrigger value="basic-info" class="text-xs">Basic Info</TabsTrigger>
        <TabsTrigger value="specifications" class="text-xs">Specs</TabsTrigger>
        <TabsTrigger value="features" class="text-xs">Features</TabsTrigger>
        <TabsTrigger value="ownership" class="text-xs">Ownership</TabsTrigger>
        <TabsTrigger value="access" class="text-xs">Access</TabsTrigger>
        <TabsTrigger value="media" class="text-xs">Media</TabsTrigger>
        <TabsTrigger value="location" class="text-xs">Location</TabsTrigger>
        <TabsTrigger value="visibility" class="text-xs">Visibility</TabsTrigger>
      </TabsList>

      <TabsContent value="basic-info" class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2">Basic Information</CardTitle>
            <CardDescription>Essential details about your vehicle</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormItem>
                <FormLabel>Vehicle Type</FormLabel>
                <Select v-model="model.vehicleType">
                  <SelectTrigger><SelectValue placeholder="Select vehicle type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
              <FormItem>
                <FormLabel>Make</FormLabel>
                <Input v-model="model.make" placeholder="e.g., Toyota" />
              </FormItem>
              <FormItem>
                <FormLabel>Model</FormLabel>
                <Input v-model="model.model" placeholder="e.g., Camry" />
              </FormItem>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <div class="flex justify-end gap-2">
      <Button type="button" variant="outline" @click="emit('cancel')">Cancel</Button>
      <Button type="submit" :disabled="isSubmitting">Save</Button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormItem, FormLabel } from '@/components/ui/form'

const props = defineProps<{ isSubmitting: boolean }>()
const emit = defineEmits<{(e:'submit', data:any):void,(e:'cancel'):void}>()

const activeTab = ref('basic-info')
const model = reactive({
  vehicleType: '', make: '', model: ''
})

function onSubmit(e: Event) {
  e.preventDefault()
  emit('submit', { ...model })
}
</script>

