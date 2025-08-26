export declare const useCartStore: import("pinia").StoreDefinition<"cart", Pick<{
    items: import("vue").Ref<never[], never[]>;
    isOpen: import("vue").Ref<boolean, boolean>;
    getTotalItems: import("vue").ComputedRef<number>;
    getTotalPrice: import("vue").ComputedRef<number>;
    addItem: (product: any) => void;
    removeItem: (itemId: any) => void;
    updateQuantity: (itemId: any, quantity: any) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
}, "items" | "isOpen">, Pick<{
    items: import("vue").Ref<never[], never[]>;
    isOpen: import("vue").Ref<boolean, boolean>;
    getTotalItems: import("vue").ComputedRef<number>;
    getTotalPrice: import("vue").ComputedRef<number>;
    addItem: (product: any) => void;
    removeItem: (itemId: any) => void;
    updateQuantity: (itemId: any, quantity: any) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
}, "getTotalItems" | "getTotalPrice">, Pick<{
    items: import("vue").Ref<never[], never[]>;
    isOpen: import("vue").Ref<boolean, boolean>;
    getTotalItems: import("vue").ComputedRef<number>;
    getTotalPrice: import("vue").ComputedRef<number>;
    addItem: (product: any) => void;
    removeItem: (itemId: any) => void;
    updateQuantity: (itemId: any, quantity: any) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
}, "addItem" | "removeItem" | "updateQuantity" | "clearCart" | "toggleCart" | "openCart" | "closeCart">>;
