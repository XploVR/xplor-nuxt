<template>
  <div class="form-container">
    <Card>
      <CardHeader>
        <CardTitle>Yacht Upload Form</CardTitle>
        <CardDescription>
          Configure rules and access permissions for your yacht charter
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="tabs w-full">
            <div class="tabs-list grid w-full grid-cols-3 lg:grid-cols-6">
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

            <!-- Yacht Info Tab -->
            <div v-show="activeTab === 'yacht-info'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Info</CardTitle>
                  <CardDescription>Basic vessel identification details and listing categories</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Vessel Name *</label>
                      <input 
                        v-model="formData.yachtName" 
                        placeholder="Enter vessel name"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <p v-if="errors.yachtName" class="text-red-600 text-sm mt-1">{{ errors.yachtName }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Official Number</label>
                      <input 
                        v-model="formData.officialNumber" 
                        placeholder="Enter official number"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Sale/Charter/Both *</label>
                      <select 
                        v-model="formData.listingType"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select listing type</option>
                        <option value="sale">Sale</option>
                        <option value="charter">Charter</option>
                        <option value="both">Both</option>
                      </select>
                      <p v-if="errors.listingType" class="text-red-600 text-sm mt-1">{{ errors.listingType }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Type of Vessel *</label>
                      <select 
                        v-model="formData.yachtType"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select vessel type</option>
                        <optgroup label="Motor Yachts">
                          <option value="motor-yacht">Motor Yacht</option>
                          <option value="superyacht">Superyacht (24m–60m)</option>
                          <option value="megayacht">Megayacht (60m+)</option>
                          <option value="sport-yacht">Sport Yacht</option>
                        </optgroup>
                        <optgroup label="Sailing Yachts">
                          <option value="sailing-yacht">Sailing Yacht</option>
                          <option value="catamaran-sailing">Catamaran (Sailing)</option>
                          <option value="classic-sailing-yacht">Classic Sailing Yacht</option>
                        </optgroup>
                      </select>
                      <p v-if="errors.yachtType" class="text-red-600 text-sm mt-1">{{ errors.yachtType }}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Length (m)</label>
                      <input 
                        type="number" 
                        v-model="formData.length" 
                        placeholder="Meters"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Beam (m)</label>
                      <input 
                        type="number" 
                        v-model="formData.beam" 
                        placeholder="Meters"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Year Built</label>
                      <input 
                        type="number" 
                        v-model="formData.yearBuilt" 
                        placeholder="2023"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Guest Cabins</label>
                      <input 
                        type="number" 
                        v-model.number="formData.guestCabins" 
                        placeholder="e.g., 5"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Crew Cabins</label>
                      <input 
                        type="number" 
                        v-model.number="formData.crewCabins" 
                        placeholder="e.g., 6"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 force:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Max Guests</label>
                      <input 
                        type="number" 
                        v-model.number="formData.maxGuests" 
                        placeholder="e.g., 12"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Max Crew</label>
                      <input 
                        type="number" 
                        v-model.number="formData.maxCrew" 
                        placeholder="e.g., 10"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label class="block text-sm font-medium mb-2">Featured Image</label>
                      <FeaturedImageUpload
                        :modelValue="formData.featuredImage"
                        @update:modelValue="(v) => (formData.featuredImage = v)"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2">Gallery Images</label>
                      <MultiImageUpload
                        :modelValue="formData.galleryImages"
                        @update:modelValue="(v) => (formData.galleryImages = v)"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Pricing Tab -->
            <div v-show="activeTab === 'pricing'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sale Price Information</CardTitle>
                  <CardDescription>Configure sale pricing and terms</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Asking Price</label>
                      <input 
                        v-model="formData.askingPrice" 
                        placeholder="Enter asking price"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Currency</label>
                      <select 
                        v-model="formData.askingPriceCurrency"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select currency</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="aed">AED</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-center justify-between border rounded p-3">
                      <div class="text-sm font-medium">Price Negotiable?</div>
                      <input 
                        type="checkbox" 
                        v-model="formData.isPriceNegotiable"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <div class="flex items-center justify-between border rounded p-3">
                      <div class="text-sm font-medium">Display Price Publicly?</div>
                      <input 
                        type="checkbox" 
                        v-model="formData.displayPricePublicly"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-1">Charter Rate (Weekly)</label>
                    <input 
                      v-model="formData.charterRate" 
                      placeholder="Enter weekly charter rate"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Safety Tab -->
            <div v-show="activeTab === 'safety'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Information</CardTitle>
                  <CardDescription>Core safety equipment and confirmations</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        v-model="formData.certifiedLifejackets"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        id="lifejackets"
                      />
                      <label for="lifejackets" class="text-sm">Certified Lifejackets</label>
                    </div>
                    <div class="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        v-model="formData.fireExtinguishers"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        id="extinguishers"
                      />
                      <label for="extinguishers" class="text-sm">Fire Extinguishers</label>
                    </div>
                    <div class="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        v-model="formData.firstAidKit"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        id="firstaid"
                      />
                      <label for="firstaid" class="text-sm">First Aid Kit</label>
                    </div>
                    <div class="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        v-model="formData.emergencyLighting"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        id="lighting"
                      />
                      <label for="lighting" class="text-sm">Emergency Lighting</label>
                    </div>
                  </div>
                  <div class="flex items-center justify-between border rounded p-3">
                    <div class="text-sm font-medium">Verified by Captain</div>
                    <input 
                      type="checkbox" 
                      v-model="formData.verifiedByCaptain"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Amenities Tab -->
            <div v-show="activeTab === 'amenities'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Interior Amenities</CardTitle>
                  <CardDescription>Select interior features available on your yacht</CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label
                      v-for="item in amenityOptions.interior"
                      :key="item"
                      class="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        :checked="formData.interiorAmenities.includes(item)" 
                        @change="toggleList(formData.interiorAmenities, item)"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span>{{ item }}</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exterior Amenities</CardTitle>
                  <CardDescription>Select exterior and deck amenities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label
                      v-for="item in amenityOptions.exterior"
                      :key="item"
                      class="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        :checked="formData.exteriorAmenities.includes(item)" 
                        @change="toggleList(formData.exteriorAmenities, item)"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span>{{ item }}</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Management Tab -->
            <div v-show="activeTab === 'management'" class="tab-content space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Access Management</CardTitle>
                  <CardDescription>Platform-level visibility and booking settings</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1">Visibility</label>
                      <select 
                        v-model="formData.visibility"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select visibility</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="invite_only">Invite-only</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1">Booking Type</label>
                      <select 
                        v-model="formData.bookingType"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select booking type</option>
                        <option value="instant_book">Instant Book</option>
                        <option value="request_to_book">Request to Book</option>
                      </select>
                    </div>
                  </div>

                  <div v-if="formData.visibility === 'private'" class="p-4 border rounded-lg bg-gray-50 space-y-4">
                    <h4 class="font-medium">Private Access Settings</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium mb-1">Create PIN Code</label>
                        <input 
                          type="password" 
                          v-model="formData.privatePinCode" 
                          placeholder="4-10 characters" 
                          maxlength="10" 
                          minlength="4"
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium mb-1">Email for PIN Requests</label>
                        <input 
                          type="email" 
                          v-model="formData.pinRequestEmail" 
                          placeholder="contact@example.com"
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
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

const activeTab = ref('yacht-info')

const tabs = [
  { value: 'yacht-info', label: 'Yacht Info' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'safety', label: 'Safety' },
  { value: 'amenities', label: 'Amenities' },
  { value: 'management', label: 'Management' }
]

const formData = reactive({
  // Basic info
  yachtName: '',
  yachtType: '',
  listingType: '',
  officialNumber: '',
  length: '',
  beam: '',
  yearBuilt: '',
  guestCabins: 0,
  crewCabins: 0,
  maxGuests: 0,
  maxCrew: 0,

  // Pricing
  askingPrice: '',
  askingPriceCurrency: '',
  isPriceNegotiable: false,
  displayPricePublicly: false,
  charterRate: '',

  // Safety
  certifiedLifejackets: false,
  fireExtinguishers: false,
  firstAidKit: false,
  emergencyLighting: false,
  verifiedByCaptain: false,

  // Amenities
  interiorAmenities: [],
  exteriorAmenities: [],

  // Management
  visibility: 'private',
  bookingType: 'request_to_book',
  privatePinCode: '',
  pinRequestEmail: '',

  // Media
  featuredImage: null,
  galleryImages: []
})

const errors = reactive({
  yachtName: '',
  yachtType: '',
  listingType: ''
})

const amenityOptions = {
  interior: [
    'Main Salon', 
    'Skylounge', 
    'Cinema / Movie Room', 
    'Bar (Interior)', 
    'Observation Lounge', 
    'Air Conditioning'
  ],
  exterior: [
    'Sun Deck with Loungers', 
    'Exterior Jacuzzi', 
    'Al Fresco Dining', 
    'Beach Club', 
    'Swim Platform', 
    'Underwater Lighting'
  ]
}

function validate() {
  errors.yachtName = formData.yachtName ? '' : 'Yacht name is required'
  errors.yachtType = formData.yachtType ? '' : 'Yacht type is required'
  errors.listingType = formData.listingType ? '' : 'Listing type is required'
  return !errors.yachtName && !errors.yachtType && !errors.listingType
}

function toggleList(listRef, value) {
  const i = listRef.indexOf(value)
  if (i >= 0) {
    listRef.splice(i, 1)
  } else {
    listRef.push(value)
  }
}

function handleSubmit() {
  if (!validate()) {
    activeTab.value = 'yacht-info'
    return
  }
  emit('submit', JSON.parse(JSON.stringify(formData)))
}

function handleCancel() {
  emit('cancel')
}
</script>

<style scoped>
.form-container {
  max-width: 1000px;
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