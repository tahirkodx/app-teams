<template>
    <Header />
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <h4 class="titleStyle">List Of Excercises</h4>
                </ion-col>
            </ion-row>
            <SearchBar />
        </ion-grid>
        <ion-grid>
            <ion-row>
                <ion-col></ion-col>
                <ion-col size="auto">
                    <div style="width: 123px">
                        <ion-button id="trigger-button" class="compact-filter-chip"
                            style="--background: white; --color: #000">
                            <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
                            <span class="text">Filters</span>
                        </ion-button>
                        <ion-popover trigger="trigger-button">
                            <ion-accordion-group>
                                <ion-accordion value="first">
                                    <ion-item slot="header" color="light">
                                        <ion-label class="ion-color">Frequency</ion-label>
                                    </ion-item>
                                    <div slot="content">
                                        <ion-list>
                                            <ion-radio-group>
                                                <ion-item>
                                                    <ion-radio label-placement="end" justify="start"
                                                        aria-label="Label">Once</ion-radio>
                                                </ion-item>
                                                <ion-item>
                                                    <ion-radio label-placement="end" justify="start" aria-label="Label">X
                                                        Times</ion-radio>
                                                </ion-item>
                                                <ion-item>
                                                    <ion-radio label-placement="end" justify="start"
                                                        aria-label="Label">Habitual</ion-radio>
                                                </ion-item>
                                            </ion-radio-group>
                                        </ion-list>
                                    </div>
                                </ion-accordion>
                                <ion-accordion value="second">
                                    <ion-item slot="header" color="light">
                                        <ion-label class="ion-color">Choice</ion-label>
                                    </ion-item>
                                    <div slot="content">
                                        <ion-list>
                                            <ion-radio-group>
                                                <ion-item>
                                                    <ion-radio label-placement="end" justify="start"
                                                        aria-label="Label">Individual</ion-radio>
                                                </ion-item>
                                                <ion-item>
                                                    <ion-radio label-placement="end" justify="start" aria-label="Label">
                                                        Teams</ion-radio>
                                                </ion-item>
                                            </ion-radio-group>
                                        </ion-list>
                                    </div>
                                </ion-accordion>
                                <ion-accordion value="thrid">
                                    <ion-item slot="header" color="light">
                                        <ion-label class="ion-color">Date</ion-label>
                                    </ion-item>
                                    <div slot="content">
                                        <ion-list>
                                            <ion-item>
                                                <ion-radio label-placement="end" justify="start" aria-label="Label">Date
                                                    <!-- Adil Please use your date picker component okay 
                                        mujy mil nae rh -->
                                                </ion-radio>
                                            </ion-item>
                                        </ion-list>
                                    </div>
                                </ion-accordion>
                            </ion-accordion-group>
                        </ion-popover>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>

        <div class="ion-padding">
            <ion-card>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <div class="ion-padding-horizontal headerTitle">
                                <h5>Exercise Topic</h5>
                            </div>
                        </ion-col>
                        <ion-col size="auto">
                            <div style="width: 40px">
                                <ion-icon class="ionIconCustom" src="/src/pictures/uil_arrow-right.svg" slot="end" size="large">
                                </ion-icon>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <div class="ion-padding ionText">
                    <ion-text>Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean
                        id.
                    </ion-text>
                </div>
            </ion-card>
        </div>
        <ion-button  @click="navigate" class="ion-padding" expand="block" fill="outline">SEARCH OTHER</ion-button>
    </ion-content>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonNote,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonList,
    IonPopover,
    IonFab,
    IonAccordion,
    IonAccordionGroup,
    IonCheckbox,
    IonRadio,
    IonRadioGroup,
    IonSelect,
    IonSelectOption,
    IonModal,
    IonDatetime,
    IonDatetimeButton,
    IonFabButton,
    IonSegmentButton,
    IonSegment,
    IonRange,
    IonBadge,
    IonText,
    IonProgressBar,
} from "@ionic/vue";
import {
    chevronForward,
    chevronBack,
    optionsOutline,
    chevronUpOutline,
    chevronDownOutline,
} from "ionicons/icons";
import { ref, defineComponent, onMounted } from "vue";
import Header from "@/components/Header/Header.vue";
import SearchBar from "@/components/Academy/SearchBar.vue";
import Date from "@/components/Widgets/DatePicker.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigate = () => {
  router.push({ name: "searchDetail" });
};
</script>

<style scoped>
.ion-color {
    color: gray;
    font-weight: bold;
}

.ion-button {
    --color: #yourColor;
}

.ionIconCustom {
    margin-top: 5px;
    margin-bottom: -12px;
}
.ionText{
margin-top: -30px;
color: #000;
}
.headerTitle{
    margin-left: -10px;
    color: #000;
}
</style>
