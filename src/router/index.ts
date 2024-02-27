import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Landing.vue"),
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
    name: 'survey',
    path: '/surveys/personal/:teamid/survey/:surveyid',
    component: () => import('@/views/Survey/SurveyQuestion.vue')
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
    name: "surveySchedule",
    path: "/surveySchedule",
    component: () => import("@/views/SurveySchedule/SurveySchedule.vue"),
  },
  {
    name: "scheduleWeekly",
    path: "/scheduleWeekly",
    component: () => import("@/views/SurveySchedule/ScheduleWeekly.vue"),
  },
  {
    name: "inviteLogin",
    path: "/inviteLogin",
    component: () => import("@/views/Invite/InviteLogin.vue"),
  },
  {
    name: "inviteFound",
    path: "/inviteFound",
    component: () => import("@/views/Invite/InviteFound.vue"),
  },
  {
    name: "inviteNotified",
    path: "/inviteNotified",
    component: () => import("@/views/Invite/InviteNotified.vue"),
  },
  {
    name: "list",
    path: "/list",
    component: () => import("@/views/Buddy/List.vue"),
  },
  {
    name: "create",
    path: "/create",
    component: () => import("@/views/Buddy/Create.vue"),
  },
  {
    name: "personalProfile",
    path: "/personalProfile",
    component: () => import("@/views/PersonalTransformation/PersonalProfile.vue"),
  },
  {
    name: "sidebarMenu",
    path: "/sidebarMenu",
    component: () => import("@/views/Profile/SidebarMenu.vue"),
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
