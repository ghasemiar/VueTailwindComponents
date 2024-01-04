<template>
  <div class="container mt-[100px] w-[70%] mx-auto">
    <div class="grid grid-cols-2 gap-4 mx-auto">
      <Forms :schema="schema" @submit="submit" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Forms from "../composables/SignUp/Forms.vue";
import { useCreateUser } from "../composables/SignUp/Create";
const { schema, submit } = useCreateUser();
</script>
<style></style>
