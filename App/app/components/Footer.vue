<template>
  <footer class="bg-muted py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">xplor</h3>
          <p class="text-muted-foreground">
            The world's most immersive virtual tour platform
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">Explore</h4>
          <ul class="space-y-2">
            <li><router-link to="/yachts" class="text-muted-foreground hover:text-primary">Yachts</router-link></li>
            <li><router-link to="/hotels" class="text-muted-foreground hover:text-primary">Hotels</router-link></li>
            <li><router-link to="/homes" class="text-muted-foreground hover:text-primary">Homes</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">FairShare</h4>
          <ul class="space-y-2">
            <li><router-link to="/fairshare-crew" class="text-muted-foreground hover:text-primary">For Crew</router-link></li>
            <li><router-link to="/yacht-owners" class="text-muted-foreground hover:text-primary">For Owners</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">Company</h4>
          <ul class="space-y-2">
            <li><router-link to="/about" class="text-muted-foreground hover:text-primary">About</router-link></li>
            <li><router-link to="/contact" class="text-muted-foreground hover:text-primary">Contact</router-link></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
        <p class="text-muted-foreground">&copy; 2024 Xplor. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>
