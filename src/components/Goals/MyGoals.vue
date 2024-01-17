<template>
  <ion-page>
    <div class="goals-header">
      <h1>My goals</h1>
      <ion-button fill="clear" class="show-all-button">Show all</ion-button>
    </div>
    <ion-content>
      <ion-list class="goals-list">
        <ion-item
          v-for="(goal, index) in goals"
          :key="index"
          class="goal-item"
          @click="selectGoal(index)"
        >
          <div
            class="goal-status"
            :class="{
              full: selectedGoal === index,
              half: selectedGoal !== index,
            }"
            slot="start"
          ></div>
          <ion-label>{{ goal.text }}</ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>
        <ManageTeam/>
      </ion-list>
      <!-- <ManageTeam/> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ManageTeam from "../ManageTeam/ManageTeam.vue";
import { chevronForwardOutline } from "ionicons/icons";
const goals = ref([
  { text: "Improve listening" },
  { text: "Speak out more and explore ideas with team" },
  // ... add more goals here
]);

const selectedGoal = ref(null);

const selectGoal = (index : any) => {
  selectedGoal.value = index;
};
</script>

<style scoped>
/* ...existing styles... */

.goals-list {
  padding-left: 20px;
  /* Add padding on the left */
  padding-right: 20px;
  /* Add padding on the right */
  background-color: #ffffff;
  width: auto;
  height: auto;
  
}

.goal-item {
  border-radius: 5px;
  --background: var(--Neutrals-background, #f4f3ef);
  --border-color: transparent;
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-start: 0px;
  margin-bottom: 10px;
  position: relative;

  color: #ff8512;
  /* Title small */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
}

.goal-status {
  padding: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 16px;
  /* Space between the status indicator and text */
  background: #ff8512;
  /* Full dot color */
  border: 2px solid #ff8512;
  /* Border color for half dot */
  position: relative;
  margin-left: 10px;
}

.half::after {
  content: "";
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: #ffffff;
  border-radius: 50%;
}

ion-icon {
  color: #303030;
}

.goals-header {
  gap: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* Adjust the padding as needed */
  margin-left: 10px;
  --background-color: #fff;
  
  /* Adjust if you have a specific background color */
}

h1 {
  color: var(--Neutrals-black, #303030);

  /* Title Medium */
 
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.15px;
}

.show-all-button {
  color: var(--text-colors-color-text-blue, #2b7ff2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
  text-decoration-line: underline;
  
}
</style>
