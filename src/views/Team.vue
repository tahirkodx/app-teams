<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="teamStore.teams.list.length > 0">
        <ion-item
          v-show="statusStore.teamActiveSurveys(teamID).length > 0"
          @click="
            () =>
              router.push({
                name: 'teamsurvey',
                params: {
                  surveyid: statusStore.teamActiveSurveys(teamID)[0].id,
                },
              })
          "
        >
          <ion-label> Take survey </ion-label>
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-item>

        <status />

        <ion-button
          v-show="statusStore.teamHasDimScores(teamID)"
          expand="block"
          @click="() => router.push({ name: 'teamsupport' })"
        >
          Get support
        </ion-button>

        <ion-accordion-group
          :multiple="true"
          :value="defaultAccordionValue"
          ref="accordionGroup"
        >
          <!-- Team overview -->
          <ion-accordion value="Team">
            <ion-item slot="header" color="light">
              <ion-label>Team</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <members />
              <ion-button
                @click="() => router.push({ name: 'alterteam' })"
                expand="block"
                >Edit</ion-button
              >
            </div>
          </ion-accordion>

          <!-- Survey settings / schedulers -->
          <ion-accordion value="Survey settings">
            <ion-item slot="header" color="light">
              <ion-label>Survey schedule</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <ion-datetime
                presentation="date"
                :highlighted-dates="
                  statusStore.teamSurveysCalendarFormat(teamID)
                "
                @ion-focus="(e) => console.log(e.target)"
                :first-day-of-week="1"
              />

              <h3>Coming surveys</h3>
              <div v-if="statusStore.teamComingSurveys(teamID).length > 0">
                <ion-list>
                  <ion-item
                    v-for="survey of JSON.parse(
                      JSON.stringify(statusStore.teamComingSurveys(teamID))
                    )
                      .reverse()
                      .slice(0, 5)"
                    @click="
                      () =>
                        router.push({
                          name: 'teamscheduleralter',
                          params: { scheduleid: survey.scheduleid },
                        })
                    "
                  >
                    {{ survey.scheduleid }}
                    {{ survey.start.slice(0, 10) }} -
                    {{ survey.end.slice(0, 10) }}
                  </ion-item>
                </ion-list>
              </div>
              <div v-else>
                <p><i>No current upcoming surveys</i></p>
              </div>

              <h3>Active schedules</h3>
              <div v-if="statusStore.teamSchedulers(teamID).length > 0">
                <ion-list>
                  <ion-item
                    v-for="schedule of statusStore.teamSchedulers(teamID)"
                    @click="
                      () =>
                        router.push({
                          name: 'teamscheduleralter',
                          params: { scheduleid: schedule.id },
                        })
                    "
                  >
                    {{ statusStore.schedulerText(schedule) }}
                  </ion-item>
                </ion-list>
              </div>
              <div v-else>
                <p><i>No current schedules</i></p>
              </div>

              <ion-button
                expand="block"
                @click="() => router.push({ name: 'teamscheduleradd' })"
                >Add schedule</ion-button
              >
            </div>
          </ion-accordion>

          <!-- Creating a new survey -->
          <ion-accordion value="New survey">
            <ion-item slot="header" color="light">
              <ion-label>New survey</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <survey-now v-model="newSurvey" />
              <ion-button expand="block" @click="sendSurvey">Send</ion-button>
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </div>

      <div v-else>
        <h1>You are not enroled in a team.</h1>
        <ion-button
          expand="block"
          @click="() => router.push({ name: 'addteam' })"
          >Add team</ion-button
        >
      </div>
      <ion-fab
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
} from "@ionic/vue";
import { chevronForwardOutline, add } from "ionicons/icons";
//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from "@/router/index";
import score from "@/components/All/Header.vue";
import status from "@/components/Team/Status.vue";
import members from "@/components/Team/Members.vue";
import { presentToast } from "@/utils/toast";
import { useUserStore } from "@/stores/user";
import { useTeamStore } from "@/stores/teams";
import { useStatusStore } from "@/stores/status";
import { fetchCurrent, teamID } from "@/stores/current";
import surveyNow from "@/components/Surveys/SurveyNow.vue";

const userStore = useUserStore();
const statusStore = useStatusStore();
const teamStore = useTeamStore();
await Promise.all([
  teamStore.fetch(),
  userStore.fetch(),
  statusStore.fetch(),
  fetchCurrent(),
]);

const defaultAccordionValue = ["Team"];
const accordionGroup = ref<null | any>(null);

function resetAccordionValues() {
  if (!accordionGroup.value) {
    return;
  }
  const nativeEl = accordionGroup.value.$el;
  nativeEl.value = defaultAccordionValue;
}

// ===================================================================
// New survey
// ===================================================================

const now = new Date();
const newSurveyStartDateStr = now.toISOString().slice(0, 10) + "T00:00:00";
const newSurveyEndDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
const newSurveyEndDateStr =
  newSurveyEndDate.toISOString().slice(0, 10) + "T00:00:00";

const newSurvey = ref({
  start: newSurveyStartDateStr,
  end: newSurveyEndDateStr,
});

function sendSurvey() {
  statusStore.newRequestNow(
    newSurvey.value.start,
    newSurvey.value.end,
    teamID.value
  );
  newSurvey.value.start = now.toISOString().slice(0, 10) + "T00:00:00";
  newSurvey.value.end =
    newSurveyEndDate.toISOString().slice(0, 10) + "T00:00:00";
  presentToast("New survey created");
  resetAccordionValues();
  const contentElement = document.querySelector("ion-content");
  if (contentElement) contentElement.scrollToTop();
  //REFRESH THE SURVEY
  statusStore.requests.fetch();
}
</script>

<style scoped>
ion-datetime {
  --background: unset: !important;
}
</style>
