<template>
  <ion-fab
    slot="fixed"
    horizontal="end"
    vertical="bottom"
    @click="clickHandler"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
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
  </ion-fab>
</template>

<script setup lang="ts">
import { defineProps,defineEmits,watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
    isVisible: Boolean,
  link: {
    type: String,
    default: "",
  },
  path: {
    type: String,
    default: "",
  },
  
});
const emit = defineEmits(['update:isVisible']);

const router = useRouter();
watch(() => props.isVisible, (newValue) => {
  if (!newValue) {
    emit('update:isVisible', false);
  }
});
const clickHandler = () => {
  console.log(props);
  if (props.link) {
     router.push({ name: props.link });
  }else{
    console.log("dfasd")
  }
};
</script>
<style scoped>
ion-fab{
    bottom : 80px;
}
</style>
