<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-foreground">Dashboard</h1>
        <p class="text-muted-foreground">Welcome back! Here's an overview of your spaces.</p>
      </div>

      <div class="flex items-center gap-3">
        <Badge variant="secondary" class="flex items-center gap-2">
          <Crown class="h-4 w-4" />
          {{ subscriptionData.plan }}
        </Badge>

        <!-- New Space (toggleable, scrollable, high z-index, hover highlight, inline icons) -->
        <DropdownMenu v-model:open="newSpaceOpen">
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              :class="[
                'bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black',
                newSpaceOpen ? 'ring-2 ring-offset-2 ring-xplor-yellow' : ''
              ]"
            >
              <Plus class="h-4 w-4 mr-2" />
              New Space
              <ChevronDown
                :class="[
                  'h-4 w-4 ml-2 transition-transform duration-200',
                  newSpaceOpen ? 'rotate-180' : ''
                ]"
              />
            </Button>
          </DropdownMenuTrigger>

          <!-- Solid white, scrollable, and on top -->
          <DropdownMenuContent
            align="end"
            sideOffset="8"
            class="w-80 bg-white border border-border shadow-2xl rounded-xl p-2 z-[1000] max-h-[70vh] overflow-y-auto overscroll-contain"
          >
            <DropdownMenuItem
              class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
              @click="openUpload('real-estate')"
            >
              <Home class="h-4 w-4" />
              <span>Real Estate (General)</span>
            </DropdownMenuItem>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2">
                <Home class="h-4 w-4" />
                <span>Real Estate — More</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent
                sideOffset="8"
                alignOffset="-8"
                class="bg-white border border-border shadow-xl rounded-lg p-1 z-[1100] max-h-[60vh] overflow-y-auto overscroll-contain"
              >
                <DropdownMenuItem
                  class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
                  @click="openUpload('developments')"
                >
                  <Building class="h-4 w-4" />
                  <span>Developments</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
                  @click="openUpload('uae-developments')"
                >
                  <Building2 class="h-4 w-4" />
                  <span>UAE Developments</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('yachts')">
              <Ship class="h-4 w-4" />
              <span>Yachts</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('marinas-shipyards')">
              <Anchor class="h-4 w-4" />
              <span>Marinas & Shipyards</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('hotels-resorts')">
              <Hotel class="h-4 w-4" />
              <span>Hotels & Resorts</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('cars-vehicles')">
              <Car class="h-4 w-4" />
              <span>Cars & Vehicles</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('experiences')">
              <Compass class="h-4 w-4" />
              <span>Experiences</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('museums-art')">
              <Palette class="h-4 w-4" />
              <span>Museums & Art Galleries</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('school-education')">
              <GraduationCap class="h-4 w-4" />
              <span>Schools & Educational Spaces</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('aviation')">
              <Plane class="h-4 w-4" />
              <span>Airports, Aviation & Aircraft</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('retail-popup')">
              <ShoppingBag class="h-4 w-4" />
              <span>Retail & Pop-Up Experiences</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('heritage-worship')">
              <Landmark class="h-4 w-4" />
              <span>Heritage Sites & Places of Worship</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('sets-stages-venues')">
              <Clapperboard class="h-4 w-4" />
              <span>Sets, Stages & Venues</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('sports-theme-parks')">
              <TreePine class="h-4 w-4" />
              <span>Sports Stadiums & Theme Parks</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('golf-courses')">
              <Golf class="h-4 w-4" />
              <span>Golf Courses</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('gov-hospital')">
              <Building2 class="h-4 w-4" />
              <span>Government Buildings & Hospitals</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('merchant-shipping')">
              <Anchor class="h-4 w-4" />
              <span>Merchant Shipping</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('maritime-infrastructure')">
              <Anchor class="h-4 w-4" />
              <span>Maritime Infrastructure</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('cruise-ships')">
              <Ship class="h-4 w-4" />
              <span>Cruise Ships</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('manufacturing')">
              <Factory class="h-4 w-4" />
              <span>Manufacturing Facilities</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('train-tram')">
              <Train class="h-4 w-4" />
              <span>Trains & Trams</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('restaurant-bar')">
              <Utensils class="h-4 w-4" />
              <span>Restaurants & Bars</span>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('offices-showrooms-studios')">
              <Briefcase class="h-4 w-4" />
              <span>Offices, Showrooms & Studios</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card v-for="stat in stats" :key="stat.title" class="border-border">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">
            {{ stat.title }}
          </CardTitle>
          <component :is="stat.icon" :class="`h-4 w-4 ${stat.color}`" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold text-foreground">{{ stat.value }}</div>
          <div class="flex items-center gap-1 mt-1">
            <TrendingUp class="h-3 w-3 text-green-600" />
            <span class="text-xs text-green-600 font-medium">{{ stat.change }}</span>
            <span class="text-xs text-muted-foreground">vs last month</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Subscription Plan Overview -->
    <Card class="border-border">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div>
            <CardTitle class="flex items-center gap-2">
              <Crown class="h-5 w-5 text-yellow-500" />
              Subscription Plan - {{ subscriptionData.plan }}
            </CardTitle>
            <CardDescription>Your current plan usage and limits</CardDescription>
          </div>
          <Button variant="outline" asChild>
            <a href="/pricing">Upgrade My Plan</a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="item in planFeatures" :key="item.feature" class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-muted-foreground">{{ item.feature }}</span>
              <span class="font-medium">
                {{ typeof item.used === 'number' && item.used % 1 !== 0 ? item.used.toFixed(1) : item.used }} / {{ item.limit }}
              </span>
            </div>
            <Progress :value="(item.used / item.limit) * 100" class="h-2" />
            <div class="text-xs text-muted-foreground">
              {{ Math.round((item.used / item.limit) * 100) }}% used
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Charts Section (ApexCharts) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Space Distribution Pie Chart -->
      <Card class="border-border">
        <CardHeader>
          <CardTitle>Space Distribution</CardTitle>
          <CardDescription>Breakdown of your public vs private spaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="h-64">
            <VueApexCharts
              type="pie"
              height="100%"
              :options="spacePieOptions"
              :series="spacePieSeries"
            />
          </div>
        </CardContent>
      </Card>

      <!-- Monthly Usage Trends -->
      <Card class="border-border">
        <CardHeader>
          <CardTitle>Monthly Growth</CardTitle>
          <CardDescription>Spaces and views over the last 4 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="h-64">
            <VueApexCharts
              type="area"
              height="100%"
              :options="monthlyAreaOptions"
              :series="monthlyAreaSeries"
            />
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card class="border-border">
        <CardHeader>
          <CardTitle class="text-foreground">Recent Spaces</CardTitle>
          <CardDescription>Your most recently updated spaces</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div
            v-for="space in recentSpaces"
            :key="space.name"
            class="flex items-center justify-between p-3 border border-border rounded-md"
          >
            <div>
              <p class="font-medium text-foreground">{{ space.name }}</p>
              <p class="text-sm text-muted-foreground">Updated {{ space.updated }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-foreground">{{ space.views }} views</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="border-border">
        <CardHeader>
          <CardTitle class="text-foreground">Quick Actions</CardTitle>
          <CardDescription>Common tasks and tools</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
          <Button variant="outline" class="w-full justify-start">
            <Camera class="h-4 w-4 mr-2" />
            Schedule Capture Service
          </Button>

          <!-- Upload New Space (toggleable, scrollable, high z-index, hover highlight, inline icons) -->
          <DropdownMenu v-model:open="quickUploadOpen">
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                class="w-full justify-start"
                :class="[quickUploadOpen ? 'ring-2 ring-offset-2 ring-muted' : '']"
              >
                <FolderOpen class="h-4 w-4 mr-2" />
                Upload New Space
                <ChevronDown
                  :class="[
                    'h-4 w-4 ml-auto transition-transform duration-200',
                    quickUploadOpen ? 'rotate-180' : ''
                  ]"
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              class="w-72 bg-white border border-border shadow-2xl rounded-xl p-2 z-[1000] max-h-[70vh] overflow-y-auto overscroll-contain"
            >
              <DropdownMenuItem
                class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
                @click="openUpload('real-estate')"
              >
                <Home class="h-4 w-4" />
                <span>Real Estate (General)</span>
              </DropdownMenuItem>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2">
                  <Home class="h-4 w-4" />
                  <span>Real Estate — More</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent
                  class="bg-white border border-border shadow-xl rounded-lg p-1 z-[1100] max-h-[60vh] overflow-y-auto overscroll-contain"
                >
                  <DropdownMenuItem
                    class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
                    @click="openUpload('developments')"
                  >
                    <Building class="h-4 w-4" />
                    <span>Developments</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2"
                    @click="openUpload('uae-developments')"
                  >
                    <Building2 class="h-4 w-4" />
                    <span>UAE Developments</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('yachts')">
                <Ship class="h-4 w-4" />
                <span>Yachts</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('marinas-shipyards')">
                <Anchor class="h-4 w-4" />
                <span>Marinas & Shipyards</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('hotels-resorts')">
                <Hotel class="h-4 w-4" />
                <span>Hotels & Resorts</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('cars-vehicles')">
                <Car class="h-4 w-4" />
                <span>Cars & Vehicles</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('experiences')">
                <Compass class="h-4 w-4" />
                <span>Experiences</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('museums-art')">
                <Palette class="h-4 w-4" />
                <span>Museums & Art Galleries</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('offices-showrooms-studios')">
                <Building class="h-4 w-4" />
                <span>Offices, Showrooms & Studios</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('retail-popup')">
                <ShoppingBag class="h-4 w-4" />
                <span>Retail & Pop-Up Experiences</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('heritage-worship')">
                <Landmark class="h-4 w-4" />
                <span>Heritage Sites & Places of Worship</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('sets-stages-venues')">
                <Clapperboard class="h-4 w-4" />
                <span>Sets, Stages & Venues</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('sports-theme-parks')">
                <TreePine class="h-4 w-4" />
                <span>Sports Stadiums & Theme Parks</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('golf-courses')">
                <Golf class="h-4 w-4" />
                <span>Golf Courses</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('gov-hospital')">
                <Building2 class="h-4 w-4" />
                <span>Government Buildings & Hospitals</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('merchant-shipping')">
                <Anchor class="h-4 w-4" />
                <span>Merchant Shipping</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('maritime-infrastructure')">
                <Anchor class="h-4 w-4" />
                <span>Maritime Infrastructure</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('cruise-ships')">
                <Ship class="h-4 w-4" />
                <span>Cruise Ships</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('manufacturing')">
                <Factory class="h-4 w-4" />
                <span>Manufacturing Facilities</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('train-tram')">
                <Train class="h-4 w-4" />
                <span>Trains & Trams</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="cursor-pointer flex items-center gap-2 hover:bg-muted/70 rounded-md px-2 py-2" @click="openUpload('restaurant-bar')">
                <Utensils class="h-4 w-4" />
                <span>Restaurants & Bars</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" class="w-full justify-start">
            <BarChart3 class="h-4 w-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline" class="w-full justify-start">
            <Globe class="h-4 w-4 mr-2" />
            Manage Public Spaces
          </Button>
        </CardContent>
      </Card>
    </div>

    <!-- Dialogs -->
    <UploadSpaceDialog :open="uploadDialogOpen" @update:open="setUploadDialogOpen" :category="selectedCategory" />
    <CarUploadDialog :open="carUploadDialogOpen" @update:open="setCarUploadDialogOpen" />
    <SchoolEducationUploadDialog :open="schoolEducationDialogOpen" @update:open="setSchoolEducationDialogOpen" />
    <AviationUploadDialog :open="aviationDialogOpen" @update:open="setAviationDialogOpen" />
    <OfficesShowroomsStudiosUploadDialog :open="officesShowroomsStudiosUploadDialogOpen" @update:open="setOfficesShowroomsStudiosUploadDialogOpen" />
    <RetailPopUpUploadDialog :open="retailPopUpUploadDialogOpen" @update:open="setRetailPopUpUploadDialogOpen" />
    <HeritageWorshipUploadDialog :open="heritageWorshipUploadDialogOpen" @update:open="setHeritageWorshipUploadDialogOpen" />
    <SetsStagesVenuesUploadDialog :open="setsStagesVenuesUploadDialogOpen" @update:open="setSetsStagesVenuesUploadDialogOpen" />
    <SportsStadiumsThemeParksUploadDialog :open="sportsStadiumsThemeParksUploadDialogOpen" @update:open="setSportsStadiumsThemeParksUploadDialogOpen" />
    <GolfCourseUploadDialog :open="golfCourseUploadDialogOpen" @update:open="setGolfCourseUploadDialogOpen" />
    <GovHospitalUploadDialog :open="govHospitalUploadDialogOpen" @update:open="setGovHospitalUploadDialogOpen" />
    <MerchantShippingUploadDialog :open="merchantShippingUploadDialogOpen" @update:open="setMerchantShippingUploadDialogOpen" />
    <ManufacturingFacilityUploadDialog :open="manufacturingFacilityUploadDialogOpen" @update:open="setManufacturingFacilityUploadDialogOpen" />
    <MaritimeInfrastructureUploadDialog :open="maritimeInfrastructureUploadDialogOpen" @update:open="setMaritimeInfrastructureUploadDialogOpen" />
    <CruiseShipUploadDialog :open="cruiseShipUploadDialogOpen" @update:open="setCruiseShipUploadDialogOpen" />
    <TrainTramUploadDialog :open="trainTramUploadDialogOpen" @update:open="setTrainTramUploadDialogOpen" />
    <RestaurantBarUploadDialog :open="restaurantBarUploadDialogOpen" @update:open="setRestaurantBarUploadDialogOpen" />
    <UAEDevelopmentUploadDialog :open="uaeDevelopmentUploadDialogOpen" @update:open="setUAEDevelopmentUploadDialogOpen" />
    <DevelopmentUploadDialog :open="developmentUploadDialogOpen" @update:open="setDevelopmentUploadDialogOpen" />
    <MuseumGalleryUploadDialog :open="museumGalleryUploadDialogOpen" @update:open="setMuseumGalleryUploadDialogOpen" />
    <YachtsUploadDialog :open="yachtsUploadDialogOpen" @update:open="setYachtsUploadDialogOpen" />
    <HotelsResortsUploadDialog :open="hotelsResortsUploadDialogOpen" @update:open="setHotelsResortsUploadDialogOpen" />
    <MarinaShipyardUploadDialog :open="marinaShipyardUploadDialogOpen" @update:open="setMarinaShipyardUploadDialogOpen" />
    <ExperiencesUploadDialog :open="experiencesUploadDialogOpen" @update:open="setExperiencesUploadDialogOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// UI components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Progress from '@/components/ui/progress/Progress.vue'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'

// Icons
import {
  BarChart3, FolderOpen, Camera, Globe, Plus, TrendingUp,
  Crown, ChevronDown, Car, Compass, Palette, GraduationCap,
  Plane, Building, ShoppingBag, Landmark, Clapperboard, TreePine,
  Home, Ship, Hotel, Building2, Anchor, Factory, Train, Utensils,
  Briefcase,
  Flag as Golf
} from 'lucide-vue-next'

// Charts
import VueApexCharts from 'vue3-apexcharts'

// Dialog components
import UploadSpaceDialog from '@/components/dialogs/UploadSpaceDialog.vue'
import CarUploadDialog from '@/components/dialogs/CarUploadDialog.vue'
import SchoolEducationUploadDialog from '@/components/dialogs/SchoolEducationUploadDialog.vue'
import AviationUploadDialog from '@/components/dialogs/AviationUploadDialog.vue'
import OfficesShowroomsStudiosUploadDialog from '@/components/dialogs/OfficesShowroomsStudiosUploadDialog.vue'
import RetailPopUpUploadDialog from '@/components/dialogs/RetailPopUpUploadDialog.vue'
import HeritageWorshipUploadDialog from '@/components/dialogs/HeritageWorshipUploadDialog.vue'
import SetsStagesVenuesUploadDialog from '@/components/dialogs/SetsStagesVenuesUploadDialog.vue'
import SportsStadiumsThemeParksUploadDialog from '@/components/dialogs/SportsStadiumsThemeParksUploadDialog.vue'
import GolfCourseUploadDialog from '@/components/dialogs/GolfCourseUploadDialog.vue'
import GovHospitalUploadDialog from '@/components/dialogs/GovHospitalUploadDialog.vue'
import MerchantShippingUploadDialog from '@/components/dialogs/MerchantShippingUploadDialog.vue'
import ManufacturingFacilityUploadDialog from '@/components/dialogs/ManufacturingFacilityUploadDialog.vue'
import MaritimeInfrastructureUploadDialog from '@/components/dialogs/MaritimeInfrastructureUploadDialog.vue'
import CruiseShipUploadDialog from '@/components/dialogs/CruiseShipUploadDialog.vue'
import TrainTramUploadDialog from '@/components/dialogs/TrainTramUploadDialog.vue'
import RestaurantBarUploadDialog from '@/components/dialogs/RestaurantBarUploadDialog.vue'
import UAEDevelopmentUploadDialog from '@/components/dialogs/UAEDevelopmentUploadDialog.vue'
import DevelopmentUploadDialog from '@/components/dialogs/DevelopmentUploadDialog.vue'
import MuseumGalleryUploadDialog from '@/components/dialogs/MuseumGalleryUploadDialog.vue'
import YachtsUploadDialog from '@/components/dialogs/YachtsUploadDialog.vue'
import HotelsResortsUploadDialog from '@/components/dialogs/HotelsResortsUploadDialog.vue'
import MarinaShipyardUploadDialog from '@/components/dialogs/MarinaShipyardUploadDialog.vue'
import ExperiencesUploadDialog from '@/components/dialogs/ExperiencesUploadDialog.vue'

// Router
const route = useRoute()
const router = useRouter()

// Dropdown open states (for toggle visuals)
const newSpaceOpen = ref(false)
const quickUploadOpen = ref(false)

// Dialog state variables for all categories
const uploadDialogOpen = ref(false)
const carUploadDialogOpen = ref(false)
const schoolEducationDialogOpen = ref(false)
const aviationDialogOpen = ref(false)
const officesShowroomsStudiosUploadDialogOpen = ref(false)
const retailPopUpUploadDialogOpen = ref(false)
const heritageWorshipUploadDialogOpen = ref(false)
const setsStagesVenuesUploadDialogOpen = ref(false)
const sportsStadiumsThemeParksUploadDialogOpen = ref(false)
const golfCourseUploadDialogOpen = ref(false)
const govHospitalUploadDialogOpen = ref(false)
const merchantShippingUploadDialogOpen = ref(false)
const manufacturingFacilityUploadDialogOpen = ref(false)
const maritimeInfrastructureUploadDialogOpen = ref(false)
const cruiseShipUploadDialogOpen = ref(false)
const trainTramUploadDialogOpen = ref(false)
const restaurantBarUploadDialogOpen = ref(false)
const uaeDevelopmentUploadDialogOpen = ref(false)
const developmentUploadDialogOpen = ref(false)
const museumGalleryUploadDialogOpen = ref(false)
const yachtsUploadDialogOpen = ref(false)
const hotelsResortsUploadDialogOpen = ref(false)
const marinaShipyardUploadDialogOpen = ref(false)
const experiencesUploadDialogOpen = ref(false)

const selectedCategory = ref('')

// Setters for all dialog states
const setUploadDialogOpen = (v: boolean) => (uploadDialogOpen.value = v)
const setCarUploadDialogOpen = (v: boolean) => (carUploadDialogOpen.value = v)
const setSchoolEducationDialogOpen = (v: boolean) => (schoolEducationDialogOpen.value = v)
const setAviationDialogOpen = (v: boolean) => (aviationDialogOpen.value = v)
const setOfficesShowroomsStudiosUploadDialogOpen = (v: boolean) => (officesShowroomsStudiosUploadDialogOpen.value = v)
const setRetailPopUpUploadDialogOpen = (v: boolean) => (retailPopUpUploadDialogOpen.value = v)
const setHeritageWorshipUploadDialogOpen = (v: boolean) => (heritageWorshipUploadDialogOpen.value = v)
const setSetsStagesVenuesUploadDialogOpen = (v: boolean) => (setsStagesVenuesUploadDialogOpen.value = v)
const setSportsStadiumsThemeParksUploadDialogOpen = (v: boolean) => (sportsStadiumsThemeParksUploadDialogOpen.value = v)
const setGolfCourseUploadDialogOpen = (v: boolean) => (golfCourseUploadDialogOpen.value = v)
const setGovHospitalUploadDialogOpen = (v: boolean) => (govHospitalUploadDialogOpen.value = v)
const setMerchantShippingUploadDialogOpen = (v: boolean) => (merchantShippingUploadDialogOpen.value = v)
const setManufacturingFacilityUploadDialogOpen = (v: boolean) => (manufacturingFacilityUploadDialogOpen.value = v)
const setMaritimeInfrastructureUploadDialogOpen = (v: boolean) => (maritimeInfrastructureUploadDialogOpen.value = v)
const setCruiseShipUploadDialogOpen = (v: boolean) => (cruiseShipUploadDialogOpen.value = v)
const setTrainTramUploadDialogOpen = (v: boolean) => (trainTramUploadDialogOpen.value = v)
const setRestaurantBarUploadDialogOpen = (v: boolean) => (restaurantBarUploadDialogOpen.value = v)
const setUAEDevelopmentUploadDialogOpen = (v: boolean) => (uaeDevelopmentUploadDialogOpen.value = v)
const setDevelopmentUploadDialogOpen = (v: boolean) => (developmentUploadDialogOpen.value = v)
const setMuseumGalleryUploadDialogOpen = (v: boolean) => (museumGalleryUploadDialogOpen.value = v)
const setYachtsUploadDialogOpen = (v: boolean) => (yachtsUploadDialogOpen.value = v)
const setHotelsResortsUploadDialogOpen = (v: boolean) => (hotelsResortsUploadDialogOpen.value = v)
const setMarinaShipyardUploadDialogOpen = (v: boolean) => (marinaShipyardUploadDialogOpen.value = v)
const setExperiencesUploadDialogOpen = (v: boolean) => (experiencesUploadDialogOpen.value = v)

// Complete openUpload function that handles all categories
function openUpload(category: string) {
  selectedCategory.value = category

  switch (category) {
    case 'real-estate':                 setUploadDialogOpen(true); break
    case 'developments':                setDevelopmentUploadDialogOpen(true); break
    case 'uae-developments':            setUAEDevelopmentUploadDialogOpen(true); break
    case 'yachts':                      setYachtsUploadDialogOpen(true); break
    case 'marinas-shipyards':           setMarinaShipyardUploadDialogOpen(true); break
    case 'hotels-resorts':              setHotelsResortsUploadDialogOpen(true); break
    case 'cars-vehicles':               setCarUploadDialogOpen(true); break
    case 'experiences':                 setExperiencesUploadDialogOpen(true); break
    case 'museums-art':                 setMuseumGalleryUploadDialogOpen(true); break
    case 'school-education':            setSchoolEducationDialogOpen(true); break
    case 'aviation':                    setAviationDialogOpen(true); break
    case 'retail-popup':                setRetailPopUpUploadDialogOpen(true); break
    case 'heritage-worship':            setHeritageWorshipUploadDialogOpen(true); break
    case 'sets-stages-venues':          setSetsStagesVenuesUploadDialogOpen(true); break
    case 'sports-theme-parks':          setSportsStadiumsThemeParksUploadDialogOpen(true); break
    case 'golf-courses':                setGolfCourseUploadDialogOpen(true); break
    case 'gov-hospital':                setGovHospitalUploadDialogOpen(true); break
    case 'merchant-shipping':           setMerchantShippingUploadDialogOpen(true); break
    case 'maritime-infrastructure':     setMaritimeInfrastructureUploadDialogOpen(true); break
    case 'cruise-ships':                setCruiseShipUploadDialogOpen(true); break
    case 'manufacturing':               setManufacturingFacilityUploadDialogOpen(true); break
    case 'train-tram':                  setTrainTramUploadDialogOpen(true); break
    case 'restaurant-bar':              setRestaurantBarUploadDialogOpen(true); break
    case 'offices-showrooms-studios':   setOfficesShowroomsStudiosUploadDialogOpen(true); break
    default:
      setUploadDialogOpen(true)
  }

  router.push({ query: { ...route.query, openUpload: '1', category } })
  newSpaceOpen.value = false
  quickUploadOpen.value = false
}

// Auto-open based on route
onMounted(() => {
  if (route.query.openUpload && route.query.category) {
    selectedCategory.value = String(route.query.category)
    openUpload(selectedCategory.value)
  }
})

// Sample stats
const stats = ref([
  { title: 'Total Spaces', value: '24', icon: FolderOpen, color: 'text-blue-600', change: '+12%' },
  { title: 'Public Spaces', value: '18', icon: Globe, color: 'text-green-600', change: '+8%' },
  { title: 'Capture Sessions', value: '12', icon: Camera, color: 'text-purple-600', change: '+25%' },
  { title: 'Views This Month', value: '2,847', icon: BarChart3, color: 'text-xplor-yellow', change: '+18%' },
])

// Subscription plan data
const subscriptionData = ref({
  plan: 'Professional',
  spacesUsed: 24,
  spacesLimit: 50,
  storageUsed: 45.8,
  storageLimit: 100,
  teamMembers: 3,
  teamLimit: 10,
  monthlyViews: 2847,
  viewsLimit: 10000,
})

const planFeatures = computed(() => [
  { feature: 'Spaces',       used: subscriptionData.value.spacesUsed,   limit: subscriptionData.value.spacesLimit },
  { feature: 'Storage (GB)', used: subscriptionData.value.storageUsed,  limit: subscriptionData.value.storageLimit },
  { feature: 'Team Members', used: subscriptionData.value.teamMembers,  limit: subscriptionData.value.teamLimit },
  { feature: 'Monthly Views',used: subscriptionData.value.monthlyViews, limit: subscriptionData.value.viewsLimit },
])

// Charts data
const spaceTypeData = ref([
  { name: 'Public', value: 18, color: '#10B981' },
  { name: 'Private', value: 6,  color: '#6366F1' },
])
const spacePieSeries = computed(() => spaceTypeData.value.map(d => d.value))
const spacePieOptions = computed(() => ({
  labels: spaceTypeData.value.map(d => d.name),
  legend: { position: 'bottom' },
  colors: spaceTypeData.value.map(d => d.color),
}))

const monthlyUsageData = ref([
  { month: 'Jan', spaces: 15, views: 1200 },
  { month: 'Feb', spaces: 18, views: 1800 },
  { month: 'Mar', spaces: 22, views: 2100 },
  { month: 'Apr', spaces: 24, views: 2847 },
])
const monthlyAreaSeries = computed(() => ([
  { name: 'Spaces', data: monthlyUsageData.value.map(d => d.spaces) },
  { name: 'Views',  data: monthlyUsageData.value.map(d => d.views) },
]))
const monthlyAreaOptions = computed(() => ({
  chart: { type: 'area' },
  dataLabels: { enabled: false },
  xaxis: { categories: monthlyUsageData.value.map(d => d.month) },
  yaxis: { decimalsInFloat: 0 },
}))

// Recent spaces (dummy)
const recentSpaces = ref([
  { name: 'Marina Bay Showroom', updated: '2 days ago', views: 324 },
  { name: 'Villa Aurora', updated: '5 days ago', views: 271 },
  { name: 'M/Y Lady Victoria', updated: '1 week ago', views: 899 },
  { name: 'Downtown Gallery', updated: '1 week ago', views: 145 },
])
</script>
