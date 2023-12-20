<template>
  <ion-header>
    <ion-toolbar class="custom-toolbar">
      <ion-buttons slot="start">
        <ion-button>
          <ion-icon :icon="peopleOutline" class="toolbar-icon"></ion-icon>
        </ion-button>
      </ion-buttons>

      <div class="title-select-container">
        <ion-select interface="popover" placeholder="Team dep..." class="header-select">
          <ion-select-option value="team1">Team 1 department</ion-select-option>
          <ion-select-option value="team2">Team 2 department</ion-select-option>
          <ion-select-option value="team3">Team 3 department</ion-select-option>
          <ion-select-option value="team4">Team 4 department</ion-select-option>
        </ion-select>
      </div>

      <ion-buttons slot="end">
        <ion-button>
          <ion-icon :icon="personCircleSharp" class="toolbar-icon"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { peopleOutline, personCircleSharp } from 'ionicons/icons';
</script>

<style scoped>
.custom-toolbar {
  --background: #000; /* Black background */
  --ion-color-base: #000; /* Black background for the toolbar as well */
  --min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-select-container {
  flex: 1;
  display: inline-grid;
  justify-content: center;
}

.header-select {
  width: 100%;
  max-width: 200px; /* Adjust the width as needed */
  --background: #4B4B4B;
  --placeholder-color: #bcbcbc;
  --placeholder-opacity: 1;
  --color: #fff;
  --padding-start: 10px;
  --padding-end: 10px;
  --border-radius: 5px;
  --border: none;
}

ion-select::part(placeholder) {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

ion-select::part(icon) {
  color: #fff;
  margin-end: 0; /* Align the dropdown icon to the right */
}

.toolbar-icon {
  color: #fff;
  font-size: 24px;
}

ion-button {
  --background: transparent;
  --background-activated: transparent;
  --background-hover: transparent;
  --ripple-color: transparent;
}
</style>
