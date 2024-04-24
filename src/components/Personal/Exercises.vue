<template>
  <ion-grid class="ion-no-padding">
    <ion-row class="ion-no-padding">
      <ion-col class="ion-no-padding">
        <h5 class="ion-padding-bottom">Active Exercises:</h5>
        <ion-card class="card-style">
          <ion-card-header>
            <ion-card-title>Exercise Topic</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean
            id.
          </ion-card-content>
          <ion-progress-bar
            :buffer="1.0"
            class="progress-bar"
            :value="0.6"
          ></ion-progress-bar>
          <ion-text class="icon-color ion-color"
            ><ion-icon :icon="arrowForwardOutline" class="icon-color"></ion-icon
          ></ion-text>
        </ion-card>
        <h5 class="ion-padding-bottom">Suggested Exercises:</h5>
        <ion-card class="card-style">
          <ion-card-header>
            <ion-card-title>Exercise Topic</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean
            id.
          </ion-card-content>
          <ion-text class="icon-color ion-color"
            ><ion-icon :icon="arrowForwardOutline" class="icon-color"></ion-icon
          ></ion-text>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonImg,
  IonPopover,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonProgressBar,
} from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";
</script>

<style scoped>
ion-card-content {
  display: flex;
}

ion-title {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: justify;
}

ion-card {
  width: auto;
  margin-right: -20px;
  margin-left: -5px;
  margin-top: -8px;
  box-shadow: none;
  background: #aed351;
}

/* ion-button {
  --background: transparent;
} */
ion-progress-bar {
  left: 15px;
  margin-bottom: 15px;
}

.ion-text-end {
  color: rgba(119, 85, 119, 0.34);
  font-size: 12px;
  margin-top: -26px;
}

.ion-color {
  color: #f2f2f2;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
}

.card-style {
  background: white;
  margin: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.icon-color {
  top: 15px;
  width: 24px;
  height: 24px;
  color: #2c3ad180;
}
.progress-bar {
  display: flex;
  width: 90%;
  height: 4px;
  padding-right: 149px;
  align-items: center;
  border-radius: 24px;
  --progress-background: #a5ce3e;
  /* --buffer-background: transparent; */
  --progress-color: #e6e0e9;

  /* Adjust width as needed */
}
</style>
