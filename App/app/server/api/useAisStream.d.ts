export interface AISStreamMessage {
    MessageType: string;
    MetaData: {
        MMSI: number;
        ShipName?: string;
        latitude: number;
        longitude: number;
        time_utc: string;
    };
    Message: Record<string, any>;
}
type TokenFetcher = () => Promise<string>;
export declare function useAisStream(opts?: {
    getToken?: TokenFetcher;
    url?: string;
    bufferSize?: number;
    autoReconnect?: boolean;
    reconnectDelayMs?: number;
}): {
    isConnecting: import("vue").Ref<boolean, boolean>;
    isConnected: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<unknown, unknown>;
    lastPingAt: import("vue").Ref<number | null, number | null>;
    messages: import("vue").Ref<{
        MessageType: string;
        MetaData: {
            MMSI: number;
            ShipName?: string | undefined;
            latitude: number;
            longitude: number;
            time_utc: string;
        };
        Message: Record<string, any>;
    }[], AISStreamMessage[] | {
        MessageType: string;
        MetaData: {
            MMSI: number;
            ShipName?: string | undefined;
            latitude: number;
            longitude: number;
            time_utc: string;
        };
        Message: Record<string, any>;
    }[]>;
    latest: import("vue").ComputedRef<{
        MessageType: string;
        MetaData: {
            MMSI: number;
            ShipName?: string | undefined;
            latitude: number;
            longitude: number;
            time_utc: string;
        };
        Message: Record<string, any>;
    }>;
    connect: () => Promise<void>;
    disconnect: () => void;
};
export {};
