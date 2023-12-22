<template>
   
      
        <div class="custom-card-container" @click="scrollLeft" ref="cardContainer">
          <!-- Dynamically create cards using v-for loop -->
          <ion-card class="custom-card">
            <ion-card-header>
              <ion-card-title>1 Energy</ion-card-title>
              <ion-icon :icon="arrowUpOutline" class="custom-icon"></ion-icon>
            </ion-card-header>
            <ion-card-content>
              Supporting line text lorem ipsum dolor sit amet...
              
            </ion-card-content>
          </ion-card>
          <ion-card class="custom-card">
            <ion-card-header>
              <ion-card-title>1 Energy</ion-card-title>
              <ion-icon :icon="arrowUpOutline" class="custom-icon"></ion-icon>
            </ion-card-header>
            <ion-card-content>
              Supporting line text lorem ipsum dolor sit amet...
              
            </ion-card-content>
          </ion-card>
        </div>
      
   
  </template>
  
  <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { IonPage, IonContent, IonCard } from '@ionic/vue';
    import { arrowUpOutline  } from 'ionicons/icons';

    const cardContainer = ref(null);
  
    const scrollLeft = () => {
      if (cardContainer.value) {
        cardContainer.value.scrollLeft += 200; // scroll by 200 pixels; adjust as necessary
      }
    };
  
    onMounted(() => {
      // Optional: setup touch gestures if needed
    });
  </script>
  
 
  <style scoped>
  .custom-card-container {
      display: flex;
  flex-direction: row;
  padding: 20px 0 20px 0;
  overflow-x: auto;
      scroll-behavior: smooth;
      overflow: hidden;
  
  }

  .custom-card {
    flex: 0 0 auto; /* Do not grow or shrink */
    margin: 0 8px; /* Spacing between cards */
    border-radius: 20px; /* Rounded corners */
    background: #373737; /* Dark background color */
    color: white; /* Text color */
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2); /* Card shadow */
    border: solid 1px #7F7F7F;
    width: 250px;
  }

  ion-card-header {
    position: relative; /* This is needed for absolute positioning of children */
  padding-bottom: 0;
  }

  ion-card-title {
    font-size: 1.5em; /* Larger title text */
  }

  ion-card-content {
    /* position: relative; To position the icon absolutely */
    padding-top: 16px; /* Additional padding at the top */
    font-size: 1rem;
  }

  .custom-icon {
    position: absolute; /* Absolute positioning */
    top: 16px; /* Distance from the top */
    right: 16px; /* Distance from the right */
    color: #f39c12; /* Icon color */
    font-size: 2em; /* Icon size */
  }
 
</style>

  