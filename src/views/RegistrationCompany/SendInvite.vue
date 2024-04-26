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
            <h1 class="ion-padding">Invite team</h1>
          </ion-label>
        </ion-buttons>
      </ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding">
            <ion-text>
              <h3 class="text-sm">Send an invite to your team members</h3>
            </ion-text>
            <div class="input-container flex flex-col">
              <ion-label for="inputField">Team name</ion-label>
              <ion-input id="inputField" class="custom"></ion-input>
              <div class="input-row flex">
                <div class="row flex flex-col">
                  <ion-label for="firstNameInput">First name*</ion-label>
                  <ion-input class="custom" id="firstNameInput"></ion-input>
                </div>
                <div class="row flex flex-col">
                  <ion-label for="lastNameInput">Last name*</ion-label>
                  <ion-input class="custom" id="lastNameInput"></ion-input>
                </div>
                <div>
                  <ion-icon :icon="closeOutline" class="icon-fixed"></ion-icon>
                </div>
              </div>
              <div class="border-bottom"></div>
              <div class="input-row flex">
                <div class="row flex flex-col">
                  <ion-label for="firstNameInput">First name*</ion-label>
                  <ion-input class="custom" id="firstNameInput"></ion-input>
                </div>
                <div class="row flex flex-col">
                  <ion-label for="lastNameInput">Last name*</ion-label>
                  <ion-input class="custom" id="lastNameInput"></ion-input>
                </div>
                <div>
                  <ion-icon :icon="closeOutline" class="icon-fixed"></ion-icon>
                </div>
              </div>
              <div class="border-bottom"></div>
            </div>
            <ion-button expand="block" class="">Send Invite</ion-button>
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
  IonButtons,
  IonLabel,
  IonIcon,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonGrid,
  IonInput,
} from "@ionic/vue";
import { arrowBack, closeOutline } from "ionicons/icons";
</script>
<style scoped>
ion-text {
  padding: 16px 26px;
}

ion-icon {
  color: rgba(73, 69, 79, 1);
}

.icon-size {
  width: 24px;
  height: 24px;
  color: #757575;
}

.border-bottom {
  width: 100%;
  height: 1px;
  background: #f2f2f2;
  margin-top: 10px;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
  align-items: flex-start;
}

.icon-fixed {
  width: 23px;
  height: 23px;
  margin-top: 38px;
}

ion-label {
  color: rgba(128, 128, 128, 1);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.text-sm {
  color: #616161;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-top: -22px;
}

.row {
  gap: 5px;
}

.input-container {
  gap: 8px;
}

.input-container label {
  margin-bottom: 8px;
}

.input-row {
  gap: 15px;
}

ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
}

ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
}
</style>
