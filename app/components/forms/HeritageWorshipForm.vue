
<template>
  <div class="max-w-7xl mx-auto p-6 space-y-6">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-foreground mb-2">
        Upload Heritage Site &amp; Place of Worship
      </h1>
      <p class="text-muted-foreground">
        Create an immersive listing for your heritage site with cultural context and 360° tours
      </p>
    </div>

    <div class="w-full flex gap-6">
      <!-- Sidebar Tabs -->
      <div class="w-64 shrink-0">
        <div class="flex flex-col h-auto w-full bg-muted p-1 space-y-1 rounded-lg">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="w-full text-left px-3 py-2 rounded-md"
            :class="activeTab === tab.value ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/70'"
            @click="activeTab = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <!-- Basic Info -->
        <section v-if="activeTab === 'basic-info'" class="space-y-6 mt-0">
          <Card>
            <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <div>
                <label for="title" class="block text-sm font-medium">Listing Title *</label>
                <input id="title" v-model="form.title" class="input" placeholder="e.g., Notre-Dame Cathedral" />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium">Site Type *</label>
                  <select v-model="form.siteType" class="input">
                    <option disabled value="">Select site type</option>
                    <option v-for="opt in siteTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium">Listing Type</label>
                  <input v-model="form.listingType" class="input" placeholder="e.g., For Visitors" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <!-- Cultural Context -->
        <section v-else-if="activeTab === 'cultural-context'" class="space-y-6">
          <Card>
            <CardHeader><CardTitle>Cultural &amp; Historical Context</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <div>
                <label class="block text-sm font-medium">Historical Significance</label>
                <textarea v-model="form.historicalSignificance" class="input" rows="4" />
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium">Key Events</label>
                  <textarea v-model="form.keyEvents" class="input" rows="3" />
                </div>
                <div>
                  <label class="block text-sm font-medium">Restoration History</label>
                  <textarea v-model="form.restorationHistory" class="input" rows="3" />
                </div>
              </div>
              <div class="flex items-center gap-2">
                <input id="heritageStatus" type="checkbox" v-model="form.heritageStatus" />
                <label for="heritageStatus">Official heritage status</label>
              </div>
            </CardContent>
          </Card>
        </section>

        <!-- Site Structure -->
        <section v-else-if="activeTab === 'site-structure'" class="space-y-6">
          <Card>
            <CardHeader><CardTitle>Site Structure &amp; Subspaces</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium">Total Area</label>
                  <input v-model="form.totalArea" class="input" placeholder="e.g., 12000" />
                </div>
                <div>
                  <label class="block text-sm font-medium">Area Unit</label>
                  <input v-model="form.areaUnit" class="input" placeholder="sq-m" />
                </div>
              </div>

              <div class="flex justify-between items-center">
                <h3 class="font-medium">Subspaces</h3>
                <button class="btn" @click="addSubspace">Add subspace</button>
              </div>

              <div class="space-y-3">
                <div v-for="(s, i) in form.subspaces" :key="s.id" class="p-3 border rounded-lg">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input v-model="s.name" class="input" placeholder="Name" />
                    <select v-model="s.type" class="input">
                      <option disabled value="">Type</option>
                      <option v-for="opt in subspaceTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                    <label class="inline-flex items-center gap-2">
                      <input type="checkbox" v-model="s.publicAccess" />
                      <span>Public access</span>
                    </label>
                  </div>
                  <textarea v-model="s.description" class="input mt-2" rows="2" placeholder="Description" />
                  <div class="text-right">
                    <button class="btn-danger" @click="removeSubspace(s.id)">Remove</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <!-- Media -->
        <section v-else-if="activeTab === 'media'" class="space-y-6">
          <Card>
            <CardHeader><CardTitle>Media &amp; Files</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium">Tours</label>
                  <input type="file" multiple @change="onFiles('tours', $event)" />
                </div>
                <div>
                  <label class="block text-sm font-medium">Photos</label>
                  <input type="file" multiple @change="onFiles('photos', $event)" />
                </div>
                <div>
                  <label class="block text-sm font-medium">Videos</label>
                  <input type="file" multiple @change="onFiles('videos', $event)" />
                </div>
              </div>

              <div v-for="(arr, key) in uploadedFiles" :key="key" class="mt-4">
                <h4 class="font-medium capitalize">{{ key }}</h4>
                <ul class="list-disc ml-6">
                  <li v-for="(f, idx) in arr" :key="idx" class="flex items-center justify-between">
                    <span>{{ f.name }}</span>
                    <button class="text-sm text-red-600 hover:underline" @click="removeFile(key, idx)">Remove</button>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <!-- Location -->
        <section v-else-if="activeTab === 'location'" class="space-y-6">
          <Card>
            <CardHeader><CardTitle>Location</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <label class="block text-sm font-medium">Address</label>
              <input v-model="form.address" class="input" placeholder="Full address" />

              <MapboxLocationPicker
                :coordinates="form.coordinates"
                @update:coordinates="(c) => form.coordinates = c"
                :zoom="10"
                class="h-64 rounded-lg overflow-hidden border"
              />
            </CardContent>
          </Card>
        </section>

        <!-- Visibility -->
        <section v-else-if="activeTab === 'visibility'" class="space-y-6">
          <Card>
            <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
            <CardContent class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium">Status</label>
                  <select v-model="form.listingStatus" class="input">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium">Visibility</label>
                  <select v-model="form.visibility" class="input">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import MapboxLocationPicker from './MapboxLocationPicker.vue'

// Lightweight Card components (slot wrappers). Replace with your UI kit.
const Card = (await import('@/components/ui/card/index.ts')).default || {}
const CardHeader = (await import('@/components/ui/card/CardHeader.vue')).default || {}
const CardTitle = (await import('@/components/ui/card/CardTitle.vue')).default || {}
const CardContent = (await import('@/components/ui/card/CardContent.vue')).default || {}

type Subspace = { id: string; name: string; type: string; description: string; publicAccess: boolean }
type FormData = {
  title: string; siteType: string; religiousAffiliation: string; denomination: string; listingType: string;
  yearBuilt: string; description: string; currentUse: string; managedBy: string;
  historicalSignificance: string; keyEvents: string; restorationHistory: string; heritageStatus: boolean; heritageDocument: string;
  artRelics: string; languages: string[]; religiousHolidays: string;
  totalArea: string; areaUnit: string; architecturalStyle: string; subspaces: Subspace[];
  openingHours: string; entryFee: string; currency: string; toursAvailable: boolean; tourInfo: string;
  groupVisits: boolean; groupMinSize: string; groupMaxSize: string; bookingRequired: boolean; bookingContact: string;
  dressCode: boolean; dressCodeInfo: string; audioGuides: string[]; pilgrimage: boolean; ceremonyViewing: boolean;
  meditation: boolean; climbing: boolean; exhibits: boolean; festivals: boolean; nightTours: boolean;
  wheelchairAccessible: boolean; hearingSupport: boolean; ramps: boolean; braille: boolean; multilingualSignage: boolean;
  entryControl: string; idRequired: boolean; quietZone: boolean; noFlashPhoto: boolean; noShoes: boolean; noTouching: boolean;
  genderSpecific: boolean; modestDress: boolean; headCovering: boolean; noSmoking: boolean; noFood: boolean;
  petRestrictions: boolean; staffedAreas: boolean; filmingRestrictions: string; droneUse: string; eventHosting: boolean; eventDescription: string;
  address: string; coordinates: { lat: number; lng: number } | null; gpsCoordinates: string; googlePlusCode: string; mapDisplay: string; region: string; country: string; culturalZone: string; proximityLandmark: string; transportInfo: string;
  listingStatus: string; visibility: string; uploader: string; tourPro: string; pinProtection: boolean; pinCode: string;
}

const form = reactive<FormData>({
  title:'', siteType:'', religiousAffiliation:'', denomination:'', listingType:'',
  yearBuilt:'', description:'', currentUse:'', managedBy:'',
  historicalSignificance:'', keyEvents:'', restorationHistory:'', heritageStatus:false, heritageDocument:'',
  artRelics:'', languages:[], religiousHolidays:'',
  totalArea:'', areaUnit:'sq-m', architecturalStyle:'', subspaces:[],
  openingHours:'', entryFee:'', currency:'USD', toursAvailable:false, tourInfo:'',
  groupVisits:false, groupMinSize:'', groupMaxSize:'', bookingRequired:false, bookingContact:'',
  dressCode:false, dressCodeInfo:'', audioGuides:[], pilgrimage:false, ceremonyViewing:false,
  meditation:false, climbing:false, exhibits:false, festivals:false, nightTours:false,
  wheelchairAccessible:false, hearingSupport:false, ramps:false, braille:false, multilingualSignage:false,
  entryControl:'', idRequired:false, quietZone:false, noFlashPhoto:false, noShoes:false, noTouching:false,
  genderSpecific:false, modestDress:false, headCovering:false, noSmoking:false, noFood:false,
  petRestrictions:false, staffedAreas:false, filmingRestrictions:'', droneUse:'', eventHosting:false, eventDescription:'',
  address:'', coordinates:null, gpsCoordinates:'', googlePlusCode:'', mapDisplay:'', region:'', country:'', culturalZone:'', proximityLandmark:'', transportInfo:'',
  listingStatus:'draft', visibility:'public', uploader:'', tourPro:'', pinProtection:false, pinCode:''
})

const uploadedFiles = reactive<Record<string, File[]>>({
  tours:[], photos:[], videos:[], droneFootage:[], maps:[], documents:[]
})

const tabs = [
  { value: 'basic-info', label: 'Basic Info' },
  { value: 'cultural-context', label: 'Cultural Context' },
  { value: 'site-structure', label: 'Site Structure' },
  { value: 'visitor-info', label: 'Visitor Info' },
  { value: 'access-rules', label: 'Access & Rules' },
  { value: 'media', label: 'Media & Files' },
  { value: 'location', label: 'Location' },
  { value: 'visibility', label: 'Visibility' }
]

const activeTab = ref('basic-info')

const siteTypeOptions = ["Church","Mosque","Temple","Synagogue","Shrine","Monastery","Ancient Ruins","Palace / Castle","Fortress","Cultural Landmark","Archaeological Site","UNESCO Heritage Site","Other"]
const subspaceTypeOptions = ["Worship Hall","Courtyard","Sanctuary","Tomb / Mausoleum","Monastic Cells","Museum Area","Gift Shop / Entry Hall","Gardens","Rest Area","Viewing Deck","Other"]

function addSubspace(){
  form.subspaces.push({ id: String(Date.now()), name:'', type:'', description:'', publicAccess:true })
}
function removeSubspace(id: string){
  const i = form.subspaces.findIndex(s=>s.id===id)
  if(i>-1) form.subspaces.splice(i,1)
}
function onFiles(section: string, e: Event){
  const input = e.target as HTMLInputElement
  if(!input.files) return
  uploadedFiles[section] = [...uploadedFiles[section], ...Array.from(input.files)]
}
function removeFile(section: string, index: number){
  uploadedFiles[section].splice(index,1)
}
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
.btn { @apply px-3 py-2 rounded-md bg-primary text-primary-foreground; }
.btn-danger { @apply px-3 py-2 rounded-md bg-red-600 text-white; }
</style>




