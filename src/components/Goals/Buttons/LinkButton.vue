<template>
  <!-- Corrected the router.push argument to use the link prop value -->
  <ion-button class="custom" @click="navigate" :expand="props.expand">{{ label }}</ion-button>
</template>

<script setup lang="ts">
import { IonButton } from "@ionic/vue";
import { useRouter } from 'vue-router';

const props = defineProps({
  label: {
    type: String,
    default: "Next",
  },
  link: {
    type: String,
    default: "team",
  },
  // Corrected typo from 'expend' to 'expand'
  expand: {
    type: String,
    default: "block",
  }
});

const router = useRouter();

// Method to navigate to the route specified by the link prop
const navigate = () => {
  router.push({ name: props.link });
};
</script>

<style scoped>
.custom {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
