<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <title>Xplor for Schools & Education – The Best Virtual Tour Platform for Academic Institutions</title>
      <meta 
        name="description" 
        content="Showcase your school or university on Xplor with immersive virtual tours. Reach global families, increase enrollment, and present your learning environment like never before." 
      />
    </Head>

    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <section class="relative py-24 lg:py-32 overflow-hidden">
        <div class="absolute inset-0">
          <img
            :src="educationSchoolsHero"
            alt="Modern educational institution"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-teal-900/70"></div>
        </div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-8">
              <Star class="w-4 h-4 mr-2" />
              Trusted by Leading Institutions Worldwide
            </div>
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Showcase Your School to the World — 
              <span class="text-blue-200"> Virtually</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              From international schools to elite universities, Xplor connects your institution to parents, 
              students, and educators everywhere through immersive, interactive tours.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" class="text-lg px-8 py-4" @click="uploadSchoolTour">
                Upload Your School
                <ArrowRight class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" class="text-lg px-8 py-4" @click="seeExample">
                <Eye class="mr-2 h-5 w-5" />
                See a Live Example
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Xplor Section -->
      <section class="py-20 lg:py-32 bg-muted/30">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Xplor is the #1 Choice for Schools & Education
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform how families discover and experience your educational environment
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School class="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle class="text-xl">Campus Tours Anywhere</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Let families explore classrooms, dorms, labs, sports facilities, and more — from any device.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe class="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle class="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Ideal for international schools and universities attracting students from abroad.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen class="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle class="text-xl">Academic Integration</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Embed curriculum highlights, subject videos, faculty bios, and student testimonials.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign class="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle class="text-xl">Drive Enrollment</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Turn views into visits — link to inquiry forms, admissions portals, and scholarship applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical class="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle class="text-xl">STEM, Arts & Labs</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Showcase your facilities, equipment, and innovation hubs in immersive 360° detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield class="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle class="text-xl">Secure & Controlled Access</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Control visibility by department, password-protect private areas, or allow full open access.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="py-20 lg:py-32">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your school online in three simple steps
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-12">
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload class="h-10 w-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                1. Upload Your School Tour
              </h3>
              <p class="text-lg text-muted-foreground">
                Create a virtual experience of your school using VR walkthroughs or 360° media.
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare class="h-10 w-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                2. Tell Your Story
              </h3>
              <p class="text-lg text-muted-foreground">
                Add key details — programs, activities, culture, and what makes your school unique.
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users class="h-10 w-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                3. Reach Future Students
              </h3>
              <p class="text-lg text-muted-foreground">
                Share with families, agents, and communities around the world — instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="py-20 lg:py-32 bg-muted/30">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Success Stories from Leading Institutions
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "Xplor helped us attract boarders from over 20 countries. Virtual tours became our most powerful recruitment tool."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — International School Administrator
                </div>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "Our rural district used Xplor to showcase our new STEM labs, increasing enrollment by 40%."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — District Superintendent
                </div>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "Virtual tours are now integral to our digital admissions process. We've seen a 60% increase in qualified applications."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — University Admissions Director
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Trust Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-foreground mb-8">
              Trusted by Accredited Institutions Worldwide
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div class="text-center">
                <div class="text-sm font-medium">International Baccalaureate</div>
              </div>
              <div class="text-center">
                <div class="text-sm font-medium">Cognia Accredited</div>
              </div>
              <div class="text-center">
                <div class="text-sm font-medium">NEASC Member</div>
              </div>
              <div class="text-center">
                <div class="text-sm font-medium">Ofsted Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Transform the Way the World Sees Your School
            </h2>
            <p class="text-xl lg:text-2xl text-muted-foreground mb-12">
              Join the leading platform for immersive education discovery.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" class="text-lg px-8 py-4" @click="uploadSchoolTour">
                Upload Your School
                <ArrowRight class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" class="text-lg px-8 py-4" @click="talkToTeam">
                Talk to the Xplor Education Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Head } from '@vueuse/head'
import { 
  ArrowRight, 
  Eye, 
  School, 
  Globe, 
  BookOpen, 
  DollarSign, 
  FlaskConical, 
  Shield, 
  Upload, 
  MessageSquare, 
  Users, 
  Star 
} from 'lucide-vue-next'
import Button from '@/components/ui/button.vue'
import Card from '@/components/ui/card.vue'
import CardContent from '@/components/ui/card-content.vue'
import CardDescription from '@/components/ui/card-description.vue'
import CardHeader from '@/components/ui/card-header.vue'
import CardTitle from '@/components/ui/card-title.vue'
import educationSchoolsHero from '@/assets/education-schools-hero.jpg'

// Methods
const uploadSchoolTour = () => {
  // Handle upload school tour action
  console.log('Upload school tour clicked')
}

const seeExample = () => {
  // Handle see example action
  console.log('See example clicked')
}

const talkToTeam = () => {
  // Handle talk to team action
  console.log('Talk to team clicked')
}
</script>

<style scoped>
/* Add any component-specific styles if needed */
</style>
