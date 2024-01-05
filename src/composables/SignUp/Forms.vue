<template>
  <Form
    :validation-schema="schema"
    @submit="onSubmit"
    ref="formRef"
    class="grid grid-cols-2 gap-14 mx-auto"
  >
    <Input v-bind="getInputProps('firstName')" />
    <Input v-bind="getInputProps('lastName')" />
    <Input v-bind="getInputProps('username')" />
    <Input v-bind="getInputProps('email')" />
    <Input v-bind="getInputProps('password')" />
    <Input v-bind="getInputProps('confirmPassword')" />
    <Input v-bind="getInputProps('phone')" />
    <Input v-bind="getInputProps('birthday')" />
    <Select v-bind="getInputProps('country')" />
    <button
      type="submit"
      class="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 bg-green-400 rounded-lg border border-gray-200 hover:bg-green-200 col-span-2"
    >
      Alternative
    </button>
  </Form>
</template>
<script lang="ts">
import Input from "./../../components/Input.vue";
import { useUserValidator } from "./FormValidator";
import DropDown from "./../../components/DropDown.vue";
import CheckBox from "./../../components/CheckBox.vue";
import RadioButton from "./../../components/RadioButton.vue";
import Select from "./../../components/Select.vue";
import TextArea from "./../../components/TextArea.vue";
import { formEmits, formProps, useFormLogic } from "./../useFormLogic";
import { Form } from "vee-validate";
import { toRef, defineComponent } from "vue";
export default defineComponent({
  props: {
    ...formProps,
  },
  emits: [...formEmits],
  components: {
    Input,
    Form,
    Select
},
  setup(props, { emit }) {
    const { onSubmit, formRef } = useFormLogic(
      { onDataFetched: toRef(props, "onDataFetched") },
      {
        emit,
      }
    );
    const { getInputProps } = useUserValidator();
    return { getInputProps, onSubmit, formRef };
  },
});
</script>
<style></style>
