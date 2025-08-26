
<template>
  <form @submit.prevent="onSubmit" class="space-y-6">
    <Tabs v-model="tab" class="w-full">
      <TabsList class="grid w-full grid-cols-4 lg:grid-cols-8">
        <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
        <TabsTrigger value="ship-details">Ship Details</TabsTrigger>
        <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
        <TabsTrigger value="dining">Dining & Entertainment</TabsTrigger>
        <TabsTrigger value="safety">Safety & Compliance</TabsTrigger>
        <TabsTrigger value="media">Media & Files</TabsTrigger>
        <TabsTrigger value="location">Location & Itinerary</TabsTrigger>
        <TabsTrigger value="visibility">Visibility</TabsTrigger>
      </TabsList>

      <TabsContent value="basic-info" class="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>General details about the cruise ship</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="listingTitle">Listing Title *</Label>
                <Input id="listingTitle" v-model="model.listingTitle" placeholder="e.g., MV Aurora – Mediterranean Cruise" />
              </div>
              <div class="space-y-2">
                <Label>Ship Type *</Label>
                <Select v-model="model.shipType">
                  <SelectTrigger><SelectValue placeholder="Select ship type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ocean-cruise">Ocean Cruise Ship</SelectItem>
                    <SelectItem value="river-cruise">River Cruise Vessel</SelectItem>
                    <SelectItem value="expedition">Expedition Ship</SelectItem>
                    <SelectItem value="yacht-cruise">Yacht Cruise Ship</SelectItem>
                    <SelectItem value="luxury-barge">Luxury Barge</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <div class="flex justify-end gap-2">
      <Button type="submit">Save</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'

const model = reactive({ listingTitle: '', shipType: '' })
const tab = ref('basic-info')

function onSubmit(){
  console.log('CruiseShip form submit', model)
  toast.success('Cruise ship listing created successfully!')
}
</script>

