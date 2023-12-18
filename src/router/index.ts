import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Landing.vue')
  },
  {
    name: 'authentication',
    path: '/authentication',
    component: () => import('@/views/introduction/Authentication.vue')
  },  
  {
    name: 'registration',
    path: '/registration',
    component: () => import('@/views/introduction/Registration.vue')
  },
  {
    name: 'registrationsuccess',
    path: '/registration/success',
    component: () => import('@/views/introduction/RegistrationSuccess.vue')
  },
  {
    name: 'welcome',
    path: '/welcome',
    component: () => import('@/views/introduction/Welcome.vue')
  },
  {
    name: 'tour',
    path: '/tour',
    component: () => import('@/views/introduction/Tour.vue')
  },
  {
    name: 'teamsetup',
    path: '/personal/setup',
    component: () => import('@/views/introduction/TeamSetup.vue')
  },
  {
    name: 'setupsurveysettings',
    path: '/personal/survey/settings',
    component: () => import('@/views/introduction/TeamSurveySettings.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/team'
      },
      {
        name: 'team',
        path: 'team',
        component: () => import('@/views/Team.vue'),
      },
      {
        name: 'teamid',
        path: 'team/id/:id',
        component: () => import('@/views/TeamID.vue'),
      },
      {
        name: 'addteam',
        path: 'teams/add',
        component: () => import('@/views/TeamAdd.vue')
      },
      {
        name: 'alterteam',
        path: 'teams/alter',
        component: () => import('@/views/TeamAlter.vue')
      },
      {
        name: 'teamsupport',
        path: 'teams/support',
        component: () => import('@/views/TeamSupport.vue')
      },
      {
        name: 'teamsupportexternalcoach',
        path: 'teams/support/externalcoach',
        component: () => import('@/views/TeamSupportExternalCoach.vue')
      },
      {
        name: 'teamsupportteamcoach',
        path: 'teams/support/teamcoach',
        component: () => import('@/views/TeamSupportTeamCoach.vue')
      },
      {
        name: 'teamsupportgetteamcoach',
        path: 'teams/support/teamcoach/get',
        component: () => import('@/views/TeamSupportTeamCoachGet.vue')
      },
      {
        name: 'teamsupportgetteamcoachprofile',
        path: 'teams/support/teamcoach/get/profile/:userid',
        component: () => import('@/views/TeamSupportTeamCoachGetProfile.vue')
      },      
      {
        name: 'teamsurvey',
        path: 'teams/personal/survey/:surveyid',
        component: () => import('@/views/TeamSurvey.vue')
      },
      {
        name: 'teamscheduleradd',
        path: 'teams/personal/scheduler/add',
        component: () => import('@/views/TeamSchedulerAdd.vue')
      },
      {
        name: 'teamscheduleralter',
        path: 'teams/personal/scheduler/alter/:scheduleid',
        component: () => import('@/views/TeamSchedulerAlter.vue')
      },
      {
        name: 'exercises',
        path: 'exercises',
        component: () => import('@/views/Exercises.vue'),
      },
      {
        name: 'exercise',
        path: 'exercises/exercise/:exerciseid',
        component: () => import('@/views/Exercise.vue'),
      },
      {
        name: 'exercisealter',
        path: 'exercises/exercise/:exerciseid/alter',
        component: () => import('@/views/ExerciseAlter.vue'),
      },
      {
        name: 'exercisesupport',
        path: 'exercises/exercise/:exerciseid/support',
        component: () => import('@/views/ExerciseSupport.vue'),
      },
      {
        name: 'exercisesupportnetwork',
        path: 'exercises/exercise/:exerciseid/support/network',
        component: () => import('@/views/ExerciseSupportNetwork.vue'),
      },
      {
        name: 'exercisesupportnetworkprofile',
        path: 'exercises/exercise/:exerciseid/support/network/profile/:userid',
        component: () => import('@/views/ExerciseSupportNetworkProfile.vue'),
      },
      {
        name: 'exercisesupportteamcoach',
        path: 'exercises/exercise/:exerciseid/support/teamcoach',
        component: () => import('@/views/ExerciseSupportTeamCoach.vue'),
      },
      {
        name: 'exercisesupportgetteamcoach',
        path: 'exercises/exercise/:exerciseid/support/teamcoach/get',
        component: () => import('@/views/ExerciseSupportTeamCoachGet.vue'),
      },
      {
        name: 'exercisesupportgetteamcoachprofile',
        path: 'exercises/exercise/:exerciseid/support/teamcoach/get/profile/:userid',
        component: () => import('@/views/ExerciseSupportTeamCoachGetProfile.vue')
      },
      {
        name: 'surveys',
        path: 'surveys',
        component: () => import('@/views/Surveys.vue')
      },
      {
        name: 'survey',
        path: 'surveys/personal/:teamid/survey/:surveyid',
        component: () => import('@/views/SurveysSurvey.vue')
      },
      {
        name: 'playbook',
        path: 'playbook',
        component: () => import('@/views/Playbook.vue')
      },
      {
        name: 'play',
        path: 'playbook/play/:playid',
        component: () => import('@/views/Play.vue')
      },
      {
        name: 'academy',
        path: 'academy/:focus?',
        component: () => import('@/views/Academy.vue')
      },
      {
        name: 'course',
        path: 'academy/course/:courseid',
        component: () => import('@/views/Course.vue')
      },
      {
        name: 'profile',
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        name: 'publicprofile',
        path: 'profile/public/:userid',
        component: () => import('@/views/ProfilePublic.vue')
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('@/views/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
