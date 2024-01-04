<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <DropDown
        btn-color="bg-green-500"
        txt-color="text-white"
        animation="slide-in-up"
        :items="dropdown"
      />
      <div>HelloWorld</div>
      <Input
        value="date"
        type="date"
        placeholder="please enter your email"
        v-model="InputValue"
      />
      <Select lableText="choose a car" :options="options" v-model="select" />
      <CheckBox value="value1" v-model="checkboxValue" />
      <CheckBox value="value2" v-model="checkboxValue" />
      <CheckBox value="value3" v-model="checkboxValue" />
      <RadioButton value="radio1" v-model="raidoValue" />
      <RadioButton value="radio2" v-model="raidoValue" />
      <TextArea value="description" v-model="TextAreaValue" />
    </div>
    <p>{{ InputValue }}</p>
  </main>
</template>

<script setup lang="ts">
import TextArea from "./TextArea.vue";
import Input from "./Input.vue";
import DropDown from "./DropDown.vue";
import CheckBox from "./CheckBox.vue";
import Select from "./Select.vue";
import RadioButton from "./RadioButton.vue";
import { ref } from "vue";
const select = ref<string>("");
const checkboxValue = ref<Array<string>>([]);
const raidoValue = ref<Array<string>>([]);
const TextAreaValue = ref<string>("");
const InputValue = ref<string>("");
//dropdown
const dropdown = ["sjdkfs", "sdfdsf"];
//select
const options = ["bmw", "benz", "porche"];
</script>
