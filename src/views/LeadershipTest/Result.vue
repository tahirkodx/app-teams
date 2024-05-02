<template>
  <ion-content>
    <ion-header>
      <score />
    </ion-header>
    <ion-row>
      <ion-col class="">
        <ion-text class="text-sm">
          <h3>You are an opportunist! (level 1/7)</h3>
          <ion-img
            src="/src/pictures/success.svg"
            alt="Finished Success"
          ></ion-img>
        </ion-text>
        <div class="ion-border-bottom"></div>
        <ion-list class="ion-margin-bottom ion-padding-start">
          <div
            v-for="(item, index) in progressItems"
            :key="index"
            class="label-container"
          >
            <ion-label class="label-text">{{ item.label }}</ion-label>
            <ion-progress-bar
              :value="1"
              :color="item.color"
              :style="{ width: item.progress }"
            ></ion-progress-bar>
          </div>
          <!-- <div class="label-container">
            <ion-label class="label-text">Diplomat</ion-label>
            <ion-progress-bar :value="29"></ion-progress-bar>
          </div> -->
          <!-- <div class="label-container">
            <ion-label class="label-text">Expert</ion-label>
            <ion-progress-bar :value="29"></ion-progress-bar>
          </div>
          <div class="label-container">
            <ion-label class="label-text">Achiever</ion-label>
            <ion-progress-bar :value="0.6"></ion-progress-bar>
          </div>
          <div class="label-container">
            <ion-label class="label-text">Individualist</ion-label>
            <ion-progress-bar :value="29"></ion-progress-bar>
          </div>
          <div class="label-container">
            <ion-label class="label-text">Strategist</ion-label>
            <ion-progress-bar :value="15"></ion-progress-bar>
          </div>
          <div class="label-container">
            <ion-label class="label-text">Alchemist</ion-label>
            <ion-progress-bar :value="29"></ion-progress-bar>
          </div> -->
        </ion-list>
        <ion-row>
          <ion-col class="ion-padding-start">
            <ion-lable>
              Characteristics
              <p>
                You win any way possible, self-oriented; manipulative; “might
                makes right”
              </p>
            </ion-lable>
            <div class="ion-border-bottom"></div>
            <ion-lable class="ion-margin-top">
              Strengths:0000000
              <p>Good in emergencies and in sales oppurtunities.</p>
            </ion-lable>
            <div class="ion-border-bottom"></div>
            <ion-lable>
              Next level: Diplomat
              <p>Becoming a diplomat gives you the ability to...</p>
              <div class="custom-design">
                <div
                  v-for="(label, labelIndex) in labelNames"
                  :key="labelIndex"
                >
                  <span class="custom-border">
                    <ion-label class="custom-size"
                      >{{ label }}
                    </ion-label></span
                  >
                </div>
              </div>
            </ion-lable>
          </ion-col>
        </ion-row>
        <ion-button expand="block" class="ion-margin-top ion-padding"
          >PROCEED TO NEXT SCREEN</ion-button
        >
      </ion-col>
    </ion-row>
  </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import score from "@/components/Header/Header.vue";
import {
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
  IonContent,
  IonHeader,
  IonLabel,
  IonProgressBar,
} from "@ionic/vue";
const labelNames = [
  "Adaptability",
  "Innovation",
  "Risk Taking",
  "Entrepreneurial Spirit",
  "Resourcefulness",
  "Networking Skills",
  "Strategic Vision",
  "Positive Influence",
];
const progressItems = ref([
  { label: "Opportunist", progress: "14%", color: "tertiary" },
  { label: "Diplomat", progress: "32%", color: "tertiary" },
  { label: "Expert", progress: "58%", color: "tertiary" },
  { label: "Achiever", progress: "48%", color: "tertiary" },
  { label: "Individualist", progress: "28%", color: "success" },
  { label: "Strategist", progress: "8%", color: "light" },
  { label: "Achemist", progress: "4%", color: "light" },
  // Add more items as needed
]);
// const getProgressBarStyle = (progress) => {
//     const height = 20 + progress * 10;
//     const width = 127 + progress * 10;
//     return `height: ${height}px; width: ${width}px;`;
// }
</script>
<style scoped>
ion-img {
  width: 70px;
  height: 70px;
}

ion-progress-bar {
  /* Adjust width as needed */
  height: 20px;
  /* Adjust height as needed */
  margin-right: 10px;
  background-color: #fff;
  --background: #fff;
  --progress-background: #09c567;
}

ion-lable {
  color: var(--main-green, #a5ce3e);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

ion-lable p {
  color: #808080;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.custom-design {
  display: flex;
  /* width: 317px; */
  align-content: flex-start;
  gap: 12px 8px;
  flex-wrap: wrap;
}

.custom-border {
  color: var(--white, #fff);
  border-radius: 20px;
  background: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 14px;
  letter-spacing: 0.1px;
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 5px;
}

.label-container {
  display: flex;
  margin-bottom: 10px;
  gap: 8px;
  color: #808080;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.text-sm {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 22px;
  line-height: 28px;
  display: inline-flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 43px;
}

.ion-border-bottom {
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 8px;
  margin-left: -100px;
  margin-right: -100px;
}
.label-text {
  width: 30%;
}
</style>
