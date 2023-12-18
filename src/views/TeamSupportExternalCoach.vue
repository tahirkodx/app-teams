<template>
  <ion-page>
    <ion-header>
        <!--score></score-->
      </ion-header>
    <ion-content class="ion-padding">
      <ion-datetime v-model=date :min="new Date().toISOString()" presentation="date"></ion-datetime>
      <div v-for="[index, timeslot] in availableTimeslots.entries()">
        <ion-chip
          :outline="timeSelected && indexSelected != index"
          @click="selectTime(index)"
        >
          {{ timeslot }}
        </ion-chip>
      </div>
      <ion-button
        :disabled="!timeSelected"
        expand="block"
        @click="scheduleAppointment"
      >
        Schedule
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
    IonDatetime,
    IonChip,
    toastController,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  
  const date = ref(new Date().toISOString())
  const availableTimeslots = ref([
    "10:00-10:30",
    "10:30-11:00",
    "12:00-12:30"
  ])

  const indexSelected = ref(-1)
  const timeSelected = computed(() => indexSelected.value != -1)

  function selectTime(index: number) {
    if (indexSelected.value == index) {
      indexSelected.value = -1
    } else {
      indexSelected.value = index
    }
  }

  async function presentToast() {
        const toast = await toastController.create({
          message: 'Appointment scheduled. We will send you an invite. Well done!',
          duration: 3000,
          position: 'top',
        });

        await toast.present();
      }

  async function scheduleAppointment(){
    router.push({name: 'team'})
    await presentToast()
  }

</script>
