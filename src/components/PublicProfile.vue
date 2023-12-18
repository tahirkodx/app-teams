<template>
  <!--div style="margin: auto; text-align: center;">
    <ion-avatar style="margin: auto">
      <img alt="Silhouette of a person's head" src="@/pictures/avatar.svg" />
    </ion-avatar>
    <h1>{{ publicProfile.first_name }} {{ publicProfile.last_name }}</h1>
    Leadership level: {{ publicProfile.leadershipLevel }}
    <ion-grid>
      <ion-row>
        <ion-col v-if="publicProfile.email != null">
          <b>{{ publicProfile.email }}</b>
        </ion-col>
        <ion-col v-if="publicProfile.phone != null">
          <b>{{ publicProfile.phone }}</b>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>

  <hr style="border-top: 1px solid blue; width: 100%">


  <ion-grid>
    <ion-row>
      <ion-col>
        Total completed: {{ publicProfile.completedExercises.length }}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        Coach: {{ publicProfile.completedExercises.filter((e: ICompletedExercise) => e.highestRole == 'coach').length }}
      </ion-col>
      <ion-col>
        Leader: {{ publicProfile.completedExercises.filter((e: ICompletedExercise) => e.highestRole == 'leader').length }}
      </ion-col>
      <ion-col>
        Member: {{ publicProfile.completedExercises.filter((e: ICompletedExercise) => e.highestRole == 'member').length }}
      </ion-col>
    </ion-row>
  </ion-grid>

  <div v-for="[index, exercise] in publicProfile.completedExercises.entries()">

    <ion-card >
      <ion-card-header>
        <ion-card-title>{{ playbookStore.playbook.value.get(exercise.playID).title }}</ion-card-title>
        <ion-card-subtitle>Last completion: {{ exercise.lastCompletion }}</ion-card-subtitle>
        <ion-card-subtitle>Completed as: {{ exercise.roles }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content style="padding-top: 0">
        Here's a small text description for the card content. Nothing more, nothing less.
      </ion-card-content>
    </ion-card>
  </div-->
</template>
  
  <script setup lang="ts">
  import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
  } from '@ionic/vue';
//  import { useUserStore } from '@/stores/user';
//  import { usePlaybookStore } from '@/stores/playbook';
//  import { ICompletedExercise } from '@/utils/templates';
//  const userStore = useUserStore()
//  const playbookStore = usePlaybookStore()
//
//  const props = defineProps<{
//    userID: string
//  }>()
//
//
//  const publicProfile = userStore.getPublicProfile(props.userID)

  </script>
  