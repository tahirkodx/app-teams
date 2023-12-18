<template>
    <ion-page>
      <ion-header>
        <!--score></score-->
      </ion-header>
      <ion-content class="ion-padding">

        <ion-segment v-model="selection">
          <ion-segment-button value="personal">
            <ion-label>Personal</ion-label>
          </ion-segment-button>

          <ion-segment-button value="company">
            <ion-label>Company</ion-label>
          </ion-segment-button>
        </ion-segment>


        <!--div v-show="selection == 'personal'">
          Leadership level: {{ userStore.leadershipLevel }}

          <ion-grid>
            <ion-row>
              <ion-col>
                Total completed: {{ playbookStore.exercisesCompleted.length }}
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                Coach: {{ playbookStore.exercisesCompleted.filter(e => e.highestRole == 'coach').length }}
              </ion-col>
              <ion-col>
                Leader: {{ playbookStore.exercisesCompleted.filter(e => e.highestRole == 'leader').length }}
              </ion-col>
              <ion-col>
                Member: {{ playbookStore.exercisesCompleted.filter(e => e.highestRole == 'member').length }}
              </ion-col>
            </ion-row>
          </ion-grid>

          <div v-for="[index, exercise] in playbookStore.exercisesCompleted.entries()">

            <ion-card >
              <ion-card-header>
                <ion-card-title>{{ playbookStore.getPlay(exercise.playID).title }}</ion-card-title>
                <ion-card-subtitle>Last completion: {{ exercise.lastCompletion }}</ion-card-subtitle>
                <ion-card-subtitle>Completed as: {{ exercise.roles }}</ion-card-subtitle>
              </ion-card-header>
              

            <ion-card-content style="padding-top: 0">
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
        </div>
      </div-->

      <!--div v-show="selection == 'company'">
        <h1>Company leadership board</h1>
        <ion-list>
          <div v-for="levelDetails in userStore.organizationLeaders">
            <ion-item-divider>
              <ion-label><b>Level {{ levelDetails[0] }}</b></ion-label>
            </ion-item-divider>
            <div v-for="person in levelDetails[1]">
              <ion-item>
                <ion-label class="ion-text-start">
                  <b>{{ person.name }}</b>
                </ion-label>
                <ion-label slot="end">{{ person.date.toLocaleDateString('en-US') }}</ion-label>
              </ion-item>
            </div>
            <br>
          </div>
        </ion-list>
      </div-->
    </ion-content>
  </ion-page>
  
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
  import { 
    IonPage,
    IonHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonListHeader,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonLabel,
    IonNote,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';

  import score from "@/components/All/Header.vue"
  import { useUserStore } from '@/stores/user'
  import { usePlaybookStore } from '@/stores/playbook'
  const userStore = useUserStore()
  const playbookStore = usePlaybookStore()
  
  await Promise.all([
    userStore.fetch(),
    playbookStore.fetch(),
  ])
  const selection = ref('company')

  </script>
  