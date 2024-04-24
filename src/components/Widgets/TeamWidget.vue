<template>
  <div class="custom-card-container" ref="cardContainer">
    <!-- Dynamically create cards using v-for loop -->
    <ion-card class="custom-card" v-for="index in 10" :key="index">
      <ion-card-header>
        <ion-card-title class="text-heading">1 Energy</ion-card-title>
        <ion-icon :icon="arrowUpOutline" class="custom-icon"></ion-icon>
      </ion-card-header>
      <ion-card-content>
        Supporting line text lorem ipsum dolor sit amet...
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/vue";
import { arrowUpOutline } from "ionicons/icons";

const cardContainer = ref(null);

const scrollLeft = () => {
  if (cardContainer.value) {
    cardContainer.value.scrollLeft -= 200; // Scroll to the left by 200 pixels; adjust as necessary
  }
};

onMounted(() => {
  // Optional: setup touch gestures if needed
});
</script>

<style scoped>
.custom-card-container {
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.custom-card {
  flex: 0 0 auto;
  margin: 0 8px;
  border-radius: 20px;
  width: 250px;
  background: #f5f5f5;
  scroll-snap-align: start;
  box-shadow: none;
}

ion-card-header {
  position: relative;
  padding-bottom: 0;
  padding: 0 8px;
}

ion-card-title {
  font-size: 1.5em;
  padding-top: 8px;
}

ion-card-content {
  font-size: 12px;
  padding: 8px;
}

.custom-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f39c12;
  font-size: 2em;
}

.text-heading {
  color: #7c7c7c;
  font-size: 16px;
  font-style: normal;
}
</style>
