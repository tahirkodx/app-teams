<template>
  <div class="video-container" v-if="props.play">
    <video
      width="100%"
      ref="videoElement"
      class="video-player"
      @play="onPlay"
      @pause="onPause"
      @volumechange="onVolumeChange"
      @timeupdate="updateTime"
      @loadedmetadata="onLoadedMetadata"
    >
      <!-- You can place a source tag here or set the src attribute directly -->
      <source :src="props.play" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <!-- Play/Pause Toggle Button -->
      <div class="control-outer">
        <div class="control-inner">
          <ion-button @click="togglePlayPause">
            <ion-icon :icon="state.isPlaying ? pauseIcon : playIcon"></ion-icon>
          </ion-button>
          <span class="time-display">
            {{ currentTimeFormatted }} / {{ durationFormatted }}
          </span>
        </div>
        <!-- Mute/Unmute Toggle Button -->
        <div class="control-inner">
          <ion-button @click="toggleMute">
            <ion-icon
              :icon="state.isMuted ? volumeOffIcon : volumeHighIcon"
            ></ion-icon>
          </ion-button>
          <!-- Fullscreen Toggle Button -->
          <ion-button slot="end" @click="fastForward">
            <ion-icon :icon="refreshOutline"></ion-icon>
          </ion-button>
        </div>
      </div>
      <ion-range
        :min="0"
        :max="duration"
        :step="0.1"
        :value="currentTime"
        @ionChange="seekVideo($event)"
      ></ion-range>

      <!-- Other controls like Fullscreen, SeekBar etc. -->
      <!-- Add here -->
    </div>
  </div>
  <div v-else class="no-video">
    <div>
      <ion-icon
        class="no-video-icon"
        src="/src/pictures/no-video.svg"
      ></ion-icon>
    </div>
    <div>No Video Available to play</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import {
  IonButton,
  IonIcon,
  IonRange,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import {
  play as playIcon,
  pause as pauseIcon,
  volumeHigh as volumeHighIcon,
  volumeOff as volumeOffIcon,
  contract as contractIcon,
  refreshOutline,
} from "ionicons/icons";

import { usePlaybookStore } from "@/store";
// import TinyEmitter from 'tiny-emitter';

// Creating an instance of TinyEmitter
// const emitter = new TinyEmitter();
const playbookStore = usePlaybookStore();
const props = defineProps(["play"]);
console.log(props.play);
const videoElement = ref<HTMLVideoElement | null>(null);
const duration = ref(0);
const currentTime = ref(0);
const state = reactive({
  isPlaying: false,
  isMuted: false,
});
// emitter.on('myEvent', (data :any) => {
//   console.log('Event received:', data);
// });
const onLoadedMetadata = () => {
  console.log(videoElement.value);
  if (videoElement.value) {
    duration.value = videoElement.value.duration;
  }
};
const togglePlayPause = () => {
  if (!videoElement.value) return;

  if (videoElement.value.paused || videoElement.value.ended) {
    videoElement.value.play();
  } else {
    videoElement.value.pause();
  }
};

const onPlay = () => {
  state.isPlaying = true;
};

const onPause = () => {
  state.isPlaying = false;
};

const toggleMute = () => {
  if (!videoElement.value) return;

  videoElement.value.muted = !videoElement.value.muted;
};

const onVolumeChange = () => {
  if (!videoElement.value) return;

  state.isMuted = videoElement.value.muted;
};
const updateTime = () => {
  if (videoElement.value) {
    currentTime.value = videoElement.value.currentTime;
    duration.value = videoElement.value.duration;
  }
};

const seekVideo = (event: CustomEvent) => {
  if (videoElement.value) {
    videoElement.value.currentTime = event.detail.value;
  }
};

const toggleFullscreen = () => {
  if (!videoElement.value) return;

  if (!document.fullscreenElement) {
    videoElement.value.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};
const fastForward = () => {
  if (videoElement.value) {
    let newTime = videoElement.value.currentTime + 5;
    const duration = videoElement.value.duration;
    videoElement.value.currentTime = newTime > duration ? duration : newTime;
  }
};
// A computed property to format the current time
const currentTimeFormatted = computed(() => formatTime(currentTime.value));

// A computed property to format the duration
const durationFormatted = computed(() => formatTime(duration.value));

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
// Add other methods for seeking, volume control, fullscreen, etc.
</script>

<style scoped>
.pStyle {
  color: #303030;
  /* Lable large */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}
/* Your styles here */
ion-range {
  --knob-size: 0px;
  --bar-height: 4px;
  margin-top: -10px;
}
ion-button {
  --background: none;
  --color: #a5ce3e;
  --background-activated: none;
  --border-width: 0;
  --border-style: none;
  --box-shadow: 0;
}
.card-text {
  color: #000;
  /* Body medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}
.control-outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control-inner {
  display: flex;
}
span {
  margin-top: 15px;
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.controls {
  padding: 0px 15px 0px 15px;
}
.no-video {
  /* display: flex; */
  padding: 64px 59px 63px 60px;
  text-align: center;
  /* align-items: center; */
}
.no-video-icon {
  width: 50px;
  height: 50px;
}
/* } */
</style>
