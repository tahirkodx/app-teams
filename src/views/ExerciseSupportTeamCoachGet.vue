<template>
  <ion-page>
    <ion-header>
        <score></score>
      </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-list-header>
          <ion-label>Coach</ion-label>
          Fit index
        </ion-list-header>
        <ion-item
          v-for="coach in userStore.organizationCoaches"
          @click="() => router.push({name: 'exercisesupportgetteamcoachprofile', params: {exerciseid: exerciseid, userid: coach.userID}})"
        >
          <ion-label>
            {{ coach.first_name }} {{ coach.last_name }}
          </ion-label>
          {{ coach.fit }}
        </ion-item>
      </ion-list>
      {{ userStore.organizationCoaches }}
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router';
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonToggle,
    IonButton,
    IonInput,
    IonTextarea,
    toastController,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  import { useUserStore } from '@/stores/user';
  import { useTeamStore } from '@/stores/teams';
  import { fetchCurrent, teamID, team } from '@/stores/current'

  const route = useRoute()
  const exerciseid = route.params.exerciseid
  const teamStore = useTeamStore()
  const userStore = useUserStore()

  await Promise.all([
    teamStore.fetch(),
    userStore.fetch(),
    fetchCurrent(),
  ])

  const includeCoach = ref(Array(teamStore.coaches(teamID.value).length).fill(true))
  const subject = ref('')
  const message = ref('')
  const canSendEmail = computed(() => {
    return (
      includeCoach.value.some((b) => b)
      && subject.value.length > 0
      && message.value.length > 0
    )
  })

  const messageOutput = computed(() => {
    return message.value
              .replace(/\r?\n/g, '<br>')
              .replace(
                '[team]', '<a href="localhost:8100/tabs/teams/id/'
                + teamID
                + '">'
                + team.value.name
                + '</href>'
              )
  })

  async function presentToast() {
        const toast = await toastController.create({
          message: 'Message send to coaches. Well done!',
          duration: 3000,
          position: 'top',
        });

        await toast.present();
      }

  async function sendMessage(){
    router.push({name: 'team', params: {exerciseid: exerciseid}})
    await presentToast()
  }

</script>
