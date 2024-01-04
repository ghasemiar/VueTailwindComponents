<template>
  <input
    :value="value"
    v-model="proxyValue"
    type="checkbox"
    class="accent-purple-600"
  />
  <lable>{{ value }}</lable>
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
