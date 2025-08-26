import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        isOpen: false,
    }),
    getters: {
        totalItems: (s) => s.items.reduce((t, i) => t + i.quantity, 0),
        totalPrice: (s) => s.items.reduce((t, i) => {
            const price = parseFloat(i.price.replace('$', '').replace(',', ''));
            return t + price * i.quantity;
        }, 0),
    },
    actions: {
        addItem(item) {
            const existing = this.items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            }
            else {
                this.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem(id) {
            this.items = this.items.filter(i => i.id !== id);
        },
        updateQuantity(id, quantity) {
            if (quantity <= 0) {
                this.items = this.items.filter(i => i.id !== id);
                return;
            }
            const it = this.items.find(i => i.id === id);
            if (it)
                it.quantity = quantity;
        },
        clearCart() {
            this.items = [];
        },
        toggleCart() {
            this.isOpen = !this.isOpen;
        },
        openCart() { this.isOpen = true; },
        closeCart() { this.isOpen = false; },
    },
});
