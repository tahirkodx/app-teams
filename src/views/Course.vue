<template>
    <ion-page>
      <ion-header>
        <score></score>
        <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'academy'})">Academy</ion-breadcrumb>
          <ion-breadcrumb >{{ course.title }}</ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div style="width: 100%; height: 100%" @click="index += -1" v-show="index > 0">
                <ion-icon
                  size="large"
                  style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                  :icon="chevronBackOutline"
                ></ion-icon>
              </div>
            </ion-col>
            <ion-col style="text-align: center;">
              <h1>{{ lessons[index].title }} {{ '(' + (index + 1).toString() + '/' + lessons.length.toString() + ')' }}</h1>
            </ion-col>
            <ion-col>
              <div style="width: 100%; height: 100%" @click="index += 1" v-show="index < lessons.length-1">
                <ion-icon
                  size="large"
                  style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                  :icon="chevronForwardOutline"
                ></ion-icon>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <video
          ref="videoRef"
          id="video"
          :src="videoSource"
          style="width: 100%; height: auto"
          controls
          @ended="videoEnded()"
        >
        </video>

        {{ lessons[index].description }}

        <ion-list v-show="lessons[index].content.length > 0">
          <ion-list-header>
            <ion-label>Content</ion-label>
          </ion-list-header>
          <ion-item v-for="content in lessons[index].content" @click="setVideoTime(content.time)">
            <ion-label>
              {{ showSecondsAsMinutes(content.time) }} {{ content.description }}
            </ion-label>
          </ion-item> 
        </ion-list>

        <ion-list v-show="lessons[index].plays.length > 0">
          <ion-list-header>
            <ion-label>Relevant plays</ion-label>
          </ion-list-header>
          <ion-item v-for="playid in lessons[index].plays"  @click="() => router.push({name: 'play', params: {playid: playid}})">
            <ion-label>
              {{ playbookStore.playbook.value.get(playid).title }}
            </ion-label>
          </ion-item> 
        </ion-list>        
      </ion-content>
    </ion-page>
    
  </template>
  
  <script setup lang="ts">
import { ref, watch, computed } from "vue";
  import { 
    IonPage,
    IonHeader,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonBreadcrumbs,
    IonBreadcrumb,
  } from '@ionic/vue';
  import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

  import score from "@/components/All/Header.vue"
  import { useAcademyStore, defaultCourse } from '@/stores/academy'
  import { usePlaybookStore } from '@/stores/playbook'
  import { ILesson } from "@/stores/academy";
  import router from '@/router/index'
  import { useRoute } from 'vue-router'

  const academyStore = useAcademyStore()
  const playbookStore = usePlaybookStore()
  await Promise.all([
    academyStore.fetch(),
    playbookStore.fetch(),
  ])

  const route = useRoute()
  const courseID = route.params.courseid.toString() as string

  let course_ = academyStore.courses.value.get(courseID)
  const course = course_ ? course_ : defaultCourse
  const lessons = ref<ILesson[]>(Object.values(course.lessons))
  const index = ref(0)
  const lessonID = computed((): string => {
    let id = lessons.value[index.value].id
    if (id) {
      return id
    } else {
      return '1'
    }
  })

  const videoRef = ref<null | any>(null)
  const videoSource = computed(() => lessons.value[index.value].video)

  async function videoEnded() {
    if(index.value < course.lessons.size - 1) {
      index.value += 1
      let vid = document.getElementById("video") as HTMLVideoElement
      if (vid) {
        vid.setAttribute('src', videoSource.value)
        await vid.load()
        vid.play();
      }
    }
  }

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

  function setVideoTime(time: number) {
    if (videoRef) videoRef.currentTime = time
  }
  </script>
  