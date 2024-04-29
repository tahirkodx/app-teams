<template>
  <ion-page>
    <Header is-back-button />
    <ion-content>
      <ion-row>
        <ion-col class="ion-padding">
          <div class="custom-container">
            <ion-text class="font-lg">Settings</ion-text>
            <ion-text class="font-sm"
              >For important updates regarding your Epicus activities.
            </ion-text>
            <div
              class="ion-padding custom-container ion-padding-top"
              v-for="(item, index) in navLinks"
              :key="index"
            >
              <button
                @click="handleClick(item.href)"
                class="ion-content-justify-between"
              >
                <ion-text class="font-sm">{{ item.name }}</ion-text>
                <ion-icon :icon="arrowForward"></ion-icon>
              </button>
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { arrowForward } from "ionicons/icons";
import { ref } from "vue";
import router from "@/router/index";

const navLinks = ref([
  {
    href: "profilenotification",
    name: "Notification Settings",
  },
  {
    href: "changePassword",
    name: "Password Change",
  },
  {
    href: "profile",
    name: "Profile edit",
  },
]);

function handleClick(item: any) {
  router.push({ name: item });
}
</script>
<style scopped>
.custom-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.font-lg {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.ion-content-justify-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
}

ion-icon {
  width: 20px;
  height: 20px;
  color: #cccccc;
}

.font-sm {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
</style>
