<template>
  <div>
    <label
      :for="value"
      class="block text-sm font-medium leading-6 text-gray-900"
      >Email address</label
    >
    <div class="mt-2">
      <input
        :id="value"
        :name="value"
        :type="type"
        :autocomplete="type"
        v-model="proxyValue"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  value: { type: String, required: true },
  type: { type: String, required: true },
  placeholder: { type: String },
  modelValue: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);
const proxyValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>
<style></style>
