<template>
  <ion-content>
    <ion-page>
      <ion-header>
        <score />
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-text-center ion-padding">
            <ion-text>
              <h3 class="text-sm">Leadership Test
                Questions</h3>
              <h6 class="custom-style">
                The test requires you to fill in the gap to the sentences you see based on your understanding of it.
              </h6>
            </ion-text>
            <ion-img src="/src/pictures/amico23.svg" alt="Finished Success" class="ion-padding"></ion-img>
            <ion-button expand="full" class="ion-margin-top">START TEST</ion-button>
          </ion-col></ion-row></ion-grid>
    </ion-page>
  </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import score from "@/components/Header/Header.vue";
import {
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
  IonContent,
  IonHeader,
  IonGrid
} from "@ionic/vue";
</script>
<style scoped>
ion-img {
  width: 100%;
  /* height:100%; */
}

.custom-style {
  color: #808080;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

ion-text {
  padding: 16px 26px;
}

.text-sm {
  margin-top: 100px;
  color: var(--tietiary, rgba(44, 58, 209, 0.50));
  font-size: 22px;
  line-height: 28px;
}
</style>
  