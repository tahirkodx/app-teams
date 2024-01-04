<template>
  <ion-page>
    <div class="goals-header">
      <h1>Manage team</h1>
      <div >
           <ion-icon src="/src/pictures/angle-right-b.svg" class="chevron-icon" ></ion-icon>
     </div>   
    </div>
     <div class="add-team-container">
    <ion-avatar class="existing-member-avatar">
      <img src="/src/pictures/avatar.svg" />
    </ion-avatar>
    <ion-button class="add-team-button" @click="addMember">
      <ion-icon :icon="addIcon" />
    </ion-button>
  </div>
    <ion-content>
    </ion-content> 
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonAvatar, IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
 
const addIcon = ref(add);
const addMember = () => {
  // Define the method to add a team member
  console.log('Add team member button clicked');
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
.chevron-icon{
  
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 0px;
  background: #eae9e9;
  border: 2px solid #eae9e9;
  position: relative;
  margin-top: 10px;
}

/* |||||||||||||| */
.add-team-container {
  position: relative;
  display: flex;
  align-items: center;
}

.existing-member-avatar {
  --border-radius: 50%;
  --size: 48px; /* Size of the avatar */
  position: relative; /* Needed for z-index */
  z-index: 2; /* Ensures the avatar overlaps the add button */
}

.add-team-button {
  --border-radius: 50%;
  --background: #28ba62; /* Your desired button color */
  --size: 48px; /* Match the avatar size if you want them the same */
  position: absolute;
  right: -24px; /* Half of the button's size to overlap */
  z-index: 1; /* Ensures the button is behind the avatar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Adds shadow to the button */
}

ion-icon {
  font-size: 32px; /* Size of the plus icon */
}

</style>
