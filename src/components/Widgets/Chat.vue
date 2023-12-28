<template>
  <div>
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
    <div>
      <ion-button @click="showActionIems">
        <ion-icon slot="start" :icon="add"></ion-icon>
        Action Items
      </ion-button>
      <div v-if="showAtctions">
        <myactions />
      </div>
    </div>
  </div>
    <div class="chat-input">
      <ion-input label-placement="stacked" placeholder="Ask me anything...">
      </ion-input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        @click="sendMessage"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="20" fill="#A5CE3E" />
        <image
          href="/src/pictures/send-2.svg"
          class="drag-handle-icon"
          x="10"
          y="10"
          height="20"
          width="20"
        />
      </svg>
   
  </div>
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
  IonRow,
  IonCol,
  IonCheckbox,
  InfiniteScrollCustomEvent
} from "@ionic/vue";

import { sendOutline, add } from "ionicons/icons";
import myactions from "@/components/Widgets/MyActions.vue"
const masgList = ref([
  { message: "Hi are you there?", time: "02:30 PM", status: "send" },
  { message: "I need help realted to teams", time: "02:30 PM", status: "send" },
  { message: "Yes! how I can help you?", time: "02:31 PM", status: "recieve" },
  { message: "How I can create a team?", time: "02:31 PM", status: "send" },
  // ... other items
]);

const showAtctions = ref(false);

const sendMessage = () => {
  // Add the logic to handle sending a message
  console.log("Message sent");
};
const showActionIems = () => {
  // Add the logic to handle sending a message
  showAtctions.value = !showAtctions.value;
};
const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
        
        setTimeout(() => ev.target.complete(), 500);
      };

</script>

<style scoped>
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
  border-radius: 16px 16px 16px 4px;

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
.customTime {
  font-size: 12px;
}
.customTimeLeft {
  align-self: end;
}
ion-button {
  text-align: center;
  text-transform: uppercase;
}
ion-col {
  border-radius: 12px;
  border: 1px solid #8289d5;
  
  box-shadow: 0px 4px 8px 0px rgba(28, 37, 44, 0.05);
}
/* check box */
ion-checkbox {
    --checkbox-background-checked: #6815ec;
  }

  ion-checkbox::part(container) {
    border-radius: 2px;
border: 2px solid var(--M3-sys-light-on-surface-variant, #49454F);
  }
</style>
