<template>
  <div>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">
        <ion-checkbox label-placement="end" @click="showRecommendedVideos">Create value</ion-checkbox>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
        >
          <ellipse
            cx="8.19605"
            cy="1.97115"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="8.19605"
            cy="8.27883"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="8.19605"
            cy="13.7981"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="1.97115"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="8.27883"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="13.7981"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
        </svg>
      </ion-col>
      <ion-col>
        <p class="ion-text-capitalize"> Creating a team value sheet </p>
        </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">
        <ion-checkbox label-placement="end">Create value</ion-checkbox>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
        >
          <ellipse
            cx="8.19605"
            cy="1.97115"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="8.19605"
            cy="8.27883"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="8.19605"
            cy="13.7981"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="1.97115"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="8.27883"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
          <ellipse
            cx="2.19605"
            cy="13.7981"
            rx="2.19605"
            ry="1.97115"
            fill="#D8DEF3"
          />
        </svg>
      </ion-col>
      <ion-col>
        <p class="ion-text-capitalize"> Creating a team value sheet </p>
        </ion-col>
    </ion-row>
  </ion-grid>
  <recommendedvideos v-if="showVideos" ></recommendedvideos>
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
import recommendedvideos from "@/components/Widgets/RecommendedVideos.vue"
const masgList = ref([
  { message: "Hi are you there?", time: "02:30 PM", status: "send" },
  { message: "I need help realted to teams", time: "02:30 PM", status: "send" },
  { message: "Yes! how I can help you?", time: "02:31 PM", status: "recieve" },
  { message: "How I can create a team?", time: "02:31 PM", status: "send" },
  // ... other items
]);

const showVideos = ref(false);
const showRecommendedVideos = () => {
  // Add the logic to handle sending a message
  showVideos.value = !showVideos.value;
};
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
  margin: 0px;
}
.ion-text-capitalize {
  padding-left: 25px;
}
ion-row {
  padding: 5px;
}
</style>
