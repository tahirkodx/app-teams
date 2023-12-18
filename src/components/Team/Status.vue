<template>
  <div v-if="statusStore.teamHasDimScores(teamID)">
    <!--swiper-container
      :navigation="true"
      :centeredSlides="true"
      :grabCursor="true"
      :pagination="{clickable: true}"
      :modules="[Pagination]"
      slides-per-view="1"
      :loop="true"
      css-mode="true"
    >
      <swiper-slide><radar-status /></swiper-slide>
      <swiper-slide><leadership-board /></swiper-slide>
    </swiper-container-->
    <radar-status />
    <!--swiper>
      <swiper-slide>
        
      </swiper-slide>

      <swiper-slide>
        <line-status />
      </swiper-slide>

      <swiper-slide>
        <leadership-board />
      </swiper-slide>
    </swiper-->
  </div>
  <div v-else>
    <p>
      <i>No current scores available.</i>
    </p>
  </div>
</template>
  
  <script setup lang="ts">
    import { useRoute } from 'vue-router'
    import {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonLabel,
      IonItem,
      IonAccordion,
      IonAccordionGroup,
      IonIcon,
      IonGrid,
      IonRow,
      IonCol,
    } from '@ionic/vue';
    //import 'vue3-carousel/dist/carousel.css'
    //import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    //import { Swiper, SwiperSlide } from 'swiper/vue';
    //import 'swiper/css';

    // Import Swiper styles

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    // import required modules
// register Swiper custom elements



    import radarStatus from '@/components/Team/StatusRadar.vue'
    import lineStatus from '@/components/Team/StatusLine.vue'
    import leadershipBoard from '@/components/Team/StatusLeadershipBoard.vue'
    import TeamProgess from '@/components/Team/StatusTeamProgress.vue'
    import { useStatusStore } from '@/stores/status';
    import { fetchCurrent, teamID } from '@/stores/current';
    
    const statusStore = useStatusStore()

    await Promise.all([
      fetchCurrent,
    ])
  </script>
  