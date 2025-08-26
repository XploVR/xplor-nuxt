import { ref } from 'vue';
export function useMapbox(opts = {}) {
    const endpointBase = opts.endpointBase || 'https://api.mapbox.com';
    const lastError = ref(null);
    async function resolveToken() {
        if (opts.token)
            return opts.token;
        if (!opts.getToken)
            throw new Error('useMapbox: token or getToken is required');
        return opts.getToken();
    }
    async function forwardGeocode(query, limit = 5) {
        const token = await resolveToken();
        const url = new URL(`${endpointBase}/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`);
        url.searchParams.set('access_token', token);
        url.searchParams.set('limit', String(limit));
        const res = await fetch(url.toString());
        if (!res.ok) {
            lastError.value = await res.text();
            throw new Error('Mapbox geocode failed');
        }
        const json = await res.json();
        return (json.features || []);
    }
    async function reverseGeocode(lng, lat) {
        const token = await resolveToken();
        const url = new URL(`${endpointBase}/geocoding/v5/mapbox.places/${lng},${lat}.json`);
        url.searchParams.set('access_token', token);
        const res = await fetch(url.toString());
        if (!res.ok) {
            lastError.value = await res.text();
            throw new Error('Mapbox reverse geocode failed');
        }
        const json = await res.json();
        return (json.features || []);
    }
    async function directions(profile, coords) {
        const token = await resolveToken();
        const path = coords.map(c => `${c[0]},${c[1]}`).join(';');
        const url = new URL(`${endpointBase}/directions/v5/mapbox/${profile}/${path}`);
        url.searchParams.set('access_token', token);
        url.searchParams.set('geometries', 'geojson');
        const res = await fetch(url.toString());
        if (!res.ok) {
            lastError.value = await res.text();
            throw new Error('Mapbox directions failed');
        }
        return res.json();
    }
    return { lastError, forwardGeocode, reverseGeocode, directions };
}
