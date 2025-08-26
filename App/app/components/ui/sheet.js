import { defineComponent, ref, computed, provide, inject, h, Teleport } from 'vue';
import { X } from 'lucide-vue-next';
const cn = (...xs) => xs.filter(Boolean).join(' ');
const Key = Symbol('SheetCtx');
export const Sheet = defineComponent({
    name: 'Sheet',
    props: {
        open: { type: Boolean, default: undefined },
        defaultOpen: { type: Boolean, default: false },
        side: { type: String, default: 'right' },
    },
    emits: ['update:open'],
    setup(props, { slots, emit }) {
        const internal = ref(!!props.defaultOpen);
        const isControlled = computed(() => props.open !== undefined);
        const isOpen = computed({
            get: () => (isControlled.value ? !!props.open : internal.value),
            set: (v) => (isControlled.value ? emit('update:open', v) : (internal.value = v)),
        });
        const side = ref(props.side);
        provide(Key, { open: isOpen, setOpen: (v) => (isOpen.value = v), side });
        return () => slots.default?.();
    },
});
export const SheetOverlay = defineComponent({
    name: 'SheetOverlay',
    setup() {
        const ctx = inject(Key);
        return () => ctx.open.value
            ? h('div', {
                class: 'fixed inset-0 z-50 bg-black/80',
                onClick: () => ctx.setOpen(false),
            })
            : null;
    },
});
export const SheetPortal = defineComponent({
    name: 'SheetPortal',
    setup(_, { slots }) {
        return () => h(Teleport, { to: 'body' }, slots.default?.());
    },
});
export const SheetContent = defineComponent({
    name: 'SheetContent',
    props: { class: { type: String, default: '' } },
    setup(props, { slots }) {
        const ctx = inject(Key);
        const variants = {
            top: 'inset-x-0 top-0 border-b',
            bottom: 'inset-x-0 bottom-0 border-t',
            left: 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r',
            right: 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l',
        };
        return () => ctx.open.value
            ? h(SheetPortal, null, {
                default: () => [
                    h(SheetOverlay),
                    h('div', {
                        class: cn('fixed z-50 bg-background p-6 shadow-lg', variants[ctx.side.value], props.class),
                        role: 'dialog',
                        'aria-modal': 'true',
                    }, [
                        slots.default?.(),
                        h('button', {
                            class: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                            onClick: () => ctx.setOpen(false),
                        }, [h(X, { class: 'h-4 w-4' })]),
                    ]),
                ],
            })
            : null;
    },
});
export const SheetHeader = defineComponent({
    name: 'SheetHeader',
    setup(_, { slots }) {
        return () => h('div', { class: 'flex flex-col space-y-2 text-center sm:text-left' }, slots.default?.());
    },
});
export const SheetTitle = defineComponent({
    name: 'SheetTitle',
    setup(_, { slots }) {
        return () => h('h2', { class: 'text-lg font-semibold text-foreground' }, slots.default?.());
    },
});
