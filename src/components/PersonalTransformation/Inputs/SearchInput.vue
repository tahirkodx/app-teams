<template>
    <ion-list>
      <ion-item>
        <ion-input label-placement="stacked"  placeholder="email@domain.com">
          <ion-button fill="clear" slot="end" aria-label="Show/hide">
            <ion-icon slot="icon-only" :icon="searchOutline" aria-hidden="true"></ion-icon>
          </ion-button>
        </ion-input>
      </ion-item>
    </ion-list>
  </template>
  
  <script setup lang="ts">
    import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/vue';
    import {  searchOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';
  
    
  </script>
  <style scoped>
  ion-input{
    border-radius: 30px;
  }
  </style>