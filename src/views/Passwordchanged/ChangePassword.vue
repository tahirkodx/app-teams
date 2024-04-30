<template>
  <ion-page>
    <Header is-back-button router-link="passwordSetting" />
    <ion-content>
      <ion-row>
        <ion-col class="ion-padding">
          <div class="custom-container ion-padding">
            <div class="custom-container ion-text-center ion-margin-bottom">
              <ion-text class="font-lg">Change Password?</ion-text>
              <ion-text class="font-sm"
                >We will send you a link to reset password
              </ion-text>
            </div>
            <ion-input
              fill="outline"
              placeholder="Enter email:*"
              class="custom-input ion-margin-bottom"
            ></ion-input>
            <ion-button
              expand="block"
              class="ion-padding-vertical"
              router-link="/resetOtp"
            >
              SEND LINK
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  IonText,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
</script>
<style scopped>
.custom-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.font-lg {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.custom-input {
  --background: #f2f2f2;
  --border-width: 0;
  --border-radius: 5px;
  margin-top: 10px;
}
.font-sm {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
</style>
