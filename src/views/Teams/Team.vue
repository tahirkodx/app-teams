<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <chart /> -->
      <radarchart />
      <linkbutton label="Ask Help" expend="block" link="teamsupport" />
      <teamwidget />
      <ion-reorder-group v-if="loading">
                <ion-card v-for="(member, index) in teamStore.teamMembers.members" :key="index" class="practice-card"
                @click="() =>
                router.push({
                  name: 'editteam',
                  
                })
            "
                >
                    <div class="card-content">
                        <ion-reorder slot="start"></ion-reorder>
                        
                        <ion-label>{{member.last_name}}</ion-label>
                        <ion-icon :icon="chevronForward" slot="end" />
                    </div>
                    <div class="progress-container">
                        <ion-progress-bar  ></ion-progress-bar>
                    </div>
                </ion-card>
            </ion-reorder-group>
      <fixedicon path="/src/pictures/answer-correct-icon.svg" link="team"></fixedicon>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref,onMounted,watch } from "vue";
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
} from "@ionic/vue";

import { chevronForward, add, arrowUpOutline } from "ionicons/icons";
//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import radarchart from "@/components/Charts/RadarChart.vue";
import linkbutton from "@/components/Buttons/LinkButton.vue";
import teamwidget from "@/components/Widgets/TeamWidget.vue";
import fixedicon from "@/components/Icons/FixedIcon.vue";

import { useUserStore, useTeamStore } from "@/store";
const userStore = useUserStore();
const teamStore = useTeamStore();
const loading = ref(false);

onMounted(async () => {
  await Promise.all([
    teamStore.getTeams(),
    userStore.getUserSettings()
  ]);
  loading.value = true;
});


</script>

<style scoped>
ion-datetime {
  --background: unset: !important;
}
.practice-card {
    margin-bottom: 8px;
    --ion-item-background: transparent;
    --ion-item-padding: 0;
    --background: transparent;
    box-shadow: none;
    /* Remove shadow if present */
}

.card-content {
    display: flex;
    align-items: center;
}

ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
}

ion-label {
    flex-grow: 1;
    font-size: 1rem;
    padding: 16px 0;
    
}

.progress-container {
    width: 100%;

}

ion-progress-bar {
    height: 2px;
    /* Height of progress bar, adjust as needed */
    --background: #7F7F7F;
}

ion-reorder {
    color: var(--ion-color-medium);
}

ion-icon {
    font-size: 1.5em;
    width: 24px;
    height: 24px;
}
.addStyle{
    margin-bottom: 40px;
    margin: 10px ;
}
</style>
