import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { register } from 'swiper/element/bundle';
import { createPinia } from 'pinia';
import '@ionic/core/css/ionic.bundle.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VOtpInput from "vue3-otp-input";

import { Buffer } from 'buffer';
import token from "./utils/token";
// @ts-ignore
window.Buffer = Buffer;
const pinia = createPinia()
register();
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia)
  .component('v-otp-input', VOtpInput)


 
router.isReady().then(() => {
  app.mount('#app');
});
