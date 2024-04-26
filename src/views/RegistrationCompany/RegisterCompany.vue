<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-icon
            :icon="arrowBack"
            class="icon-size ion-padding-start"
          ></ion-icon>
          <ion-label class="text-black ion-padding">
            <h1>Register your company</h1>
          </ion-label>
        </ion-buttons>
      </ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding">
            <ion-text class="text-sm">
              Fill in organisation details and set admin password below
            </ion-text>
            <div
              class="input-container flex flex-col ion-padding-top ion-margin-top"
            >
              <ion-label for="inputField">Organisation name*</ion-label>
              <ion-input id="" type="text" class="custom"></ion-input>
              <div class="input-row-end flex">
                <div class="row custom-width flex flex-col">
                  <ion-label for="inputField">Email domain*</ion-label>
                  <ion-input id="inputField" class="custom"></ion-input>
                </div>
                <div class="row flex flex-col ion-margin-bottom">
                  <ion-button class="custom-button">Add+</ion-button>
                </div>
              </div>
              <div class="input-row flex">
                <div class="row flex flex-col">
                  <ion-label for="firstNameInput">First name*</ion-label>
                  <ion-input id="firstNameInput" class="custom"></ion-input>
                </div>
                <div class="row flex flex-col">
                  <ion-label for="lastNameInput">Last name*</ion-label>
                  <ion-input id="lastNameInput" class="custom"></ion-input>
                </div>
              </div>
              <ion-label for="inputField">Email ID*</ion-label>
              <ion-input id="inputField" class="custom"></ion-input>

              <ion-label for="inputField">Admin password*</ion-label>
              <ion-input id="inputField" class="custom"
                ><ion-button fill="clear" slot="end" aria-label="Show/hide">
                  <ion-icon
                    slot="icon-only"
                    :icon="eyeOffOutline"
                    aria-hidden="true"
                  ></ion-icon>
                </ion-button>
              </ion-input>
              <ion-text class="text-xs"
                >Must contain minimum 8 letters and a special
                character</ion-text
              >

              <ion-label for="inputField">Conform password*</ion-label>
              <ion-input id="inputField" class="custom"
                ><ion-button fill="clear" slot="end" aria-label="Show/hide">
                  <ion-icon
                    slot="icon-only"
                    :icon="eyeOffOutline"
                    aria-hidden="true"
                  ></ion-icon>
                </ion-button>
              </ion-input>
            </div>
            <ion-button expand="block" class="ion-padding-top"
              >Create account</ion-button
            >
            <IonRow>
              <IonCol>
                <p class="acceptTerm">
                  By continuing you agree for our
                  <span class="policy">Terms and conditions</span> and
                  <span class="policy">Privacy policy </span>
                </p>
              </IonCol>
            </IonRow>
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
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
} from "@ionic/vue";
import { arrowBack, eyeOffOutline } from "ionicons/icons";
</script>

<style scoped>
ion-icon {
  color: rgba(73, 69, 79, 1);
}

ion-label {
  color: rgba(128, 128, 128, 1);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.icon-size {
  width: 24px;
  height: 24px;
  color: #757575;
}

.custom-style {
  line-height: 20px;
  margin-top: 5px;
  letter-spacing: 0.1px;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
}

.custom-button {
  width: 75px;
  height: 36px;
}

.text-gray {
  color: #616161;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
  align-items: flex-start;
}

.text-sm {
  color: #616161;
  text-align: center;
  align-items: center;
  display: flex;
  /* mobile/Title Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
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

.input-row-end {
  align-items: flex-end;
  gap: 20px;
}

.input-row {
  gap: 15px;
}

.custom-width {
  width: 227px;
}

.text-xs {
  color: #808080;
  font-size: 11px;
  line-height: 16px;
  margin-top: -4px;
}

.blue-text {
  color: #0d99ff;
  text-decoration: underline;
}

.acceptTerm {
  color: var(--Color-Brand-black, #000);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
}
.policy {
  color: var(--Color-Brand-black, #0d99ff);
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-decoration-line: underline;
}

ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;

  /* --padding-bottom: 10px; */
  --padding-end: 10px;
  --padding-start: 10px;
  /* --padding-top: 10px; */
  margin-top: 5px;
  margin-bottom: 15px;
}

ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
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
</style>
