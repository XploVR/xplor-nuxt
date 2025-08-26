
<template>
  <div />
</template>

<script setup lang="ts">
// This file exports two components similar to the React version:
// <CartButton/> and <CartSheet/>
</script>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// Update the import path if the file exists elsewhere, for example:
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/Sheet'
// Or, if the file does not exist, create 'src/components/ui/Sheet.vue' and export the required components.
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'
import { useToast } from '@/composables/useToast'

export const CartButton = defineComponent({
  name: 'CartButton',
  setup() {
    const cart = useCartStore()
    const totalItems = computed(() => cart.totalItems)
    return () => (
      <Button variant="outline" size="sm" class="relative" onClick={cart.toggle}>
        <ShoppingCart class="h-4 w-4" />
        { totalItems.value > 0 ? (
          <Badge class="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-xplor-yellow text-xplor-black text-xs">
            { totalItems.value }
          </Badge>
        ) : null }
      </Button>
    )
  }
})

export const CartSheet = defineComponent({
  name: 'CartSheet',
  setup() {
    const cart = useCartStore()
    const { toast } = useToast()

    function handleCheckout(){
      if (cart.items.length === 0) {
        toast({ title: 'Cart is empty', description: 'Add some items to your cart before checking out.', variant: 'destructive' })
        return
      }
      toast({ title: 'Checkout', description: 'Checkout functionality will be implemented with Stripe integration.' })
    }

    const formatPrice = (price: number) => new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(price)

    return () => (
      <Sheet open={cart.isOpen} onUpdate:open={() => cart.close()}>
        <SheetContent class="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Shopping Cart ({cart.items.length} items)</SheetTitle>
          </SheetHeader>

          <div class="mt-8 space-y-4">
            { cart.items.length === 0 ? (
              <div class="text-center py-8">
                <ShoppingCart class="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p class="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div class="space-y-4 max-h-[400px] overflow-y-auto">
                  { cart.items.map(item => (
                    <div class="flex items-center gap-4 p-4 border rounded-lg" key={item.id}>
                      <img src={item.image} alt={item.name} class="w-16 h-16 object-cover rounded" />
                      <div class="flex-1">
                        <h4 class="font-medium text-sm">{item.name}</h4>
                        <p class="text-sm text-muted-foreground">{item.price}</p>
                        <div class="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm" class="h-8 w-8 p-0" onClick={() => cart.updateQuantity(item.id, item.quantity - 1)}>
                            <Minus class="h-3 w-3" />
                          </Button>
                          <span class="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button variant="outline" size="sm" class="h-8 w-8 p-0" onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}>
                            <Plus class="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" class="h-8 px-2" onClick={() => cart.remove(item.id)}>
                            <Trash2 class="h-3 w-3 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="border-t pt-4">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-sm text-muted-foreground">Total</span>
                    <span class="text-lg font-semibold">{ formatPrice(cart.totalPrice) }</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <Button variant="outline" onClick={cart.clear}>Clear Cart</Button>
                    <Button class="bg-xplor-yellow hover:bg-xplor-yellow-light text-xplor-black" onClick={handleCheckout}>Checkout</Button>
                  </div>
                </div>
              </>
            ) }
          </div>
        </SheetContent>
      </Sheet>
    )
  }
})
</script>
