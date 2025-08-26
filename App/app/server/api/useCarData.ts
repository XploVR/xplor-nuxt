import { ref, computed } from 'vue'

export interface CarRecord {
  make: string
  model: string
  year?: number
  trim?: string
  fuel?: string
  body?: string
  price?: number
  [k: string]: any
}

export function useCarData (opts: { loadAll?: () => Promise<CarRecord[]> } = {}) {
  const dataset = ref<CarRecord[] | null>(null)
  const loading = ref(false)
  const error = ref<unknown>(null)

  async function ensureLoaded () {
    if (dataset.value || !opts.loadAll) return
    loading.value = true
    try { dataset.value = await opts.loadAll() }
    catch (e) { error.value = e }
    finally { loading.value = false }
  }

  function search (q: string) {
    const query = q.trim().toLowerCase()
    if (!dataset.value) return []
    return dataset.value.filter(r =>
      [r.make, r.model, r.trim].filter(Boolean).some(v => String(v).toLowerCase().includes(query))
    )
  }

  function byMake (make: string) {
    if (!dataset.value) return []
    const m = make.toLowerCase()
    return dataset.value.filter(r => r.make?.toLowerCase() === m)
  }

  function modelsByMake (make: string) {
    const set = new Set(byMake(make).map(r => r.model))
    return Array.from(set).filter(Boolean).sort()
  }

  function yearsFor (make: string, model: string) {
    if (!dataset.value) return []
    const yrs = new Set(dataset.value.filter(r =>
      r.make?.toLowerCase() === make.toLowerCase() && r.model?.toLowerCase() === model.toLowerCase()
    ).map(r => r.year).filter(Boolean) as number[])
    return Array.from(yrs).sort((a,b)=>b-a)
  }

  const makes = computed(() => {
    if (!dataset.value) return []
    return Array.from(new Set(dataset.value.map(r => r.make))).filter(Boolean).sort()
  })

  return { dataset, loading, error, makes, ensureLoaded, search, byMake, modelsByMake, yearsFor }
}