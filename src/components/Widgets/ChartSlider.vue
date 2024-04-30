<template>
  <swiper
    :style="{
      '--swiper-pagination-color': '#A5CE3E',
    }"
    :pagination="{ clickable: true }"
    :modules="modules"
  >
    <swiper-slide>
      <RadarChart />
    </swiper-slide>
    <swiper-slide>
      <div style="width: 100%">
        <LineChart :data="dummyData" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import RadarChart from "@/components/Charts/RadarChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ref } from "vue";
const modules = ref([Pagination]);
const dummyData = [
  { score: 7, date: "2024-01-01" },
  { score: 8, date: "2024-02-02" },
  { score: 6, date: "2024-03-03" },
  { score: 9, date: "2024-04-04" },
  { score: 5, date: "2024-05-05" },
  { score: 8, date: "2024-06-06" },
];
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
