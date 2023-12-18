<template>
  <ion-page>
    <ion-header>
        <score></score>
      </ion-header>
    <ion-content class="ion-padding">
      <SupportTeamCoach @send-message="sendMessage()"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonContent,
  } from '@ionic/vue';
  import router from '@/router/index'
  import { presentToast } from '@/utils/toast';
  import score from "@/components/All/Header.vue"
  import SupportTeamCoach from '@/components/MessageTeamCoaches.vue';

  async function sendMessage(){
    router.push({name: 'team'})
    await presentToast('Message send to coaches. Well done!')
  }

</script>
