<template>
  <ion-page>
    <Header />
    <ion-content class="ion-padding">
      <h2 class="heading">What's Your Invite Name?</h2>
      <ion-card class="input-card">
        <ion-card-content>
          <ion-text color="dark">j.jones@gmail.com</ion-text>
          <ion-row>
            <ion-col size="6">
              <ion-item>
                <ion-input placeholder="First name"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col size="6">
              <ion-item>
                <ion-input placeholder="Last name"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button
          @click="() => router.push('/teams/teamMember')"
          class="ion-padding"
          expand="block"
          >FINISH</ion-button
        >
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import {
  IonText,
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonRow,
  IonCol,
  IonFooter,
  IonButton,
  IonToolbar
} from "@ionic/vue";

import router from "@/router/index";
</script>

<style scoped>
.heading {
  color: var(--black, #000);
  font-family: Cabin;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-left: 10px;
}

.input-card {
  --ion-background-color: #fff;
  --ion-box-shadow: 0px 5px 20px 0px rgba(108, 117, 125, 0.2);
  border-radius: 5px;
  border: 1px solid #f2f2f2;
}

ion-card-content {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}

ion-item {
  --padding-end: 0;
  --border-radius: 8px; /* Customize the border radius if needed */
  --background: #f2f2f2; /* Custom background to match the screenshot */
  --ion-item-background: #f2f2f2;
  margin: 0.5rem 0;
}

ion-input {
  --padding-start: 1rem;
  --padding-end: 1rem;
  --placeholder-color: #808080;
  --placeholder-opacity: 1;
  --color: #808080;
  --font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

/* If you need to adjust the spacing between the ion-item elements */
ion-row {
  --ion-grid-column-padding: 0;
}

/* Adjust the size of the ion-col if you need more precise control */
ion-col {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
