export interface CarRecord {
    make: string;
    model: string;
    year?: number;
    trim?: string;
    fuel?: string;
    body?: string;
    price?: number;
    [k: string]: any;
}
export declare function useCarData(opts?: {
    loadAll?: () => Promise<CarRecord[]>;
}): {
    dataset: import("vue").Ref<{
        [x: string]: any;
        make: string;
        model: string;
        year?: number | undefined;
        trim?: string | undefined;
        fuel?: string | undefined;
        body?: string | undefined;
        price?: number | undefined;
    }[] | null, CarRecord[] | {
        [x: string]: any;
        make: string;
        model: string;
        year?: number | undefined;
        trim?: string | undefined;
        fuel?: string | undefined;
        body?: string | undefined;
        price?: number | undefined;
    }[] | null>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<unknown, unknown>;
    makes: import("vue").ComputedRef<string[]>;
    ensureLoaded: () => Promise<void>;
    search: (q: string) => {
        [x: string]: any;
        make: string;
        model: string;
        year?: number | undefined;
        trim?: string | undefined;
        fuel?: string | undefined;
        body?: string | undefined;
        price?: number | undefined;
    }[];
    byMake: (make: string) => {
        [x: string]: any;
        make: string;
        model: string;
        year?: number | undefined;
        trim?: string | undefined;
        fuel?: string | undefined;
        body?: string | undefined;
        price?: number | undefined;
    }[];
    modelsByMake: (make: string) => string[];
    yearsFor: (make: string, model: string) => number[];
};
