<template>
  <ion-page>
    <ion-header>
      <Score />
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <h4 class="titleStyle">Survey Schedules</h4>
            <ion-button
              expand="block"
              class="custom-button"
              @click="
                () =>
                  router.push({
                    name: 'scheduleWeekly',
                  })
              "
            >
              CREATE NEW SCHEDULE
            </ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <div>
              <ion-datetime presentation="date"></ion-datetime>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="ion-border-bottom"></div>
            <div class="ion-padding">
              <ion-label class="title-text">Active Surveys:</ion-label>
              <ion-text>
                <p>Every 1 weeks for 3 days starting on Mondays at 20:40:59.</p>
                <p>Every 1 weeks for 3 days starting on Mondays at 20:40:59.</p>
                <p>Every 1 weeks for 3 days starting on Mondays at 20:40:59.</p>
              </ion-text>
            </div>
            <div class="ion-border-bottom2"></div>
            <div class="ion-padding">
              <ion-label class="title-text">Upcoming Surveys:</ion-label>
              <ion-text>
                <p>2024-01-18 - 2024-06-12</p>
                <p>2024-01-18 - 2024-06-12</p>
                <p>2024-01-18 - 2024-06-12</p>
              </ion-text>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonButton,
  IonDatetime,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import router from "@/router/index";
import Score from "@/components/Header/Header.vue";
</script>
<style scoped>
.titleStyle {
  color: #fff;
  text-align: center;
  font-family: "Cabin", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}

.custom-button {
  margin-left: 16px;
  margin-right: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  text-align: center;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}

.ion-border-bottom {
  border-bottom: 1px solid#F2F2F2;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}

.title-text {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  line-height: 24px;
  letter-spacing: 0.15px;
}

.ion-border-bottom2 {
  border-bottom: 1px solid#F2F2F2;
  margin-top: 10px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}
</style>
