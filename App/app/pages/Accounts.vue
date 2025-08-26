<template>
  <div class="container mx-auto p-6 space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Account Management</h1>
        <p class="text-muted-foreground">
          Manage your profile, billing, and account preferences
        </p>
      </div>
      <Badge variant="secondary" class="flex items-center gap-2">
        <Shield class="h-4 w-4" />
        Pro Account
      </Badge>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <User class="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal details and profile settings
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="flex items-center gap-6">
              <Avatar class="h-20 w-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div class="space-y-2">
                <Button variant="outline" size="sm">Change Photo</Button>
                <p class="text-sm text-muted-foreground">
                  Recommended: Square image, at least 400x400px
                </p>
              </div>
            </div>

            <Separator />

            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <Label for="firstName">First Name</Label>
                <Input id="firstName" v-model="profile.firstName" />
              </div>
              <div class="space-y-2">
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" v-model="profile.lastName" />
              </div>
              <div class="space-y-2">
                <Label for="email">Email Address</Label>
                <Input id="email" type="email" v-model="profile.email" />
              </div>
              <div class="space-y-2">
                <Label for="phone">Phone Number</Label>
                <Input id="phone" v-model="profile.phone" />
              </div>
            </div>

            <div class="space-y-2">
              <Label for="bio">Bio</Label>
              <Textarea id="bio" v-model="profile.bio" placeholder="Tell us about yourself..." />
            </div>

            <div class="space-y-2">
              <Label for="location">Location</Label>
              <Input id="location" v-model="profile.location" />
            </div>

            <Button @click="saveProfile">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <CreditCard class="h-5 w-5" />
              Billing Information
            </CardTitle>
            <CardDescription>Manage your payment methods and billing details</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="flex items-center justify-between p-4 border rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                <div>
                  <p class="font-medium">•••• •••• •••• 4242</p>
                  <p class="text-sm text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
              <Button variant="outline">Update</Button>
            </div>
            <Button> Add Payment Method </Button>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Users class="h-5 w-5" />
              Team Settings
            </CardTitle>
            <CardDescription>Manage team members and roles</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">John Doe</p>
                  <p class="text-sm text-muted-foreground">Owner</p>
                </div>
              </div>
              <Badge>Owner</Badge>
            </div>
            <Button variant="outline" class="w-full">Invite Team Member</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { User, Mail, Phone, MapPin, Calendar, Shield, CreditCard, Users } from 'lucide-vue-next'

const profile = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Professional 3D space capture specialist with 5+ years of experience in real estate and architecture visualization.',
  location: 'San Francisco, CA'
})

function saveProfile() {
  // wire to backend
  console.log('Saving profile', profile.value)
}
</script>