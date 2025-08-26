<template>
  <div class="form-container">
    <Card>
      <CardHeader>
        <CardTitle>Maritime Infrastructure Form</CardTitle>
        <CardDescription>
          Add maritime infrastructure details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="form-group">
            <label for="name" class="block text-sm font-medium mb-1">
              Name *
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div class="form-group">
            <label for="description" class="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              v-model="formData.description"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div class="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              @click="handleCancel"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Card } from "@/components/ui/card/index.ts"
import { CardHeader } from "@/components/ui/card/index.ts"
import { CardTitle } from "@/components/ui/card/index.ts"
import { CardDescription } from "@/components/ui/card/index.ts"
import { CardContent } from "@/components/ui/card/index.ts"

const formData = reactive({
  name: '',
  description: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData)
}

const handleCancel = () => {
  console.log('Form cancelled')
}
</script>

