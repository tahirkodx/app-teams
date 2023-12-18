<template>
  <h1>Coaches to include</h1>
  <ion-list>
    <ion-item v-for="[index, coach] in teamStore.coaches(teamID).entries()">
      <ion-toggle v-model="includeCoach[index]">
        {{ coach.first_name }} {{ coach.last_name }} - {{ coach.email }}
      </ion-toggle>
    </ion-item>
  </ion-list>

  <h1> E-mail content</h1>
  <p>
    <i>Use [team] to send a link to the team page</i>
    <i v-show="props.exerciseID != null"><br>Use [exercise] to send a link to the exercise</i>
  </p>
  <ion-input
    label="Subject"
    labelPlacement="floating"
    placeholder="Enter subject"
    v-model="subject"/>

  <ion-textarea
    label="Message"
    labelPlacement="floating"
    placeholder="Enter message"
    v-model="message"
  />

  <div>
    <p><b><i>{{ subject }}</i></b></p>
    <p><i><span v-html="messageOutput"></span></i></p>
  </div>

  <ion-button
    expand="block"
    :disabled="!canSendEmail"
    @click="sendMessage()"
  >Send mail</ion-button>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import {
    IonList,
    IonItem,
    IonToggle,
    IonButton,
    IonInput,
    IonTextarea,
  } from '@ionic/vue';
  import { presentToast } from '@/utils/toast';
  import { useTeamStore } from '@/stores/teams';
  import { fetchCurrent, teamID, team } from '@/stores/current'
  const teamStore = useTeamStore()
  await Promise.all([
    teamStore.fetch(),
    fetchCurrent(),
  ])

  const props = defineProps<{
    exerciseID?: String
  }>()

  const emit = defineEmits(['sendMessage'])

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
    let m: string = message.value
    if (props.exerciseID != null){
      m = m.replace(
                '[exercise]', '<a href="localhost:8100/tabs/exercises/exercise/'
                + props.exerciseID
                + '">exercise</a>'
      )
    }

    m = m.replace(/\r?\n/g, '<br>')
         .replace(
           '[team]', '<a href="localhost:8100/tabs/teams/id/'
           + teamID
           + '">'
           + team.value.name
           + '</a>'
    )
    return m
  })

  async function sendMessage(){
    emit('sendMessage')
    await presentToast('Message send to coaches. Well done!')
  }

</script>
