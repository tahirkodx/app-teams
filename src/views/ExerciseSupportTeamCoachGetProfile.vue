<template>
  <ion-page>
    <ion-header>
      <score></score>
    </ion-header>
    <ion-content class="ion-padding">
      <public-profile :userID="(route.params.userid as string)"/>
      <ion-button expand="block" @click="addCoachToTeam()">Add coach to team</ion-button>
    </ion-content>
  </ion-page>
  
</template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { 
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
  } from '@ionic/vue';

  import score from "@/components/All/Header.vue"
  import { presentToast } from '@/utils/toast'
  import publicProfile from '@/components/PublicProfile.vue'
import router from "@/router";
  const route = useRoute()

  function addCoachToTeam(){
    presentToast('Coach added to team')
    console.log('to be implemented')
    router.push({name: 'exercise', params: {exerciseid: route.params.exerciseid}})

  }

  </script>
  