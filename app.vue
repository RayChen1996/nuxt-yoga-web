<script setup lang="ts">
const route = useRoute();
useHead({
  title: "大型瑜珈網",
  meta: [{ name: "", content: "" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
