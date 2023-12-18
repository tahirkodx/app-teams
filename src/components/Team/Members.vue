<template>
  <ion-list>
    <ion-item v-for="member in team.members">
      <ion-grid :id="'member'+member.first_name+member.last_name">
          <ion-row>
          <ion-col size="8">{{ member.first_name }} {{ member.last_name }}</ion-col>
          <ion-col size="4">{{ numberToRole[member.role] }}</ion-col>
          </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>
</template>
  
  <script setup lang="ts">
    import {
      IonItem,
      IonGrid,
      IonRow,
      IonCol,
      IonList,
    } from '@ionic/vue';
    import { numberToRole } from '@/stores/teams';
    import { fetchCurrent, team } from '@/stores/current';
    await fetchCurrent()
  </script>
  