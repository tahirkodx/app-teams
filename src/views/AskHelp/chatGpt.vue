<template>
  <ion-page>
    <Header is-back-button router-link="ask-help" />
    <ion-content>
      <ion-row class="ion-margin-top">
        <ion-col class="ion-padding">
          <ion-text class="font-medium ion-padding">Chat with ChatGPT</ion-text>
          <div class="custom-container  ion-margin-vertical">
            <ion-card class="bg-green">
              <ion-card-content class="justify-space-between">
                <div class="text-white">
                  <h6>Ask chatGPT questions</h6>
                  <h2>Instant response</h2>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.9554 2.24507C3.10467 2.1154 3.28903 2.03289 3.48517 2.00797C3.68132 1.98306 3.88045 2.01684 4.0574 2.10507L22.0574 11.1051C22.2238 11.188 22.3638 11.3157 22.4616 11.4738C22.5595 11.6319 22.6113 11.8141 22.6113 12.0001C22.6113 12.186 22.5595 12.3682 22.4616 12.5263C22.3638 12.6844 22.2238 12.8121 22.0574 12.8951L4.0574 21.8951C3.88046 21.9836 3.68124 22.0177 3.48494 21.9929C3.28865 21.9682 3.1041 21.8858 2.95464 21.7562C2.80519 21.6265 2.69756 21.4554 2.64536 21.2646C2.59316 21.0738 2.59874 20.8717 2.6614 20.6841L5.2234 13.0001H10.6104C10.8756 13.0001 11.13 12.8947 11.3175 12.7072C11.505 12.5196 11.6104 12.2653 11.6104 12.0001C11.6104 11.7348 11.505 11.4805 11.3175 11.293C11.13 11.1054 10.8756 11.0001 10.6104 11.0001H5.2234L2.6604 3.31607C2.59806 3.12848 2.59272 2.92662 2.64505 2.736C2.69738 2.54538 2.80603 2.37454 2.9554 2.24507Z"
                      fill="white" />
                  </svg>
                </div>
              </ion-card-content>
            </ion-card>
            <SearchBar />
            <ion-card v-for="(item, index) in cardItems" :key="index">
              <ion-card-content class="justify-space-between">
                <div>
                  <h3 class="font-xs">{{ item.title }}</h3>
                  <span class="font-sm">{{ item.author }} . {{ item.date }}</span>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path
                      d="M15.5427 9.68333C15.503 9.58103 15.4436 9.48758 15.3677 9.40833L11.201 5.24166C11.1233 5.16396 11.0311 5.10233 10.9296 5.06028C10.8281 5.01823 10.7193 4.99658 10.6094 4.99658C10.3875 4.99658 10.1746 5.08474 10.0177 5.24166C9.94001 5.31936 9.87838 5.4116 9.83632 5.51312C9.79427 5.61464 9.77263 5.72344 9.77263 5.83333C9.77263 6.05524 9.86079 6.26807 10.0177 6.42499L12.7677 9.16666H6.44271C6.22169 9.16666 6.00973 9.25446 5.85345 9.41074C5.69717 9.56702 5.60938 9.77898 5.60938 9.99999C5.60938 10.221 5.69717 10.433 5.85345 10.5892C6.00973 10.7455 6.22169 10.8333 6.44271 10.8333H12.7677L10.0177 13.575C9.9396 13.6525 9.87761 13.7446 9.8353 13.8462C9.79299 13.9477 9.77121 14.0566 9.77121 14.1667C9.77121 14.2767 9.79299 14.3856 9.8353 14.4871C9.87761 14.5887 9.9396 14.6809 10.0177 14.7583C10.0952 14.8364 10.1873 14.8984 10.2889 14.9407C10.3904 14.983 10.4994 15.0048 10.6094 15.0048C10.7194 15.0048 10.8283 14.983 10.9299 14.9407C11.0314 14.8984 11.1236 14.8364 11.201 14.7583L15.3677 10.5917C15.4436 10.5124 15.503 10.419 15.5427 10.3167C15.6261 10.1138 15.6261 9.88621 15.5427 9.68333Z"
                      fill="#2C3AD1" fill-opacity="0.5" />
                  </svg>
                </div>
              </ion-card-content>
            </ion-card>

          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText, } from "@ionic/vue";
import SearchBar from "@/components/Academy/SearchBar.vue";
import Header from "@/components/Header/Header.vue";
const cardItems = [
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  { title: 'Pre set regular chatGPT topic', author: 'Bammy', date: '4w ago' },
  // Add more items as needed
];
</script>

<style scoped>
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