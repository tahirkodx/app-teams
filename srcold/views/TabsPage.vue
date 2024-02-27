<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Team" href="/tabs/team" @click="updateHeader('Team')">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Team</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Exercise" href="/tabs/exercises" @click="updateHeader('Exercises')">
          <ion-icon :icon="barbellOutline" />
          <ion-label>Exercises</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="Survey" href="/tabs/surveys" @click="updateHeader('Surveys')">
          <ion-icon :icon="documentTextOutline" />
          <ion-label>Surveys</ion-label>
        </ion-tab-button> -->

        <ion-tab-button tab="Academy" href="/tabs/academys" @click="updateHeader('Academy')">
          <ion-icon :icon="libraryOutline" />
          <ion-label>Academy</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonRouterOutlet,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonImg
} from '@ionic/vue';
// import { } from '@ionic/vue';
import { inject,provide,ref } from 'vue';

import { libraryOutline, peopleOutline, barbellOutline, documentTextOutline, ribbonOutline, clipboardOutline } from 'ionicons/icons';
const headerTitle = ref('headerTitle');
const updateHeader = (title: any) => {
   headerTitle.value = title;
  // provide('headerIcon', title)
};
provide('headerIcon', headerTitle)

</script>
