<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>

    <ion-content>
      <ion-text>
        <h1 class="ion-padding-start text-heading">Devon’s Buddies</h1>
      </ion-text>

      <div v-if="activeTab === 'new'" class="cus-search-padding">
        <SearchBar />
      </div>

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
          <div v-if="activeTab === 'new'">
            <create />
          </div>
          <div v-if="activeTab === 'request'">
            <requests />
          </div>
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
  IonText,
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
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import List from "@/components/Buddies/List.vue";
import Create from "@/components/Buddies/Create.vue";
import Requests from "@/components/Buddies/Requests.vue";
import SearchBar from "@/components/Academy/SearchBar.vue";

const activeTab = ref("list"); // default active tab
const segmentChanged = (tabName: any) => {
  activeTab.value = tabName;
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

.tab-container {
  padding-top: 4px;
}
.tab {
  padding: 10px 0px;
  cursor: pointer;
  width: 33.33%;
  text-align: center;
  border-bottom: 1px solid #eaeaea; /* Makes the tab seem "inactive" */
  color: var(--Neutrals-black, #303030);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

.tab.active {
  border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.5));
  width: 33.33%;
}

.content {
  /* padding: 20px 0px 0px 0px; */
  min-height: 200px; /* Adjust as needed */
  overflow-y: scroll;
  height: auto;
}
ion-chip {
  --background: #8289d5;
}

.text-heading {
  color: #303030;

  /* mobile/Title Large */
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

.cus-search-padding {
  padding: 0px 16px 16px 16px;
}
</style>
