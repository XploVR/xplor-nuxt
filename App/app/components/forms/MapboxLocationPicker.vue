<template>
  <div class="space-y-2">
    <label class="text-sm font-medium">Location (placeholder)</label>
    <div class="grid grid-cols-2 gap-2">
      <input class="border rounded px-2 py-1" type="number" step="any"
             :value="model.lat" @input="update('lat', $event.target.value)" placeholder="Lat" />
      <input class="border rounded px-2 py-1" type="number" step="any"
             :value="model.lng" @input="update('lng', $event.target.value)" placeholder="Lng" />
    </div>
    <p class="text-xs text-muted-foreground">
      Replace this with the real Mapbox picker later.
    </p>
  </div>
</template>

<script setup lang="ts">
type Model = { lat: number | null; lng: number | null }
const props = withDefaults(defineProps<{ modelValue?: Model }>(), {
  modelValue: () => ({ lat: null, lng: null }),
})
const emit = defineEmits<{
  'update:modelValue': [Model]
}>()

const model = computed(() => props.modelValue || { lat: null, lng: null })
function update(key: 'lat' | 'lng', val: string) {
  const num = val === '' ? null : Number(val)
  emit('update:modelValue', { ...model.value, [key]: Number.isFinite(num) ? num : null })
}
</script>

