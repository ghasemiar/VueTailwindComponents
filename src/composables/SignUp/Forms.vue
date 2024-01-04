<template>
  <Form :validation-schema="schema" @submit="onSubmit" ref="formRef">
    <Input v-bind="getInputProps('firstName')" />
    <Input v-bind="getInputProps('lastName')" />
    <Input v-bind="getInputProps('username')" />
    <Input v-bind="getInputProps('email')" />
    <Input v-bind="getInputProps('password')" />
    <Input v-bind="getInputProps('confirmPassword')" />
    <Input v-bind="getInputProps('phone')" />
    <button class="" type="submit">sdfsf</button>
    {{ formRef }}
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
