import { ref } from 'vue'

export interface GeocodeFeature {
  id: string
  place_name: string
  center: [number, number] // [lng, lat]
  [k: string]: any
}

type TokenFetcher = () => Promise<string>

export function useMapbox (opts: {
  getToken?: TokenFetcher
  token?: string
  endpointBase?: string
} = {}) {
  const endpointBase = opts.endpointBase || 'https://api.mapbox.com'
  const lastError = ref<unknown>(null)

  async function resolveToken () {
    if (opts.token) return opts.token
    if (!opts.getToken) throw new Error('useMapbox: token or getToken is required')
    return opts.getToken()
  }

  async function forwardGeocode (query: string, limit = 5) {
    const token = await resolveToken()
    const url = new URL(`${endpointBase}/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`)
    url.searchParams.set('access_token', token)
    url.searchParams.set('limit', String(limit))
    const res = await fetch(url.toString())
    if (!res.ok) { lastError.value = await res.text(); throw new Error('Mapbox geocode failed') }
    const json = await res.json()
    return (json.features || []) as GeocodeFeature[]
  }

  async function reverseGeocode (lng: number, lat: number) {
    const token = await resolveToken()
    const url = new URL(`${endpointBase}/geocoding/v5/mapbox.places/${lng},${lat}.json`)
    url.searchParams.set('access_token', token)
    const res = await fetch(url.toString())
    if (!res.ok) { lastError.value = await res.text(); throw new Error('Mapbox reverse geocode failed') }
    const json = await res.json()
    return (json.features || []) as GeocodeFeature[]
  }

  async function directions (profile: 'driving'|'walking'|'cycling', coords: [number,number][]) {
    const token = await resolveToken()
    const path = coords.map(c => `${c[0]},${c[1]}`).join(';')
    const url = new URL(`${endpointBase}/directions/v5/mapbox/${profile}/${path}`)
    url.searchParams.set('access_token', token)
    url.searchParams.set('geometries', 'geojson')
    const res = await fetch(url.toString())
    if (!res.ok) { lastError.value = await res.text(); throw new Error('Mapbox directions failed') }
    return res.json()
  }

  return { lastError, forwardGeocode, reverseGeocode, directions }
}