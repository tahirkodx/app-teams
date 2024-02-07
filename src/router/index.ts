import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Landing.vue"),
  },
  {
    name: "intro",
    path: "/intro",
    component: () => import("@/views/Auth/Intro.vue"),
  },
  {
    name: "welcomeScreen",
    path: "/welcomeScreen",
    component: () => import("@/views/Auth/WelcomeScreen.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Auth/Login.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile/Profile.vue"),
  },
  {
    name: "surveys",
    path: "/surveys",
    component: () => import("@/views/Survey/Survey.vue"),
  },
  {
    name: "survey",
    path: "/surveys/personal/:teamid/survey/:surveyid",
    component: () => import("@/views/Survey/SurveyQuestion.vue"),
  },
  {
    name: "surveyQuestionRange",
    path: "/surveyQuestionRange",
    component: () => import("@/views/Survey/SurveyQuestionRange.vue"),
  },
  {
    name: "surveyFinished",
    path: "/surveyFinished",
    component: () => import("@/views/Survey/surveyFinished.vue"),
  },
  {
    name: "createteam",
    path: "/teams/create",
    component: () => import("@/views/Teams/CreateTeam.vue"),
  },
  {
    name: "addteam",
    path: "/teams/addteam",
    component: () => import("@/views/Teams/AddTeam.vue"),
  },
  {
    name: "teamMember",
    path: "/teams/teamMember",
    component: () => import("@/views/Teams/TeamMember.vue"),
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
        name: "editteam",
        // path: 'teams/edit',
        path: "teams/id/:id",
        component: () => import("@/views/Teams/EditTeam.vue"),
      },

      {
        name: "teamsupport",
        path: "teams/support",
        component: () => import("@/views/Support/TeamSupport.vue"),
      },
      {
        name: "exercises",
        path: "exercises",
        component: () => import("@/views/Exercises/Exercises.vue"),
      },
      {
        name: "exercise",
        path: "exercises/exercise/:exerciseid",
        component: () => import("@/views/Exercises/Exercise.vue"),
      },
      // {
      //   name: "surveys",
      //   path: "surveys",
      //   component: () => import("@/views/Survey/Survey.vue"),
      // },
      // {
      //   name: 'survey',
      //   path: 'surveys/personal/:teamid/survey/:surveyid',
      //   component: () => import('@/views/Survey/SurveyQuestion.vue')
      // },
      // {
      //   name: "surveyQuestionRange",
      //   path: "surveyQuestionRange",
      //   component: () => import("@/views/Survey/SurveyQuestionRange.vue"),
      // },
      // {
      //   name: "surveyFinished",
      //   path: "surveyFinished",
      //   component: () => import("@/views/Survey/surveyFinished.vue"),
      // },
      {
        name: "academy",
        path: "academys",
        component: () => import("@/views/Academy/Academy.vue"),
      },
      {
        name: "academyLesson",
        path: "academysLesson",
        component: () => import("@/views/Academy/AcademyLesson.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
