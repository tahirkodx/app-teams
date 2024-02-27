<template>
    <swiper  :style="{
      '--swiper-pagination-color': '#A5CE3E',
    }" :pagination="{ clickable: true }" :modules="modules"  >
        <swiper-slide>
            <RadarChart />
        </swiper-slide>
        <swiper-slide>
            fsfsdfsdfs
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
