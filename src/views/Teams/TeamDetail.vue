<template>
  <ion-page>
    <ion-header>
      <Header isBackButton />
    </ion-header>
    <ion-content>
      <InfoCard />
      <ion-card class="gray-card ion-padding-start ion-padding-end">
        <ion-card-header>
          <ion-card-title>Improvement Commitments:</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          This suggestions contain list of recommended commitments related to
          the improvement commitment you made.
        </ion-card-content>
      </ion-card>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding">
            <ion-card
              v-for="(topic, index) in commitmentTopics"
              :key="index"
              @click="
                () =>
                  router.push({
                    name: 'teamTopic',
                    params: { topicid: topic.id },
                  })
              "
              class="card-style"
            >
              <ion-card-header>
                <ion-card-title>{{ topic.title }}</ion-card-title>
                <ion-card-subtitle>
                  <span class="text-green">{{
                    topic.score
                  }}</span></ion-card-subtitle
                >
                <div class="owner-container">
                  <ion-img :src="topic.owner.avatar" />
                  <ion-text class="font-sm">
                    Owner: {{ topic.owner.name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 2 2"
                      fill="none"
                    >
                      <circle cx="1" cy="1" r="1" fill="#D9D9D9" />
                    </svg>
                    <span class="">
                      {{ topic.status }}
                    </span>
                  </ion-text>
                </div>
              </ion-card-header>
              <ion-card-content class="top-content">
                {{ topic.description }}
              </ion-card-content>
              <ion-progress-bar :value="topic.progress"></ion-progress-bar>
              <ion-text class="ion-color">
                <ion-icon
                  :icon="arrowForwardOutline"
                  class="icon-color"
                ></ion-icon>
              </ion-text>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonToolbar,
  IonButtons,
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
  IonText,
  IonCardContent,
  IonCardHeader,
  IonHeader,
} from "@ionic/vue";
import {
  settingsOutline,
  arrowForwardOutline,
  chatbubbleEllipsesOutline,
  documentTextOutline,
} from "ionicons/icons";
import InfoCard from "@/components/Personal/InfoCard.vue";
import router from "@/router/index";
import Header from "@/components/Header/Header.vue";

const commitmentTopics = ref([
  {
    id: 123123123213,
    title: "Commitment Topic",
    score: "Score: 7.5/10",
    owner: {
      name: "Guy Hawkins",
      avatar: "/src/pictures/Ellipse 72.svg",
    },
    status: "Ongoing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0.5,
  },
  {
    id: 123123123213,
    title: "Commitment Topic",

    owner: {
      name: "Jane Smith",
      avatar: "/src/pictures/Ellipse 72.svg",
    },
    status: "Ongoing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0.5,
  },
  {
    id: 123123123213,
    title: "Commitment Topic",
    owner: {
      name: "Jane Smith",
      avatar: "/src/pictures/Ellipse 72.svg",
    },
    status: "Ongoing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0.5,
  },
]);
</script>

<style scoped>
ion-toolbar {
  --padding-start: 8px;
  --padding-end: 20px;
}

ion-card-content {
  display: flex;
  font-size: 12px;
}

ion-card-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1px;
}

ion-title {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: justify;
}

.text-green {
  color: var(--main-green, #a5ce3e);
}

.top-content {
  margin-top: -15px;
}

.bg-green {
  background: #aed351;
}

ion-card {
  width: auto;
  margin-right: -20px;
  margin-left: -5px;
  margin-top: -8px;
  margin-bottom: 0px;
  box-shadow: none;
}

ion-progress-bar {
  --background: #e6e0e9;
  --progress-color: #2c3ad180;
  width: 89%;
  left: 15px;
  margin-bottom: 15px;
}

ion-icon {
  width: 24px;
  height: 24px;
}

.owner-container {
  display: flex;
  align-items: center;
  margin-top: -8px;
}

.font-sm {
  color: #808080;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 12px;
  margin-left: 8px;
  margin-bottom: 15px;
}

.gray-card {
  background-color: #f2f2f2;
}

.text-card {
  color: var(--white, #fff);
}

.text-card span {
  font-size: 10px;
  line-height: 16px;
  padding: 2px 8px;
  width: 85px;
  border-radius: 100px;
}

.ion-color {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 32px;
  right: 20px;
  color: #2c3ad180;
}

.card-style {
  border: 1px solid #f2f2f2;
  margin: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
}
</style>
