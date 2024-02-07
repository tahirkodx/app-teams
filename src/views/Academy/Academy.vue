<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true">
      <h4 class="titleStyle">Academy</h4>

      <SearchBar />
      
         
       
      <div class="lesson-header">
        <div class="lesson-title">All Lessons</div>
        
        <ion-button id="trigger-button" class="compact-filter-chip" style="--background: white">
            <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
            <span class="text">Filters</span>
          </ion-button>
          <ion-popover trigger="trigger-button">
            
              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Academy Status</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-list>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange('all')">All</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange('completed')">Completed</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange('started')">Started</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange('notstarted')">Not Started</ion-checkbox>
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
                <ion-accordion value="second">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Duration</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-list>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange('all')">All</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange(15)">15 Mins</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange(30)">30 Mins</ion-checkbox>
                      </ion-item>
                      <ion-item >
                        <ion-checkbox label-placement="end" justify="start" aria-label="Label"
                        @ionChange="handleCheckboxChange(60)">1 hour above </ion-checkbox>
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            
          </ion-popover>
      </div>

      <LessonsCard />

      <ion-fab
        class="addStyle"
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSelect,
  IonSelectOption,
  IonItemGroup,
  IonList,
  IonLabel,
  IonPopover,
  IonItem,
  IonAccordionGroup,
  IonAccordion
} from "@ionic/vue";
import { informationCircleOutline ,chevronDownOutline,optionsOutline} from "ionicons/icons";
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import myMyModal from "@/components/VideoPlayerModal/VideoPlayerModal.vue";
import { useUserStore, useAcademyStore } from "@/store";
import SearchBar from "@/components/Academy/SearchBar.vue";
import LessonsCard from "@/components/Widgets/LessonCard.vue";
import { ref } from "vue";

const academyStore = useAcademyStore();
const handleCheckboxChange = (key : any) =>{
  console.log(key)
  academyStore.filteredAcademys(key)
}
await Promise.all([
  academyStore.getCourses(),
  academyStore.getCoursesScores(),
  academyStore.getCoursesStatus(),
]);
console.log("Satre: ", academyStore.courses.key);

</script>

<style scoped>
.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 16px;
}

.lesson-title {
  color: #303030;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 55px; /* 142.857% */
  letter-spacing: 0.1px;
}

.all-button {
  color: #8b8b8b;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  --background: #f7f7f7; /* Set your desired background color */
  --background-activated: grey; /* Background color for activated state */
  --background-focused: grey; /* Background color for focused state */
  --background-hover: grey; /* Background color for hover state */
  --border-radius: 8px; /* Adjust border-radius as needed */
  --color: #8b8b8b; /* Text color */
}

.titleStyle {
  color: var(--Neutrals-black, #303030);
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin-top: 25px;
  margin-bottom: 0px;
  padding-left: 16px;
  font-style: normal;
}

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}
/* new code */


ion-button {
  --color: #yourColor;
  /* Replace with your icon color */
}






.ion-color {
  color: gray;
  font-weight: bold;
}



.compact-filter-chip {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  float: inline-end;
  width: 107px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  border: 0px solid #8b8b8b;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.compact-filter-chip:hover {
  background: #f0f0f0;
  /* Change the background on hover */
}
</style>
