import { ref } from 'vue'

interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

const toasts = ref<ToastMessage[]>([])

export const useToast = () => {
  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: ToastMessage = {
      id,
      duration: 5000,
      ...toast
    }
    
    toasts.value.push(newToast)
    
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
  }

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const success = (message: string, duration?: number) => {
    addToast({ type: 'success', message, duration })
  }

  const error = (message: string, duration?: number) => {
    addToast({ type: 'error', message, duration })
  }

  const info = (message: string, duration?: number) => {
    addToast({ type: 'info', message, duration })
  }

  const warning = (message: string, duration?: number) => {
    addToast({ type: 'warning', message, duration })
  }

  return {
    toasts,
    success,
    error,
    info,
    warning,
    removeToast
  }
}

// Global toast instance
export const toast = {
  success: (message: string, duration?: number) => {
    const { success } = useToast()
    success(message, duration)
  },
  error: (message: string, duration?: number) => {
    const { error } = useToast()
    error(message, duration)
  },
  info: (message: string, duration?: number) => {
    const { info } = useToast()
    info(message, duration)
  },
  warning: (message: string, duration?: number) => {
    const { warning } = useToast()
    warning(message, duration)
  }
}
