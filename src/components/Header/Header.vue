<template>
  <ion-header>
      <ion-toolbar>
          <ion-grid>
              <ion-row>
                  <ion-col size="2">
                      <ion-buttons>
                          <ion-button>
                              <ion-icon :icon="peopleSharp"></ion-icon>
                          </ion-button>
                      </ion-buttons>
                  </ion-col>
                  <ion-col size="7">
                      <div>
                          <ion-select  
                          interface="popover" placeholder="Team dep..." class="header-select">
                              <!-- Your options here -->
                              <ion-select-option value="team1">Team 1 department </ion-select-option>
                              <ion-select-option value="team2">Team 2 department</ion-select-option>
                              <ion-select-option value="team3">Team 3 department</ion-select-option>
                              <ion-select-option value="team4">Team 4 department</ion-select-option>
                              <!-- Additional options -->
                          </ion-select>    
                      </div>
                  </ion-col>
                  <ion-col size="3">
                      <ion-buttons>
                          <ion-button>
                              <ion-icon class="profile-Icon-style" :icon="personCircleSharp"></ion-icon>
                          </ion-button>
                      </ion-buttons>
                  </ion-col>
              </ion-row>
          </ion-grid>
      </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader, IonToolbar, IonButtons, IonButton, IonIcon,
  IonGrid, IonRow, IonCol, IonSelect, IonSelectOption
} from '@ionic/vue';
import { peopleSharp, personCircleSharp } from 'ionicons/icons';
import { ref, watch } from "vue";
import router from "@/router/index";
export default {
  name: 'HeaderComponent',
  components: {
      IonHeader, IonToolbar, IonButtons, IonButton, IonIcon,
      IonGrid, IonRow, IonCol, IonSelect, IonSelectOption
  },
  setup() {
      return {
          peopleSharp,
          personCircleSharp
      };
  }
};





const buffer = 1.0;



</script>

<style scoped>
ion-header {
  --background: #333;
  --ion-toolbar-background: #333;
  --ion-color-base: #333;
  height: 50px;
  /* Set the height of the header */
}

ion-toolbar {
  --padding-top: 0;
  --padding-bottom: 0;
  min-height: 50px;
  /* Ensure the toolbar is also 50px in height */
  align-items: center;
  /* Vertically center the toolbar content */
}

.header-select {
  --padding-start: 6px;
  --padding-end: 0px;
  --border-radius: 8px;
  --background: #4f4f4f;
  --placeholder-color: #bcbcbc;
  --placeholder-opacity: 1;
  --color: #fff;
  height: 5px;
  width: 120px;
  /* Adjust the height of the select */
  --border: none;
  --inner-padding-top: 0;
  --inner-padding-bottom: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}

ion-select {
  max-height: 50px;
  justify-content: center;
  align-items: center;
}

ion-select::part(text) {
  padding-top: 0;
  /* Align the text to the top */
  padding-bottom: 0;
  /* No padding at the bottom */
}

ion-select::part(icon) {
  margin-top: -8px;
  /* Adjust the icon position */
}

ion-icon {
  font-size: 24px;
  color: #fff;
}

ion-button {
  --background: transparent;
  --background-activated: rgba(255, 255, 255, 0.1);
  --background-hover: rgba(255, 255, 255, 0.1);
  --ripple-color: rgba(255, 255, 255, 0.1);
}
.profile-Icon-style {
  padding-left: 40px;
}

.pump {
animation: pump 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes pump {
50% {
  transform: scale(1.4, 1.4);
}
}
/* You may need to adjust the sizes or padding of the columns depending on your content */
</style>