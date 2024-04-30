<template>
  <ion-page>
    <Header is-back-button router-link="ask-help" />
    <ion-content :fullscreen="true" class="ion-padding">
      <h3>Get an external coach</h3>

      <div>
        <p class="ion-text-center head-title">
          {{ selectedDay ? selectedDay : "Book an appointment" }}
        </p>
        <p class="ion-text-center head-desc">
          {{
            datetimeValue
              ? DateFormate(datetimeValue)
              : "Select an available date to speak to you external coach"
          }}
        </p>

        <div
          v-if="datetimeValue"
          class="ion-text-center ion-justify-content-center head-clock-text"
        >
          <ion-icon src="/src/pictures/map-location.svg" class="clock-icon" />
          <span class="ion-text-center head-clock-text"
            >Greenwich Meridian Time</span
          >
        </div>

        <div
          v-else
          class="ion-text-center ion-justify-content-center head-clock-text"
        >
          <ion-icon src="/src/pictures/clock-circle.svg" class="clock-icon" />
          <span class="ion-text-center head-clock-text">1 Hour</span>
        </div>
      </div>

      <div v-if="selectedDay && availableTimes">
        <div class="title-line"></div>
        <div class="select-day-text">Select a time</div>

        <ion-grid>
          <ion-row style="gap: 16px; justify-content: center">
            <ion-col
              size="3"
              v-for="time in availableTimes"
              :key="time"
              class="time-slot"
              :class="{ selected: selectedTime === time }"
              @click="selectTime(time)"
              >{{ time }}</ion-col
            >
          </ion-row>
        </ion-grid>
      </div>

      <div class="title-line"></div>
      <div class="select-day-text">Select a day</div>
      <div class="date-content">
        <ion-datetime
          presentation="date"
          :show-default-time="false"
          @ionChange="dateChanged"
        ></ion-datetime>
      </div>

      <div class="title-line"></div>
    </ion-content>

    <ion-footer>
      <div class="button-container">
        <ion-button
          expand="block"
          class="previousButton"
          @click="
            () =>
              router.push({
                name: 'ask-help',
              })
          "
          >Previous</ion-button
        >
        <ion-button
          expand="block"
          class="nextButton"
          :disabled="selectedTime ? false : true"
          @click="
            () =>
              router.push({
                name: 'appointmentConfirm',
              })
          "
          >{{ selectedDay && availableTimes ? "Book" : "Next" }}</ion-button
        >
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonFooter,
  IonContent,
  IonGrid,
  IonDatetime,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { ref } from "vue";
import router from "@/router/index";
import { DateFormate } from "@/utils/Helper";

const datetimeValue = ref("");
const selectedDay = ref("");

const dateChanged = (event: any) => {
  datetimeValue.value = event.detail.value;
  if (datetimeValue.value) {
    const date = new Date(datetimeValue.value);
    const options = { weekday: "long" };
    selectedDay.value = new Intl.DateTimeFormat("en-US", options).format(date);
  } else {
    selectedDay.value = "";
  }
};

const selectedTime = ref(""); // Variable to hold selected time

// Function to generate time options from 9am to 5pm
const generateTimeOptions = () => {
  const times = [];
  for (let i = 9; i <= 17; i++) {
    const hour = i < 10 ? "0" + i : i.toString();
    times.push(`${hour}:00`);
  }
  return times;
};

const availableTimes = generateTimeOptions(); // Generate time options

const selectTime = (time: any) => {
  selectedTime.value = time; // Update selected time
};
</script>

<style scoped>
.head-title {
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.head-desc {
  color: #666666;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  margin: 2px 0px;
}

.head-clock-text {
  color: black;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  margin: 0;
  display: flex;
  gap: 8px;
}

.clock-icon {
  height: 24px;
  width: 24px;
}

.select-day-text {
  color: black;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
  text-align: center;
  padding-bottom: 16px;
}

.previousButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #f2f2f2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  --background: #fff;
  --background-activated: #ebe5e5;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
  gap: 29px;
}

.nextButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background-color: #a5ce3e;
  width: 100%;
}

.title-line {
  border-bottom: 1px solid rgba(249, 238, 238, 0.95);
  margin-top: 18px;
  margin-bottom: 24px;
  width: auto;
}

.date-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.time-slot {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f2f2f2;
}

.time-slot.selected {
  background-color: #2c3ad180;
  color: white;
}

.time-slot.selected span {
  color: red; /* Change the text color of the selected time slot */
}
</style>
