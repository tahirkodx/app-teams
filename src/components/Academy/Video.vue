<template>
  <video
      ref="videoRef"
      id="video"
      :src="videoSource"
      style="width: 100%; height: auto"
      controls
      @ended="emit('nextVideo')"
  >
  </video>
  
  <ion-list v-show="props.lesson.content.length > 0">
      <ion-list-header>
      <ion-label>Content</ion-label>
      </ion-list-header>
      <ion-item v-for="content in props.lesson.content" @click="setVideoTime(content.time)">
      <ion-label>
          {{ showSecondsAsMinutes(content.time) }} {{ content.description }}
      </ion-label>
      </ion-item> 
  </ion-list>
  
  
  <ion-list v-show="props.lesson.plays.length > 0">
      <ion-list-header>
      <ion-label>Relevant plays</ion-label>
      </ion-list-header>
      <ion-item v-for="playid in props.lesson.plays"  @click="() => router.push({name: 'play', params: {playid: playid}})">
      <ion-label>
          {{ playbookStore.playbook.value.get(playid).title }}
      </ion-label>
      </ion-item> 
  </ion-list>        
</template>
  
<script setup lang="ts">
  import { ref, computed } from "vue";
  import { 
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  } from '@ionic/vue';

  import { useAcademyStore } from '@/stores/academy'
  import { usePlaybookStore } from '@/stores/playbook'
  import router from '@/router/index'
  import { useRoute } from 'vue-router'
import { ILesson } from "@/stores/academy";

  const props = defineProps <{
    lesson: ILesson
  }>()

  const emit = defineEmits(['nextVideo'])

  const academyStore = useAcademyStore()
  const playbookStore = usePlaybookStore()
  const route = useRoute()

  interface IVideo {
    height: number,
    currentTime: number,
  }
  const videoRef = ref<IVideo|null>(null)

  const videoSource = computed(() => 'src/videos/' + props.lesson.video)

  function showSecondsAsMinutes(s: number) {
    var hours = Math.floor(s / 3600)
    s = s % 3600
    
    var minutes = Math.floor(s / 60)
    s = s % 60

    var seconds = s

    if (s > 3600){
      return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
    } else if (s > 60){
      return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
    } else {
      return '00:' + seconds.toString().padStart(2, '0')
    }
  }

  function setVideoTime(time: number){
    if (videoRef.value) videoRef.value.currentTime = time
  }
  </script>
  