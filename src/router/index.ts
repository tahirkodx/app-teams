import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Landing.vue"),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile/Profile.vue"),
  },

  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "/",
        redirect: "/tabs/team",
      },
      {
        name: "team",
        path: "team",
        component: () => import("@/views/Teams/Team.vue"),
      },
      {
        name: 'teamsupport',
        path: 'teams/support',
        component: () => import('@/views/Support/TeamSupport.vue')
      },
      {
        name: "exercises",
        path: "exercises",
        component: () => import("@/views/Exercises/Exercises.vue"),
      },
      {
        name: 'exercise',
        path: 'exercises/exercise/:exerciseid',
        component: () => import('@/views/Exercises/test.vue'),
      },
      {
        name: "survey",
        path: "surveys",
        component: () => import("@/views/Survey/Survey.vue"),
      },
      {
        name: "academy",
        path: "academys",
        component: () => import("@/views/Academy/Academy.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
