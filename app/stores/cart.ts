import { defineStore } from 'pinia';

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

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    isOpen: false,
  }),

  getters: {
    totalItems: (s) => s.items.reduce((t, i) => t + i.quantity, 0),
    totalPrice: (s) =>
      s.items.reduce((t, i) => {
        const price = parseFloat(i.price.replace('$', '').replace(',', ''));
        return t + price * i.quantity;
      }, 0),
  },

  actions: {
    addItem(item: Omit<CartItem, 'quantity'>) {
      const existing = this.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(id: string) {
      this.items = this.items.filter(i => i.id !== id);
    },
    updateQuantity(id: string, quantity: number) {
      if (quantity <= 0) {
        this.items = this.items.filter(i => i.id !== id);
        return;
      }
      const it = this.items.find(i => i.id === id);
      if (it) it.quantity = quantity;
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
