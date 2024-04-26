<template>
  <ion-page>
    <Header is-back-button />
    <ion-content :fullscreen="true">
      <h3 class="main-title ion-padding">Notification settings</h3>
      <span class="desc-text ion-padding"
        >For important updates regarding your Epicus activities.</span
      >

      <div class="notification-content">
        <div class="bg-gray">
          <ion-list lines="none">
            <ion-item>
              <ion-label class="ion-text-wrap">
                <h2>All notifications</h2>
                <p>Enabled</p>
              </ion-label>
              <ion-toggle
                slot="end"
                color="success"
                :checked="true"
              ></ion-toggle>
            </ion-item>

            <ion-item>
              <ion-label class="ion-text-wrap">
                <h2>Push notifications</h2>
                <p>Enabled</p>
              </ion-label>
              <ion-toggle
                slot="end"
                color="success"
                :checked="true"
              ></ion-toggle>
            </ion-item>
          </ion-list>
        </div>

        <ion-list lines="none">
          <ion-item>
            <ion-checkbox class="checkbox-text" justify="space-between"
              >Show messages on opening</ion-checkbox
            >
          </ion-item>
          <ion-item>
            <ion-checkbox class="checkbox-text" justify="space-between"
              >Send new survey emails</ion-checkbox
            >
          </ion-item>
          <ion-item>
            <ion-checkbox
              :checked="true"
              class="checkbox-text"
              justify="space-between"
              >Send new survey SMS</ion-checkbox
            >
          </ion-item>
          <ion-item>
            <ion-checkbox
              :checked="true"
              class="checkbox-text"
              justify="space-between"
              >Send new survey results notifications</ion-checkbox
            >
          </ion-item>
          <ion-item>
            <ion-checkbox class="checkbox-text" justify="space-between"
              >Available as coach</ion-checkbox
            >
          </ion-item>
          <ion-item>
            <ion-checkbox class="checkbox-text" justify="space-between"
              >Available for exercise questions</ion-checkbox
            >
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="ion-padding">
      <div class="ion-padding-vertical">
        <div class="footer-label">
          <span>Alert Frequency</span>
        </div>
        <ion-accordion-group>
          <ion-accordion value="first">
            <ion-item lines="none" slot="header" color="light">
              <ion-label>Immediate</ion-label>
            </ion-item>
          </ion-accordion>
        </ion-accordion-group>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonFooter,
  IonContent,
  IonLabel,
  IonGrid,
  IonCol,
  IonAvatar,
  IonInput,
  IonButton,
  IonToggle,
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
</script>

<style scoped>
.main-title {
  margin-bottom: 5px;
}

.desc-text {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
}

.bg-gray {
  --ion-item-background: #f2f2f2;
}

.notification-content {
  background-color: #f2f2f2;
  /* height: 140px; */
  margin-top: 24px;
}

.footer-label {
  padding-bottom: 18.5px;
}

.checkbox-text {
  color: var(--off-grey, #959ea3);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
}

.checkbox-icon {
  height: 18px;
  width: 18px;
}
</style>
