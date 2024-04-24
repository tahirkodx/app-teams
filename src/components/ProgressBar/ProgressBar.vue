<template>
  <div class="header"></div>
      <div class="progress-tracker">
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressWidth }"></div>
        </div>
        <div class="progress-indicator" v-if="props.showLabel">
          {{ props.tempIndex  }}/{{ props.data }} Questions
        </div>
      </div>
  
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { computed, defineProps } from "vue";
  const props = defineProps(["data","tempIndex","showLabel"]);
  
  
  const progressWidth = computed(() => {
    return `${(props.tempIndex  / props.data  ) * 100}%`;
  });
  
  </script>
  
  <style scoped>
  
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
  
  .progress-tracker {
    padding: 15px;
  }
  
  .progress-bar {
    height: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
    position: relative;
  }
  
  .progress {
    height: 100%;
    background: var(--tietiary, rgba(44, 58, 209, 0.5));
  
    transition: width 0.3s ease-in-out;
    border-radius: 5px;
  }
  
  .progress-indicator {
    text-align: right;
    padding-right: 1px;
    padding-top: 5px;
    color: #7c7c7c;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;  
  }
  </style>