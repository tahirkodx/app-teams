<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-icon :icon="arrowBack" class="icon-size"></ion-icon>
          <ion-label>
            <h1 class="text-black text-back ion-padding-start">
              Select a plan
            </h1>
          </ion-label>
        </ion-buttons>
      </ion-toolbar>
      <ion-row>
        <ion-col class="ion-padding">
          <h6 class="text-black ion-margin-start">Pricing</h6>
          <ion-card class="item-center">
            <div class="header-container flex">
              <div class="eclipse-circle" />
              <div class="text-col text-white flex">
                <ion-text class="ion-margin-start">
                  <h6>For startups</h6>
                  <h3 class="text-def">Pro</h3>
                </ion-text>
                <ion-text>
                  <span class="text-sm">Popular</span>
                </ion-text>
              </div>
            </div>
            <ion-text>
              <h5 class="text-card1-desc">
                Improve leadership skills and team cultures at all levels of
                your organisation.
              </h5>
            </ion-text>
            <div class="ion-padding ion-margin-top ion-text-center">
              <span class="font-lg text-white">$25 </span>
              <span class="font-sm">per user</span
              ><span class="font-md text-white">/month</span>
            </div>
            <ion-accordion-group class="ion-group ion-padding-bottom">
              <ion-accordion value="first">
                <ion-item slot="header" class="text-white bg-gray">
                  <ion-label>What’s included</ion-label>
                </ion-item>
              </ion-accordion>
            </ion-accordion-group>
            <ion-button class="custom-button custom-color" expand="block"
              >GET STARTED</ion-button
            >
          </ion-card>
          <ion-card class="bg-light">
            <div class="header-container flex">
              <div class="eclipse-circle" />
              <div class="text-col text-black flex">
                <ion-text class="ion-margin-start">
                  <h5 class="text-title1">For individuals</h5>
                  <h3 class="text-title2">Free</h3>
                </ion-text>
              </div>
            </div>
            <ion-text class="text-black">
              <h5>
                Develop your own leadership skills and overcome your
                long-standing development points, better than with coaching
              </h5>
            </ion-text>
            <div class="ion-padding ion-margin-top ion-text-center">
              <span class="font-lg text-black">$0 </span
              ><span class="font-md text-black">/month</span>
            </div>
            <ion-accordion-group class="ion-group ion-padding-bottom">
              <ion-accordion value="first">
                <ion-item slot="header" class="bg-light">
                  <ion-label>What’s included</ion-label>
                </ion-item>
              </ion-accordion>
            </ion-accordion-group>
            <ion-button class="custom-button" expand="block"
              >GET STARTED</ion-button
            >
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonRow,
  IonCard,
  IonCol,
  IonPage,
  IonLabel,
  IonText,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/vue";
import { arrowBack, ellipse } from "ionicons/icons";
</script>

<style scoped>
ion-text span {
  width: fit-content;
  height: 28px;
  padding: 6.5px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
}

ion-card {
  padding: 20px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #141414;
  background: #373737;
  box-shadow: 0px 2px 12px 0px rgba(20, 20, 43, 0.08);
  margin-bottom: 32px;
}

ion-icon {
  width: 72px;
  height: 72px;
  fill: #d9d9d9;
}

ion-item {
  --background: #ececec;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

ion-button {
  height: 72px;
}

/* .text-col {
  gap: 50px;
} */

.bg-gray {
  --background: #959595;
  /* border-radius: 3px; */
}

.text-black {
  color: #303030;
}

.text-white {
  color: var(--Neutral-100, #fff);
}

.flex {
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: center;
}

.header-container {
  width: 100%;
  align-items: center;
  margin-left: -8px;
}

.icon-size {
  width: 24px;
  height: 24px;
  color: #757575;
  margin-left: 20px;
}

.bg-light {
  background: white;
  border: none;
}

.font-lg {
  font-size: 52px;
}

.font-md {
  font-size: 22px;
  line-height: 28px;
}

.text-sm {
  color: var(--Neutral-100, #fff);
  text-align: center;

  /* mobile/Body small */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
.font-sm {
  color: #d9dbe9;
  font-size: 12px;
  line-height: 16px;
  margin-left: -10px;
}

.ion-group {
  margin-left: 4px;
  margin-right: 4px;
}

.custom-color {
  --background: var(--secondary, #ff8512);
}

.text-back {
  text-align: center;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

.eclipse-circle {
  background-color: #d9d9d9;
  height: 72px;
  width: 72px;
  border-radius: 100%;
}

.text-def {
  color: var(--Neutral-100, #fff);

  /* website/h5 */
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.text-card1-desc {
  color: #d9dbe9;

  /* mobile/Title Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;

  max-width: 256px;
}

.text-title1 {
  color: var(--Neutral-600, #6f6c90);

  /* mobile/Title Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.text-title2 {
  color: var(--Neutral-800, #170f49);

  /* website/h5 */
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
