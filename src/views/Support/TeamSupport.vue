<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'team' }"
            @click="segmentChanged('team')"
          >
            Team coach
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'others' }"
            @click="segmentChanged('others')"
          >
            Others
          </div>
        </div>
        <div
          class="custom-tags-container"
          @click="scrollLeft"
          ref="cardContainer"
        >
          <!-- Dynamically create cards using v-for loop -->
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
          <ion-chip class="custom-tags" :outline="true">Default</ion-chip>
        </div>

        <div class="content">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'team'">
            <div v-for="(item, index) in masgList" class="chat-container">
              <div
                class="chat-bubble"
                :class="{
                  left: item.status === 'send',
                  right: item.status === 'recieve',
                }"
              >
                {{ item.message }}
              </div>
              <span
                class="customTime"
                :class="{ customTimeLeft: item.status === 'send' }"
                >{{ item.time }}</span
              >
            </div>
            <div class="chat-input">
              <ion-input
                label-placement="stacked"
                placeholder="Ask me anything..."
              >
                <ion-button
                  fill="clear"
                  slot="end"
                  class="send-button"
                  @click="sendMessage"
                >
                  <ion-icon :icon="sendOutline"></ion-icon>
                </ion-button>
              </ion-input>
            </div>
          </div>
          <div v-if="activeTab === 'others'">Other tabs</div>
        </div>
      </div>
      <!-- Rest of your content -->

      <ion-fab
        slot="fixed"
        horizontal="end"
        vertical=""
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon :icon="calendarClearOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonFab,
  IonDatetime,
  IonFabButton,
  IonList,
  IonCard,
  IonThumbnail,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonChip,
} from "@ionic/vue";

import { sendOutline, calendarClearOutline } from "ionicons/icons";
//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from "@/router/index";
import score from "@/components/Header/Header.vue";

const masgList = ref([
  { message: "Hi are you there?", time: "02:30 PM", status: "send" },
  { message: "I need help realted to teams", time: "02:30 PM", status: "send" },
  { message: "Yes! how I can help you?", time: "02:31 PM", status: "recieve" },
  { message: "How I can create a team?", time: "02:31 PM", status: "send" },
  // ... other items
]);

const activeTab = ref("team"); // default active tab
const cardContainer = ref(null);

// Methods
const segmentChanged = (tabName) => {
  activeTab.value = tabName;
};
const sendMessage = () => {
  // Add the logic to handle sending a message
  console.log("Message sent");
};

const scrollLeft = () => {
  if (cardContainer.value) {
    cardContainer.value.scrollLeft += 200; // scroll by 200 pixels; adjust as necessary
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab {
  padding: 10px 40px;
  cursor: pointer;
  text-align: center;
  border-bottom: 3px solid transparent; /* Makes the tab seem "inactive" */
}

.tab.active {
  border-bottom: 3px solid #8289d5; /* Color of the active tab indicator */
}

.content {
  padding: 20px 15px 0px 15px;
  min-height: 200px; /* Adjust as needed */
}

.chat-container {
  display: flex;
  flex-direction: column;
}

.chat-bubble {
  max-width: 80%;
  padding: 12px 20px;
  border-radius: 20px;
  position: relative;
  margin-top: 20px;
}

.left {
  align-self: end;
  border-radius: 16px 16px 4px 16px;
  background: var(--my-masg-background);
}

.right {
  align-self: start;
  border-radius: 16px 16px 4px 16px;
  background: var(--my-masg-background);
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 10px;
  left: 15px;
  right: 15px;
  background: var(--my-masg-background);
  border-radius: 17px;
  box-shadow: 3.766px 3.766px 7.532px 0px rgba(212, 192, 192, 0.25);
}

ion-textarea {
  flex: 1 1 auto; /* Allow the textarea to grow and shrink, but also fill the space */
  margin-right: 10px; /* Add some margin to the right of the textarea */
}

.send-button {
  flex: 0 0 auto; /* Do not allow the button to grow, keep its size based on its content */
}

ion-button {
  --padding-start: 0; /* Remove padding start */
  --padding-end: 0; /* Remove padding end */
  --padding-top: 0; /* Remove padding top */
  --padding-bottom: 0; /* Remove padding bottom */
  min-width: 40px; /* You can adjust this value */
}
ion-fab {
  bottom: 100px;
}
.customTime {
  font-size: 12px;
}
.customTimeLeft {
  align-self: end;
}
ion-chip {
  --background: #8289d5;
}

.custom-tags-container {
  display: flex;
  flex-direction: row;
  padding: 20px 0 20px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.custom-tags {
  flex: 0 0 auto; /* Do not grow or shrink */
  margin: 0 8px; /* Spacing between cards */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2); /* Card shadow */
  border: solid 1px #bcbed5;
}
</style>
