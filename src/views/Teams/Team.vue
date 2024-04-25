<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <chart /> -->
      <radarchart />
      <linkbutton label="ASK HELP" expend="block" link="teamsupport" class="ion-padding-vertical" />
      <teamwidget />
      <!-- new  -->
      <ion-accordion-group :multiple="true" :value="['first', 'third']">
        <ion-accordion value="first">
          <ion-item class="cus-item" slot="header">
            <ion-label>Team</ion-label>
          </ion-item>
          <div class="ion-no-padding" slot="content">
            <div class="ion-no-padding">
              <div class="newClass" v-for="(member, index) in teamStore.teamMembers.members" :key="index" @click="() =>
          router.push({
            name: 'teamMember',
          })
        ">
                <div class="profile-pic">
                  <ion-img src="/src/pictures/Ellipse1.svg" alt="Finished Success"></ion-img>
                </div>
                <div class="inner-team">
                  <div>
                    <div class="info-name">{{ member.last_name }}</div>
                    <div class="info-role">
                      {{
        member.role == 0
          ? "Visitor"
          : member.role == 1
            ? "Member"
            : member.role == 2
              ? "Leader"
              : "Coach"
      }}
                    </div>
                  </div>
                  <div>
                    <div class="info-active">3 Active Teams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item class="cus-item" slot="header">
            <ion-label>Team Survey</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">Second Content</div>
        </ion-accordion>
      </ion-accordion-group>
      <!-- new -->
      <ion-reorder-group v-if="loading"> </ion-reorder-group>
      <!-- <fixedicon
        path="/src/pictures/answer-correct-icon.svg"
        link="team"
      ></fixedicon> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonReorderGroup,
  IonReorder,
  IonRow,
  IonCol,
  IonImg,
  IonPopover,
  IonText,
  IonGrid,
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
  await Promise.all([teamStore.getTeams(), userStore.getUserSettings()]);
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
  border-radius: 5px;
  border: 1px solid #F2F2F2;
  background: #F5F5F5;
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

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}

.info-name {
  color: #7C7C7C;

  /* mobile/Title small */
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
}

.info-role {
  color: #7C7C7C;

  /* mobile/Body small */
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
}

.info-active {
  padding: 2px 8px;


  color: #6F6F6F;
  font-family: Cabin;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  /* 160% */
  border-radius: 100px;
  background: #E6E6E6;
}

.profile-pic {
  width: 60px;
  height: 60px;
  border: 4px solid #fff;
  border-radius: 50%;
}

.newClass {
  display: flex;
  padding: 8px 20px;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #F2F2F2;
  background: #F5F5F5;
  margin-bottom: 10px;
}

.cus-item {
  margin-bottom: 15px;
  border-bottom: 1px solid #D9D9D9;
}

.inner-team {
  display: flex;
  /* padding: 8px 20px; */
  align-items: center;
  /* justify-content: center; */
  gap: 100px;
  width: 100%;
  justify-content: space-between;
}
</style>
