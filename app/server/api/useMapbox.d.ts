export interface GeocodeFeature {
    id: string;
    place_name: string;
    center: [number, number];
    [k: string]: any;
}
type TokenFetcher = () => Promise<string>;
export declare function useMapbox(opts?: {
    getToken?: TokenFetcher;
    token?: string;
    endpointBase?: string;
}): {
    lastError: import("vue").Ref<unknown, unknown>;
    forwardGeocode: (query: string, limit?: number) => Promise<GeocodeFeature[]>;
    reverseGeocode: (lng: number, lat: number) => Promise<GeocodeFeature[]>;
    directions: (profile: "driving" | "walking" | "cycling", coords: [number, number][]) => Promise<any>;
};
export {};
