<template>
  <ion-modal :is-open="isVisible">
 <div class="custom-header">
      <ion-button fill="clear" @click="closeModal">
        <ion-icon :icon="closeOutline"></ion-icon>
      </ion-button>
      <div class="header-title">{{ resource.title }}</div>
      <ion-button fill="clear">
        <ion-icon :icon="heartOutline"></ion-icon>
      </ion-button>
    </div>
    <ion-content class="ion-padding">
      <video width="100%" controls v-if="resource.videoUrl">
        <source :src='resource.videoUrl' type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p v-if="!resource.videoUrl">No video available for this resource.</p>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent } from '@ionic/vue';
import { defineProps, watch, defineEmits } from 'vue';
import { closeOutline, heartOutline } from 'ionicons/icons';

const props = defineProps({
  isVisible: Boolean,
  resource: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['update:isVisible']);

watch(() => props.isVisible, (newValue) => {
  if (!newValue) {
    emit('update:isVisible', false);
  }
});

const closeModal = () => {
  emit('update:isVisible', false);
};
</script>

<style scoped>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  background-color: #fefefe; /* Match the background color to your theme */
  border-bottom: 1px solid #ffffff; /* Light border for some definition */
}

.header-title {
  color: #000;

/* Title small */
font-family: "Cabin", sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}

.header-icon {
  height: 36px;
  width: 36px;
}

ion-icon {
  font-size: 1.5rem; /* Adjust icon size as needed */
  color:#696969
}
</style>

<!-- <style scoped>
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
</style> -->


 