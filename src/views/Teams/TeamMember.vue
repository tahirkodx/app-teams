<template>
  <ion-page>
    <Header />
    <ion-content class="ion-padding">
      <div class="title-container">
        <h2>Team Name</h2>
        <ion-icon
          id="popover-button"
          size="small"
          :icon="ellipsisVertical"
          slot="end"
        >
          <ion-popover
            trigger="popover-button"
            :dismiss-on-select="true"
            size="auto"
          >
            <ion-content>
              <ion-list lines="none">
                <ion-item :button="true" :detail="false">
                  <ion-icon icon="/src/pictures/mdi_edit.svg"> </ion-icon>
                  Edit</ion-item
                >
                <ion-item :button="true" :detail="false"> <ion-icon icon="/src/pictures/fluent_delete-20-filled.svg"> </ion-icon>Delete</ion-item>
                <ion-item :button="true" id="nested-trigger"
                  >
                   <ion-icon icon="/src/pictures/pepicons-pop_leave-circle-filled.svg"> </ion-icon>Leave team</ion-item
                >
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonButton,
  IonIcon,
  IonPopover,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { ellipsisVertical } from "ionicons/icons";
</script>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-container h2 {
  /* Apply your styling for the title here */
  font-size: 1.5rem; /* Example size */
  font-weight: normal; /* Adjust as needed */
  margin: 0; /* Removes default margin */
}

ion-icon{
    margin-right: 8px;
}
</style>
