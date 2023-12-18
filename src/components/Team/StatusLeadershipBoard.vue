<template>
    <ion-grid>
        <ion-row>
        <ion-col size="12">
            <h1>Leadership board</h1>
        </ion-col>
        </ion-row>
        <ion-row v-for="[index, leader] in leaders.entries()">
        <ion-col style="text-align: left" size="1">
            {{ index + 1 }}
        </ion-col>
        <ion-col style="text-align: left" size="9">
            {{ leader.team }}
        </ion-col>
        <ion-col size="2">
            {{ leader.score }}
        </ion-col>
        </ion-row>
    </ion-grid>
</template>
  
<script setup lang="ts">
  import {
      IonGrid,
      IonRow,
      IonCol,
  } from '@ionic/vue';
  
  const leaders = [
      {
      team: "Project Breeze",
      score: 920,
      },
      {
      team: "The Command Program",
      score: 891,
      },
      {
      team: "Project Point",
      score: 880,
      },
      {
      team: "Program Pad",
      score: 863,
      },
      {
      team: "Project Synergy",
      score: 835,
      },
      {
      team: "Project Zen",
      score: 823,
      },
      {
      team: "Native Program",
      score: 818,
      },
      {
      team: "HR Central",
      score: 812,
      },
      {
      team: "Chroma",
      score: 801,
      },
      {
      team: "Strategy 2030",
      score: 791,
      },
  ]
</script>
