<template>
  <ion-content>
    <ion-page>
      <ion-row>
        <ion-col>
          <ion-text class="ion-text-center">
            <h3 class="ion-margin head-text">We found an existing account</h3>
            <h6 class="customtext">Would you like to continue further</h6>
          </ion-text>
          <ion-button
            expand="block"
            router-link="/inviteNotified"
            class="ion-padding ion-margin-top"
            ><span class="login-text"> LOGIN WITH THIS ACCOUNT </span>
          </ion-button>
          <h5 class="ion-padding-top ion-text-center label-style">
            Register with another email ID
          </h5>
          <ion-button class="ion-padding ion-button" expand="block"
            >CREATE A NEW ACCOUNT</ion-button
          >
          <div class="picture">
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
import {
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonImg,
} from "@ionic/vue";
</script>
<style scoped>
.head-text {
  margin-bottom: 4px;
}
.customtext {
  color: #9f9f9f;
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
}

.ion-margin {
  margin-top: 93px;
}

.ion-margin-top {
  margin-top: 53px;
}
.label-style {
  font-size: 12px;
  color: #5e5e5e;
  font-weight: 400;
}

.picture {
  padding-top: 20px;
  max-width: 325px;
  margin: 0 auto;
}

.ion-button {
  --background: transparent;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;

  --color: blue;

  --border-radius: 0;
  --border-color: #ff8512;
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  --ripple-color: #ff9a3c;

  --padding-top: 17px;
  --padding-bottom: 17px;

  color: var(--secondary, #ff8512);
  text-align: center;
  font-family: Cabin;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}

.login-text {
  font-weight: 700;
  padding: 2px;
}
</style>
