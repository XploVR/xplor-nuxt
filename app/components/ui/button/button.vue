<!-- src/components/ui/button/Button.vue -->
<script setup>
import { computed } from 'vue';
import { Primitive } from 'radix-vue';

const props = defineProps({
  asChild: { type: Boolean, default: false },
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'default' },
});

const Comp = props.asChild ? Primitive : 'button';

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    // Add other variants as needed
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return [
    base,
    variants[props.variant] || variants.default,
    sizes[props.size] || sizes.default,
  ];
});
</script>

<template>
  <component :is="Comp" :class="buttonClasses">
    <slot />
  </component>
</template>
