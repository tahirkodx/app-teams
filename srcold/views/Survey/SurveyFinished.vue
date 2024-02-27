<template>
  <ion-header>
    <score />
  </ion-header>
  <ion-content>
    <div class="styleHeader">
      <div class="outcome-title">Survey Finished Well done!</div>
    </div>
    <div class="title-line"></div>
    <div class="image-container">
      <ion-img src="/src/pictures/success.svg" alt="Finished Success"></ion-img>
    </div>

    <ion-footer>
      <div class="button-container">
        <ion-button
          class="finishedButton"
          @click="
            () =>
              router.push({
                name: 'survey',
              })
          "
          >GO BACK TO SURVEY PAGE</ion-button
        >
        <ion-button
          class="backButton"
          @click="
            () =>
              router.push({
                name: 'team',
              })
          "
          >GO BACK TO HOMEPAGE</ion-button
        >
      </div>
    </ion-footer>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  IonContent,
  IonHeader,
  IonFooter,
  IonButton,
  IonImg,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";

import { informationCircleOutline } from "ionicons/icons";
</script>

<style scoped>
.styleHeader {
  margin-top: 50px;
  display: inline-flex;
  padding: 16px 125px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.outcome-title {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.title-line {
  border-bottom: 1px solid rgba(242, 242, 242, 0.95);
  margin-top: 15px;
}

ion-img {
  width: 200px;
  height: 200px;
  flex-shrink: 0;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  /* This takes the full height of the viewport */
}

.button-container {
  display: flex;
flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
}

ion-button {
  flex: 1;
  margin: 0 5px;
}

.backButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #f2f2f2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  --background: #fff;
  --background-activated: #ebe5e5;
   margin-top: 15px;
}

.finishedButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background-color: #a5ce3e;
}
</style>
