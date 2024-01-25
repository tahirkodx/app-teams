<template>
  <div>
    <div
      class="custom-section"
      v-for="(item, index) in playbookStore.notesByDate?.notes"
      :key="index"
    >
      <p>
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePlaybookStore } from "@/store";
const playbookStore = usePlaybookStore();
</script>
<style scoped>
.custom-section p {
  color: #303030;
  /* Lable large */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  margin-bottom: 2px;
  /* Style your 'Exercise Objective:' paragraph */
}

/* You may want to add media queries to adjust the layout on different screen sizes  */
/* @media (max-width: 768px) { */
.custom-section {
  padding: 18px;
  background: #F7F7F7;
  color: #404040;
  /* Body medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  margin-bottom: 10px;
}
</style>
