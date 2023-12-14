import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Landing.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/Login.vue')
  },  
  // {
  //   name: 'registration',
  //   path: '/registration',
  //   component: () => import('@/views/introduction/Registration.vue')
  // },
  // {
  //   name: 'registrationsuccess',
  //   path: '/registration/success',
  //   component: () => import('@/views/introduction/RegistrationSuccess.vue'),
  //   meta: {
  //     requiresAuth: true // Add meta field to indicate protected route
  //   }
  // },
  // {
  //   name: 'welcome',
  //   path: '/welcome',
  //   component: () => import('@/views/introduction/Welcome.vue'),
  //   meta: {
  //     requiresAuth: true // Add meta field to indicate protected route
  //   }
  // },
  // {
  //   name: 'tour',
  //   path: '/tour',
  //   component: () => import('@/views/introduction/Tour.vue'),
  //   meta: {
  //     requiresAuth: true // Add meta field to indicate protected route
  //   }
  // },
  // {
  //   name: 'teamsetup',
  //   path: '/personal/setup',
  //   component: () => import('@/views/introduction/TeamSetup.vue'),
  //   meta: {
  //     requiresAuth: true // Add meta field to indicate protected route
  //   }
  // },
  // {
  //   name: 'setupsurveysettings',
  //   path: '/personal/survey/settings',
  //   component: () => import('@/views/introduction/TeamSurveySettings.vue'),
  //   meta: {
  //     requiresAuth: true // Add meta field to indicate protected route
  //   }
  // },
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
        component: () => import('@/views/Teams/Team.vue'),
        meta: {
          requiresAuth: true // Add meta field to indicate protected route
        },
      },
      // {
      //   name: 'teamid',
      //   path: 'team/id/:id',
      //   component: () => import('@/views/TeamID.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   },
      // },
      // {
      //   name: 'addteam',
      //   path: 'teams/add',
      //   component: () => import('@/views/TeamAdd.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'alterteam',
      //   path: 'teams/alter',
      //   component: () => import('@/views/TeamAlter.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamsupport',
      //   path: 'teams/support',
      //   component: () => import('@/views/TeamSupport.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamsupportexternalcoach',
      //   path: 'teams/support/externalcoach',
      //   component: () => import('@/views/TeamSupportExternalCoach.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamsupportteamcoach',
      //   path: 'teams/support/teamcoach',
      //   component: () => import('@/views/TeamSupportTeamCoach.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamsupportgetteamcoach',
      //   path: 'teams/support/teamcoach/get',
      //   component: () => import('@/views/TeamSupportTeamCoachGet.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamsupportgetteamcoachprofile',
      //   path: 'teams/support/teamcoach/get/profile/:userid',
      //   component: () => import('@/views/TeamSupportTeamCoachGetProfile.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   },
      // },      
      // {
      //   name: 'teamsurvey',
      //   path: 'teams/personal/survey/:surveyid',
      //   component: () => import('@/views/TeamSurvey.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'teamscheduleradd',
      //   path: 'teams/personal/scheduler/add',
      //   component: () => import('@/views/TeamSchedulerAdd.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   },
      // },
      // {
      //   name: 'teamscheduleralter',
      //   path: 'teams/personal/scheduler/alter/:scheduleid',
      //   component: () => import('@/views/TeamSchedulerAlter.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercises',
      //   path: 'exercises',
      //   component: () => import('@/views/Exercises.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercise',
      //   path: 'exercises/exercise/:exerciseid',
      //   component: () => import('@/views/Exercise.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisealter',
      //   path: 'exercises/exercise/:exerciseid/alter',
      //   component: () => import('@/views/ExerciseAlter.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupport',
      //   path: 'exercises/exercise/:exerciseid/support',
      //   component: () => import('@/views/ExerciseSupport.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupportnetwork',
      //   path: 'exercises/exercise/:exerciseid/support/network',
      //   component: () => import('@/views/ExerciseSupportNetwork.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupportnetworkprofile',
      //   path: 'exercises/exercise/:exerciseid/support/network/profile/:userid',
      //   component: () => import('@/views/ExerciseSupportNetworkProfile.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupportteamcoach',
      //   path: 'exercises/exercise/:exerciseid/support/teamcoach',
      //   component: () => import('@/views/ExerciseSupportTeamCoach.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupportgetteamcoach',
      //   path: 'exercises/exercise/:exerciseid/support/teamcoach/get',
      //   component: () => import('@/views/ExerciseSupportTeamCoachGet.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'exercisesupportgetteamcoachprofile',
      //   path: 'exercises/exercise/:exerciseid/support/teamcoach/get/profile/:userid',
      //   component: () => import('@/views/ExerciseSupportTeamCoachGetProfile.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'surveys',
      //   path: 'surveys',
      //   component: () => import('@/views/Surveys.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'survey',
      //   path: 'surveys/personal/:teamid/survey/:surveyid',
      //   component: () => import('@/views/SurveysSurvey.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'playbook',
      //   path: 'playbook',
      //   component: () => import('@/views/Playbook.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'play',
      //   path: 'playbook/play/:playid',
      //   component: () => import('@/views/Play.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'academy',
      //   path: 'academy/:focus?',
      //   component: () => import('@/views/Academy.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'course',
      //   path: 'academy/course/:courseid',
      //   component: () => import('@/views/Course.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'profile',
      //   path: 'profile',
      //   component: () => import('@/views/Profile.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'publicprofile',
      //   path: 'profile/public/:userid',
      //   component: () => import('@/views/ProfilePublic.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // },
      // {
      //   name: 'settings',
      //   path: 'settings',
      //   component: () => import('@/views/Settings.vue'),
      //   meta: {
      //     requiresAuth: true // Add meta field to indicate protected route
      //   }
      // }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('user:token');
    if (token) {
      // User is authenticated, allow access to the requested route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
