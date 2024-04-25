<template>
  <div>
    <div v-for="(item, index) in masgList" class="chat-container">
      <div class="chat-bubble" :class="{
      left: item.status === 'send',
      right: item.status === 'recieve',
    }">
        {{ item.message }}
      </div>
      <span class="customTime" :class="{ customTimeLeft: item.status === 'send' }">{{ item.time }}</span>
    </div>
    <div>
    </div>
  </div>
  <div class="input-container">
    <div class="chat-input">
      <ion-input label-placement="stacked" placeholder="Ask me anything...">
      </ion-input>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M2.34602 2.56733C2.49529 2.43767 2.67965 2.35516 2.8758 2.33024C3.07194 2.30532 3.27108 2.33911 3.44802 2.42733L21.448 11.4273C21.6144 11.5103 21.7544 11.638 21.8523 11.7961C21.9501 11.9542 22.002 12.1364 22.002 12.3223C22.002 12.5083 21.9501 12.6905 21.8523 12.8486C21.7544 13.0067 21.6144 13.1344 21.448 13.2173L3.44802 22.2173C3.27109 22.3059 3.07187 22.3399 2.87557 22.3152C2.67927 22.2905 2.49472 22.2081 2.34527 22.0784C2.19582 21.9488 2.08818 21.7777 2.03598 21.5869C1.98378 21.396 1.98937 21.194 2.05202 21.0063L4.61402 13.3223H10.001C10.2662 13.3223 10.5206 13.217 10.7081 13.0294C10.8957 12.8419 11.001 12.5875 11.001 12.3223C11.001 12.0571 10.8957 11.8028 10.7081 11.6152C10.5206 11.4277 10.2662 11.3223 10.001 11.3223H4.61402L2.05102 3.63833C1.98869 3.45074 1.98335 3.24889 2.03567 3.05827C2.088 2.86764 2.19665 2.6968 2.34602 2.56733Z"
          fill="#A5CE3E" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  InfiniteScrollCustomEvent,
  IonInput
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

  background: #DFEEBA;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 23px;
  left: 15px;
  height: 48px;
  right: 15px;
  background: var(--my-masg-background);
  border-radius: 5px;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 24px 20px;
  position: fixed;
  bottom: 0px;
  height: 96px;
  width: 100%;
  left: 0;
  box-shadow: 0px 5px 20px 0px rgba(108, 117, 125, 0.20);
}

ion-textarea {
  flex: 1 1 auto;
  /* Allow the textarea to grow and shrink, but also fill the space */
  margin-right: 10px;
  /* Add some margin to the right of the textarea */
}

.send-button {
  flex: 0 0 auto;
  /* Do not allow the button to grow, keep its size based on its content */
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
</style>