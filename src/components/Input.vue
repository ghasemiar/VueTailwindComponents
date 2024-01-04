<template>
  <div :class="size">
    <label
      :for="name"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ name.toUpperCase() }}</label
    >
    <div class="mt-2">
      <input
        :id="name"
        :name="name"
        :type="type"
        :autocomplete="type"
        :placeholder="placeholder"
        v-model="value"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { unref, watchEffect, watch } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: { type: String, default: "" },
  type: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  size: { type: String, default: "" },
  modelValue: { type: String, default: "" },
});

const { errorMessage, value, setValue } = useField(props.name, undefined);

const emit = defineEmits(["update:modelValue"]);
watchEffect(() => {
  emit("update:modelValue", unref(value));
});
watch(
  () => props.modelValue,
  (value) => {
    setValue(value);
  }
);
</script>
<style></style>
