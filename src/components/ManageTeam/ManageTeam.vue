<template>
  <ion-page>
    <div class="goals-header">
      <h1>Manage team</h1>
      
           <ion-icon :icon="chevronForwardOutline" ></ion-icon>
     
    </div>
    <ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

.goals-header {
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* Adjust the padding as needed */
  margin-left: 0px;
  margin-top: -20px;
  --background-color: #fff;
  
  /* Adjust if you have a specific background color */
}

h1 {
  color: var(--Neutrals-black, #303030);
  /* Title Medium */
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.15px;
  margin-left: -10px;
}
ion-icon{
  padding: 10px;
  width: 10px;
height: 10px;
flex-shrink: 0;
  border-radius: 50%;
  margin-right: 16px;
  /* Space between the status indicator and text */
  background: #eae9e9;
  /* Full dot color */
  border: 2px solid #eae9e9;
  /* Border color for half dot */
  position: relative;
  margin-left: 10px;
}

</style>
