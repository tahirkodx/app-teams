<template>
  <ion-page>
    <Header is-back-button router-link="ask-help" />
    <ion-content>
      <ion-row class="ion-margin-top">
        <ion-col class="ion-padding">
          <ion-text class="font-medium ion-padding">Chat with ChatGPT</ion-text>
            <ion-list class="custom-container  ion-margin-vertical">
            <ion-card class="bg-green" router-link="/chats">
              <ion-card-content class="justify-space-between">
                <ion-text class="text-white">
                  <h6>Ask chatGPT questions</h6>
                  <h2>Instant response</h2>
                </ion-text>
                <div>
                  <ion-img src="/src/pictures/majesticons_send.svg" alt="Finished Success"></ion-img>
                </div>
              </ion-card-content>
            </ion-card>
            <SearchBar />
            <ion-card v-for="(item, index) in cardItems" :key="index">
              <ion-card-content class="justify-space-between">
                <ion-text>
                  <h3 class="font-xs">{{ item.title }}</h3>
                  <span class="font-sm">{{ item.author }} . {{ item.date }}</span>
                </ion-text>
                <ion-text>
                  <ion-icon :icon="arrowForwardOutline"></ion-icon>
                </ion-text>
              </ion-card-content>
            </ion-card>
          </ion-list>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText, IonCard, IonCardContent } from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";
import SearchBar from "@/components/Academy/SearchBar.vue";
import Header from "@/components/Header/Header.vue";
const cardItems = [
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  // Add more items as needed
];
</script>

<style scoped>
ion-icon {
  color: #2C3AD180;
  width: 20px;
  height: 20px;
}

.custom-container {
  display: flex;
  flex-direction: column;
}

ion-card {
  background: rgba(44, 58, 209, 0.05);
  height: 72px;
}

.bg-green {
  background-color: #A5CE3E;
  height: 76px;
}

ion-card-content {
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 31px;

}

.justify-space-between {
  display: flex;
  justify-content: space-between;
}

.font-xs {
  color: var(--black, #000);
  letter-spacing: 0.1px;
}

.font-sm {
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.font-medium {
  font-size: 22px;
  line-height: 28px;
  margin-left: -8px;
  padding-bottom: 10px;
}

.text-white {
  color: var(--white, #FFF);
}
</style>