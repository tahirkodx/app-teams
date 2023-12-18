import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';
import { LoginApi } from './utils/actions';
import { useUserStore } from './stores/user';
    

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

import { Buffer } from 'buffer';
import token from "./utils/token";
// @ts-ignore
window.Buffer = Buffer;


const pinia = createPinia()
register();
  
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

if (import.meta.env.DEV) {
  const userStore = useUserStore()
  // const login = {
  //   email: "0@0.com",
  //    password: "Newton123!",
  // }
  // const isLogin = await LoginApi.post({ login });
  // console.log("Here is here : " , isLogin)
  // if (isLogin.key) {
  //   console.log("sucessss");
  //   token.set("user:token", isLogin.key);
  //   //await this.handleResponse('Logged in Sucessfully', "login", "POST", { name: 'assessments' });
    
  // } 
  // await userStore.login("0@0.com", "Newton123!")  
}

router.isReady().then(() => {
  app.mount('#app');
});
