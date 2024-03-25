<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <div class="yuy ion-padding flex">
                    <ion-text class="text-lg">Welcome On Board</ion-text>
                    <ion-text class="text-sm">This is your onboarding checklist</ion-text>
                    <ion-icon :icon="close" class="close-icon"></ion-icon>
                </div>
                <div class="ion-padding">
                    <ProgressBar />
                </div>
                <ion-list class="ion-padding">
                    <ion-text class="text-sm text-dark">
                        Teams Flow
                    </ion-text>
                    <div class="checkbox-container flex">
                        <ion-checkbox label-placement="end">
                            <ion-label class="text-sm">Create a new team</ion-label>
                            <ion-icon :icon="arrowForwardOutline" slot="end"></ion-icon>
                        </ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Send out a
                                survey</span></ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Schedule future
                                survey</span></ion-checkbox>
                    </div>
                </ion-list>
                <ion-list class="ion-padding">
                    <ion-text class="text-sm text-dark">
                        Personal Flow
                    </ion-text>
                    <div class="checkbox-container flex">
                        <ion-checkbox label-placement="end"> <span class="text-sm">Take your leadership
                                test</span></ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Set change
                                commitments</span></ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Create your big 5
                                profile</span></ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Add exercise</span></ion-checkbox>
                        <ion-checkbox label-placement="end"> <span class="text-sm">Visit academy</span></ion-checkbox>
                    </div>
                </ion-list>
                <ion-text class="ion-text-end text-md">
                    <h6>SKIP FOR LATER</h6>
                </ion-text>
            </ion-col>
        </ion-row>
    </ion-grid>

</template>
<script setup lang="ts">
import { ref } from "vue";
import {
    IonIcon,
    IonList,
} from "@ionic/vue";
import { close, arrowForwardOutline } from "ionicons/icons";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
</script>

<style scoped>
ion-checkbox {
    --border-radius: 50%;
}

.flex {
    display: flex;
}

.yuy {
    flex-direction: column;
    gap: 4px;
    position: relative;
}

.text-lg {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 22px;
    line-height: 28px;
}

.text-sm {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}

.text-dark {
    color: var(--black, #000);
}

.close-icon {
    position: absolute;
    top: 15px;
    right: 12px;
    font-size: 24px;
    cursor: pointer;
    widows: 24px;
    height: 24px;

}

.checkbox-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-top: 26px;
    position: relative;
}

.ion-margin-start {
    margin-left: 180px;
}

.text-md {
    color: #757575;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.75px;
    text-transform: uppercase;
}
</style>
