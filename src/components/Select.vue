<template>
  <label for="for" class="block mb-2 text-sm font-medium" :class="txtColor">{{
    lableText
  }}</label>
  <select
    id="for"
    :class="(bgColor, txtColor)"
    v-model="selectProxy"
    class="border border-gray-300 text-sm rounded-lg focus:ring-pink-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option v-for="(option, idx) in options" :key="idx">{{ option }}</option>
  </select>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  lableText: { type: String, default: "default lable text" },
  txtColor: { type: String, default: "text-gray-900" },
  bgColor: { type: String, default: "bg-white" },
  options: { type: Array, required: true },
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);
const selectProxy = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>
<style></style>
