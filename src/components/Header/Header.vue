<template>
  <ion-header>
    <ion-toolbar class="custom-toolbar">
      <ion-buttons class="startIcon" slot="start">
        
        <ion-button>
          <ion-icon size="large" :icon="people" class="toolbar-icon"></ion-icon>
        </ion-button>
      </ion-buttons>

      <div class="title-select-container">
        <!-- {{ headerTitle }} -->
        
        <ion-select interface="popover" placeholder="Team dep..." class="header-select">
          <ion-select-option value="team1">Team 1 department</ion-select-option>
          <ion-select-option value="team2">Team 2 department</ion-select-option>
          <ion-select-option value="team3">Team 3 department</ion-select-option>
          <ion-select-option value="team4">Team 4 department</ion-select-option>
        </ion-select>
      </div>

      <ion-buttons class="endIcon" slot="end">
        <ion-button>
          <ion-icon size="medium" :icon="personCircleOutline" class="toolbar-icon"></ion-icon>
        </ion-button>
        <ion-button>
          <ion-toggle :checked="themeToggle" @ionChange="toggleChange($event)" justify="space-between"
          ></ion-toggle
        >
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { defineComponent, ref,inject } from 'vue';

import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { people, personCircleSharp,personCircleOutline} from 'ionicons/icons';
import type { ToggleCustomEvent } from '@ionic/vue';

const themeToggle = ref(false);
const toggleDarkTheme = (shouldAdd) => {
        document.body.classList.toggle('dark', shouldAdd);
      };
const toggleChange = (ev: ToggleCustomEvent) => {
        toggleDarkTheme(ev.detail.checked);
      };
      
      // const message = inject('message')
const iconHedaer = ref(people)
const headerTitle = inject('headerIcon');
if(headerTitle === 'Team'){
  iconHedaer.value = people
}else if (headerTitle === 'Team'){
  
}
</script>

<style scoped>
.custom-toolbar {
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
  width: 127px;
  max-width: 127px; /* Adjust the width as needed */
  min-height:32px;
  background: var(--my-masg-background);
  --placeholder-opacity: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 8px;
  --border: none;
 font-size: 16px;
 font-family: 'Cabin', sans-serif;
 font-weight: 700;
 line-height: 24px;
 letter-spacing: 0.15px;
 word-wrap: break-word;
}

ion-select::part(placeholder) {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

ion-select::part(icon) {
  margin-end: 0; /* Align the dropdown icon to the right */
}

.toolbar-icon {
  font-size: 24px;
}
ion-button {
  --background: transparent;
  --background-activated: transparent;
  --background-hover: transparent;
  --ripple-color: transparent;
}
.startIcon{
  padding-right: 10px;
}
.endIcon{
  /* padding-right: 22px; */
}
</style>
