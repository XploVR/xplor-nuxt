import { ref, reactive } from 'vue';
const toasts = ref([]);
let toastId = 0;
export function useToast() {
    const toast = ({ title, description, variant = 'default', duration = 5000 }) => {
        const id = ++toastId;
        const toastItem = reactive({
            id,
            title,
            description,
            variant,
            duration,
            visible: true
        });
        toasts.value.push(toastItem);
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
        return id;
    };
    const removeToast = (id) => {
        const index = toasts.value.findIndex(toast => toast.id === id);
        if (index > -1) {
            toasts.value.splice(index, 1);
        }
    };
    const clearToasts = () => {
        toasts.value = [];
    };
    return {
        toast,
        toasts,
        removeToast,
        clearToasts
    };
}
