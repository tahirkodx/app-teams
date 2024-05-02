<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true" class="ion-padding">
      <h3>Ask Help?</h3>
      <div class="title-line"></div>
      <div>
        <ion-list lines="full">
          <ion-item
            v-for="(item, index) in data"
            :key="index"
            @click="handleItemClick(item)"
          >
            <ion-label class="ion-text">{{ item.title }}</ion-label>
            <ion-icon
              src="/src/pictures/uil_arrow-right.svg"
              slot="end"
              size="large"
              class="arrow-back"
            />
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="ion-padding footer-container">
      <ion-button class="ion-button" slot="end"
        >App usage guide
        <ion-icon
          src="/src/pictures/questionMark.svg"
          slot="end"
          size="large"
          class="arrow-back"
        />
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonFooter,
  IonContent,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { ref } from "vue";
import router from "@/router/index";

const data = ref([
  {
    title: "Get an external coach",
    href: "/ask-help/appointment",
  },
  {
    title: "Chat with ChatGPT",
    href: "/ask-help/chatGpt",
  },
  {
    title: "Request help from your coach",
    href: "/ask-help/requestHelp",
  },
  {
    title: "Send SOS",
    href:"/ask-help/sendSos",
  },
  {
    title: "Go to FAQ",
    href: "#",
  },
  {
    title: "Online Forum",
    href: "#",
  },
]);

const handleItemClick = (item: any) => {
  // Handle item click event

  if (item.href === "/ask-help/appointment") {
    router.push({ name: "appointmentHelp" });
  }

  if (item.href === "/ask-help/requestHelp") {
    router.push({ name: "requestHelp" });
  }
  if (item.href === "/ask-help/sendSos") {
    router.push({ name: "sendSos" });
  }
  if (item.href === "/ask-help/chatGpt") {
    router.push({ name: "chatGpt" });
  }
};
</script>

<style scoped>
.ion-text {
  padding: 24px 0px;
}

.title-line {
  border-bottom: 1px solid rgba(249, 238, 238, 0.95);
  margin-top: 5px;
  margin-bottom: 24px;
  width: auto;
}

.ion-button {
  --background: #2c3ad180;
  --color: white;
  --border-radius: 5px;
}

.footer-container {
  display: flex;
  justify-content: end;
}
</style>
