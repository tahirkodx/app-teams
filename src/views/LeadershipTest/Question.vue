<template>
  <ion-content>
    <ion-header>
      <Header />
    </ion-header>
    <ProgressBar :tempIndex="1" :data="10" :showLabel="true" />
    <ion-row>
      <ion-col class="ion-padding ion-margin-top">
        <ion-text>
          <h3 class="ion-text-center">Finish the sentence</h3>
          <div class="ion-border-bottom"></div>
          <h6 class="ion-margin-bottom ion-padding-top">
            When a child will not join in group activities...
          </h6>
          <IonTextarea
            aria-label="Comments"
            placeholder="Complete the sentence here..."
            :rows="7"
          >
          </IonTextarea>
          <div class="button-custom ion-margin-top">
            <ion-button size="default" fill="outline" class="button-size btn-sm"
              >Previous</ion-button
            >
            <ion-button
              @click="handleNavigate"
              size="default"
              class="button-size"
              >NEXT</ion-button
            >
          </div>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import {
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
  IonContent,
  IonTextarea,
  IonHeader,
} from "@ionic/vue";
// import router from "@/router/index";
import { useRouter } from "vue-router";
const router = useRouter();
function handleNavigate() {
  router.push({ name: "result" });
}
</script>
<style scoped>
.text-sm {
  margin-top: 100px;
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 22px;
  line-height: 28px;
}

.text-sm {
  color: #f2f2f2;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50px;
  right: 20px;
}

ion-textarea {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 10px;
}

.button-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  gap: 40px;
}

.ion-border-bottom {
  border-bottom: 1px solid #f2f2f2;
  margin-top: 18px;
  margin-left: -10px;
  margin-right: -10px;
}

.button-size {
  width: 100%;
  border-radius: 5px;
}

.btn-sm {
  /* color: #cccccccc; */
  /* border: 1px solid #CCCCCCCC; */
}
</style>
