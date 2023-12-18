<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Welcome</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Hi there, </p>
        <p>Thank you for downloading the Epicus team app.</p>
        <ion-button expand="block" router-link="/tour">Next</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  } from '@ionic/vue';
  </script>
  