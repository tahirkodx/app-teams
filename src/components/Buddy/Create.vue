<template>
    <ion-page>
      <ion-header>
        <score />
      </ion-header>
      <ion-content class="ion-padding">
        <ion-text>
            <h1 class="ion-padding-start">
                Devon’s Buddies
            </h1>
        </ion-text>
        <div class="tab-container">
          <div class="tabs">
            <div
              class="tab"
              :class="{ active: activeTab === 'list' }"
              @click="segmentChanged('list')"
            >
            My Buddies
            </div>
            <div
              class="tab"
              :class="{ active: activeTab === 'new' }"
              @click="segmentChanged('new')"
            >
            New buddy
            </div>
            <div
              class="tab"
              :class="{ active: activeTab === 'request' }"
              @click="segmentChanged('request')"
            >
            Pending requests
            </div>
          </div>
          <div class="content">
            <!-- Content based on the active tab -->
            <div v-if="activeTab === 'list'">
              <list />
            </div>
            <div v-if="activeTab === 'new'">Other tabs</div>
            <div v-if="activeTab === 'request'">Other tabs</div>
          </div>
        </div>
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
  
  import { sendOutline, add } from "ionicons/icons";
  const activeTab = ref("list"); // default active tab
  const segmentChanged = (tabName) => {
    activeTab.value = tabName;
  };
  </script>
  
  <style scoped>
  .tabs {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 25px;
    list-style: none;
  }
  
  .tab {
    padding: 8px 14.43px;
    cursor: pointer;
    text-align: center;
    border-bottom: 3px solid transparent; 
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
  ion-chip {
    --background: #8289d5;
  }
  </style>
  