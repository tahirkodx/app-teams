<template>
  <ion-content>
    <!-- Survey question card -->
    <ion-card class="survey-card">
      <ion-card-header>
        <ion-card-title>Desired Outcomes</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <!-- Survey question -->
        <div class="survey-question">
          <h2>How do you feel within the team?</h2>
          <p>Select One</p>
          <ion-list>
            <ion-radio-group v-model="selectedOption">
              <ion-item v-for="option in options" :key="option.value" lines="full">
                <ion-label>{{ option.text }}</ion-label>
                <ion-radio :value="option.value" slot="start" class="custom-radio"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
        </div>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio } from '@ionic/vue';
import { ref } from 'vue';

interface RadioOption {
  value: string;
  text: string;
}

const selectedOption = ref<string | null>(null);

const options: RadioOption[] = [
  { value: 'anxious', text: 'I feel anxious and inhibited' },
  { value: 'cautious', text: 'I feel cautious to take risks' },
  { value: 'comfortable', text: 'I feel comfortable expressing myself' },
  { value: 'empowered', text: 'I feel secure and empowered to share' },
  { value: 'supportive', text: 'I feel at ease, trusting and supporting' },
];
</script>

<style scoped>
.survey-card {
  --background: #fff;
}

.survey-question h2 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.survey-question p {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1em;
}

ion-item {
  --background: #f4f4f4;
  --background-hover: #e0e0e0;
  --background-focused: #e0e0e0;
  --background-activated: #ccffcc; /* Light green background for selected item */
  --padding-start: 1em;
  --inner-padding-end: 1em;
  --border-radius: 10px; /* Rounded corners for the items */
  margin-bottom: 0.5em; /* Space between items */
}

ion-item:last-child {
  margin-bottom: 0;
}

.custom-radio {
  --color: #28ba62; /* Color for the radio button when selected */
  --border-radius: 50%;
}
</style>
