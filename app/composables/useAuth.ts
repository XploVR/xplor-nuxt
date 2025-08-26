import { ref, computed } from 'vue';

interface User {
  email?: string;
  // Add other user properties as needed
}

const user = ref<User | null>(null);
const isAdmin = ref(false);

export function useAuth() {
  const forceAdminCheck = () => {
    // Implement admin check logic
    if (user.value?.email === 'info@xplor.io') {
      isAdmin.value = true;
    }
  };

  return {
    user,
    isAdmin,
    forceAdminCheck
  };
}
