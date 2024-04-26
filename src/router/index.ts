import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    name: "intro",
    path: "/",
    component: () => import("@/views/Auth/Intro.vue"),
  },
  // Welcome Screen
  {
    name: "welcomeScreen",
    path: "/welcomeScreen",
    component: () => import("@/views/Auth/WelcomeScreen.vue"),
  },
  // Register screen.
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/Auth/Register.vue"),
  },
  {
    name: "registerCompany",
    path: "/registerCompany",
    component: () => import("@/views/RegistrationCompany/RegisterCompany.vue"),
  },
  {
    name: "selectPlan",
    path: "/selectPlan",
    component: () => import("@/views/SelectPlan/SelectPlan.vue"),
  },

  {
    name: "proPlan",
    path: "/proPlan",
    component: () => import("@/views/SelectPlan/ProPlan.vue"),
  },

  {
    name: "paymentSuccess",
    path: "/paymentSuccess",
    component: () => import("@/views/SelectPlan/PaymentSuccess.vue"),
  },

  {
    name: "setProfile",
    path: "/setProfile",
    component: () => import("@/views/RegistrationCompany/SetProfile.vue"),
  },

  {
    name: "sendInvite",
    path: "/sendInvite",
    component: () => import("@/views/RegistrationCompany/SendInvite.vue"),
  },

  {
    name: "signUpCompany",
    path: "/signUpCompany",
    component: () => import("@/views/RegistrationCompany/SignUpCompany.vue"),
  },
  // {
  //   name: "paymentSuccess",
  //   path: "/paymentSuccess",
  //   component: () => import("@/views/RegistrationCompany/PaymentSuccess.vue"),
  // },
  // {
  //   name: "proPlan",
  //   path: "/ProPlan",
  //   component: () => import("@/views/RegistrationCompany/ProPlan.vue"),
  // },
  // {
  //   name: "paymentSuccess",
  //   path: "/paymentSuccess",
  //   component: () => import("@/views/RegistrationCompany/SelectPlan.vue"),
  // },

  // Login screens
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Auth/Login.vue"),
  },

  // User profile screens
  {
    path: "/profile",
    component: () =>
      import(
        "@/views//ProfileNotificationSetting/ProfileNotificationSetting.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "profilenotification",
    path: "/profile/notification",
    component: () =>
      import("@/views/ProfileNotificationSetting/ProfileNotification.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  // Ask Help Screens
  {
    name: "ask-help",
    path: "/ask-help",
    component: () => import("@/views/AskHelp/askHelp.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "appointmentHelp",
    path: "/ask-help/appointment",
    component: () => import("@/views/AskHelp/appointmentBook.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "appointmentConfirm",
    path: "/ask-help/confirm",
    component: () => import("@/views/AskHelp/ashHelpConfirm.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "requestHelp",
    path: "/ask-help/requestHelp",
    component: () => import("@/views/AskHelp/requestHelp.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  //Surveys screens
  {
    name: "surveys",
    path: "/surveys",
    component: () => import("@/views/Survey/Survey.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "survey",
    path: "/surveys/personal/survey/:surveyid",
    component: () => import("@/views/Survey/SurveyQuestion.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "surveyQuestionRange",
    path: "/surveyQuestionRange",
    component: () => import("@/views/Survey/SurveyQuestionRange.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "surveyFinished",
    path: "/surveyFinished",
    component: () => import("@/views/Survey/SurveyFinished.vue"),
    meta: {
      requiresAuth: true,
    },
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
  // check later
  // {
  //   name: "addteam",
  //   path: "/teams/addteam",
  //   component: () => import("@/views/Teams/AddTeam.vue"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // check later
  // {
  //   name: "teamMember",
  //   path: "/teams/teamMember",
  //   component: () => import("@/views/Teams/TeamMember.vue"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  {
    name: "teamTopic",
    path: "/teams/teamTopic",
    component: () => import("@/views/Teams/TeamTopic.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  // All messages screens
  {
    name: "allMessages",
    path: "/allMessages",
    component: () => import("@/views/Messages/AllMessages.vue"),
  },
  // statistics screens
  {
    name: "teamStatus",
    path: "/all/statistics",
    component: () => import("@/views/TeamStatistic/TeamAllStatistic.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "searchOther",
    path: "/statistics/searchOther",
    component: () => import("@/components/TeamStatistic/SearchOther.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "searchDetail",
    path: "/statistics/SearchDetail",
    component: () => import("@/components/TeamStatistic/SearchDetail.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "addExercise",
    path: "/statistics/AddExercise",
    component: () => import("@/components/TeamStatistic/AddExercise.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  // buddies
  {
    name: "buddyList",
    path: "/buddy",
    component: () => import("@/views/Buddies/Index.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  // big profile
  {
    name: "big5Profile",
    path: "/bigProfile",
    component: () => import("@/views/Big5Profile/Big5TestStart.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "big5Question",
    path: "/big5Question",
    component: () => import("@/views/Big5Profile/Big5Question.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "bigProfileResult",
    path: "/bigProfileResult",
    component: () => import("@/views/Big5Profile/BigProfileResult.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    name: "createBigProfile",
    path: "/createBigProfile",
    component: () =>
      import("@/views/UserOnboarding/BigProfileFlow/CreateBigProfile.vue"),
  },

  // {
  //   name: "bigProfile",
  //   path: "/bigProfile",
  //   component: () => import("@/views/PersonalProfile/BigProfile.vue"),
  // },

  // Invite screens
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
  // {
  //   name: "list",
  //   path: "/list",
  //   component: () => import("@/views/Buddy/List.vue"),
  // },
  // {
  //   name: "create",
  //   path: "/create",
  //   component: () => import("@/views/Buddy/Create.vue"),
  // },

  // personal profile
  {
    name: "personalProfile",
    path: "/personalProfile",
    component: () =>
      import("@/views/PersonalTransformation/PersonalProfile.vue"),
  },
  // side menubar
  {
    name: "sidebarMenu",
    path: "/sidebarMenu",
    component: () => import("@/views/Profile/SidebarMenu.vue"),
  },
  // LeadershipTest screens
  {
    name: "preTest",
    path: "/preTest",
    component: () => import("@/views/LeadershipTest/PreTest.vue"),
  },
  {
    name: "question",
    path: "/question",
    component: () => import("@/views/LeadershipTest/Question.vue"),
  },
  {
    name: "result",
    path: "/result",
    component: () => import("@/views/LeadershipTest/Result.vue"),
  },
  // personal profile url
  {
    name: "profilePersonal",
    path: "/profilePersonal",
    component: () => import("@/views/PersonalProfile/ProfilePersonal.vue"),
  },
  {
    name: "changeTransformation",
    path: "/changeTransformation",
    component: () =>
      import("@/views/UserOnboarding/ProfileSection/ChangeTransformation.vue"),
  },
  
  {
    name: "createTransformation",
    path: "/createTransformation",
    component: () =>
      import("@/views/UserOnboarding/ProfileSection/CreateTransformation.vue"),
  },
  {
    name: "createCommintent",
    path: "/createCommintent",
    component: () =>
      import("@/views/UserOnboarding/ProfileSection/CreateCommintent.vue"),
  },
  {
    name: "commintentList",
    path: "/commintentList",
    component: () =>
      import("@/views/UserOnboarding/ProfileSection/CommintentList.vue"),
  },
  // commitentProfile screen
  {
    name: "commitentProfile",
    path: "/commitentProfile",
    component: () => import("@/views/PersonalProfile/CommitentProfile.vue"),
  },
  // check later exerciseProfile
  // {
  //   name: "exerciseProfile",
  //   path: "/exerciseProfile",
  //   component: () => import("@/views/PersonalProfile/ExerciseProfile.vue"),
  // },
  {
    name: "success",
    path: "/success",
    component: () => import("@/views/PersonalProfile/Success.vue"),
  },
  {
    name: "searchOtherProfile",
    path: "/searchOtherProfile",
    component: () => import("@/views/PersonalProfile/SearchOtherProfile.vue"),
  },
  {
    name: "exerciseProgress",
    path: "/exerciseProgress",
    component: () => import("@/views/PersonalProfile/ExerciseProgress.vue"),
  },
  {
    name: "activeExercise",
    path: "/activeExercise",
    component: () => import("@/views/PersonalProfile/ActiveExercise.vue"),
  },

  // onboard routes Surveyflow
  {
    name: "sendOut",
    path: "/sendOut",
    component: () => import("@/views/UserOnboarding/Surveyflow/SendOut.vue"),
  },
  {
    name: "createRecurrent",
    path: "/createRecurrent",
    component: () =>
      import("@/views/UserOnboarding/Surveyflow/CreateRecurrent.vue"),
  },
  {
    name: "scheduleNow",
    path: "/scheduleNow",
    component: () =>
      import("@/views/UserOnboarding/Surveyflow/ScheduleNow.vue"),
  },
  // onboarding show for suvey
  {
    name: "onBoard",
    path: "/onBoard",
    component: () => import("@/components/Survey/OnBoard.vue"),
  },
  // onboarding exercise
  {
    name: "addExercise",
    path: "/addExercise",
    component: () =>
      import("@/views/UserOnboarding/ExerciseFlow/AddExercise.vue"),
  },
  // onbarding suvey
  {
    name: "takeSurvey",
    path: "/takeSurvey",
    component: () =>
      import("@/views/UserOnboarding/TakeSurveyFlow/TakeSurvey.vue"),
  },
  
  // onbarding team
  {
    name: "createTeams",
    path: "/createTeams",
    component: () =>
      import("@/views/UserOnboarding/CreateTeamsFlow/CreateTeams.vue"),
  },
  {
    name: "visitAcdemy",
    path: "/visitAcdemy",
    component: () =>
      import("@/views/UserOnboarding/ProfileFlow/VisitAcdemy.vue"),
  },
  {
    name: "takeTest",
    path: "/takeTest",
    component: () =>
      import("@/views/UserOnboarding/LeadershipFlow/TakeTest.vue"),
  },
  // end of onboard routes

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
      {
        name: "suggestedExercise",
        path: "exercises/suggestedExercise/:exerciseid",
        component: () => import("@/views/Exercises/SuggestedExercise.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "exerciseSearch",
        path: "exercises/search",
        component: () => import("@/views/Exercises/Search.vue"),
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
      {
        name: "personal",
        path: "/personal",
        component: () => import("@/views/Personal/Index.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
      {
        name: "commitmentTransformation",
        path: "/personal/transformation",
        component: () =>
          import("@/views/Personal/CommitmentTransformation.vue"),
        meta: {
          requiresAuth: true, // Add meta field to indicate protected route
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
