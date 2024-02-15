<template>
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
          <ion-datetime presentation="date" class="ion-margin"></ion-datetime>
          <div class="ion-border-bottom"></div>
          <ion-label class="title-text">Active Surveys:</ion-label>
          <ion-text class="ion-padding">
            <p class="para-text">
              Every 1 weeks for 3 days starting on Mondays at
              <br />20:40:59.<br /><br />
              Every 1 weeks for 3 days starting on Mondays at
              <br />20:40:59.<br /><br />
              Every 1 weeks for 3 days starting on Mondays at <br />20:40:59.
            </p>
          </ion-text>
          <div class="ion-border-bottom2"></div>
          <ion-label class="title-text">Upcoming Surveys:</ion-label>
          <ion-text>
            <p class="para-text">
              2024-01-18 - 2024-06-12<br /><br />
              2024-01-18 - 2024-06-12<br /><br />
              2024-01-18 - 2024-06-12
            </p>
          </ion-text>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonContent,
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
  font-size: 22px;
  line-height: 28px;
  font-style: normal;
  margin-top: 10px;
  padding-left: 16px;
  margin-bottom: 16px;
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
  margin-top: -40px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}

.title-text {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  line-height: 24px;
  margin-left: 20px;
  letter-spacing: 0.15px;
}

.para-text {
  margin-left: 20px;
  letter-spacing: 0.3px;
}

.ion-border-bottom2 {
  border-bottom: 1px solid#F2F2F2;
  margin-top: 10px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}
</style>
