<template>
  <ion-page>
    <Header />

    <ion-content>
      <ion-title class="titleStyle">Create New Team </ion-title>
      <ion-list class="ion-padding">
        <ion-item>
          <ion-label position="floating">Enter team name:</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-grid>
          <ion-row>
            <ion-col size="9">
              <ion-select placeholder="Add member">
                <!-- Options will be populated here -->
              </ion-select>
            </ion-col>
            <ion-col size="3">
              <ion-button expand="block">ADD</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div>
          <modalInfo/>
          <ion-note>Help</ion-note>
        </div>
      </ion-list>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button  @click="() => router.push('/teams/addteam')" class="ion-padding" expand="block">CREATE TEAM</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
 
  
</template>

<script setup lang="ts">
import {
  IonTitle,
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonButton,
  IonFooter,
  IonToolbar,
  IonIcon,
  IonNote,
} from "@ionic/vue";
import modalInfo from "@/components/Widgets/InfoModal.vue";
import Header from "@/components/Header/Header.vue";
import { ref } from "vue";
import router from "@/router/index";

 

</script>

<style scoped>
.titleStyle {
  margin-top: 15px;
  color: var(--black, #000);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

 
</style>
