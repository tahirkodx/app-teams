<template>
  <ion-content>
    <ion-page>
      <ion-header>
        <Header />
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-text-center ion-padding">
            <ion-text>
              <div class="text-sm">Leadership Test
                Questions</div>
              <div class="custom-style">
                The test requires you to fill in the gap to the sentences you see based on your understanding of it.
              </div>
            </ion-text>
            <ion-img
              src="/src/pictures/amico23.svg"
              alt="Finished Success"
              class="ion-padding"
            ></ion-img>
            <ion-button
              @click="handleNavigate"
              expand="block"
              class="ion-margin-top"
              >START TEST</ion-button
            >
          </ion-col></ion-row
        ></ion-grid
      >
    </ion-page>
  </ion-content>
</template>
<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import router from "@/router/index";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";

function handleNavigate() {
  router.push({ name: "question" });
}
</script>

<style scoped>
ion-img {
  width: 100%;
  /* height:100%; */
}

.custom-style {
  color: #808080;
  text-align: center;

  /* mobile/Lable large */
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

ion-text {
  padding: 16px 26px;
}

.text-sm {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 22px;
  line-height: 28px;
  max-width: 146px;
  margin: 76px auto 0 auto;
}

ion-button {
  height: 43px;
}
</style>
