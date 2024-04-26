<template>
  <ion-page>
    <Header is-back-button />
    <ion-content :fullscreen="true" class="ion-padding">
      <h3>Profile edit</h3>
      <div class="ion-text-center ion-justify-content-center">
        <div class="profile-picture-container">
          <ion-avatar class="profile-avatar">
            <img src="/src/pictures/ProfileNotif2.png" />
          </ion-avatar>
          <ion-button fill="clear" class="change-profile-btn">
            <ion-icon slot="start" icon="/src/pictures/Camera.svg"></ion-icon>
            Change profile picture
          </ion-button>
          <input
            type="file"
            accept="image/*"
            @change="changeProfilePicture"
            hidden
            ref="fileInput"
          />
        </div>
      </div>
      <div class="title-line"></div>

      <div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>
                <div class="ion-padding-vertical">
                  <ion-item lines="none" slot="header" color="light">
                    <ion-input placeholder="First name:"> </ion-input>
                  </ion-item>
                </div>
                <div class="ion-padding-vertical">
                  <ion-item slot="header" color="light">
                    <ion-input placeholder="Last name:"> </ion-input>
                  </ion-item>
                </div>
                <div class="ion-padding-vertical">
                  <ion-item slot="header" color="light">
                    <ion-input type="email" placeholder="Email:"> </ion-input>
                  </ion-item>
                </div>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="auto">
              <div style="width: 150px">
                <ion-accordion-group>
                  <ion-accordion value="first">
                    <ion-item lines="none" slot="header" color="light">
                      <ion-img
                        class="iconEarth"
                        src="/src/pictures/Frame 2609497.svg"
                      ></ion-img>
                      <ion-label>+245</ion-label>
                    </ion-item>
                  </ion-accordion>
                </ion-accordion-group>
              </div>
            </ion-col>
            <ion-col>
              <div>
                <ion-item lines="none" color="light">
                  <ion-input placeholder="Phone:"> </ion-input>
                </ion-item>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-padding-vertical">
                <ion-accordion-group>
                  <ion-accordion value="first">
                    <ion-item lines="none" slot="header" color="light">
                      <ion-img
                        class="iconEarth"
                        src="/src/pictures/Global.svg"
                      ></ion-img>
                      <ion-label>Timezone</ion-label>
                    </ion-item>
                  </ion-accordion>
                </ion-accordion-group>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
    <ion-footer class="ion-padding">
      <ion-button @click="navigateFunction" expand="block"
        >SAVE PROFILE</ion-button
      >
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonFooter,
  IonContent,
  IonLabel,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonInput,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { cameraOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import CountryFlag from "vue-country-flag-next";
import router from "@/router/index";

const fileInput = ref<HTMLInputElement | null>(null);

const changeProfilePicture = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      // This is the data URL of the uploaded image
      const imageUrl = e.target?.result;
      // TODO: Handle the upload process as needed
    };

    fileReader.readAsDataURL(file);
  }
};

const navigateFunction = () => {
  router.push({ name: "profilenotification" });
};
const openFileInput = () => {
  fileInput.value?.click();
};
</script>

<style scoped>
.profile-picture-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.change-profile-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
}

ion-icon {
  margin-right: 8px;
}
.iconEarth {
  margin-right: 8px;
  margin-top: 2px;
}
.title-line {
  border-bottom: 1px solid rgba(249, 238, 238, 0.95);
  margin-top: 5px;
  margin-bottom: 24px;
  width: auto;
}
</style>
