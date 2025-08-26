
<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h3 class="text-lg font-semibold flex items-center gap-2">
        <span class="inline-block w-5 h-5 rounded-full border"></span>
        Agent & Contact Information
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <label class="block">
          <span class="text-sm font-medium">Agent Name</span>
          <input v-model="agent.agentName" class="input" placeholder="e.g., John Smith" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">Agency / Company Name</span>
          <input v-model="agent.agencyName" class="input" placeholder="e.g., Premium Properties Ltd" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">Phone Number</span>
          <input v-model="agent.contactPhone" class="input" placeholder="+1 (555) 123-4567" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">Email Address</span>
          <input v-model="agent.contactEmail" type="email" class="input" placeholder="agent@agency.com" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">WhatsApp Number</span>
          <input v-model="agent.whatsappNumber" class="input" placeholder="+1 (555) 123-4567" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">License Number</span>
          <input v-model="agent.agentLicense" class="input" placeholder="e.g., RE123456789" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const agent = reactive({
  agentName:'', agencyName:'', contactPhone:'', contactEmail:'', whatsappNumber:'', agentLicense:''
})

defineExpose({ agent })
</script>

<style scoped>
.input { @apply w-full border rounded-md px-3 py-2 bg-background; }
</style>

