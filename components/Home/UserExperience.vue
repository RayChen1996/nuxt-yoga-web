<template>
  <div>
    <SectionTitle title="聽聽他們怎麼說" sub-title="" />

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-beige"
    >
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
      >
        <img
          :src="review.image"
          alt="Profile Picture"
          class="w-16 h-16 rounded-full mb-4"
        />
        <p class="font-bold">
          {{ review.name }} <span class="text-gray-500">{{ review.date }}</span>
        </p>
        <div class="flex mb-2">
          <span v-for="n in 5" :key="n" class="text-pink-400">★</span>
        </div>
        <p class="text-center text-gray-700">{{ review.feedback }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    interface ReviewType {
      name: string;
      date: string;
      feedback: string;
      image: string;
    }

    const reviews = ref<ReviewType[]>([
      {
        name: "Joanne",
        date: "Oct 17 2020",
        feedback: "服務很好，設備優良！",
        image: "/user-1.png",
      },
      {
        name: "葉子",
        date: "Oct 17 2020",
        feedback: "老師的教學很專業",
        image: "/user-2.png",
      },
      {
        name: "穎旻",
        date: "Oct 17 2020",
        feedback: "上課後身體健康很多",
        image: "/user-3.png",
      },
      {
        name: "子琪",
        date: "Oct 17 2020",
        feedback: "上課很有趣！",
        image: "/user-4.png",
      },
      {
        name: "Ray",
        date: "Oct 17 2020",
        feedback: "很舒壓",
        image: "/user-5.png",
      },
      {
        name: "俊傑",
        date: "Oct 17 2020",
        feedback: "讚的！",
        image: "/uset-6.png",
      },
    ]);

    return { reviews };
  },
});
</script>

<style scoped>
.bg-beige {
  background-color: #f7f3ed;
}
</style>
