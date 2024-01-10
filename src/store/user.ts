import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserAPI } from "@/utils/actions";
import { TTeamID, TUserID, TOrganizationID } from "@/utils/types";
// ==========================================================
// User
// ==========================================================

export interface IUserBase {
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUser extends IUserBase {
  id: TUserID;
  username: string;
  email: string;
  last_login: string;
  is_active: true;
  date_joined: string;
  phone: string | null;
  country: string;
  has_coach: boolean;
  first_usage: boolean;
  show_messages_on_opening: boolean;
  send_new_survey_notification: boolean;
  send_new_survey_email: boolean;
  send_new_survey_SMS: boolean;
  send_survey_results_notification: boolean;
  send_survey_results_email: boolean;
  send_survey_results_SMS: boolean;
  available_as_coach: boolean;
  available_for_exercise_questions: boolean;
  show_scores: boolean;
  uses_team_app: boolean;
  uses_personal_app: boolean;
  created_at: string;
  updated_at: string;
  organization: TOrganizationID;
  last_team_used: TTeamID;
}

export interface INetworkMember extends IUserBase {
  id: TUserID;
}

export interface ICoach extends IUserBase {
  fit: number;
}

export interface IRegistratingUser {
  email: string;
  password1: string;
  password2: string;
}

export interface IOrganizationMember {
  id: TUserID;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  country: string;
}

export interface IOrganizationLeader {
  name: string;
  date: Date;
}

export interface ICoachingCompanies {
  id: TUserID;
  name: string;
  team_coach: boolean;
  personal_coach: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ISubscription {}

export interface IOrganizationProfile {
  name: string;
  subscription_active: boolean;
  coaching_companies: ICoachingCompanies;
  created_at: string;
  updated_at: string;
}

const useUserStore = defineStore("user", () => {
  // currentUser is of type IUser
  const settings = ref<IUser>();
  const organization: any = ref(null);
  const organizationMembers: any = ref(null);
  const organizationLeaders: any = ref(null);
  const organizationCoaches: any = ref(null);

  async function getUserSettings() {
    settings.value = await UserAPI.getUserSettings();
  }
  async function getUserOrganization() {
    organization.value = await UserAPI.getUserOrganization();
  }
  async function getUserOrganizationMembers() {
    organizationMembers.value = await UserAPI.getUserOrganizationMembers();
    console.log("User organization memebrs:", organizationMembers.value);
  }
  async function getUserOrganizationLeaders() {
    organizationLeaders.value = await UserAPI.getUserOrganizationLeaders();
    console.log("User organization leaders:", organizationLeaders.value);
  }
  async function getUserOrganizationCoaches() {
    organizationCoaches.value = await UserAPI.getUserOrganizationCoaches();
    console.log("User organization coaches:", organizationCoaches.value);
  }
  async function update_value(key: string, value: any) {
    console.log(key);
    console.log(value);
    // if (value.get('id') !== undefined){
    //   super.update_value(
    //     this.value.get('id'),
    //     key,
    //     value
    //   )
    // } else {
    //   console.log(this.name, 'Update while ID is undefined')
    // }
  }

  // eslint-disable-next-line vue/return-in-computed-property
  const teamID = computed<TTeamID>(() => {
    if (settings?.value?.last_team_used) {
        return settings?.value.last_team_used
      }
    //   else if (teamStore.teams.value.size > 0) {
    //     setNextActiveTeam()
    //   } 
      else {
        return ''
      }

    // const lastTeamUsed = settings.value?.last_team_used
    //   ? settings.value.last_team_used
    //   : null;

    // if (lastTeamUsed) {
    //   return lastTeamUsed;
    // } else {
    //   return "";
    // }
  });
  return {
    teamID,
    settings,
    organization,
    organizationMembers,
    organizationLeaders,
    organizationCoaches,
    getUserSettings,
    getUserOrganization,
    getUserOrganizationMembers,
    getUserOrganizationLeaders,
    getUserOrganizationCoaches,
    update_value,
  };
});

export default useUserStore;
