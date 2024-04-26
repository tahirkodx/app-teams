<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-icon
            :icon="arrowBack"
            class="icon-size ion-padding-start"
          ></ion-icon>
          <ion-label>
            <h1 class="text-black ion-padding">Join Epicus</h1>
          </ion-label>
        </ion-buttons>
      </ion-toolbar>
      <ion-grid class="custom-padding">
        <ion-row>
          <ion-col class="ion-text-center ion-padding">
            <span class="text-sm">
              Dianne Russell
              <span class="blue-text">(danielrussel @google.com) </span>has
              invited you to join the team leadership training platform
              (Epicus). Sign Up now to start growing your leadership level
            </span>

            <ion-button expand="block" class="margin-btn">SIGN UP</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  IonButton,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonLabel,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
  IonContent,
  IonGrid,
} from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
</script>
<style scoped>
ion-text {
  padding: 16px 26px;
}

.icon-size {
  width: 24px;
  height: 24px;
  color: #757575;
}

.text-sm {
  color: #616161;

  margin-top: 42px;

  text-align: center;

  /* mobile/Body medium */

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  display: block;
  max-width: 306px;
  margin: 0 auto;
}

.blue-text {
  color: #0d99ff;
}

.text-black {
  color: #303030;
  text-align: center;

  /* mobile/Title Large */
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

.custom-padding {
  padding-top: 122px;
}

.margin-btn {
  margin-top: 36px;
}
</style>
