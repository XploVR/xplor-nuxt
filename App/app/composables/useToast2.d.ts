interface ToastMessage {
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    duration?: number;
}
export declare const useToast: () => {
    toasts: import("vue").Ref<{
        id: string;
        type: "success" | "error" | "info" | "warning";
        message: string;
        duration?: number | undefined;
    }[], ToastMessage[] | {
        id: string;
        type: "success" | "error" | "info" | "warning";
        message: string;
        duration?: number | undefined;
    }[]>;
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
    removeToast: (id: string) => void;
};
export declare const toast: {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
};
export {};
