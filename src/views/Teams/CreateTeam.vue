<template>
  <ion-page>
    <Header />
    <ion-content>
      <p class="titleStyle ion-padding">Create New Team</p>
      <div class="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <ion-label>Enter team name:</ion-label>
              <ion-input
                type="text"
                v-model="teamName"
                required
                ref="teamInput"
                class="custom"
              ></ion-input>
              <span class="error">{{ errorTeam }}</span>
            </IonCol>
          </IonRow>
        </IonGrid>
        <ion-grid v-if="teamName">
          <ion-row class="align-items-center">
            <ion-col size="9">
              <ion-input
                type="email"
                ref="emailInput"
                v-model="email"
                class="custom"
                @ionInput="validate"
                placeholder="add member"
              >
                <!-- <ion-button fill="clear" slot="end" aria-label="Show/hide">
                  <ion-icon
                    slot="icon-only"
                    :icon="chevronUp"
                    aria-hidden="true"
                  ></ion-icon>
                </ion-button> -->
              </ion-input>
              <span class="error">{{ customErrorMessage }}</span>
            </ion-col>
            <ion-col size="3">
              <ion-button
                @click="addEmailToList"
                :disabled="shouldDisableButton"
                expand="block"
                >ADD</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <!-- <AddListMember /> -->
        <div v-if="teamName">
          <modalInfo />
          <ion-note>Help</ion-note>
        </div>
        <div v-if="membersList.length > 0">
          <AddTeam
            :members="membersList"
            :email="emailTemp"
            @updateMembers="handleUpdateMembers"
            :isVisible="modalVisible"
            @updateVisible="updateModalVisible"
          />
        </div>
        <!-- list for members -->
        <div class="member-list" v-if="membersList.length > 1">
          <ion-list>
            <ion-item
              v-for="(item, index) in membersList"
              :key="index"
              lines="full"
            >
              <ion-avatar slot="start">
                <img src="/src/pictures/listProfile.svg" />
              </ion-avatar>
              <ion-label>
                <h3>{{ item?.first_name + " " + item.last_name }}</h3>
              </ion-label>
              <ion-item>
                <ion-select
                  value="Member"
                  v-model="item.role"
                  class="select-member"
                >
                  <ion-select-option :value="1">Member</ion-select-option>
                  <ion-select-option :value="2">Leader</ion-select-option>
                  <ion-select-option :value="3">Coach</ion-select-option>
                  <ion-select-option :value="0">Visitor</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-icon
                slot="end"
                @click="removeMember(index)"
                :icon="closeOutline"
              ></ion-icon>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button @click="createTeam" class="ion-padding" expand="block"
          >CREATE TEAM</ion-button
        >
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTitle,
  IonPage,
  IonContent,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonButton,
  IonFooter,
  IonToolbar,
  IonIcon,
  IonSelectOption,
  IonNote,
  IonModal,
} from "@ionic/vue";
import { chevronForward, chevronUp, closeOutline } from "ionicons/icons";
import modalInfo from "@/components/Widgets/InfoModal.vue";
import AddTeam from "./AddTeam.vue";
import Header from "@/components/Header/Header.vue";
import { ref, onMounted } from "vue";
import router from "@/router/index";
import { emailValidate } from "@/utils/Helper";
import { useTeamStore, useUserStore } from "@/store";
import AddListMember from "./AddListMember.vue";
const userStore = useUserStore();
const teamStore = useTeamStore();
const modalVisible = ref(false);
const emailInput = ref(null);
const teamInput = ref(null);
const errorTeam = ref();
const customErrorMessage = ref();
const teamName = ref("");
const email = ref("");
const emailTemp = ref("");
const shouldDisableButton = ref(true);

const membersList = ref<any>([]);
const handleUpdateMembers = (updatedMembers: any) => {
  membersList.value = updatedMembers;
};

const addEmailToList = () => {
  const isEmailInList = membersList.value.some(
    (member: { email: string }) => member.email === email.value
  );
  if (membersList.value.length === 0) {
    const data = {
      email: userStore?.settings?.get("email"),
      first_name: userStore?.settings?.get("first_name"),
      last_name: userStore?.settings?.get("last_name"),
      role: 2,
    };
    membersList.value.push(data);
  }
  if (isEmailInList) {
    customErrorMessage.value = "Email is already in list";
  }
  if (email.value && emailValidate(email.value) && !isEmailInList) {
    modalVisible.value = true;
    emailTemp.value = email.value;
    email.value = "";
  } else {
    customErrorMessage.value = "Enter Email to add";
    return;
  }
};
const updateModalVisible = (newValue: boolean) => {
  modalVisible.value = newValue;
};
const createTeam = async () => {
  if (teamName.value) {
  } else {
    errorTeam.value = "Required team name";
    return;
  }
  console.log(membersList.value);
  const data = {
    members: membersList.value,
    name: teamName.value,
  };

  const res = await teamStore.createTeam(data);
  router.push({ name: "team" });
};
const validate = (ev: any) => {
  const value = ev.target.value;
  const inputElement = emailInput?.value?.$el;

  inputElement.classList.remove("ion-valid");
  inputElement.classList.remove("ion-invalid");

  if (value === "") {
    customErrorMessage.value = "Email is required";
    return;
  }

  if (emailValidate(value)) {
    inputElement.classList.add("ion-valid");
    customErrorMessage.value = ""; // No error message when valid
    shouldDisableButton.value = false;
  } else {
    inputElement.classList.add("ion-invalid");
    customErrorMessage.value = "Invalid Email Format"; // Custom error message when invalid
    shouldDisableButton.value = true;
  }
};
const removeMember = (index: number) => {
  console.log(index);
  console.log(membersList.value);
  membersList.value.splice(index, 1);
};
</script>

<style scoped>
.titleStyle {
  margin-top: 0px;
  margin-bottom: 0px;
  color: var(--black, #000);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

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
.error {
  color: #eb445a;
  font-size: 12px;
}
.select-member {
  width: 90px;
  max-width: 90px;
  /* Adjust the width as needed */
  min-height: 32px;
  background: var(--my-masg-background);
  --placeholder-opacity: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 8px;
  --border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
}
.button-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
}
.member-list {
  margin-top: 30px;
}

.align-items-center {
  display: flex;
  align-items: end;
}
</style>
