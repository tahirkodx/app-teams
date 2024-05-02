<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content>
      <ion-grid class="ion-padding-bottom ion-margin-bottom">
        <ion-row>
          <ion-col>
            <h4 class="textStyle ion-padding-start">New Survey Schedule</h4>
            <h6 class="ion-margin">Start Time:</h6>
            <ion-datetime-button
              datetime="datetime3"
              class="ion-date"
            ></ion-datetime-button>
            <ion-modal :keep-contents-mounted="true">
              <ion-datetime id="datetime3"></ion-datetime>
            </ion-modal>
            <ion-accordion-group class="ion-group">
              <ion-accordion value="first">
                <ion-item slot="header" color="light">
                  <ion-label>Time Zone</ion-label>
                </ion-item>
                <div class="ion-padding">First Content</div>
              </ion-accordion>
            </ion-accordion-group>
            <h6 class="ion-margin">End Time:</h6>
            <ion-datetime-button
              class="ion-date"
              datetime="datetime4"
            ></ion-datetime-button>
            <div class="border-bottom"></div>
            <ion-text class="text-sm">
              Response time: 2 days and 3 hours</ion-text
            >
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-modal :keep-contents-mounted="true">
              <ion-datetime id="datetime4"></ion-datetime>
            </ion-modal>
            <ion-text class="bg-gray"> Recurrence Patten </ion-text>
            <div>
              <ion-radio-group
                v-model="selectedOption"
                value="Weekly"
                @ionChange="handleChange($event)"
              >
                <div class="ion-item">
                  <ion-radio value="No recurrence" label-placement="end">
                    <ion-label>No recurrence</ion-label></ion-radio
                  >
                  <ion-radio value="Weekly" label-placement="end">
                    <ion-label>Weekly</ion-label></ion-radio
                  >
                  <ion-radio value="Monthly" label-placement="end">
                    <ion-label>Monthly</ion-label></ion-radio
                  >
                </div>
              </ion-radio-group>
            </div>
            <div>
              <div v-if="selectedOption === 'Weekly'">
                <ion-text class="ion-border">
                  Recur every<span class="text-black">25</span> Week(s) on:
                </ion-text>
                <ion-radio-group>
                  <ion-row class="ion-item2">
                    <ion-col
                      v-for="(day, index) in days"
                      :key="index"
                      size="3.7"
                    >
                      <div class="ion-item3">
                        <ion-radio :value="day" label-placement="end">
                          <ion-label>{{ day }}</ion-label></ion-radio
                        >
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-radio-group>
              </div>
              <div v-if="selectedOption === 'Monthly'">
                <ion-radio-group>
                  <ion-text class="ion-border">
                    <ion-radio value="Day"></ion-radio>
                    Day<span>17</span> of every<span>1</span>month(s)
                  </ion-text>

                  <ion-text class="ion-border">
                    <ion-radio value="The"></ion-radio>
                    The
                    <div>
                      <ion-select
                        interface="popover"
                        value="Third"
                        class="text-base"
                      >
                        <ion-select-option value="First"
                          >First</ion-select-option
                        >
                        <ion-select-option value="Second"
                          >Second</ion-select-option
                        >
                        <ion-select-option value="Third"
                          >Third</ion-select-option
                        >
                      </ion-select>
                    </div>
                    <div>
                      <ion-select
                        interface="popover"
                        value="Wednesday"
                        class="text-base"
                      >
                        <ion-select-option value="Monday"
                          >Monday</ion-select-option
                        >
                        <ion-select-option value="Tuesday"
                          >Tuesday</ion-select-option
                        >
                        <ion-select-option value="Wednesday"
                          >Wednesday</ion-select-option
                        >
                        <ion-select-option value="Thursday"
                          >Thursday</ion-select-option
                        >
                        <ion-select-option value="Friday"
                          >Friday</ion-select-option
                        >
                        <ion-select-option value="Saturday"
                          >Saturday</ion-select-option
                        >
                        <ion-select-option value="Sunday"
                          >Sunday</ion-select-option
                        >
                      </ion-select>
                    </div>

                    of every <input type="number" placeholder="1" />
                  </ion-text>
                  <ion-text class="textMargin"> month(s) </ion-text>
                </ion-radio-group>
              </div>
              <div v-if="selectedOption === 'No recurrence'">
                <ion-radio-group v-model="selectedOption"> </ion-radio-group>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div>
              <div>
                <ion-text class="bg-gray"> Range of Recurrence </ion-text>
              </div>
              <ion-label class="text">
                <span> Start Date:</span>
                <ion-datetime-button datetime="date1"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime
                    id="date1"
                    presentation="date"
                  ></ion-datetime> </ion-modal
              ></ion-label>
              <ion-radio-group class="custom-radio-group">
                <ion-label class="text">
                  <span class="text2"
                    ><ion-radio value="end by"></ion-radio>End By</span
                  >
                  <ion-datetime-button datetime="date2"></ion-datetime-button>
                  <ion-modal :keep-contents-mounted="true">
                    <ion-datetime
                      id="date2"
                      presentation="date"
                    ></ion-datetime> </ion-modal
                ></ion-label>
                <ion-text class="border2 ion-border">
                  <ion-radio value="end after"></ion-radio>End after:<span
                    class="text-white"
                    >25</span
                  >ocurrences:
                </ion-text>
                <ion-label class="text">
                  <span class="text2"
                    ><ion-radio value="no end date"></ion-radio>No end
                    date</span
                  >
                </ion-label>
              </ion-radio-group>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <div class="custom-button">
          <ion-button fill="outline">Cancel</ion-button>
          <ion-button>Conform</ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { chevronDownOutline } from "ionicons/icons";
import {
  IonHeader,
  IonItem,
  IonAccordion,
  IonIcon,
  IonAccordionGroup,
  IonToolbar,
  IonRadioGroup,
  IonModal,
  IonFooter,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonDatetimeButton,
  IonDatetime,
  IonButton,
  IonText,
  IonLabel,
  IonCol,
  IonRow,
  IonGrid,
  IonContent,
  IonRadio,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const selectedOption = ref("Weekly");
const handleChange = (ev: any) => {
  selectedOption.value = ev.detail.value;
  console.log("Current value:", JSON.stringify(ev.detail.value));
};
</script>

<style scoped>
.textStyle {
  font-size: 22px;
  line-height: 28px;
  margin-top: 10px;
}

.ion-date {
  display: inline-flex;
  border-radius: 18px;
  margin-left: 10px;
  gap: 10px;
}

.ion-group {
  border-radius: 10px;
  margin-top: 23px;
  margin-left: 13px;
  margin-right: 10px;
}

.ion-border {
  display: flex;
  gap: 8px;
  margin-top: 25px;
  margin-left: 10px;
}

.ion-border span {
  border-radius: 5px;
  text-align: center;
  margin-top: -8px;
  background: #f2f2f2;
  width: 40px;
  padding: 10px 6.5px;
}

ion-select.interface {
  width: 188px;
}
.textMargin {
  margin-left: 40px;
}
.ion-border input {
  border-radius: 5px;
  text-align: center;
  margin-top: -8px;
  background: #f2f2f2;
  width: 40px;
  padding: 10px 6.5px;
}

.text-base {
  background-color: #f2f2f2;
  border-radius: 5px;
  margin-top: -8px;
}

.ion-border h6 {
  width: 100px;
  font-size: 13px;
}

.ion-border h5 {
  width: 70px;
  font-size: 14px;
}

.ion-item {
  display: flex;
  padding: 16px 10px;
  width: 375px;
  gap: 10px;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 22px;
}

.ion-item2 {
  padding: 8px 4px;
  gap: 8px;
}

.ion-item3 {
  margin-bottom: -8px;
}

.bg-gray {
  background: #f2f2f2;
  padding: 8px 20px;
  margin-top: 12px;
  margin-left: -10px;
  margin-right: -18px;
  display: flex;
  gap: 10px;
}

.border-bottom {
  border-bottom: 1px solid#F2F2F2;
  margin-top: 16px;
}

.text-sm {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  margin-top: -30px;
  font-size: 12px;
  margin-left: 15px;
}

.border2 {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  margin-left: 10px;
  color: #808080;
}

.text {
  display: flex;
  margin-top: 15px;
  gap: 6px;
  align-items: center;
  margin-left: 10px;
  color: #808080;
}

.text2 {
  display: inline-flex;
  margin-top: 2px;
  gap: 8px;
}

.text-white {
  color: black;
}

.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10.71px 20px 11.29px 20px;
  gap: 24px;
}

ion-button {
  width: 300px;
}
</style>
