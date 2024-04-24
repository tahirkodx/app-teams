<template>
  <ion-list>
    <ion-card
      v-for="(resource, key) in academyStore.courses"
      :key="key"
      @click="
        () =>
          router.push({
            name: 'lesson',
            params: { courseId: resource['0'] },
          })
      "
      class="resource-container"
    >
      <div class="resource-header">
        <ion-thumbnail slot="start" class="resource-thumbnail">
          <ion-img src="/src/pictures/Rectangle 705.svg"></ion-img>
        </ion-thumbnail>

        <div class="resource-info">
          <div>
            <ion-label>
              <div>
                <ion-icon
                  icon="/src/pictures/Videoicon.svg"
                  class="play-icon"
                ></ion-icon>

                <span class="headerStyle">{{ resource["1"]?.title }}</span>
                <div class="resource-progress">
                  <div class="time-left">
                    Video: {{ mintsLeft(resource["1"]?.total_length ,resource["1"]?.time_played)}} Mins Left 
                    
                  </div>
                  <ion-progress-bar
                    :value="progressValue(resource['1']?.total_length ,resource['1']?.time_played)"
                    :buffer="1.0"
                    class="progressBar"
                  ></ion-progress-bar>
                </div>
              </div>
            </ion-label>
          </div>
        </div>
      </div>
      <div class="resource-body">
        <p class="resource-description">
          {{ resource["1"]?.description }}
        </p>
        <div class="resource-details">
          <!-- todo need to convert time into mints frist confimr form Thijs  -->
          Video: {{ resource["1"]?.total_length }} Mins •
          <!-- {{ MonthsAgo(resource["1"]?.last_updated) }} months ago • -->
          {{ resource["1"]?.plays.length }} Lessons
        </div>
      </div>
    </ion-card>
  </ion-list>
</template>

<script setup lang="ts">
import {
  IonLabel,
  IonThumbnail,
  IonImg,
  IonCard,
  IonList,
  IonItem,
  IonIcon,
  IonProgressBar,
} from "@ionic/vue";
import router from "@/router/index";
import { ref, computed } from "vue";
import { useUserStore, useAcademyStore } from "@/store";
import { MonthsAgo, mintsLeft } from "@/utils/Helper";
const academyStore = useAcademyStore();
const progressValue = (totl_titme: any , watchTime :any ) => {
  const totalTime = totl_titme * 60; // Convert minutes to seconds
  const elapsedTime = watchTime || 0;
  return Math.min(1, elapsedTime / totalTime); // Ensure progress is between 0 and 1
}
// Example usage
// const date = "2023-08-02"; // Replace with your date
// console.log(monthsAgo(date) + " months ago");
</script>

<style scoped>
.play-icon {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.headerStyle {
  color: var(--black, #000);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
}

.resource-thumbnail {
  --size: 90px;
  width: 135px;
  border-radius: 4px;
  /* background-color: #ffd700; */
  /* Yellow background */
}

.resource-thumbnail ion-img {
  border-radius: 10px;
  /* height: 70px; */
}

.resource-container {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resource-header {
  display: flex;
  align-items: center;
  padding: 16px;
}

.resource-image {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.resource-info {
  flex-grow: 1;
  margin-left: 15px;
}

.resource-title {
  font-size: 1.2em;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}
.resource-title h2 {
  color: #a5ce3e;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
}
.resource-progress {
  display: flex;
  flex-direction: column;
}

.time-left {
  font-size: 0.9em;
  margin-bottom: 40px;
  color: var(--secondary, #ff8512);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
}

ion-progress-bar {
  --padding-start: 0;
  --padding-end: 0;
  --border-radius: 0; /* Adjust if you want rounded corners */
}
.progressBar {
  display: flex;
  width: 207px;
  height: 4px;
  padding-right: 149px;
  align-items: center;
  border-radius: 24px;
  background: var(--tietiary, rgba(44, 58, 209, 0.5));
}

.resource-body {
  padding: 16px;
  margin-top: -35px;
}

.resource-description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 8px;
}

.resource-details {
  font-size: 0.8em;
  color: #999;
}
</style>
 