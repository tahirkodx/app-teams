<template>
  <Header />
  <ion-content>
    <div class="header-container">
      <h1>Celebrate and Collaborate</h1>
      <h2>Recognising Individual and Team Achievements</h2>
      <div class="ion-padding">
        <ion-button @click="navigate" expand="block">ADD EXERCISE</ion-button>
      </div>
    </div>
    <div class="segment-wrapper">
      <ion-segment mode="md" value="all">
        <ion-segment-button value="all">
          <ion-label>Description</ion-label>
        </ion-segment-button>
        <ion-segment-button value="favorites">
          <ion-label>Details</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
    <div>
      <Video play="/src/videos/testvideo.mp4" />
    </div>

    <div>
      <ion-card>
        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur. At a orci molestie tincidunt
          nulla non feugiat blandit. Tincidunt sed eget enim donec est. Amet
          aenean ut sed mi. Rutrum id habitant diam nunc egestas. Lorem sit in
          posuere nunc ullamcorper amet velit bibendum amet.
        </ion-card-content>
      </ion-card>
      <div class="ion-padding">
        <h6>Exercise Objective:</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur. At a orci molestie tincidunt
          nulla non feugiat blandit. Tincidunt sed eget enim donec est. Amet
          aenean ut sed mi. Rutrum id habitant diam nunc egestas. Lorem sit in
          posuere nunc ullamcorper amet velit bibendum amet.
        </p>
      </div>
    </div>
  </ion-content>
</template>
<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Video from "@/components/Exercise/VideoPlayer.vue";
import {
  IonPage,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonAvatar,
  IonLabel,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonIcon,
  IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();


const navigate = () => {
  router.push({ name: "addExercise" });
};
</script>

<style scoped>
.header-container {
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
  background: #f7f7f7;
}

.header-container h1 {
  color: var(--Neutrals-black, #303030);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding-top: 8px;
  margin-bottom: -15px;
}

.header-container h2 {
  color: #7c7c7c;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  padding: 0px 80px;
}

.segment-wrapper {
  overflow-x: auto;
  scrollbar-width: none;
  border-bottom: 1px solid #eaeaea;
}

ion-segment-button {
  min-width: 33%;
  flex: 0 0 auto;
  color: #000;
}

ion-segment-button.md {
  --color-checked: var(--tietiary, rgba(44, 58, 209, 0.5));
  --indicator-height: 4px;
}

ion-segment-button ion-label {
  text-transform: none;
}
ion-card-content {
  color: #000;
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  background: #f2f8e3;
}
</style>
