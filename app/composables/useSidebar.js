import { ref, computed } from 'vue';

const open = ref(true);

export function useSidebar() {
  const setOpen = (value) => {
    open.value = value;
  };

  const toggle = () => {
    open.value = !open.value;
  };

  return {
    open: computed(() => open.value),
    setOpen,
    toggle
  };
}
