<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <score is-back-button />
      </ion-header>
      <ion-card class="gray-card ion-padding-start ion-padding-end">
        <ion-card-header>
          <ion-card-title class="text-dark">Big 5 Profile:</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur. Faucibus urna facilisis tellus
          donec bibendum velit. Non tincidunt nulla ultrices lobortis.
        </ion-card-content>
      </ion-card>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding-start ion-padding-end">
            <div v-for="trait in traits" :key="trait.name">
              <ion-label class="custom-class">
                {{ trait.name }}
              </ion-label>
              <div class="custom-class">
                <ion-label
                  :class="['ion-text-start', trait.lowEndColorClass]"
                  >{{ trait.lowEnd }}</ion-label
                >
                <ion-label :class="['ion-text-end', trait.highEndColorClass]">{{
                  trait.highEnd
                }}</ion-label>
              </div>
              <ion-range
                @ionChange="(e) => onRangeChange(e.detail.value, trait.name)"
              ></ion-range>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-button expand="block" fill="solid" class="ion-padding"
        >RETAKE TEST</ion-button
      >
      <ion-button
        @click="handleBackClick"
        expand="block"
        fill="outline"
        class="ion-padding top-content"
        >GO BACK TO HOMEPAGE</ion-button
      >
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  IonHeader,
  IonCardTitle,
  IonLabel,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCard,
  IonCol,
  IonPage,
  IonCardContent,
  IonCardHeader,
  IonRange,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const traits = ref([
  {
    name: "Conscientiousness",
    lowEnd: "Efficient/Organised",
    highEnd: "Extravagant/Careless",
    lowEndColorClass: "custom-color",
  },
  {
    name: "Agreeableness",
    lowEnd: "Friendly/Compassionate",
    highEnd: "Critical/Rational",
    highEndColorClass: "custom-color",
  },
  {
    name: "Neuroticism:",
    lowEnd: "Resilient/Confident",
    highEnd: "Sensitive/Nervous:",
    lowEndColorClass: "custom-color",
  },
  {
    name: "Openness to experience:",
    lowEnd: "Inventive/Curious",
    highEnd: "Consistent/Cautious",
    highEndColorClass: "custom-color",
  },
  {
    name: "Extraversion:",
    lowEnd: "Outgoing/Energetic",
    highEnd: "Solitary/Reserved",
    lowEndColorClass: "custom-color",
  },
]);

// Example function to handle range value changes
const onRangeChange = (value: any, trait: any) => {
  console.log(`New value for ${trait}: ${value}`);
};

function handleBackClick() {
  router.push({ name: "team" });
}
</script>

<style scoped>
ion-card-content {
  display: flex;
  color: #666;
  font-size: 12px;
  margin-top: -8px;
}

ion-card-title {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
}

ion-card {
  width: auto;
  margin-right: -20px;
  margin-left: -5px;
  margin-top: -8px;
  margin-bottom: 0px;
  box-shadow: none;
  background: #aed351;
}

ion-range {
  --bar-background: #2c3ad133;
  --bar-background-active: #2c3ad133;
  --bar-height: 10px;
  --bar-width: 20px;
  --bar-border-radius: 10px;
  --knob-background: #2c3ad180;
  --knob-size: 25px;
  --knob-border-color: 2px solid gray;
  --knob-border-radius: 80%;
}

ion-label {
  color: #808080;
  font-size: 12px;
}

.gray-card {
  background-color: #f2f2f2;
  /* margin-top: 24px; */
  padding-top: 10px;
}

.custom-color {
  color: rgba(44, 58, 209, 0.5);
}

.custom-class {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: -8px;
  color: #4d4d4d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
}

.top-content {
  margin-top: -20px;
}

.text-dark {
  color: var(--black, #000);
}
</style>
