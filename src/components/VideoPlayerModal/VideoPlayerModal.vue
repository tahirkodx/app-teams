<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>
        This is the content of your modal. You can add more content here as needed.
      </p>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';

const isOpen = ref(true);

const closeModal = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Modal Header Styles */
ion-header {
  background-color: #4a90e2; /* Blue header background */
  color: white;
}

ion-toolbar {
  --background: #4a90e2; /* Ensuring the toolbar matches the header background */
}

ion-title {
  font-weight: bold;
  font-size: 1.2em;
}

/* Modal Content Styles */
ion-content {
  background-color: #f4f4f4; /* Light gray background for the content */
  color: #333; /* Darker text for contrast */
}

/* Paragraph inside the modal */
p {
  font-size: 1em;
  line-height: 1.5;
  padding: 15px; /* Adds some padding around the text */
}

/* Button Styles */
ion-button {
  --background: #ef476f; /* Pinkish-red background for the button */
  --background-hover: #ff6b8a; /* Lighter pink for hover state */
  --color: white; /* White text on the button */
  margin: 10px; /* Spacing around the button */
  border-radius: 5px; /* Rounded corners for the button */
}

/* Custom class for padding */
.ion-padding {
  padding: 20px;
}
</style>


 