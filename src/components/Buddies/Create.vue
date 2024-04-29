<template>
  <div class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col size="10">
          <ion-input
            type="email"
            ref="emailInput"
            class="custom"
            placeholder="Add new member:"
          >
          </ion-input>
          <!-- <span class="error">{{ customErrorMessage }}</span> -->
        </ion-col>
        <ion-col size="2" class="ion-btn-col">
          <ion-button expand="block" class="cutom-button" @click="toggleModal"
            >ADD</ion-button
          >
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  <div class="cus-padding">
    <ion-grid>
      <ion-row>
        <ion-text>
          <p class="text-title-main">Team member you may know</p>
        </ion-text>
      </ion-row>

      <div class="grid-cutom">
        <div
          size="6"
          v-for="(item, index) in data"
          :key="index"
          @click="
            () =>
              router.push({
                name: 'teamTopic',
                params: { topicid: index + 872349246 },
              })
          "
        >
          <ion-card class="ion-no-padding">
            <img
              alt="Silhouette of mountains"
              src="/src/pictures/Ellipse1.svg"
              class="customImg"
            />

            <ion-card-title class="text-title">{{ item.name }}</ion-card-title>

            <ion-card-content class="ion-no-padding">
              <p class="role">{{ item.desc }}</p>
              <p class="location">{{ item.city }}</p>
              <ion-button expand="block">INVITE</ion-button>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-grid>
  </div>

  <div>
    <AddTeam :members="[]" :email="''" :isVisible="modalVisible" />
  </div>
</template>

<script setup lang="ts">
import {
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonImg,
  IonPopover,
  IonText,
  IonGrid,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonInput,
} from "@ionic/vue";
import {
  optionsOutline,
  ellipsisVerticalOutline,
  chatbubbleEllipses,
} from "ionicons/icons";
import { ref, onMounted } from "vue";
import AddTeam from "../../views/Teams/AddTeam.vue";
import router from "@/router/index";

const modalVisible = ref(false);

const data = [
  {
    name: "Albert Flores",
    desc: "HR Manager at Google",
    city: "United Kingdom (GMT)",
  },
  {
    name: "Marvin McKinney",
    desc: "HR Manager at Google",
    city: "United Kingdom (GMT)",
  },
  {
    name: "Kristin Watson",
    desc: "HR Manager at Google",
    city: "United Kingdom (GMT)",
  },
  {
    name: "Eleanor Pena",
    desc: "HR Manager at Google",
    city: "United Kingdom (GMT)",
  },
];

function toggleModal() {
  // Implement your logic to toggle the modal visibility here
  modalVisible.value = !modalVisible.value;
}
</script>

<style scoped>
.ion-icon {
  color: #303030;
}
ion-card {
  margin: 0px;
  padding: 12px 20px;
  text-align: center;
}
ion-card-title {
  color: #000;

  text-align: center;
  font-family: Cabin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}
.role {
  color: var(--off-grey, #959ea3);
  text-align: center;
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  height: 100%;
}
ion-input {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-start: 10px;
}
.customImg {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.location {
  display: flex;
  padding: 2px 2px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #f2f2f2;
  color: #333;
  text-align: center;
  font-family: Cabin;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
  margin-bottom: 8px;
}

.cutom-button {
  --background: #f2f2f2;
  color: #4d4d4d;
  height: 44px;
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  --box-shadow: 0 0 0;
}

.ion-btn-col {
  padding: 0;
}

ion-grid {
  padding: 0;
}

.text-title {
  color: #303030;

  /* mobile/Title small */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

.text-title {
  color: #000;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 2px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.grid-cutom {
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;
}

.text-title-main {
  margin-top: 0;
}

.cus-padding {
  padding: 0 16px 16px 16px;
}
</style>
