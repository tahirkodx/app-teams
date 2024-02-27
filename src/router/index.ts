import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "intro",
    path: "/",
    component: () => import("@/views/Auth/Intro.vue"),
  },
  {
    name: "welcomeScreen",
    path: "/welcomeScreen",
    component: () => import("@/views/Auth/WelcomeScreen.vue"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/Auth/Register.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Auth/Login.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile/Profile.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    path: "/profile/notif",
    component: () => import("@/views//ProfileNotificationSetting/ProfileNotificationSetting.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "surveys",
    path: "/surveys",
    component: () => import("@/views/Survey/Survey.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "survey",
    path: "/surveys/personal/survey/:surveyid",
    component: () => import("@/views/Survey/SurveyQuestion.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "surveyQuestionRange",
    path: "/surveyQuestionRange",
    component: () => import("@/views/Survey/SurveyQuestionRange.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "surveyFinished",
    path: "/surveyFinished",
    component: () => import("@/views/Survey/surveyFinished.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "createteam",
    path: "/teams/create",
    component: () => import("@/views/Teams/CreateTeam.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "addteam",
    path: "/teams/addteam",
    component: () => import("@/views/Teams/AddTeam.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "teamMember",
    path: "/teams/teamMember",
    component: () => import("@/views/Teams/TeamMember.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "teamStatus",
    path: "/all/statistics",
    component: () => import("@/views/TeamStatistic/TeamAllStatistic.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "searchOther",
    path: "/statistics/searchOther",
    component: () => import("@/components/TeamStatistic/SearchOther.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "searchDetail",
    path: "/statistics/SearchDetail",
    component: () => import("@/components/TeamStatistic/SearchDetail.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
  },
  {
    name: "addExercise",
    path: "/statistics/AddExercise",
    component: () => import("@/components/TeamStatistic/AddExercise.vue"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
    },
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
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "createteam",
        path: "teams/create",
        component: () => import("@/views/Teams/CreateTeam.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "editteam",
        // path: 'teams/edit',
        path: "teams/edit",
        component: () => import("@/views/Teams/EditTeam.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "teamMember",
        path: "teams/list",
        component: () => import("@/views/Teams/TeamMember.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "teamsupport",
        path: "teams/support",
        component: () => import("@/views/Support/TeamSupport.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "exercises",
        path: "exercises",
        component: () => import("@/views/Exercises/Exercises.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "exercise",
        path: "exercises/exercise/:exerciseid",
        component: () => import("@/views/Exercises/Exercise.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
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
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "lesson",
        path: "academys/lesson/:courseId",
        component: () => import("@/views/Academy/AcademyLesson.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
