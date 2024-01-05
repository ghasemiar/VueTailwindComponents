<template>
  <div class="dropdown-wrapper relative m-8">
    <button
      v-on:click="show = !show"
      :class="(btnColor, txtColor)"
      class="font-bold py-2 px-4 whitespace-no-wrap rounded transition duration-300"
    >
      Dropdown
    </button>
    <transition :name="animation">
      <div
        :class="btnColor"
        class="dropdown-menu mt-1 rounded absolute z-10 shadow-lg w-40 max-w-xs"
        v-if="show"
      >
        <ul class="list-none overflow-hidden rounded">
          <li v-for="item in items">
            <a
              href=""
              :class="txtColor"
              class="flex py-2 px-4 transition duration-300"
              >{{ item }}</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  btnColor: String,
  txtColor: String,
  animation: String,
  //it will be changed because it will be a array ob object name to value
  items: Array<String>,
});
const show = ref(false);
</script>
<style scoped></style>
