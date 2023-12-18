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
          v-for="coach in userStore.organizationCoaches.list"
          @click="() => router.push({name: 'teamsupportgetteamcoachprofile', params: {userid: coach.userID}})"
        >
          <ion-label>
            {{ coach.first_name }} {{ coach.last_name }}
          </ion-label>
          {{ coach.fit }}
        </ion-item>
      </ion-list>
      {{ userStore.organizationCoaches.list }}
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  import { useUserStore } from '@/stores/user';
  import { useTeamStore } from '@/stores/teams';
  import { fetchCurrent, teamID, team } from '@/stores/current'
  import { presentToast } from '@/utils/toast';
  const teamStore = useTeamStore()
  const userStore = useUserStore()

  await Promise.all([
    userStore.fetch(),
    teamStore.fetch(),
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

  async function sendMessage(){
    router.push({name: 'team'})
    await presentToast('Message send to coaches. Well done!')
  }

</script>
