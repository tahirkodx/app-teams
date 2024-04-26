<template>
  <ion-page>
    <ion-header>
      <score></score>
    </ion-header>
    <ion-content>
      <div class="ion-padding-horizontal headerStyle">
        <h4>Create your big 5 profile</h4>
      </div>
      <div class="ion-padding">
        <div class="divPostion">
          <h6>Instructions</h6>
          <ion-list>
            <ion-item
              v-for="(instruction, index) in instructions"
              :key="index"
              lines="none"
            >
              <ion-icon
                :icon="ellipse"
                slot="start"
                class="dot-icon"
              ></ion-icon>
              <ion-text color="medium" class="ion-margin-bottom">{{ instruction }}</ion-text>

            </ion-item>
          </ion-list>
        </div>
        <div>
           <ion-button  @click="navigate" expand="block">START TEST</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
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
import { ellipse } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import Notes from "@/components/Exercise/Notes.vue";
import SummaryDescription from "@/components/Exercise/SummaryDescription.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import VideoPlayer from "@/components/Exercise/VideoPlayer.vue";
import ExerciseDetails from "@/components/Exercise/ExerciseDetails.vue";
import { usePlaybookStore, useUserStore, useTeamStore } from "@/store";


const router = useRouter()
function navigate() {
  router.push({ name: 'big5Question' }).catch(err => {
    console.error(err);
  });
}


const instructions = ref([
  "This questionnaire consists of 120 statements. There is no time restriction.",
  "Respond to all statements and answer the questions one after the other.",
  "Check whether you have made the right choice. If you want to change an answer, simply choose a new answer and the incorrect answer will disappear.",
  "Try not to choose the 'Neutral' option too often.",
  "Describe yourself as you generally are right now, not as you would like to be in the future.",
  "Describe yourself as you actually see yourself in relation to people of the same gender and of approximately the same age. What comes to mind first is usually the most reliable answer.",
]);
</script>
<style scoped>
.headerStyle {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
}
.dot-icon {
  color: var(--ion-color-medium);
  font-size: min(1rem, 6px);
  margin-right: 12px;
}
 .divPostion{
  height: 600px 
 }
</style>
