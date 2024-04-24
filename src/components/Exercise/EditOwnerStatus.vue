<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <h4 class="page-heading inner-padding">Edit Excercise</h4>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <div class="ion-padding">
          <ion-select
            class="select-option"
            placeholder="Select Owner"
            interface="popover"
            aria-label="Food"
          >
            <ion-select-option
              v-for="(member, index) in teamStore.teamMembers.members"
              :value="member.email"
              >{{
                member.first_name + " " + member.last_name
              }}</ion-select-option
            >
            <!-- <ion-select-option value="banana">Banana</ion-select-option>
            <ion-select-option value="orange">Orange</ion-select-option> -->
          </ion-select>
        </div>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>
        <div class="ion-padding">
          <ion-select
            interface="popover"
            placeholder="Select Exercise Status:"
            class="select-option"
          >
            <ion-select-option value="completed">Completed</ion-select-option>
            <ion-select-option value="ongoing">Ongoing</ion-select-option>
            <ion-select-option value="abandoned">Abandoned</ion-select-option>
            <ion-select-option value="owner">Owner</ion-select-option>
          </ion-select>
        </div>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="default-text inner-padding">
        <ion-icon
          class="iconStyle"
          icon="/src/pictures/quill-info-orange.svg"
          id="auto-trigger"
        ></ion-icon>
        <ion-label class="page-heading">Help</ion-label>
      </ion-col>
    </ion-row>
    <ion-row class="save-status">
      <ion-col>
        <ion-button class="custom" expand="block">Save Satus</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPage,
  IonHeader,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonList,
  IonLabel,
  IonPopover,
  IonItem,
  IonAccordionGroup,
  IonAccordion,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { caretUpOutline } from "ionicons/icons";
import { ref } from "vue";
import { useUserStore, useTeamStore } from "@/store";
const userStore = useUserStore();
const teamStore = useTeamStore();
const props = defineProps(["update"]);
</script>
<style scoped>
ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 10px;
}
ion-input {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-start: 10px;
}
.select-option {
  width: 100%;
  max-width: 100%;
  /* Adjust the width as needed */
  /* background: var(--my-masg-background); */
  background: #f2f2f2;
  min-height: 50px;
  --placeholder-opacity: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 8px;
  --border: none;
  font-family: Cabin;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
}
.save-status {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}

.default-text {
  display: flex;
  gap: 4px;
}

.inner-padding {
  padding: 0 16px;
}
</style>
