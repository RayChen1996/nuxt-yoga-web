<script setup lang="ts">
import Subscribe from "~/components/Layout/Subscribe.vue";
</script>

<template>
  <div class="flex flex-col">
    <Navbar />

    <div class="flex-1">
      <div class="min-h-dvh">
        <slot />
      </div>

      <Subscribe />
    </div>

    <BasicFooter />
  </div>
</template>
