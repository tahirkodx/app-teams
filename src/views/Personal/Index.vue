<template>
  <ion-page>
    <ion-header>
        <Header />
      </ion-header>
    <ion-content>
      <h5 class="text-container ion-padding-start">(Level1) Diploment</h5>
      <h6 class="ion-text-end ion-padding-end">
        Next Level(Expert) <ion-icon :icon="arrowForwardOutline"></ion-icon>
      </h6>
      <ProgressBar
      :tempIndex="1"
      :data="4"
      :showLabel="false"
    />
      <InfoCard />
      <ion-text>
        <h1 class="text-lg ion-padding-start">Build Their group Identity</h1>
      </ion-text>

      <Chart />

      <div class="button-custom">
        <ion-button size="default" fill="outline" class="button-size"
          >CLOSE</ion-button
        >
        <ion-button size="default" class="button-size">ALERT</ion-button>
      </div>
      <ion-button
          
          class="ion-padding"
          expand="block"
          id="open-modal"
          >ClOSE COMMITMENT</ion-button
        >
      
      <!-- new -->
      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'description' }"
            @click="segmentChanged('description')"
          >
            Description
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'exercises' }"
            @click="segmentChanged('exercises')"
          >
            Exercises
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'message' }"
            @click="segmentChanged('message')"
          >
            Message
          </div>
        </div>
        <div class="content">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'description'">
            <Description />
          </div>
          <div v-if="activeTab === 'exercises'">
            <Exercises />
          </div>
          <div v-if="activeTab === 'message'">
          <Message />
          </div>
        </div>
      </div>
      <!-- new end -->
    </ion-content>
    <!-- modal -->
    <ion-modal ref="modal" trigger="open-modal">
      <ion-content>
        <ion-toolbar>
        <ion-title slot="start">Schedule meeting with Coach</ion-title>
      </ion-toolbar>
        <!-- <ion-toolbar>
          <ion-title class="model-title" slot="start">Want to close a commitment?</ion-title>
          <ion-buttons slot="end">
            <ion-button color="light" @click="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar> -->
        
        <ion-list>
          <ion-radio-group
          
          
        >
        <ion-item
        lines="full"
        class="radio-item"
        >
        <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_midlow }}</ion-label> -->
        <ion-radio
        label-placement="end"
        justify="start"
        >Yes</ion-radio
        >
      </ion-item>
        <ion-item
        lines="full"
        class="radio-item"
        >
        <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_midlow }}</ion-label> -->
        <ion-radio
        label-placement="end"
        justify="start"
        >Yes</ion-radio
        >
      </ion-item>
    </ion-radio-group>
         
         
         
        </ion-list>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCard,
  IonCol,
  IonPage,
  IonImg,
  IonLabel,
  IonText,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonProgressBar,
  IonModal
} from "@ionic/vue";
import {
  settingsOutline,
  personCircleOutline,
  arrowForwardOutline,
  ellipsisVertical,
  ellipsisHorizontalCircle,
} from "ionicons/icons";
import Chart from "@/components/Personal/Chart.vue";
import InfoCard from "@/components/Personal/InfoCard.vue";
import Exercises from "@/components/Personal/Exercises.vue";
import Description from "@/components/Personal/Description.vue";
import Message from "@/components/Personal/Message.vue";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
const activeTab = ref("description"); // default active tab
const progress = ref(2);
const modal = ref();

  const dismiss = () => modal.value.$el.dismiss();
const segmentChanged = (tabName: any) => {
  activeTab.value = tabName;
};
// const segmentChanged = (event: any) => {
//   activeTab.value = event.detail.value;
// };
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
  --padding-start: 8px;
  --padding-end: 20px;
}

ion-title {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: justify;
}

.text-container {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 14px;
  letter-spacing: 0.1px;
}

.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 25px;
  list-style: none;
}

.tab {
  padding: 8px 34.43px;
  cursor: pointer;
  text-align: center;
  border-bottom: 2px solid #f7f7f7;
}

.tab.active {
  border-bottom: 3px solid #8289d5;
}

.content {
  padding: 20px 15px 0px 15px;
  min-height: 200px;
  overflow-y: scroll;
  height: 520px;
}

.ion-text-end {
  color: rgba(119, 85, 119, 0.34);
  font-size: 12px;
  margin-top: -26px;
}
.text-lg {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 22px;
  line-height: 28px;
  /* margin-left:23px; */
  /* 127.273% */
}

.button-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;

  gap: 35px;
}

.button-size {
  width: 40%;
}
/* model */
ion-modal {
    --height: 50%;
    width: 95%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    
    --color: white;
    
  }
  .model-title{
    text-align: start;
  }


</style>
