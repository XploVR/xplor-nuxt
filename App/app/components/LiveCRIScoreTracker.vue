
<template>
  <Card>
    <CardHeader>
      <CardTitle>Live CRI+ Score</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex items-center gap-3">
        <div class="text-3xl font-bold">{{ totalScore }}</div>
        <div class="text-sm text-muted-foreground">/ 100</div>
        <span class="ml-2 inline-block px-2 py-1 rounded text-white" :class="tier.color">{{ tier.name }}</span>
      </div>

      <div class="mt-4 space-y-2">
        <div v-for="(val, key) in scoreBreakdown" :key="key" class="text-sm flex items-center gap-3">
          <div class="w-40 capitalize">{{ key }}</div>
          <progress class="w-full" :value="val" max="100"></progress>
          <div class="w-10 text-right">{{ val }}</div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue'

const Card = (await import('ui/card/index.vue')).default || {}
const CardHeader = (await import('ui/card/CardHeader.vue')).default || {}
const CardTitle = (await import('ui/card/CardTitle.vue')).default || {}
const CardContent = (await import('ui/card/CardContent.vue')).default || {}

type CRIScoreBreakdown = {
  experience: number; certifications: number; positionWeight: number; navigation: number;
  availability: number; engagement: number; social: number; charter: number; training: number; penalties: number;
}

const props = defineProps<{
  formData: any;
  qualificationStatus: Record<string, { status: string; hasFile: boolean }>;
  yachtExperiences: any[];
  navigationExperience: Record<string, { checked: boolean; year?: string }>;
  selectedYachtSize: string;
  selectedPosition: string;
  selectedCoC: string;
}>()

const scoreBreakdown = reactive<CRIScoreBreakdown>({
  experience:0, certifications:0, positionWeight:0, navigation:0, availability:0, engagement:0, social:0, charter:0, training:0, penalties:0
})

const tiers = [
  { min:0, max:30, name:'Standard', color:'bg-gray-500' },
  { min:31, max:60, name:'Active Crew', color:'bg-blue-500' },
  { min:61, max:90, name:'Top Contributor', color:'bg-yellow-500' },
  { min:91, max:100, name:'Elite Crew', color:'bg-green-500' }
]

const totalScore = computed(() => {
  const raw = scoreBreakdown.experience + scoreBreakdown.certifications + scoreBreakdown.positionWeight +
    scoreBreakdown.navigation + scoreBreakdown.availability + scoreBreakdown.engagement +
    scoreBreakdown.social + scoreBreakdown.charter + scoreBreakdown.training - scoreBreakdown.penalties
  return Math.max(0, Math.min(100, Math.round(raw)))
})

const tier = computed(() => tiers.find(t => totalScore.value >= t.min && totalScore.value <= t.max) || tiers[0])

function recompute(){
  // Minimal parity with the React implementation; customize as needed.
  scoreBreakdown.experience = Math.min(10, (props.yachtExperiences?.length || 0) * 2)
  scoreBreakdown.certifications = Math.min(15, Object.values(props.qualificationStatus || {}).filter(v => v.status==='approved').length * 3)
  scoreBreakdown.positionWeight = props.selectedPosition ? 10 : 0
  scoreBreakdown.navigation = Math.min(10, Object.values(props.navigationExperience || {}).filter(v => v.checked).length * 2)
  scoreBreakdown.availability = props.formData?.availability === 'immediate' ? 5 : 0
  scoreBreakdown.engagement = 0
  scoreBreakdown.social = 0
  scoreBreakdown.charter = 0
  scoreBreakdown.training = 0
  scoreBreakdown.penalties = 0
}

watch(() => ({...props}), recompute, { deep: true, immediate: true })
</script>

