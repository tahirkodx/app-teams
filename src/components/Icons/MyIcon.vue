<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      @click="clickHandler"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="#A5CE3E" />
      <image
        :href="props.path"
        class="drag-handle-icon"
        x="10"
        y="10"
        height="20"
        width="20"
      />
    </svg>
  </template>
    
    <script setup lang="ts">
    import { defineProps } from 'vue';
    import { useRouter, } from 'vue-router';
    const props = defineProps({
      link: {
        type: String,
        default: "",
      },
      path: {
        type: String,
        default: "",
      },
      onClick: {
      type: Function,
      required: false
    }
    });
    
    const router = useRouter();
    
    const clickHandler = () => {
      console.log(props)
      if (props.link) {
        // router.push({ name: props.link });
      } else {
        emit('click');
      }
    };
    </script>
    
  <style scoped>
  .custom {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  </style>
  