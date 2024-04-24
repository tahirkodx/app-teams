<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding">
                        <div class="text-container flex ion-justify-content-between">
                            <h1>Messages</h1>
                            <ion-select v-model="teamSelected" interface="popover" placeholder="All Messages"
                                class="header-select">
                                <ion-select-option value="All Messages">All Messages</ion-select-option>
                                <ion-select-option value="Request Help">Request Help</ion-select-option>
                                <ion-select-option value="Emergency SOS">Emergency SOS</ion-select-option>
                            </ion-select>
                        </div>
                        <div v-if="teamSelected === 'All Messages'">
                            <ion-grid>
                                <IonRow>
                                    <ion-col>
                                        <div class="text-container flex ion-justify-content-between">
                                            <ion-text class="text-lg">All Messaages<span>(100)</span></ion-text>
                                            <ion-button id="trigger-button" side="bottom" size="cover">
                                                <ion-icon :icon="optionsOutline"></ion-icon>
                                                <ion-popover trigger="trigger-button">
                                                    <ion-accordion-group>
                                                        <ion-accordion value="first" :toggle-icon="close">
                                                            <ion-item slot="header" color="light">
                                                                <ion-label>Sort by:</ion-label>
                                                            </ion-item>
                                                            <div class="ion-padding"
                                                                v-for="(item, index) in accordionItems" :key="index"
                                                                slot="content">
                                                                {{ item }}
                                                            </div>
                                                        </ion-accordion>
                                                        <div class="ion-padding-vertical ion-padding-start">Add to
                                                            favourites</div>
                                                        <div class=" ion-padding-start">Archive</div>
                                                        <div class="ion-padding">Delete chat</div>
                                                    </ion-accordion-group>
                                                </ion-popover>
                                            </ion-button>
                                        </div>
                                        <div>
                                            <IonList>
                                                <IonItem v-for="(item, index) in items" :key="index">
                                                    <ion-img :src="item.imageUrl" />
                                                    <IonLabel class="text-size ion-padding-start">
                                                        <ion-text>
                                                            <h6>
                                                                {{ item.name }}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="3"
                                                                    height="4" viewBox="0 0 2 2" fill="none">
                                                                    <circle cx="1" cy="1" r="1" fill="#2C3AD180" />
                                                                </svg>
                                                                <span class="custom-color">{{ item.role }}</span>
                                                            </h6>
                                                            <h5 :style="{ color: item.color }">{{ item.description }}
                                                            </h5>
                                                            <h6 class="flex ion-justify-content-between text-dark">
                                                                {{ item.extraInfo }}
                                                                <ion-badge slot="end" v-if="item.badgeCount">{{item.badgeCount }}</ion-badge>
                                                            </h6>
                                                        </ion-text>
                                                        <ion-text class="text-small ion-text-end flex">{{ item.time }}
                                                            <ion-icon :icon="checkmarkDone"
                                                                class="w-sm"></ion-icon></ion-text>
                                                    </IonLabel>
                                                    <div class="icon-container">
                                                        <ion-icon :icon="ellipsisVerticalOutline"
                                                            class="icon"></ion-icon>
                                                    </div>
                                                </IonItem>
                                            </IonList>
                                        </div>
                                    </ion-col>
                                </IonRow>
                            </ion-grid>
                        </div>
                        <div v-if="teamSelected === 'Request Help'">
                            <ion-grid>
                                <IonRow>
                                    <ion-col>
                                        <div class="text-container flex ion-justify-content-between">
                                            <ion-text class="text-lg">Request Help Messages<span>(5)</span></ion-text>
                                            <ion-button id="trigger-button" side="bottom" size="cover">
                                                <ion-icon :icon="optionsOutline"></ion-icon>
                                                <ion-popover trigger="trigger-button">
                                                    <ion-accordion-group>
                                                        <ion-accordion value="first" :toggle-icon="close">
                                                            <ion-item slot="header" color="light">
                                                                <ion-label>Sort by:</ion-label>
                                                            </ion-item>
                                                            <div class="ion-padding"
                                                                v-for="(item, index) in accordionItems" :key="index"
                                                                slot="content">
                                                                {{ item }}
                                                            </div>
                                                        </ion-accordion>
                                                    </ion-accordion-group>
                                                </ion-popover>
                                            </ion-button>
                                        </div>
                                        <div>
                                            <IonList>
                                                <IonItem v-for="(item, index) in items" :key="index">
                                                    <ion-img :src="item.imageUrl" />
                                                    <IonLabel class="text-size ion-padding-start">
                                                        <ion-text>
                                                            <h6>
                                                                {{ item.name }}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="3"
                                                                    height="4" viewBox="0 0 2 2" fill="none">
                                                                    <circle cx="1" cy="1" r="1" fill="#2C3AD180" />
                                                                </svg>
                                                                <span class="custom-color">{{ item.role }}</span>
                                                            </h6>
                                                            <h6 :style="{ color: item.color }">{{ item.description }}
                                                            </h6>
                                                            <h6 class="flex ion-justify-content-between text-dark">
                                                                {{ item.extraInfo }}
                                                                <ion-badge slot="end" v-if="item.badgeCount">{{item.badgeCount }}</ion-badge>
                                                            </h6>
                                                        </ion-text>
                                                        <ion-text class="text-small ion-text-end flex">{{ item.time }}
                                                            <ion-icon :icon="checkmarkDone"
                                                                class="w-sm"></ion-icon></ion-text>
                                                    </IonLabel>
                                                    <div class="icon-container">
                                                        <ion-icon :icon="ellipsisVerticalOutline"
                                                            class="icon"></ion-icon>
                                                    </div>
                                                </IonItem>
                                            </IonList>
                                        </div>
                                    </ion-col>
                                </IonRow>
                            </ion-grid>
                        </div>
                        <div v-if="teamSelected === 'Emergency SOS'">
                            <ion-grid>
                                <IonRow>
                                    <ion-col>
                                        <div class="text-container flex ion-justify-content-between">
                                            <ion-text class="text-lg">SOS Messages<span>(5)</span></ion-text>
                                            <ion-button id="trigger-button" side="bottom" size="cover">
                                                <ion-icon :icon="optionsOutline"></ion-icon>
                                                <ion-popover trigger="trigger-button">
                                                    <ion-accordion-group>
                                                        <ion-accordion value="first" :toggle-icon="close">
                                                            <ion-item slot="header" color="light">
                                                                <ion-label>Sort by:</ion-label>
                                                            </ion-item>
                                                            <div class="ion-padding"
                                                                v-for="(item, index) in accordionItems" :key="index"
                                                                slot="content">
                                                                {{ item }}
                                                            </div>
                                                        </ion-accordion>
                                                    </ion-accordion-group>
                                                </ion-popover>
                                            </ion-button>
                                        </div>
                                        <div>
                                            <IonList>
                                                <IonItem v-for="(item, index) in items" :key="index">
                                                    <ion-img :src="item.imageUrl" />
                                                    <IonLabel class="text-size ion-padding-start">
                                                        <ion-text>
                                                            <h6>
                                                                {{ item.name }}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="3"
                                                                    height="4" viewBox="0 0 2 2" fill="none">
                                                                    <circle cx="1" cy="1" r="1" fill="#2C3AD180" />
                                                                </svg>
                                                                <span class="custom-color">{{ item.role }}</span>
                                                            </h6>
                                                            <h5 :style="{ color: item.color }">{{ item.description }}
                                                            </h5>
                                                            <h6 class="flex ion-justify-content-between text-dark">
                                                                {{ item.extraInfo }}
                                                                <ion-badge slot="end" v-if="item.badgeCount">{{
                                                                    item.badgeCount }}</ion-badge>
                                                            </h6>
                                                        </ion-text>
                                                        <ion-text class="text-small ion-text-end flex">{{item.time}}
                                                            <ion-icon :icon="checkmarkDone"
                                                                class="w-sm"></ion-icon></ion-text>
                                                    </IonLabel>
                                                    <div class="icon-container">
                                                        <ion-icon :icon="ellipsisVerticalOutline"
                                                            class="icon"></ion-icon>
                                                    </div>
                                                </IonItem>
                                            </IonList>
                                        </div>
                                    </ion-col>
                                </IonRow>
                            </ion-grid>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonHeader,
    IonSelect,
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
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonPage,
    IonSelectOption,
    IonBadge
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import {
    optionsOutline,
    ellipsisVerticalOutline,
    close,
    checkmarkDone
} from "ionicons/icons";
const teamSelected = ref('All Messages');
const accordionItems = ['Unread', 'Favourites', 'Archived',]
const items = [
    {
        imageUrl: "/src/pictures/Ellipse 449.svg",
        name: "Theresa Webb",
        role: "Coach",
        description: "You: Lorem ipsum dolor sit amet",
        extraInfo: "consectetur. Iaculis vitae eu aenean ne...",
        time: "07:42PM"
    },
    {
        imageUrl: "/src/pictures/Ellipse 449.svg",
        name: "Theresa Webb",
        role: "Coach",
        description: "Dimensions selected: Conflicts",
        extraInfo: "consectetur. Iaculis vitae eu aenean ne...",
        time: "07:42PM",
        color: "#2C3AD180"
    },
    {
        imageUrl: "/src/pictures/Ellipse 449.svg",
        name: "Theresa Webb",
        role: "Coach",
        description: "SOS",
        extraInfo: "consectetur. Iaculis vitae eu aenean ne...",
        time: "07:42PM",
        color: "#2C3AD180"
    },
    {
        imageUrl: "/src/pictures/Ellipse 449.svg",
        name: "Theresa Webb",
        role: "Coach",
        description: "You: Lorem ipsum dolor sit amet",
        extraInfo: "consectetur. Iaculis vitae eu aenean ne...",
        time: "07:42PM",
        badgeCount: 2
    },
    {
        imageUrl: "/src/pictures/Ellipse 449.svg",
        name: "Theresa Webb",
        role: "Coach",
        description: "You: Lorem ipsum dolor sit amet",
        extraInfo: "consectetur. Iaculis vitae eu aenean ne...",
        time: "07:42PM"
    },
];
</script>

<style scoped>
ion-list {
    margin-left: -20px;
}

ion-img {
    margin-top: -25px;
}

ion-icon {
    width: 24px;
    height: 24px;
}

ion-button {
    --color: yourcolor;
    --background: none;
    --box-shadow: none;
}

ion-item {
    --border-style: none;
    border-bottom: 1px solid #F2F2F2;
}

ion-badge {
    border-radius: 100px;
    background: var(--secondary, #FF8512);
    width: 16px;
    height: 16px;
    padding: 2px;
    margin-right: -20px;
}

.header-select {
    width: 127px;
    max-width: 100px;
    min-height: 32px;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(51, 51, 51, 0.30);
    --placeholder-opacity: 1;
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 5px;
    --border: none;
    color: #8B8B8B;
    font-size: 14px;

}

.text-container {
    align-items: center;
}

.flex {
    display: flex;
}

.text-dark {
    color: #696969;
}

.text-lg {
    font-size: 14px;
    margin-left: -10px;
}

.text-lg span {
    color: #999;
}

.w-sm {
    width: 16px;
    height: 16px;
    color: #219E53;
    margin-left: 8px;
    margin-top: -2px;
}

.icon-size {
    height: 12px;
    width: 56px
}

.ion-text-end {
    margin-left: auto;
    width: 86px;
    height: 24px;
    margin-right: -40px;
    margin-bottom: -13px;
}

.icon-container {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #F2F2F2;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: -48px;
}

.icon {
    width: 26px;
    height: 12px;
}

.custom-color {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
}

.text-small {
    color: var(--off-grey, #959EA3);
    font-family: Manrope;
    font-size: 12px;
}
</style>