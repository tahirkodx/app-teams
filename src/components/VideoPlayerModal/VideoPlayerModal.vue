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
      <iframe width="100%" height="200"
        v-if="resource"
        :src="youtubeEmbedUrl(resource.videoUrl)"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

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


const youtubeEmbedUrl = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length == 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  } else {
    return ''; // Handle the error appropriately
  }
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

