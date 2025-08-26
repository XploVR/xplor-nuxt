import { ref } from 'vue';
const toasts = ref([]);
export const useToast = () => {
    const addToast = (toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
            id,
            duration: 5000,
            ...toast
        };
        toasts.value.push(newToast);
        if (newToast.duration && newToast.duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, newToast.duration);
        }
    };
    const removeToast = (id) => {
        const index = toasts.value.findIndex(toast => toast.id === id);
        if (index > -1) {
            toasts.value.splice(index, 1);
        }
    };
    const success = (message, duration) => {
        addToast({ type: 'success', message, duration });
    };
    const error = (message, duration) => {
        addToast({ type: 'error', message, duration });
    };
    const info = (message, duration) => {
        addToast({ type: 'info', message, duration });
    };
    const warning = (message, duration) => {
        addToast({ type: 'warning', message, duration });
    };
    return {
        toasts,
        success,
        error,
        info,
        warning,
        removeToast
    };
};
// Global toast instance
export const toast = {
    success: (message, duration) => {
        const { success } = useToast();
        success(message, duration);
    },
    error: (message, duration) => {
        const { error } = useToast();
        error(message, duration);
    },
    info: (message, duration) => {
        const { info } = useToast();
        info(message, duration);
    },
    warning: (message, duration) => {
        const { warning } = useToast();
        warning(message, duration);
    }
};
