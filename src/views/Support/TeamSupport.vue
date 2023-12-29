<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'team' }"
            @click="segmentChanged('team')"
          >
            Team coach
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'others' }"
            @click="segmentChanged('others')"
          >
            Others
          </div>
        </div>
        <div
          class="custom-tags-container"
          @click="scrollLeft"
          ref="cardContainer"
        >
          <!-- Dynamically create cards using v-for loop -->
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
        </div>

        <div class="content">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'team'">
            <chat />
          </div>
          <div v-if="activeTab === 'others'">Other tabs</div>
        </div>
      </div>
      <!-- Rest of your content -->
      <fixedicon
        path="/src/pictures/today_24px.svg"
        :onClick="alertClick"
      ></fixedicon>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonFab,
  IonDatetime,
  IonFabButton,
  IonList,
  IonCard,
  IonThumbnail,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonChip,
} from "@ionic/vue";

import { sendOutline, add } from "ionicons/icons";
//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import fixedicon from "@/components/Icons/FixedIcon.vue";
import Chat from "@/components/Widgets/Chat.vue";

const activeTab = ref("team"); // default active tab
const cardContainer = ref(null);

// Methods
const segmentChanged = (tabName) => {
  activeTab.value = tabName;
};
const scrollLeft = () => {
  if (cardContainer.value) {
    cardContainer.value.scrollLeft += 200; // scroll by 200 pixels; adjust as necessary
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab {
  padding: 10px 40px;
  cursor: pointer;
  text-align: center;
  border-bottom: 3px solid transparent; /* Makes the tab seem "inactive" */
}

.tab.active {
  border-bottom: 3px solid #8289d5; /* Color of the active tab indicator */
}

.content {
  padding: 20px 15px 0px 15px;
  min-height: 200px; /* Adjust as needed */
  overflow-y: scroll;
    height: 520px;
}
ion-chip {
  --background: #8289d5;
}

.custom-tags-container {
  display: flex;
  flex-direction: row;
  padding: 20px 0 20px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.custom-tags {
  flex: 0 0 auto; /* Do not grow or shrink */
  margin: 0 8px; /* Spacing between cards */
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2); /* Card shadow */
  border-radius: 17px;
  border: 1.5px solid #8289d5;
}
</style>
