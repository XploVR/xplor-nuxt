<template>
  <div class="form-container">
    <Card>
      <CardHeader>
        <CardTitle>Train/Tram Upload Form</CardTitle>
        <CardDescription>
          Add details about your train or tram
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="tabs w-full">
            <div class="tabs-list grid w-full grid-cols-4 lg:grid-cols-7">
              <button
                v-for="tab in tabs"
                :key="tab.value"
                type="button"
                @click="activeTab = tab.value"
                :class="['tab-trigger', { active: activeTab === tab.value }]"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Basic Info Tab -->
            <div v-show="activeTab === 'basic-info'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>General details about the train or tram</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="listingTitle">Listing Title *</label>
                      <input
                        id="listingTitle"
                        type="text"
                        v-model="formData.listingTitle"
                        placeholder="e.g., Historic London Tram 1935"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <span v-if="errors.listingTitle" class="text-sm text-red-500">
                        {{ errors.listingTitle }}
                      </span>
                    </div>

                    <div class="space-y-2">
                      <label for="vehicleType">Vehicle Type *</label>
                      <select
                        id="vehicleType"
                        v-model="formData.vehicleType"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select vehicle type</option>
                        <option value="light-rail">Light Rail / Tram</option>
                        <option value="metro">Metro / Subway</option>
                        <option value="commuter">Commuter Train</option>
                        <option value="intercity">Intercity Train</option>
                        <option value="high-speed">High-Speed Train</option>
                        <option value="heritage">Heritage / Tourist Train</option>
                        <option value="luxury">Luxury Railcar</option>
                        <option value="sleeper">Sleeper Train</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="operator">Operator</label>
                      <input
                        id="operator"
                        type="text"
                        v-model="formData.operator"
                        placeholder="e.g., Deutsche Bahn"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="manufacturer">Manufacturer / Builder</label>
                      <input
                        id="manufacturer"
                        type="text"
                        v-model="formData.manufacturer"
                        placeholder="e.g., Siemens"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label for="description">Description</label>
                    <textarea
                      id="description"
                      v-model="formData.description"
                      placeholder="Detailed description of the train or tram..."
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                    ></textarea>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Details Tab -->
            <div v-show="activeTab === 'details'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Train / Tram Details</CardTitle>
                  <CardDescription>Technical specifications and details</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="trainModel">Train Model / Series</label>
                      <input
                        id="trainModel"
                        type="text"
                        v-model="formData.trainModel"
                        placeholder="e.g., ICE 4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="numberOfCars">Number of Cars / Coaches</label>
                      <input
                        id="numberOfCars"
                        type="number"
                        v-model="formData.numberOfCars"
                        placeholder="e.g., 8"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="space-y-2">
                      <label for="length">Length (meters)</label>
                      <input
                        id="length"
                        type="number"
                        v-model="formData.length"
                        placeholder="e.g., 200"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="topSpeed">Top Speed (km/h)</label>
                      <input
                        id="topSpeed"
                        type="number"
                        v-model="formData.topSpeed"
                        placeholder="e.g., 320"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="yearBuilt">Year Built</label>
                      <input
                        id="yearBuilt"
                        type="number"
                        v-model="formData.yearBuilt"
                        placeholder="YYYY"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-base font-medium mb-4 block">Power Source</label>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div
                        v-for="power in powerSources"
                        :key="power"
                        class="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          :id="power"
                          v-model="formData.powerSource[power.toLowerCase().replace(/\s+/g, '_')]"
                          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label :for="power">{{ power }}</label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Configuration Tab -->
            <div v-show="activeTab === 'configuration'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration & Capacity</CardTitle>
                  <CardDescription>Seating, layout and capacity information</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="passengerCapacitySeated">Passenger Capacity (Seated)</label>
                      <input
                        id="passengerCapacitySeated"
                        type="number"
                        v-model="formData.passengerCapacitySeated"
                        placeholder="e.g., 400"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="passengerCapacityStanding">Passenger Capacity (Standing)</label>
                      <input
                        id="passengerCapacityStanding"
                        type="number"
                        v-model="formData.passengerCapacityStanding"
                        placeholder="e.g., 200"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-base font-medium mb-4 block">Accessibility Features</label>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div
                        v-for="feature in accessibilityFeatures"
                        :key="feature"
                        class="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          :id="feature"
                          v-model="formData.accessibilityFeatures[feature.toLowerCase().replace(/[\/\s-]+/g, '_')]"
                          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label :for="feature">{{ feature }}</label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Services Tab -->
            <div v-show="activeTab === 'services'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Services & Features</CardTitle>
                  <CardDescription>Onboard amenities and safety systems</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                  <div>
                    <label class="text-base font-medium mb-4 block">Onboard Amenities</label>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div
                        v-for="amenity in amenities"
                        :key="amenity"
                        class="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          :id="amenity"
                          v-model="formData.amenities[amenity.toLowerCase().replace(/[&\/\s]+/g, '_')]"
                          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label :for="amenity">{{ amenity }}</label>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <input
                      id="wifi"
                      type="checkbox"
                      v-model="formData.wifi"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label for="wifi">Wi-Fi Availability</label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Media Tab -->
            <div v-show="activeTab === 'media'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Media & Files</CardTitle>
                  <CardDescription>Upload images and documents</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                  <FeaturedImageUpload v-model="featuredImage" />
                  <MultiImageUpload v-model="mediaImages" />
                </CardContent>
              </Card>
            </div>

            <!-- Routes Tab -->
            <div v-show="activeTab === 'routes'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Routes & Operations</CardTitle>
                  <CardDescription>Operating routes and location information</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="space-y-2">
                    <label for="currentOperator">Current Operator / Route</label>
                    <input
                      id="currentOperator"
                      type="text"
                      v-model="formData.currentOperator"
                      placeholder="e.g., London Underground - Piccadilly Line"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div class="space-y-2">
                    <label for="baseDepot">Base Depot / Terminal</label>
                    <input
                      id="baseDepot"
                      type="text"
                      v-model="formData.baseDepot"
                      placeholder="e.g., King's Cross Depot"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div class="space-y-2">
                    <label>Location on Map</label>
                    <div class="w-full h-32 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center">
                      <span class="text-gray-500">MapboxLocationPicker placeholder</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Visibility Tab -->
            <div v-show="activeTab === 'visibility'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Visibility & Permissions</CardTitle>
                  <CardDescription>Control who can see and access this listing</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="listingStatus">Listing Status</label>
                      <select
                        id="listingStatus"
                        v-model="formData.listingStatus"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select status</option>
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>

                    <div class="space-y-2">
                      <label for="visibility">Visibility</label>
                      <select
                        id="visibility"
                        v-model="formData.visibility"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select visibility</option>
                        <option value="public">Public</option>
                        <option value="admin-only">Admin Only</option>
                        <option value="pin-protected">PIN Protected</option>
                        <option value="link-only">Link Only</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div class="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              @click="handleCancel"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card/index.ts'
import FeaturedImageUpload from '@/components/media/FeaturedImageUpload.vue'
import MultiImageUpload from '@/components/media/MultiImageUpload.vue'

const emit = defineEmits(['submit', 'cancel'])

const activeTab = ref('basic-info')
const featuredImage = ref(null)
const mediaImages = ref([])
const errors = reactive({})

const formData = reactive({
  listingTitle: '',
  vehicleType: '',
  operator: '',
  manufacturer: '',
  yearBuilt: null,
  description: '',
  trainModel: '',
  numberOfCars: null,
  length: null,
  topSpeed: null,
  powerSource: {},
  passengerCapacitySeated: null,
  passengerCapacityStanding: null,
  accessibilityFeatures: {},
  amenities: {},
  wifi: false,
  currentOperator: '',
  baseDepot: '',
  listingStatus: '',
  visibility: ''
})

const tabs = [
  { value: 'basic-info', label: 'Basic Info' },
  { value: 'details', label: 'Details' },
  { value: 'configuration', label: 'Config' },
  { value: 'services', label: 'Services' },
  { value: 'media', label: 'Media' },
  { value: 'routes', label: 'Routes' },
  { value: 'visibility', label: 'Visibility' }
]

const powerSources = [
  'Diesel',
  'Electric Overhead',
  'Electric Third Rail',
  'Battery',
  'Hybrid',
  'Steam',
  'Other'
]

const accessibilityFeatures = [
  'Wheelchair Access',
  'Ramp Entry',
  'Low-Floor Entry',
  'Accessible Toilet',
  'Audio Announcements',
  'Braille Signage'
]

const amenities = [
  'Food & Beverage Service',
  'Vending Machines',
  'Power Outlets',
  'USB Charging',
  'Entertainment Screens',
  'Reading Lights',
  'Luggage Storage',
  'Pet-Friendly Zones',
  'Bike Racks',
  'Quiet Zone'
]

const validateForm = () => {
  errors.listingTitle = ''
  
  if (!formData.listingTitle) {
    errors.listingTitle = 'Title is required'
    return false
  }
  
  return true
}

const handleSubmit = () => {
  if (!validateForm()) {
    return
  }
  
  emit('submit', { ...formData, featuredImage: featuredImage.value, mediaImages: mediaImages.value })
}

const handleCancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.tabs-list {
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.tab-trigger {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-trigger:hover {
  color: #111827;
  border-bottom-color: #d1d5db;
}

.tab-trigger.active {
  color: #2563eb;
  border-bottom-color: #2563eb;
}

.tab-content {
  margin-top: 1rem;
}
</style>
