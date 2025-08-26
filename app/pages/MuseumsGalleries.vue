<template>
  <div>
    <Head>
      <title>Xplor for Museums & Art Galleries – The World's Leading Virtual Exhibition Platform</title>
      <meta 
        name="description" 
        content="Xplor helps museums and art galleries bring their exhibitions to life online with immersive VR tours, global reach, and monetization tools." 
      />
    </Head>

    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <section class="relative py-24 lg:py-32 overflow-hidden">
        <div class="absolute inset-0">
          <img
            :src="museumsGalleriesHero"
            alt="Elegant art gallery with exhibitions"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-blue-800/60 to-gray-900/70"></div>
        </div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Showcase Your Museum or Gallery to the World — 
              <span class="text-purple-200"> Virtually</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              Xplor is the world's most advanced platform for immersive cultural experiences. 
              Elevate your exhibitions, reach global audiences, and preserve your collections in a whole new dimension.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" class="text-lg px-8 py-4">
                Get Started
                <ArrowRight class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" class="text-lg px-8 py-4">
                <Eye class="mr-2 h-5 w-5" />
                View Demo Tour
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
              Why Xplor is the Best for Museums & Galleries
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform how the world experiences culture with cutting-edge virtual reality technology
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Immersive VR Tours</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Full 360° walkthroughs with embedded content, curatorial notes, and audio guides.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Broadcast your exhibitions to a worldwide audience—accessible anytime, anywhere.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Educational Tools</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Perfect for field trips, school groups, and university-level learning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Monetization-Ready</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Sell tickets, promote events, collect donations, and link directly to your shop.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Deep Artwork Integration</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Link pieces to catalogues, archives, provenance history, and media.
                </CardDescription>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader class="text-center pb-4">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp class="h-8 w-8 text-primary" />
                </div>
                <CardTitle class="text-xl">Data & Insights</CardTitle>
              </CardHeader>
              <CardContent class="text-center">
                <CardDescription class="text-base">
                  Understand what visitors explore most and track interest in real time.
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
              Get your museum or gallery online in three simple steps
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-12">
            <div class="text-center">
              <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload class="h-10 w-10 text-background" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                1. List Your Museum or Gallery
              </h3>
              <p class="text-lg text-muted-foreground">
                Upload tours, images, collection info, and your story.
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap class="h-10 w-10 text-background" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                2. Go Live on Xplor
              </h3>
              <p class="text-lg text-muted-foreground">
                Reach an audience of global culture lovers, educators, and collectors.
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users class="h-10 w-10 text-background" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-4">
                3. Grow and Engage
              </h3>
              <p class="text-lg text-muted-foreground">
                Update content, promote new shows, and drive real-world visits.
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
              Trusted by Cultural Institutions Worldwide
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "Xplor helped us increase virtual attendance by 300% during our contemporary art exhibition."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — Modern Art Museum Director
                </div>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "Virtual previews on Xplor led to our fastest-selling gallery opening ever."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — Contemporary Gallery Owner
                </div>
              </CardContent>
            </Card>

            <Card class="border-none bg-background/50 backdrop-blur-sm">
              <CardContent class="p-8">
                <blockquote class="text-lg text-muted-foreground mb-6 italic">
                  "My students can now visit world-class museums from our classroom. It's revolutionary."
                </blockquote>
                <div class="text-sm font-medium text-foreground">
                  — Art History Professor
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-20 lg:py-32">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Ready to Take Your Gallery Global?
            </h2>
            <p class="text-xl lg:text-2xl text-muted-foreground mb-12">
              Join the cultural revolution. It takes just minutes to list your space.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" class="text-lg px-8 py-4">
                List My Museum or Gallery
                <ArrowRight class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" class="text-lg px-8 py-4">
                Talk to a Specialist
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
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Eye, 
  Globe, 
  BookOpen, 
  DollarSign, 
  Search, 
  TrendingUp, 
  Upload, 
  Zap, 
  Users 
} from 'lucide-vue-next'
import museumsGalleriesHero from '@/assets/museums-galleries-hero.jpg'
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
