<template>
  <ion-content>
    <ion-page>
      <ion-row>
        <ion-col>
          <ion-text class="ion-text-center">
            <h3 class="text-sm">Get notified!</h3>
            <h6 class="custom-style">
              To keep yourself updated on surveys, team insights, performance
            </h6>
          </ion-text>
          <div>
            <ion-img
              src="/src/pictures/rafiki.svg"
              alt="Finished Success"
              class="ion-padding-top"
            ></ion-img>
          </div>
          <ion-text>
            <ion-button class="ion-padding style" expand="block"
              >ALLOW NOTIFICATIONS</ion-button
            >
            <ion-button fill="clear" expand="block" class="text-size"
              >Maybe later</ion-button
            ></ion-text
          >
        </ion-col></ion-row
      ></ion-page
    >
  </ion-content>
</template>
<script setup lang="ts">
import {
  IonButton,
  IonCol,
  IonContent,
  IonImg,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";
</script>
<style scoped>
.custom-style {
  color: #9f9f9f;
  font-size: 16px;
  max-width: 278px;
  margin: 0 auto;

  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.style {
  margin-top: 90px;
  font-weight: 700;
}

.text-sm {
  margin-top: 100px;
}

.ion-padding-top {
  margin-top: 23px;
}
</style>
