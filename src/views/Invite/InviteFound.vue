<template>
  <ion-content>
    <ion-page>
      <ion-row>
        <ion-col>
          <ion-text class="ion-text-center">
            <h3 class="ion-margin">We found an existing account</h3>
            <h6 class="customtext">Would you like to continue further</h6>
          </ion-text>
            <ion-button expand="block" router-link="/inviteNotified"  class="ion-padding ion-margin-top">LOGIN WITH THIS ACCOUNT</ion-button>
          <h5 class="ion-padding-top ion-text-center label-style">
            Register with another email ID
          </h5>
          <ion-button class="ion-padding" expand="block" fill="outline"
            >CREATE A NEW ACCOUNT</ion-button
          >
          <div>
            <ion-img
              src="/src/pictures/amico.svg"
              alt="Finished Success"
              class="ion-padding-vertical"
            ></ion-img>
          </div>
        </ion-col>
      </ion-row>
    </ion-page>
  </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonImg
} from "@ionic/vue";
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const navigateToInviteNotified = () => {
//   router.push('/inviteNotified');
// }
</script>
<style scoped>
.customtext {
  color: #9f9f9f;
  font-size: 16px;
  line-height: 16px;
}

.ion-margin {
  margin-top: 93px;
}

.ion-margin-top {
  margin-top: 53px;
}
.label-style {
  font-size: 12px;
  color: #9f9f9f;
}
</style>
