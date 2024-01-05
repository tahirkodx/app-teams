import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { AuthAPI } from '@/utils/actions';
import { APIMapObject, APIDictObject } from "@/utils/saveables";
import { TUserID, TOrganizationID, TTeamID } from "@/utils/types";
import { Response } from "@/utils/apis/axios";


// ==========================================================
// User
// ==========================================================

export interface IUserBase {
  email: string,
  first_name: string,
  last_name: string,  
}

export interface IUser extends IUserBase{
  id: TUserID,
  username: string,
  last_login: string,
  is_active: true,
  date_joined: string,
  phone: string|null,
  country: string,
  has_coach: boolean,
  first_usage: boolean,
  show_messages_on_opening: boolean,
  send_new_survey_notification: boolean,
  send_new_survey_email: boolean,
  send_new_survey_SMS: boolean,
  send_survey_results_notification: boolean,
  send_survey_results_email: boolean,
  send_survey_results_SMS: boolean,
  available_as_coach: boolean,
  available_for_exercise_questions: boolean,
  show_scores: boolean,
  uses_team_app: boolean,
  uses_personal_app: boolean,
  created_at: string,
  updated_at: string,
  organization: TOrganizationID,
  last_team_used: TTeamID
}

export interface INetworkMember  extends IUserBase{
  id: TUserID,
}

export interface ICoach extends IUserBase {
    fit: number,
}

export interface IRegistratingUser {
  email: string,
  password1: string,
  password2: string,
}

export interface IOrganizationMember {
    id: TUserID,
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    country: string,
}

export interface IOrganizationLeader {
  name: string,
  date: Date,
}

export interface ICoachingCompanies {
  id: TUserID,
  name: string,
  team_coach: boolean,
  personal_coach: boolean,
  created_at: Date,
  updated_at: Date,
}

export interface ISubscription {
  
}

export interface IOrganizationProfile {
  name: string,
  subscription_active: boolean,
  coaching_companies: ICoachingCompanies,
  created_at: string,
  updated_at: string
  
}

const defaultUser = {
  first_name: 'Anonymous',
  last_name: 'User',
  email: 'example@example.com'
}

const useUserStore = defineStore('user', () => {
  // settings is of type IUser
  const settings = new APIDictObject('settings', 'v1/user/')

  // organization is of type IOrganizationProfile
  const organization = new APIMapObject('organization', 'v1/user/organization/')

  // organizationMembers is of type INetworkMember[]
  const organizationMembers = new APIMapObject('organizationMembers', 'v1/user/organization/members/')

  // organizationLeaders is of type INetworkMember[]
  const organizationLeaders = new APIMapObject('organizationLeaders', 'v1/user/organization/leaders/')

  // organizationCoaches is of type INetworkMember[]
  const organizationCoaches = new APIMapObject('organizationCoaches', 'v1/user/organization/coaches/')
  
  const logged_in = ref(false as boolean)
  const user = ref(defaultUser as IUserBase|IUser)
  const leadershipLevel = ref(3)


  const organizationMembersList = computed(() =>{
    if (organizationMembers.value === undefined){
      return {}
    }
    organizationMembers.value.forEach((key: string, value: IOrganizationMember) => {
      value['id'] = key
    })
    return [...organizationMembers.value?.entries()]
  })

  const getUserName = computed(() => {
    if (user.value.first_name != "") {
      return user.value.first_name
    } else {
      return user.value.email
    }
  })

  const organizationHasExternalCoach = computed(() => {
    return organization.value.get('coaching_companies').length > 0
  })

  // -----------------------------------------------
  // Registration & Authentication
  // -----------------------------------------------

  async function register(user: IRegistratingUser) {
    let response = await AuthAPI.apiregister(user)
    return response
  }
  
  async function login(email: string, password: string) {
  
    let response = AuthAPI.apilogin(email, password)
      .then((response: void | Response) => {
        if (response) {
          user.value = response.data
          logged_in.value = true      
        }
      })
    return response
  }

  async function logout() {
    let response = AuthAPI.apilogout()
      .then((response: void | Response) => {
        user.value = defaultUser
        logged_in.value = false
      })
    return response
  }

  // -----------------------------------------------
  // Fetching
  // -----------------------------------------------
    async function fetch(force: boolean = false) {
      console.log("called fetch user store")
      await Promise.all([
        settings.fetch(),
        organization.fetch(),
      ])
    }

    return {
      logged_in, settings, user, leadershipLevel,
      organization, organizationMembers, organizationLeaders,
      organizationCoaches,
      organizationMembersList,
      getUserName,
      organizationHasExternalCoach,
      register,
      login,
      logout,
      fetch}
  }
)

export { useUserStore }
