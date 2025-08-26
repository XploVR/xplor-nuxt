export declare function useToast(): {
    toast: ({ title, description, variant, duration }: {
        title: any;
        description: any;
        variant?: string | undefined;
        duration?: number | undefined;
    }) => number;
    toasts: import("vue").Ref<never[], never[]>;
    removeToast: (id: any) => void;
    clearToasts: () => void;
};
