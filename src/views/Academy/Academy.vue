<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true">
      <h4 class="titleStyle">Academy</h4>

      <ion-searchbar placeholder="Search here" 
      show-clear-button="never"
      class="custom-searchbar"></ion-searchbar>

      <ion-list class="list-ios">
       
        <ion-item v-for="(resource, index) in resources" :key="index" lines="none" class="resource-item" @click="openModal(resource)">
          <ion-thumbnail slot="start" class="resource-thumbnail">
            <ion-img :src="resource.img"></ion-img>
          </ion-thumbnail>
          <ion-label class="ion-text-wrap">
            <div class="resource-title">
              <ion-icon :icon="resource.icon" class="play-icon"></ion-icon>
              <h2>{{ resource.title }}</h2>
            </div>
            <p class="desClass">{{ resource.snippet }}</p>
            <p class="resource-info">
              {{ resource.duration }} • Updated {{ resource.updated }} months
              ago
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
        
      <ion-fab class="addStyle" slot="fixed" horizontal="end" vertical="bottom"
        @click="() => router.push({ name: 'addteam' })">
        <ion-fab-button>
          <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>

       <myMyModal :is-visible="isModalVisible" :resource="selectedResource" @update:isVisible="isModalVisible = $event"></myMyModal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref,computed } from "vue";
import {
  IonPage,
  IonHeader,
  IonSearchbar,
  IonToolbar,
  IonButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import myMyModal from "@/components/VideoPlayerModal/VideoPlayerModal.vue";
import { useTeamStore } from "@/stores/teams";
  import { useAcademyStore } from '@/stores/academy'
  import { fetchCurrent, teamID } from '@/stores/current'
  import { ICourse } from "@/stores/academy";
  

  const route = useRoute()
  const teamStore = useTeamStore()
  const academyStore = useAcademyStore()

  await Promise.all([
    academyStore.fetch(),
    teamStore.fetch(),
    fetchCurrent(),
  ])

  const focus = ref(route.params.focus as string)
  if (focus.value == '') focus.value = 'all'

  /**
   * Get ordered list of courses. Order by score, either of the current team or of all teams
   */
  const orderedCourses = computed(() => {
    let courseList = academyStore.courses.list
    if (focus.value == 'all') {
      return courseList.sort((c: ICourse) => -academyStore.getAllTeamCourseScore(c.id))
    } else {
      return courseList.sort((c: ICourse) => -academyStore.getTeamCourseScore(c.id, teamID.value))
    }
  })
 
const isModalVisible = ref(false);
const selectedResource = ref({});

const openModal = (resource: any) => {
   selectedResource.value = resource;
isModalVisible.value = true;
};
const resources = ref([
  // Populate this array with your resources
  // Example resource:
  {
    img: "/src/pictures/dogYellow.svg",
    title: "Resource title 1: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/handPic.svg",
    title: "Resource title 2: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/dogYellow.svg",
    title: "Resource title 3: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/person.svg",
    title: "Resource title 4: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/handPic.svg",
    title: "Resource title 5: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/handPic.svg",
    title: "Resource title 6: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/person.svg",
    title: "Resource title 7: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/dogYellow.svg",
    title: "Resource title 8: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  {
    img: "/src/pictures/dogYellow.svg",
    title: "Resource title 9: Lorem ipsum ",
    snippet:
      "Resource snippet: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "Length 4:25 min",
    videoUrl: 'https://youtu.be/UIZAiXYceBI?feature=shared',
    updated: "6",
    icon: "/src/pictures/videoPlayIcon.svg",
  },
  // ... add more resources as needed
]);

 
</script>

<style scoped>
.list-ios {
  background: #fff;
}


.resource-item {
  --background: #ffffff;
  --border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.titleStyle {
  color: var(--Neutrals-black, #303030);

  font-family: "Cabin", sans-serif;

  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin-top: 25px;
  margin-bottom: 0px;
  padding-left: 16px;

  font-style: normal;
}

.custom-searchbar {
  --background: #ffffff;
  --border-radius: 30px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --placeholder-color: #49454F;
  --placeholder-opacity: 1;
  --clear-icon-color: #49454F;
  position: relative;

  
  color: var(--M3-sys-light-on-surface-variant, #49454f);
  /* Body large */
  font-family: "Cabin" ,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.5px;
}



.resource-thumbnail {
  --size: 90px;
  border-radius: 4px;
  background-color: #ffd700;
  /* Yellow background */
}

.resource-thumbnail ion-img {
  border-radius: 4px;
}

.resource-title {
  display: flex;
  align-items: center;
}

.resource-title h2 {
  color: #a5ce3e;

  /* Lable medium */
  font-family: "Cabin", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  /* 133.333% */
  letter-spacing: 0.5px;
}

p {
  font-size: 0.9em;
  color: #666;
}

.resource-info {
  color: #979797;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* Equivalent to 200% of 10px */
}

.play-icon {
  margin-right: 10px;
  font-size: 20px;
  /* color: #ff0000; */
  /* Hex code for red */
}

.desClass {
  color: var(--text-colors-color-text-dark, #343a40);

  /* Body small */
  font-family: "Cabin", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
}

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}
</style>
