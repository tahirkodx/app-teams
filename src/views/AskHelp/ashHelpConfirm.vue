<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true" class="ion-padding">
      <h3>Get an external coach</h3>

      <div>
        <p class="ion-text-center head-title">Confirmed</p>
        <p class="ion-text-center head-desc">
          You are scheduled with an external coach
        </p>
      </div>

      <div class="title-line"></div>
      <div class="select-day-text">Select a day</div>

      <ion-list lines="none">
        <ion-item v-for="(item, index) in data" :key="index">
          <ion-icon :src="item.icon" size="large" class="icons" />
          <ion-label class="ion-text">{{ item.title }}</ion-label>
        </ion-item>
      </ion-list>

      <div class="ion-text-desc">
        A confirmation email has been sent to you, <br />
        add it to your calendar for reminder purposes
      </div>
    </ion-content>

    <ion-footer>
      <div class="button-container">
        <ion-button expand="block" class="nextButton"
          >BACK TO TEAMS PAGE</ion-button
        >
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonFooter,
  IonContent,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { ref } from "vue";

const data = ref([
  {
    title: "1 Hour",
    icon: "/src/pictures/clock-circle.svg",
  },
  {
    title: "11:00am - 12:00pm, Thursday, August 17 2024",
    icon: "/src/pictures/calendar.svg",
  },
  {
    title: "Greenwich Meridian Time",
    icon: "/src/pictures/map-location.svg",
  },
]);
</script>

<style scoped>
.head-title {
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.ion-text {
  color: black;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  padding-left: 8px;
}

.ion-text-desc {
  color: #757575;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  padding-top: 120px;
  text-align: center;
}

.head-desc {
  color: #666666;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  margin: 2px 0px;
}

.icons {
  height: 24px;
  width: 24px;
}

.select-day-text {
  color: black;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
  text-align: center;
  padding-bottom: 16px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
  gap: 29px;
}

.nextButton {
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
  width: 100%;
}

.title-line {
  border-bottom: 1px solid rgba(249, 238, 238, 0.95);
  margin-top: 18px;
  margin-bottom: 24px;
  width: auto;
}
</style>
