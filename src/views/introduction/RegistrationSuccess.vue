<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Registration success</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Registration succesfull. Go to your e-mail adress and check for the confirmation e-mail.</p>
        <ion-button @click="() => router.push({name: 'authentication'})">Authenticate</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { ref } from "vue";
    import { 
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButton,
    } from '@ionic/vue';
    import router from '@/router/index'  
  </script>
  