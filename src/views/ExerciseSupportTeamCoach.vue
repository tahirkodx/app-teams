<template>
  <ion-page>
    <ion-header>
        <score></score>
      </ion-header>
    <ion-content class="ion-padding">
      <message-team-coaches :exerciseID="exerciseID" @send-message="sendMessage()" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import {
    IonPage,
    IonHeader,
    IonContent,
  } from '@ionic/vue';
  import router from '@/router/index'
  import { presentToast } from '@/utils/toast';
  import score from "@/components/All/Header.vue"
  import MessageTeamCoaches from '@/components/MessageTeamCoaches.vue';
  const route = useRoute()
  const exerciseID = route.params.exerciseid as string


  async function sendMessage(){
    router.push({name: 'exercise', params: {exerciseid: exerciseID}})
    await presentToast('Message send to coaches. Well done!')
  }

</script>
