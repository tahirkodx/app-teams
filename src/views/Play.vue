<template>
  <ion-page>
    <ion-header>
      <!--score></score-->
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb @click="() => router.push({name: 'playbook'})">Playbook</ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-header>
    <ion-content>
      <h1 class="ion-padding">{{ play.title }}</h1>
    <ion-button
      style="margin: 10px"
      expand="block"
      :disabled="teamStore.teams.list.length == 0"
      @click="modalOpen=true"
    >
    
      Use play
    </ion-button>
    <br>
    <PlayDetails :play="play" :data="data" />
  </ion-content>
    
      
    <ion-modal :is-open="modalOpen" ref="modal">
      <ion-content class="ion-padding">
        <ion-select label="Team" v-model="exerciseSettings.team">
          <ion-select-option v-for="[teamID, team] in teamStore.teams.value.entries()" :value="teamID">{{ team.name }}</ion-select-option>
        </ion-select>

        <ion-select label="Responsible person" v-model="exerciseSettings.responsible">
          <ion-select-option v-for="member in teamStore.teams.value.get(exerciseSettings.team).members" :value="member.email">{{ member.first_name }} {{ member.last_name }}</ion-select-option>
        </ion-select>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button expand="block" @click="modalOpen=false">cancel</ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="block" @click="confirm">confirm</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-modal>
      
    
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
    IonModal,
    IonBreadcrumbs,
    IonBreadcrumb,
    IonSelect,
    IonSelectOption,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  import PlayDetails from '@/components/PlayDetails.vue';
  import { presentToast } from '@/utils/toast';
  import { usePlaybookStore } from '@/stores/playbook'
  import { useTeamStore } from '@/stores/teams'
  import { useUserStore } from '@/stores/user';
  import { fetchCurrent, teamID } from '@/stores/current'
  
  const userStore = useUserStore()
  const route = useRoute()
  const playbookStore = usePlaybookStore()
  const teamStore = useTeamStore()

  await Promise.all([
    playbookStore.fetch(),
    userStore.fetch(),
    teamStore.fetch(),
    fetchCurrent()
  ])

  const playID = route.params.playid
  const play = playbookStore.playbook.value.get(playID)

  const modalOpen = ref(false)
  const exerciseSettings = ref({
    team: teamID,
    play: playID,
    responsible: userStore.user.email
  })

  function confirm(){
    playbookStore.exercises.create(exerciseSettings.value)
    modalOpen.value = false
    presentToast('Exercise created')
    router.push({name: 'exercises'})
  }

  const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 7, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 20, 27, 20]
      }
    ]
  }

</script>
