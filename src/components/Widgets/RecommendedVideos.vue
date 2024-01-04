<template>
  <div>
    <ion-row>
      <ion-col
        ><ion-text> <p>Coach recommended a video</p> </ion-text
        ><ion-icon name="today"></ion-icon>
      </ion-col>
      <ion-col size="auto"
        ><ion-button>
          <ion-icon slot="start" :icon="add"></ion-icon>
          Save
        </ion-button></ion-col
      >
    </ion-row>
  </div>
  <div>
    <div v-for="(resource, index) in resources"
        :key="index" class="resource-card">
      <img class="thumbnail" :src="resource?.imgPath" alt="Thumbnail" />
      
      <div class="content">
        <div class="title-section">
          <img
            class="icon"
            :src="resource.icon"
            alt="Play Icon"
          />
          <span class="title">{{resource.title}}</span>
        </div>
        <p class="snippet">
          {{resource.snippet}}
        </p>
      </div>
    </div>
  </div>
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
  IonRow,
  IonCol,
  IonCheckbox,
  IonGrid,
} from "@ionic/vue";

import { sendOutline, add } from "ionicons/icons";

const resources = ref([
  // Populate this array with your resources
  // Example resource:
  {
    imgPath: "/src/pictures/dogYellow.svg",
    title: "Resource title",
    snippet: "Resource snippet: Lorem ipsum dolor",
    duration: "Length 4:25 min",
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    imgPath: "/src/pictures/handPic.svg",
    title: "Resource title",
    snippet:
      "Resource snippet: Lorem ipsum dolor",
    duration: "Length 4:25 min",
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  // {
  //   imgPath: "/src/pictures/dogYellow.svg",
  //   title: "Resource title",
  //   snippet:
  //     "Resource snippet: Lorem ipsum dolor",
  //   duration: "Length 4:25 min",
  //   updated: "6",
  //   icon: "/src/pictures/videoicon.svg",
  // }

  // ... add more resources as needed
]);
</script>

<style scoped>
ion-grid {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #8289d5;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 8px 0px rgba(28, 37, 44, 0.05);
  border-left: 5px solid #8289d5;
}
/* check box */
ion-checkbox {
  --checkbox-background-checked: #6815ec;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

ion-checkbox::part(container) {
  border-radius: 2px;
  border: 2px solid var(--M3-sys-light-on-surface-variant, #49454f);
  width: 18px;
  height: 18px;
}

p {
  font-size: 14px;
}

ion-row {
  padding: 5px;
}

/* new from chat */
.resource-card {
  display: flex;
  align-items: center;
  border-radius: 0px 15px 15px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #8289d5;
  margin-bottom: 20px;
  width: 80%;
}

.thumbnail {
  width: 100px; /* Adjust as needed */
  height: auto;
  object-fit: cover;
}

.content {
  padding-left: 10px;
}

.title-section {
  display: flex;
  align-items: center;
}

.icon {
  width: 24px; /* Adjust as needed */
  height: auto;
  margin-right: 10px;
}

/*  */
.title{
  color: #a5ce3e;
}
.snippet {
  margin: 10px;
}
</style>
