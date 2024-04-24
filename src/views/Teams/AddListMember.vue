<template>
 
  <ion-grid>
    <ion-row>
      <ion-col size="9">
        <ion-item lines="full" button @click="showSelect = !showSelect">
          <ion-label>{{ selectedOption?.text || 'Add member' }}</ion-label>
          <ion-icon :name="showSelect ? 'chevron-up' : 'chevron-down'" slot="end"></ion-icon>
        </ion-item>
        <ion-list  v-show="showSelect">
          <ion-item v-for="(option, index) in options" :key="index" lines="full" button @click="selectOption(option)">
            <ion-avatar slot="start">
              <img :src="option.imgSrc" />
            </ion-avatar>
            <ion-label>{{ option.text }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
      <ion-col size="3">
        <ion-button expand="block">ADD</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid> 

</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonGrid,IonContent, IonRow, IonCol, IonItem, IonLabel, IonButton, IonIcon, IonAvatar, IonList } from '@ionic/vue';

  const options = ref([
    { text: 'Robert Fox', value: 'robert', imgSrc: '/src/pictures/listProfile.svg' },
    { text: 'Wade Warren', value: 'wade', imgSrc: ' /src/pictures/listProfile.svg' },
    { text: 'Arlene McCoy', value: 'arlene', imgSrc: ' /src/pictures/listProfile.svg' },
    { text: 'Robert Fox', value: 'robert', imgSrc: '/src/pictures/listProfile.svg' },
    { text: 'Wade Warren', value: 'wade', imgSrc: ' /src/pictures/listProfile.svg' },
    { text: 'Arlene McCoy', value: 'arlene', imgSrc: ' /src/pictures/listProfile.svg' },
    { text: 'Robert Fox', value: 'robert', imgSrc: '/src/pictures/listProfile.svg' },
    { text: 'Wade Warren', value: 'wade', imgSrc: ' /src/pictures/listProfile.svg' },
    { text: 'Arlene McCoy', value: 'arlene', imgSrc: ' /src/pictures/listProfile.svg' },
    // Add more options as needed
  ]);

  const selectedOption = ref({});
  const showSelect = ref(false);

  const selectOption = (option:any) => {
    selectedOption.value = option;
    showSelect.value = false;
  };
</script>

<style scoped>
  ion-list {
    position: absolute;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    border-radius: 1px; 
  }

  /* Additional styles if needed */
</style>