export interface CartItem {
    id: string;
    name: string;
    price: string;
    image: string;
    type: 'camera' | 'headset' | 'accessory';
    quantity: number;
}
interface CartState {
    items: CartItem[];
    isOpen: boolean;
}
export declare const useCartStore: import("pinia").StoreDefinition<"cart", CartState, {
    totalItems: (s: {
        items: {
            id: string;
            name: string;
            price: string;
            image: string;
            type: "camera" | "headset" | "accessory";
            quantity: number;
        }[];
        isOpen: boolean;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => number;
    totalPrice: (s: {
        items: {
            id: string;
            name: string;
            price: string;
            image: string;
            type: "camera" | "headset" | "accessory";
            quantity: number;
        }[];
        isOpen: boolean;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => number;
}, {
    addItem(item: Omit<CartItem, "quantity">): void;
    removeItem(id: string): void;
    updateQuantity(id: string, quantity: number): void;
    clearCart(): void;
    toggleCart(): void;
    openCart(): void;
    closeCart(): void;
}>;
export {};
