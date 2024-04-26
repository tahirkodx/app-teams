<template>
  <ion-page>
    <Header />
    <ion-content class="ion-padding">
      <div class="title-container">
        <h2>{{ teamStore?.teamMembers?.name }}</h2>
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
                <ion-item
                  :button="true"
                  @click="teamAction('edit')"
                  :detail="false"
                >
                  <ion-icon icon="/src/pictures/mdi_edit.svg"> </ion-icon>
                  Edit</ion-item
                >
                <ion-item
                  :button="true"
                  @click="teamAction('delete')"
                  :detail="false"
                >
                  <ion-icon icon="/src/pictures/fluent_delete-20-filled.svg">
                  </ion-icon
                  >Delete</ion-item
                >
                <ion-item
                  :button="true"
                  @click="teamAction('leave')"
                  id="nested-trigger"
                >
                  <ion-icon
                    icon="/src/pictures/pepicons-pop_leave-circle-filled.svg"
                  >
                  </ion-icon
                  >Leave team</ion-item
                >
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-icon>
      </div>

      <div class="team-member-container">
        <h6>Team Member:</h6>
        <h5>Total ({{ teamStore?.teamMembers?.members.length }})</h5>
        <p>New members will receive an invite to join on your behalf</p>
      </div>
      <div class="scrollable-list">
        <ion-list>
          <ion-item
            v-for="(member, index) in teamStore?.teamMembers?.members"
            :key="index"
            lines="full"
          >
            <ion-avatar slot="start">
              <img src="/src/pictures/listProfile.svg" />
            </ion-avatar>
            <ion-label>
              <h3>{{ member.first_name + " " + member.last_name }}</h3>
            </ion-label>
            <ion-item> </ion-item>
            <ion-button slot="end">
              {{
                member.role === 1
                  ? "Member"
                  : member.role === 2
                  ? "Leader"
                  : member.role === 3
                  ? "Coach"
                  : "Visitor"
              }}
            </ion-button>
            <!-- <ion-icon slot="end" :icon="closeOutline"></ion-icon> -->
          </ion-item>
        </ion-list>
      </div>
      <!-- <ion-infinite-scroll>
        <ion-infinite-scroll-content
          loading-text="Please wait..."
          loading-spinner="bubbles"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll> -->
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
  IonInfiniteScroll,
  IonInfiniteScrollContent,
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
import { closeOutline, ellipsisVertical, star } from "ionicons/icons";
import { ref } from "vue";
import { useUserStore, useTeamStore } from "@/store";
import router from "@/router/index";
const userStore = useUserStore();
const teamStore = useTeamStore();
const teamAction = (type: string) => {
  if (type === "leave") {
    console.log("leave");
    router.push({ name: "team" });
  } else if (type === "delete") {
    console.log("delete");
  } else {
    console.log("edit");
    router.push({ name: "editteam" });
  }
};
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

ion-icon {
  margin-right: 8px;
}

.team-member-container h6 {
  color: var(--black, #000);
  --font-family: "Cabin";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.team-member-container h5 {
  color: #808080;
  --font-family: "Cabin";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.team-member-container p {
  color: #808080;
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}
ion-button {
  border-radius: 5px;
  border: 0.5px solid #b1b1b4;
  --background: var(--tietiary, rgba(44, 58, 209, 0.5));
  --color: var(--white, #fff);
  font-family: "Cabin";
  font-size: 14px;
}
.scrollable-list {
  height: 600px;
  overflow-y: auto;
}
</style>
