<template>
  <div class="flex justify-center items-center flex-col flex-wrap">
    <div class="mt-10">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
    </div>
    <div class="mb-8">
      <p class="text-xl">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
  },
});
</script>
