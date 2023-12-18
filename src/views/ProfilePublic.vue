<template>
  <ion-page>
    <ion-header>
      <score></score>
    </ion-header>
    <ion-content class="ion-padding">
      <public-profile :userID="userID" />
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
  } from '@ionic/vue';

  import score from "@/components/All/Header.vue"
  import publicProfile from '@/components/PublicProfile.vue'
  const route = useRoute()

  const userID = route.params.userid as string

  </script>
  