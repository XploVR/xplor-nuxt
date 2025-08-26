export declare function useCart(): {
    state: {
        items: never[];
        isOpen: boolean;
    };
    addItem: (product: any) => void;
    removeItem: (itemId: any) => void;
    updateQuantity: (itemId: any, quantity: any) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    getTotalItems: number;
    getTotalPrice: number;
};
