<template>
    <ion-accordion-group :multiple="true" :value="['video', 'description', 'details']">

      <!-- Effect (only if prop data is given)-->
      <ion-accordion value="effect" v-if="props.data">
        <ion-item slot="header" color="light">
          <ion-label>Expected effect</ion-label>
        </ion-item>  
        <div class="ion-padding" slot="content"><Radar :data="props.data" /></div>
      </ion-accordion>

      <!-- Video (only if video is available)-->
      <ion-accordion value="video" v-if="play.video !== null">
        <ion-item slot="header" color="light">
          <ion-label>Video</ion-label>
        </ion-item>  
        <div class="ion-padding" slot="content">
          <video width="320" height="240" controls>
            <source :src="play.video">
          Your browser does not support the video tag.
          </video>
        </div>
      </ion-accordion>

      <!-- Description -->
      <ion-accordion value="description">
        <ion-item slot="header" color="light">
          <ion-label>Description</ion-label>
        </ion-item>  
        <div class="ion-padding" slot="content"><div v-html="converter.makeHtml(play.description)"></div></div>
      </ion-accordion>

      <!-- Details -->
      <ion-accordion value="details">
        <ion-item slot="header" color="light">
          <ion-label>Details</ion-label>
        </ion-item> 
        <div class="ion-padding" slot="content">
          <p>Play type: {{ choiceToString(play.when) }}</p>
          <p>More information: <a :href="play.information_url">{{ play.information_text }}</a></p>          
        </div>
      </ion-accordion>


    </ion-accordion-group>
</template>

<script setup lang="ts">
  import {
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
  } from '@ionic/vue';
  import showdown from 'showdown'
  import Radar from '@/components/Radar.vue'
  import { choiceToString } from '@/utils/choices';

  const props = defineProps(['play', 'data'])
  const play = props.play

  var converter = new showdown.Converter()

</script>
