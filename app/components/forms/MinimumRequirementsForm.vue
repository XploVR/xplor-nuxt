
<template>
  <Card>
    <CardHeader><CardTitle>Minimum Qualification Requirements</CardTitle></CardHeader>
    <CardContent>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label class="block">
          <span class="text-sm font-medium">Vessel Size</span>
          <select v-model="vesselBand" class="input">
            <option v-for="b in bands" :key="b" :value="b">{{ b }}</option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm font-medium">Position</span>
          <select v-model="position" class="input">
            <option v-for="p in positions" :key="p" :value="p">{{ p }}</option>
          </select>
        </label>
        <div class="flex items-end">
          <span class="px-2 py-1 rounded bg-blue-600 text-white text-xs">Guidance</span>
        </div>
      </div>

      <div v-if="requirements.length" class="space-y-2">
        <div v-for="req in requirements" :key="req.name" class="flex items-center gap-2">
          <span class="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full border">
            <span v-if="req.mandatory">✓</span>
          </span>
          <div>
            <div class="text-sm font-medium">{{ req.name }}</div>
            <div class="text-xs text-muted-foreground">{{ req.mandatory ? 'Mandatory' : 'Recommended' }}</div>
          </div>
        </div>
      </div>
      <div v-else class="text-sm text-muted-foreground">No requirements found for this selection.</div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Card } from "@/components/ui/card/index.ts"
import { CardHeader } from "@/components/ui/card/index.ts"
import { CardTitle } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"

type Req = { name: string; mandatory: boolean }
const matrix: Record<string, Record<string, Req[]>> = {
  "<200 GRT": {
    "Captain": [
      { name:"RYA Yachtmaster Offshore", mandatory:true },
      { name:"STCW Basic Training", mandatory:true },
      { name:"ENG1 Medical", mandatory:true },
      { name:"VHF Radio License", mandatory:true },
      { name:"Basic Fire Fighting", mandatory:true }
    ],
    "Deckhand": [
      { name:"STCW Basic Training", mandatory:true },
      { name:"ENG1 Medical", mandatory:true },
      { name:"RYA Powerboat Level 2", mandatory:true }
    ],
    "Engineer": [
      { name:"AEC 1", mandatory:true }, { name:"STCW Basic Training", mandatory:true }, { name:"ENG1 Medical", mandatory:true }
    ]
  },
  "<500 GRT": {
    "Captain": [
      { name:"MCA Master <500 GT", mandatory:true }, { name:"GMDSS GOC", mandatory:true }, { name:"HELM", mandatory:true }, { name:"STCW Advanced Fire Fighting", mandatory:true }, { name:"ENG1 Medical", mandatory:true }
    ],
    "Chief Officer": [
      { name:"OOW <500 GT", mandatory:true }, { name:"STCW Basic Training", mandatory:true }, { name:"ENG1 Medical", mandatory:true }
    ],
    "Engineer": [
      { name:"MEOL (Y)", mandatory:true }, { name:"AEC 1 & 2", mandatory:true }, { name:"ENG1 Medical", mandatory:true }
    ]
  },
  "<3000 GRT": {
    "Captain": [
      { name:"MCA Master <3000 GT", mandatory:true }, { name:"ECDIS", mandatory:true }, { name:"HELM", mandatory:true }, { name:"SSO", mandatory:true }
    ],
    "Chief Officer": [
      { name:"OOW <3000 GT", mandatory:true }, { name:"ECDIS", mandatory:true }, { name:"STCW Adv. Fire Fighting", mandatory:true }
    ],
    "Chief Engineer": [
      { name:"Y3/Y4 CoC", mandatory:true }, { name:"High Voltage", mandatory:true }, { name:"AEC 1,2,3", mandatory:true }
    ]
  }
}

const bands = Object.keys(matrix)
const positions = ["Captain","Chief Officer","Deckhand","Engineer","Chief Engineer"]
const vesselBand = ref(bands[0])
const position = ref(positions[0])

const requirements = computed(() => matrix[vesselBand.value]?.[position.value] ?? [])
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>





