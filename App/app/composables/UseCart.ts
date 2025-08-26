import { useCartStore } from '@/stores/cartStore'

export function useCart() {
  const cartStore = useCartStore()

  return {
    state: {
      items: cartStore.items,
      isOpen: cartStore.isOpen
    },
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    clearCart: cartStore.clearCart,
    toggleCart: cartStore.toggleCart,
    openCart: cartStore.openCart,
    closeCart: cartStore.closeCart,
    getTotalItems: cartStore.getTotalItems,
    getTotalPrice: cartStore.getTotalPrice
  }
}
