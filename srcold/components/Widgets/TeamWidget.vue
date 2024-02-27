<template>
  <div class="custom-card-container" ref="cardContainer">
    <!-- Dynamically create cards using v-for loop -->
    <ion-card class="custom-card" v-for="index in 10" :key="index">
      <ion-card-header>
        <ion-card-title>1 Energy</ion-card-title>
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
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonIcon } from "@ionic/vue";
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
  padding: 20px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.custom-card {
  flex: 0 0 auto;
  margin: 0 8px;
  border-radius: 20px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  border: solid 1px #7f7f7f;
  width: 250px;
  scroll-snap-align: start;
}

ion-card-header {
  position: relative;
  padding-bottom: 0;
}

ion-card-title {
  font-size: 1.5em;
}

ion-card-content {
  padding-top: 16px;
  font-size: 1rem;
}

.custom-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #f39c12;
  font-size: 2em;
}
</style>
