<template>
    <ion-menu content-id="main-content">
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button>
                    <ion-icon :icon="closeSharp" class="icon-color"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title></ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
            <ion-img src="/src/pictures/Ellipse 448.svg" alt="Finished Success"></ion-img>
            <IonLabel class="text-md">
                <h1>Cameron Williamson</h1>
                <h4>HR Manager at Google</h4>
                <h6>United Kingdom (GMT)</h6>
            </IonLabel>
            <div class="ion-border-bottom"></div>
            <ion-list>
                <ion-label class="label-with-icon ion-padding" @click="handleChange('Profile')">
                    <ion-icon :icon="personCircleOutline"></ion-icon>
                    Profile
                    <ion-icon v-if="selectedOption === 'Profile'" :icon="arrowDown"></ion-icon>
                </ion-label>
                <ion-label class="label-with-icon ion-padding" @click="handleChange('Personal')">
                    <ion-icon :icon="personCircleOutline"></ion-icon>
                    Personal
                    <ion-icon v-if="selectedOption === 'Personal'" :icon="arrowDown" color="tertiary"></ion-icon>
                </ion-label>
                <ion-label class="label-with-icon ion-padding" @click="handleChange('Buddies')">
                    <ion-icon :icon="peopleOutline"></ion-icon>
                    Buddies
                    <ion-icon v-if="selectedOption === 'Buddies'" :icon="arrowDown"></ion-icon>
                </ion-label>
                <ion-label class="label-with-icon ion-padding" @click="handleChange('Teams')">
                    <ion-icon :icon="personAddOutline"></ion-icon>
                    Teams
                    <ion-icon v-if="selectedOption === 'Teams'" :icon="arrowDown"></ion-icon>
                </ion-label>
                <ion-label class="label-with-icon ion-padding" @click="handleChange('Settings')">
                    <ion-icon :icon="settingsOutline"></ion-icon>
                    Settings
                    <ion-icon v-if="selectedOption !== 'Settings'" :icon="arrowDown" color="tertiary"></ion-icon>
                </ion-label>
                <div class="ion-border-bottom"></div>
            </ion-list>
            <div v-if="selectedOption === 'Buddies'"></div>
            <div v-if="selectedOption === 'Teams'">
                <ion-grid>
                    <ion-row>
                        <ion-col class="heading-text">
                            <h5>Shortcuts for Teams</h5>
                            <h6>Surveys</h6>
                            <h6>Status</h6>
                            <h6>Teams Statistics</h6>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <div v-if="selectedOption === 'Personal'">
                <ion-grid>
                    <ion-row>
                        <ion-col class="heading-text">
                            <h5>Shortcuts for personal</h5>
                            <h6>Big 5 profile</h6>
                            <h6>Leadership level test</h6>
                            <h6>Change status assessment</h6>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
        <div class="ion-border-bottom"></div>
        <ion-label class="label-with-icon ion-padding text-color">
            <ion-img src="/src/pictures/logout.svg" alt="Finished Success" class="img-size"></ion-img>
            Log Out
        </ion-label>
    </ion-menu>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">Tap the button in the toolbar to open the menu.</ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import { closeSharp, personCircleOutline, settingsOutline, personAddOutline, peopleOutline, arrowDown, logOutOutline } from 'ionicons/icons';
export default {
    setup() {
        const selectedOption = ref("Settings");
        const handleChange = (option) => {
            selectedOption.value = option;
            console.log("Current value:", option);
        };
        return {
            closeSharp,
            peopleOutline,
            selectedOption,
            personCircleOutline,
            personAddOutline,
            settingsOutline,
            arrowDown,
            logOutOutline,
            handleChange
        };
    }
};
</script>
  
<style scoped>
ion-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

ion-header {
    box-shadow: none;
}

ion-img {
    width: 100px;
    height: 100px;
}

ion-menu {
    --width: 100%;
}

.img-size {
    height: 24px;
    width: 24px;

}

.icon-color {
    color: #94A3B8;
}

.text-md h1 {
    color: #000;
    font-size: 16px;
    font-weight: 500;
}

.text-md h4 {
    color: var(--off-grey, #959EA3);
    font-size: 13px;
    margin-top: -4px;
}

.text-md h6 {
    color: #333;
    font-size: 10px;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    padding: 5px;
    width: 110px;
    margin-top: -2px;
}

.ion-border-bottom {
    border-bottom: 1px solid #F2F2F2;
    margin-top: 18px;
    margin-left: -10px;
    margin-right: -10px;
}

.label-with-icon {
    color: #4D4D4D;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
}

.label-with-icon:hover,
.label-clicked {
    color: var(--main-green, #A5CE3E);
}

.text-color {
    color: #FF8512;
}

.heading-text h6 {
    font-size: 14px;
    color: #4D4D4D;
    font-style: normal;
    letter-spacing: 0.1px;
}

.heading-text h5 {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 14px;
}
</style>
  