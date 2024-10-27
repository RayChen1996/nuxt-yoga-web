<template>
  <div>
    <SectionTitle title="方案選擇" sub-title="DOYOGA 可以帶給你..." />

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto w-10/12 gap-x-3"
    >
      <div v-for="(card, index) in cards" :key="index" class="card shadow-xl">
        <figure>
          <img
            :src="card.image"
            :alt="card.title"
            class="max-h-80 object-cover w-full"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ card.title }}</h2>
          <p>{{ card.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">選擇課程</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    interface ProjectType {
      title: string;
      image: string;
      description: string;
    }

    const cards = ref<ProjectType[]>([
      {
        title: "首次體驗",
        image: "/yoga-11.jpg",
        description:
          "NT $450 / 次\n分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。",
      },
      {
        title: "短期體驗",
        image: "/yoga-12.jpg",
        description:
          "NT $1800 / 月\n分基礎、中級、高級可以選擇。想試著培養瑜伽習慣可以選擇此方案。",
      },
      {
        title: "長期體驗",
        image: "/yoga-13.jpg",
        description:
          "NT $5600 / 季\n分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
      },
    ]);

    return { cards };
  },
});
</script>
