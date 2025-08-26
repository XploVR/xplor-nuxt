<template>
  <div class="min-h-screen bg-background">
    <section class="py-16 bg-gradient-to-br from-xplor-yellow/10 to-background">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <Badge class="bg-xplor-yellow text-xplor-black font-medium mb-4">JOIN OUR NETWORK</Badge>
          <h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Become a Certified Capture Technician
          </h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join <span class="font-typografix">xplor</span>'s global network of professional capture technicians and help businesses 
            create stunning digital twins while building your own thriving capture services business.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">
          Why Partner with <span class="font-typografix">xplor</span>?
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="(b, i) in benefits" :key="i" class="border-border">
            <CardContent class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-xplor-yellow rounded-full flex items-center justify-center">
                  <component :is="b.icon" class="h-6 w-6 text-xplor-black" />
                </div>
                <h3 class="font-semibold text-foreground">{{ b.title }}</h3>
              </div>
              <p class="text-muted-foreground">{{ b.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section class="py-16 bg-muted/30">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Certification Requirements</h2>
        <Card class="border-border">
          <CardContent class="p-8">
                        <!-- <Separator /> -->
                        <div class="space-y-4">
            <div v-for="(req, i) in requirements" :key="i" class="flex items-start gap-3">
              <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span class="text-muted-foreground">{{ req }}</span>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">Apply to Join Our Network</h2>
          <p class="text-lg text-muted-foreground">Complete the application below to start your journey as a certified capture technician.</p>
        </div>

        <Card class="border-border">
          <CardHeader>
            <CardTitle>Business Application</CardTitle>
            <CardDescription>Please provide detailed information about your business and experience.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-8">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-foreground flex items-center gap-2">
                <Users class="h-5 w-5" />
                Personal Information
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="firstName">First Name *</Label>
                  <Input id="firstName" v-model="form.firstName" required placeholder="Enter your first name" />
                </div>
                <div class="space-y-2">
                  <Label for="lastName">Last Name *</Label>
                  <Input id="lastName" v-model="form.lastName" required placeholder="Enter your last name" />
                </div>
                <div class="space-y-2">
                  <Label for="email">Email Address *</Label>
                  <Input id="email" type="email" v-model="form.email" required placeholder="your@email.com" />
                </div>
                <div class="space-y-2">
                  <Label for="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" v-model="form.phone" required placeholder="+1 (555) 123-4567" />
                </div>
              </div>
            </div>

            <Separator />

            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-foreground flex items-center gap-2">
                <Building class="h-5 w-5" />
                Business Information
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="company">Company Name *</Label>
                  <Input id="company" v-model="form.company" required />
                </div>
                <div class="space-y-2">
                  <Label for="website">Website</Label>
                  <Input id="website" v-model="form.website" placeholder="https://..." />
                </div>
                <div class="space-y-2 md:col-span-2">
                  <Label for="portfolio">Portfolio Links</Label>
                  <Textarea id="portfolio" v-model="form.portfolio" placeholder="Paste links to 3-5 projects" />
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <Button @click="submit">Submit Application</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
// import { Separator } from '@/components/ui/separator'
import { DollarSign, Clock, MapPin, Shield, Award, Users, CheckCircle, Building } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
```
import { DollarSign, Clock, MapPin, Shield, Award, Users, CheckCircle, Building } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const requirements = [
  'Professional 3D camera equipment (Pro3, Pro2, or equivalent)',
  'Minimum 2 years experience in photography or 3D capture',
  'Valid business license and insurance',
  'Portfolio of at least 10 completed capture projects',
  'Reliable transportation and ability to travel within service area',
  'Professional communication skills and customer service experience'
]

const benefits = [
  { icon: DollarSign, title: 'Competitive Earnings', description: 'Starting at $150-300 per capture session' },
  { icon: Clock, title: 'Flexible Schedule', description: 'Choose your own hours and availability' },
  { icon: MapPin, title: 'Local Opportunities', description: 'Work in your area with minimal travel' },
  { icon: Shield, title: 'Full Support', description: 'Training, technical support, and marketing assistance' },
  { icon: Award, title: 'Professional Growth', description: 'Join a network of certified professionals' },
  { icon: Users, title: 'Steady Work', description: 'Access to growing demand for virtual tours' }
]

const form = ref({
  firstName: '', lastName: '', email: '', phone: '',
  company: '', website: '', portfolio: ''
})

function submit() {
  // wire this to your backend / Supabase
  console.log('Application:', form.value)
  toast.success('Application submitted')
}
</script>