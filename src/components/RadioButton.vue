<template>
  <div class="flex items-center mb-4">
    <input
      :id="value"
      type="radio"
      :value="value"
      v-model="proxyValue"
      class="accent-purple-600"
    />
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-black"
      >Default radio</label
    >
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  value: { type: String, required: true },
  modelValue: { type: Array, required: true },
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
