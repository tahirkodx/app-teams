<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button>
          <ion-icon :icon="chevronBack"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Profile</ion-title>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon :icon="personCircle"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <!-- Other parts of the UI will go here -->
</template>

<script setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/vue';
import { chevronBack, personCircle } from 'ionicons/icons';
</script>
