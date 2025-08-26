<template>
  <header class="w-full border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Left: Burger Menu + Logo -->
      <div class="flex items-center space-x-3">
        <!-- Burger Menu -->
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="sm" class="p-2">
              <Menu class="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" class="w-64 max-h-[80vh] overflow-y-auto">
            <DropdownMenuItem
              v-for="item in menuItems"
              :key="item.path"
              as-child
            >
              <RouterLink
                :to="item.path"
                class="block w-full py-2 px-4 hover:bg-muted"
                :class="{ 'bg-muted font-medium': route.path === item.path }"
              >
                {{ item.label }}
              </RouterLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span class="text-primary-foreground font-bold text-base">X</span>
          </div>
          <span class="font-semibold text-xl">xplor</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { useRoute } from "vue-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const route = useRoute();

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Real Estate", path: "/real-estate" },
  { label: "Recently Viewed", path: "/recently-viewed" },
  { label: "Restaurants & Bars", path: "/restaurants-bars" },
  { label: "Retail & Popups", path: "/retail-popups" },
  { label: "Sets/Stages/Venues", path: "/sets-stages-venues" },
  { label: "Settings", path: "/settings" },
  { label: "Spaces", path: "/spaces" },
  { label: "Stadiums & Parks", path: "/stadiums-parks" },
  { label: "Statistics", path: "/statistics" },
  { label: "Trains & Trams", path: "/trains-trams" },
  { label: "Trial", path: "/trial" },
  { label: "UAE Developments", path: "/uae-developments" },
  { label: "Users", path: "/users" },
  { label: "Tour Platforms", path: "/tour-platforms" },
  { label: "VR Cameras", path: "/vr-cameras" },
  { label: "Yacht Brokerage", path: "/yacht-brokerage" },
  { label: "Yacht Crew Offer", path: "/yacht-crew-offer" },
  { label: "Yacht Owners & Clients", path: "/yacht-owners-clients" }
];
</script>

