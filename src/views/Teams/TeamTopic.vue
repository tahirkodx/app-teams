<template>
  <ion-page>
    <ion-header>
      <Header isBackButton router-back />
    </ion-header>
    <ion-content>
      <ion-text >
        <h2 class="text-lg ion-padding-start">Build Their group Identity</h2>
      </ion-text>
      <InfoCard is-small />
      <LineChart :data="dummyData" />
      <div
        class="bg-gray owner-container font-sm ion-padding-start ion-padding-end"
      >
        <!-- Swiper Navigation Buttons -->
        <button
          id="prev-icon"
          :disabled="currentSlideIndex === 1"
          @click="goToPreviousSlide"
          class="background-slider-button"
        >
          <ion-icon
            :icon="chevronBackCircle"
            :class="{ 'bg-green': currentSlideIndex > 1 }"
          ></ion-icon>
        </button>
        <!-- Swiper instance -->
        <Swiper
          class="mySwiper"
          :navigation="{ nextEl: '#next-icon', prevEl: '#prev-icon' }"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="container text-center">
              <ion-button :id="slide.id" class="font-normal"
                >{{ slide.content }}
                <ion-icon
                  :icon="chevronDownOutline"
                  class="icon-sm ion-margin-horizontal"
                ></ion-icon
                ><span class="text-small"
                  >{{ index + 1 }}/{{ slides.length }}</span
                >
              </ion-button>
              <ion-popover :trigger="slide.id" side="bottom" alignment="center">
                <ion-content class="ion-padding">option1</ion-content>
              </ion-popover>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          id="next-icon"
          :disabled="currentSlideIndex === slides.length"
          @click="goToNextSlide"
          class="background-slider-button"
        >
          <ion-icon
            v-if="currentSlideIndex === slides.length"
            :icon="chevronForwardCircle"
          ></ion-icon>
          <ion-icon
            v-else
            :icon="chevronForwardCircle"
            class="bg-green"
          ></ion-icon>
        </button>
      </div>

      <ion-segment v-model="activeTab" value="Description">
        <ion-segment-button value="Description">
          <ion-label>Description</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Exercises">
          <ion-label>Exercises</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Message">
          <ion-label>Message</ion-label>
        </ion-segment-button>
      </ion-segment>
      <div class="content">
        <!-- Content based on the active tab -->
        <div v-if="activeTab === 'Exercises'">
          <ion-grid>
            <ion-row>
              <ion-col class="ion-padding">
                <ion-list>
                <ion-card
                  v-for="(card, index) in cardArray"
                  :key="index"
                  class="card-style ion-margin-bottom"
                >
                  <div class="inner-card">
                    <div class="icon-container">
                      <ion-img src="/src/pictures/Group 128214 (6).svg" alt="Finished Success"></ion-img>
                    </div>
                    <div>
                      <ion-card-header>
                        <ion-card-title class="exs-heading">{{
                          card.title
                        }}</ion-card-title>
                        <div class="owner-container font-sm">
                          <ion-img :src="card.imageURL" />
                          <h3 class="text-small">
                            Owner:{{ card.owner }}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="4"
                              height="8"
                              viewBox="0 0 2 2"
                              fill="none"
                            >
                              <circle cx="1" cy="1" r="1" fill="#D9D9D9" />
                            </svg>
                            <span :class="{ success: card.ongoing }">
                              Ongoing
                            </span>
                          </h3>
                        </div>
                      </ion-card-header>
                      <ion-progress-bar value="0.5"></ion-progress-bar>
                    </div>
                  </div>
                </ion-card>
              </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
        <div v-if="activeTab === 'Description'">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-label class="text-bold">Description:</ion-label>
                <ion-text class="text-bold">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean integer
                    vivamus morbi nulla et tincidunt. Platea hac sed nunc est
                    phasellus. Risus et id mi in. Facilisi tellus facilisis
                    venenatis amet. Volutpat lobortis phasellus tincidunt
                    vestibulum volutpat pharetra purus.
                  </p>
                </ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
        <div v-if="activeTab === 'Message'">
          <ion-grid>
            <ion-row>
              <ion-col>
                <Message />
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  IonToolbar,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCard,
  IonCol,
  IonPage,
  IonImg,
  IonLabel,
  IonPopover,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonProgressBar,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
  IonButtons,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import {
  chevronBackCircle,
  chevronForwardCircle,
  chevronDownOutline,
  settingsOutline,
  chatbubbleEllipsesOutline,
  documentTextOutline,
} from "ionicons/icons";
import LineChart from "@/components/Charts/LineChart.vue";
import InfoCard from "@/components/Personal/InfoCard.vue";
import Message from "@/components/Personal/Message.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { id: "top-center1", content: "Build Their Group Identity" },
  { id: "top-center2", content: "Build Their Group Identity2" },
  { id: "top-center3", content: "Build Their Group Identity3" },
];
const dummyData = [
  { score: 7, date: "2024-01-01" },
  { score: 8, date: "2024-02-02" },
  { score: 6, date: "2024-03-03" },
  { score: 9, date: "2024-04-04" },
  { score: 5, date: "2024-05-05" },
  { score: 8, date: "2024-06-06" },
  { score: 7, date: "2024-07-07" },
];
const cardArray = [
  {
    title: "Exercise Topic 1",
    owner: "Guy Hawkins",
    ongoing: true,
    imageURL: "/src/pictures/Ellipse 72.svg",
  },
  {
    title: "Exercise Topic 1",
    owner: "Guy Hawkins",
    ongoing: true,
    imageURL: "/src/pictures/Ellipse 72.svg",
  },
  {
    title: "Exercise Topic 1",
    owner: "Guy Hawkins",
    ongoing: true,
    imageURL: "/src/pictures/Ellipse 72.svg",
  },
];
const currentSlideIndex = ref(1);
const activeTab = ref("Description"); // default active tab

const goToPreviousSlide = () => {
  currentSlideIndex.value--;
};

const goToNextSlide = () => {
  currentSlideIndex.value++;
};
</script>

<style scoped>
ion-segment {
  background-color: white;
}

ion-segment-button {
  background-color: white;
  --indicator-box-shadow: none;
  --border-radius: none;
}

ion-card-content {
  display: flex;
}

ion-title {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: justify;
}

.font-normal {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  --background: #f2f2f2;
  --box-shadow: none;
}

.icon-container {
  margin-top: 9px;
  margin-left: 6px;
}

ion-card {
  width: auto;
  margin-right: -20px;
  margin-left: -5px;
  margin-top: -8px;
  box-shadow: none;
  background: #aed351;
}

ion-progress-bar {
  --background: var(--M3-sys-light-surface-container-highest, #e6e0e9);
  --progress-color: #a5ce3e;
  width: 89%;
  left: 15px;
  margin-top: -22px;
  margin-bottom: 15px;
}

ion-icon {
  width: 24px;
  height: 24px;
  color: #747474;
}

.top-content {
  margin-top: -18px;
}
.bg-green {
  color: #aed351; /* Green color */
}
.bg-grey {
  color: #7c7c7c; /* Green color */
}
.owner-container {
  align-items: center;
  margin-top: -8px;
}

.font-sm {
  display: flex;
}

.inner-card {
  display: flex;
  align-items: center;
}

.owner-container h3 {
  line-height: 16px;
  margin-left: 8px;
  margin-bottom: 15px;
}

.text-center {
  flex: 1;
  text-align: center;
}

.bg-gray {
  background: #f2f2f2;
  margin-top: 12px;
  gap: 10px;
  margin-bottom: 16px;
}
.icon-sm {
  width: 12px;
  height: 12px;
  margin-left: 10px;
  color: black;
}
.container {
  display: flex;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.bg-green {
  color: #aed351;
}

.ion-margin-left {
  margin-left: -23px;
}

.content {
  padding: 20px 15px 0px 15px;
  min-height: 200px;
  overflow-y: scroll;
  height: 520px;
}

.ion-color {
  color: #f2f2f2;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
}

.text-lg {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  line-height: 28px;
  padding-bottom: 6px;
}

.text-small {
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.text-bold {
  color: #303030;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.25px;
}

.card-style {
  background: white;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
}

.icon-color {
  top: 10px;
  width: 24px;
  height: 24px;
  color: #2c3ad180;
}
.exs-heading {
  color: var(--Color-Brand-black, #000);

  /* mobile/Title Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.background-slider-button {
  background: unset;
}
</style>
