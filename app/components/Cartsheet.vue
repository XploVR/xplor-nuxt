<template>
  <!-- Backdrop -->
  <transition name="fade">
    <div
      v-if="cart.isOpen"
      class="fixed inset-0 z-[60] bg-black/50"
      @click="cart.closeCart()"
    ></div>
  </transition>

  <!-- Drawer -->
  <transition name="slide-left">
    <aside
      v-if="cart.isOpen"
      class="fixed right-0 top-0 z-[61] h-full w-[400px] sm:w-[540px] bg-card text-foreground border-l border-border shadow-xl"
      role="dialog"
      aria-modal="true"
    >
      <header class="px-4 py-3 border-b border-border">
        <h2 class="text-lg font-semibold">
          Shopping Cart ({{ cart.items.length }} items)
        </h2>
      </header>

      <div class="p-4 space-y-4">
        <div v-if="cart.items.length === 0" class="text-center py-10">
          <ShoppingCart class="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p class="text-muted-foreground">Your cart is empty</p>
        </div>

        <template v-else>
          <div class="space-y-4 max-h-[400px] overflow-y-auto pr-1">
            <div
              v-for="item in cart.items"
              :key="item.id"
              class="flex items-center gap-4 p-4 border rounded-lg"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-16 h-16 object-cover rounded"
              />
              <div class="flex-1">
                <h4 class="font-medium text-sm">{{ item.name }}</h4>
                <p class="text-sm text-muted-foreground">{{ formatPrice(Number(item.price)) }}</p>

                <div class="flex items-center gap-2 mt-2">
                  <button
                    class="h-8 w-8 grid place-items-center rounded border hover:bg-muted"
                    @click="cart.updateQuantity(item.id, item.quantity - 1)"
                    aria-label="Decrease quantity"
                  >
                    <Minus class="h-3 w-3" />
                  </button>

                  <span class="text-sm font-medium w-8 text-center">
                    {{ item.quantity }}
                  </span>

                  <button
                    class="h-8 w-8 grid place-items-center rounded border hover:bg-muted"
                    @click="cart.updateQuantity(item.id, item.quantity + 1)"
                    aria-label="Increase quantity"
                  >
                    <Plus class="h-3 w-3" />
                  </button>

                  <button
                    class="h-8 w-8 grid place-items-center rounded border hover:bg-muted ml-2"
                    @click="cart.removeItem(item.id)"
                    aria-label="Remove item"
                  >
                    <Trash2 class="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t pt-4 space-y-4">
            <div class="flex justify-between items-center">
              <span class="font-medium">
                Total: {{ formatPrice(cart.totalPrice) }}
              </span>
              <button
                class="rounded border px-3 py-2 text-sm hover:bg-muted"
                @click="cart.clearCart"
              >
                Clear Cart
              </button>
            </div>

            <button
              class="w-full rounded px-3 py-2 bg-xplor-yellow hover:opacity-90 text-xplor-black font-medium"
              @click="handleCheckout"
            >
              Proceed to Checkout
            </button>
          </div>
        </template>
      </div>

      <!-- Close button -->
      <button
        class="absolute top-3 right-3 rounded border px-2 py-1 text-sm hover:bg-muted"
        @click="cart.closeCart()"
        aria-label="Close cart"
      >
        Close
      </button>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-vue-next"

/** Adjust these imports to your Vue equivalents */
// Update the import to match your actual cart store export
import { useCartStore } from "@/stores/cart"        // expose: state, removeItem, updateQuantity, clearCart, closeCart, getTotalPrice
// import { useToast } from "@/composables/toast" // your Vue toast composable (or keep "@/hooks/use-toast" if you already have it)
const cart = useCartStore()
// const { toast } = useToast()

// Temporary fallback toast implementation
function toast({ title, description, variant }: { title: string, description: string, variant?: string }) {
  alert(`${title}\n${description}`)
}

function handleCheckout() {
  if (cart.items.length === 0) {
    toast({
      title: "Cart is empty",
      description: "Add some items to your cart before checking out.",
      variant: "destructive",
    })
    return
  }
  // TODO: integrate Stripe
  toast({
    title: "Checkout",
    description: "Checkout functionality will be implemented with Stripe integration.",
  })
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price ?? 0)
}
</script>

<style scoped>
/* Backdrop & drawer transitions */
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from,  .fade-leave-to      { opacity: 0; }

.slide-left-enter-active, .slide-left-leave-active { transition: transform .2s ease; }
.slide-left-enter-from,  .slide-left-leave-to      { transform: translateX(100%); }
</style>
<!-- Removed invalid RouterLink usage that caused a compile error -->