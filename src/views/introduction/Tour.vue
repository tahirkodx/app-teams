<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-breadcrumbs>
            <ion-breadcrumb href="/">Welcome</ion-breadcrumb>
            <ion-breadcrumb href="#tour">Tour</ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>This tour is designed to get you up and running ASAP. Please check the boxes below one by one.</p>

        <ion-item router-link="/team/setup">
          <ion-label>
            Setup team
          </ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-item>

        <ion-item router-link="/welcome">
          <ion-label>
            Setup team for succes
          </ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-item>

        <ion-item router-link="/welcome">
          <ion-label>
            Setup team
          </ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-content>
      <ion-button expand="block" router-link="/tabs/tab1">Postphone tour</ion-button>
      <ion-button expand="block" router-link="/tabs/tab1">Skip tour</ion-button>

    </ion-page>

    
  </template>
  
  <script setup lang="ts">
  import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonButtons,
    IonBackButton,
  } from '@ionic/vue';

  import { chevronForwardOutline } from 'ionicons/icons';
  </script>
  