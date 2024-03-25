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
  {
    name: "profilePersonal",
    path: "/profilePersonal",
    component: () => import("@/views/Personal/ProfilePersonal.vue"),
  },
  {
    name: "bigProfile",
    path: "/bigProfile",
    component: () => import("@/views/Personal/BigProfile.vue"),
  },
  {
    name: "commitentProfile",
    path: "/commitentProfile",
    component: () => import("@/views/Personal/CommitentProfile.vue")
  },
  {
    name: "exerciseProfile",
    path: "/exerciseProfile",
    component: () => import("@/views/Personal/ExerciseProfile.vue")
  },
  {
    name: "success",
    path: "/success",
    component: () => import("@/views/Personal/Success.vue")
  },
  {
    name: "searchOtherProfile",
    path: "/searchOtherProfile",
    component: () => import("@/views/Personal/SearchOtherProfile.vue")
  },
  {
    name: "exerciseProgress",
    path: "/exerciseProgress",
    component: () => import("@/views/Personal/ExerciseProgress.vue")
  },
  {
    name: "activeExercise",
    path: "/activeExercise",
    component: () => import("@/views/Personal/ActiveExercise.vue")
  },
  {
    name: "selectPlan",
    path: "/selectPlan",
    component: () => import("@/views/Registration/SelectPlan.vue")
  },
  {
    name: "proPlan",
    path: "/proPlan",
    component: () => import("@/views/Registration/ProPlan.vue")
  },
  {
    name: "paymentSuccess",
    path: "/paymentSuccess",
    component: () => import("@/views/Registration/PaymentSuccess.vue")
  },
  {
    name: "setProfile",
    path: "/setProfile",
    component: () => import("@/views/Registration/SetProfile.vue")
  },
  {
    name: "registerCompany",
    path: "/registerCompany",
    component: () => import("@/views/Registration/RegisterCompany.vue")
  },
{
  name: "signup",
  path: "/signup",
  component: () => import("@/views/Registration/Signup.vue")
},
{
  name: "sendInvite",
  path: "/sendInvite",
  component: () => import("@/views/Registration/SendInvite.vue")
},
{
  name: "profileResult",
  path: "/profileResult",
  component: () => import("@/views/BigProfile5/ProfileResult.vue")
},
{
  name: "profileQuestions",
  path: "/profileQuestions",
  component: () => import("@/views/BigProfile5/ProfileQuestions.vue")
},
{
  name: "allMessages",
  path: "/allMessages",
  component: () => import("@/views/Messages/AllMessages.vue")
},
{
  name: "sendOut",
  path: "/sendOut",
  component: () => import("@/views/UserOnboarding/Surveyflow/SendOut.vue")
},
{
  name: "createRecurrent",
  path: "/createRecurrent",
  component: () => import("@/views/UserOnboarding/Surveyflow/CreateRecurrent.vue")
},
{
  name: "scheduleNow",
  path: "/scheduleNow",
  component: () => import("@/views/UserOnboarding/Surveyflow/ScheduleNow.vue")
},
{
  name: "onBoard",
  path: "/onBoard",
  component: () => import("@/components/Survey/OnBoard.vue")
},
{
  name: "addExercise",
  path: "/addExercise",
  component: () => import("@/views/UserOnboarding/ExerciseFlow/AddExercise.vue")
},
{
  name: "takeSurvey",
  path: "/takeSurvey",
  component: () => import("@/views/UserOnboarding/TakeSurveyFlow/TakeSurvey.vue")
},
{
  name: "changeTransformation",
  path: "/changeTransformation",
  component: () => import("@/views/UserOnboarding/ProfileSection/ChangeTransformation.vue")
},
{
  name: "createTransformation",
  path: "/createTransformation",
  component: () => import("@/views/UserOnboarding/ProfileSection/CreateTransformation.vue")
},
{
  name: "createCommintent",
  path: "/createCommintent",
  component: () => import("@/views/UserOnboarding/ProfileSection/CreateCommintent.vue")
},
{
  name: "commintentList",
  path: "/commintentList",
  component: () => import("@/views/UserOnboarding/ProfileSection/CommintentList.vue")
},
{
  name: "createBigProfile",
  path: "/createBigProfile",
  component: () => import("@/views/UserOnboarding/BigProfileFlow/CreateBigProfile.vue")
},
{
  name: "createTeams",
  path: "/createTeams",
  component: () => import("@/views/UserOnboarding/CreateTeamsFlow/CreateTeams.vue")
},
{
  name: "visitAcdemy",
  path: "/visitAcdemy",
  component: () => import("@/views/UserOnboarding/ProfileFlow/VisitAcdemy.vue")
},
{
  name: "takeTest",
  path: "/takeTest",
  component: () => import("@/views/UserOnboarding/LeadershipFlow/TakeTest.vue")
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
