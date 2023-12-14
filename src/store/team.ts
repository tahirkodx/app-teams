import { computed ,ref } from 'vue'
import { defineStore } from "pinia";
import { IUser } from '@/store/user'

import { TRoleString, TRoleNumber, TTeamID, TUserID } from '@/utils/types';
import { TeamAPI } from '@/utils/actions';


// ==========================================================
// Interfaces
// ==========================================================

export interface ITeamMember {
  first_name: string,
  last_name: string,
  email: string,
  role: number,
}

export interface IInvite {
  email: boolean,
  whatsapp: boolean,
  sms: boolean,
}


export interface ITeam {
  name: string,
  is_active: boolean,
  members: ITeamMember[]
}

export interface ITeams {
  [id: TTeamID]: ITeam
}


// ==========================================================
// Constants
// ==========================================================

export const RoleDict = {
  1: 'member',
  2: 'leader',
  3: 'coach'
}

export const roleOrder = {
  'member': 1,
  'leader': 2,
  'coach': 3
}

export const numberToRole: {[key: number]: string} = {
  1: 'member',
  2: 'leader',
  3: 'coach',
}

const orderRoles = computed(() => {
  return (role: TRoleString) => {
    return roleOrder[role as keyof typeof roleOrder]
  }
})


// ==========================================================
// Store
// ==========================================================

const useTeamStore = defineStore("Teams store", () => {
  
  // teams is of type Map<TTeamID, ICourse>
  const teams : any = ref(null);
  // const teams = new APIMapObject('teams', 'v1/team/', {name: '', members:[]})


  async function getTeams() {
    teams.value = await TeamAPI.getTeams();
    console.log("teams:", teams.value);
  }
  // async function fetch() {
  //   await Promise.all([
  //     teams.fetch(),
  //   ])
  // }

  const isTeamlead = computed(() => {
    return (teamID: TTeamID, user: IUser) => {
      let team = teams.value.get(teamID) as ITeam
      if (!team || team.members.length == 0) {
        return false
      } else {
        let userMember = Object.values(team.members).find((m: ITeamMember) => m.email == user.email) as ITeamMember
        if (!userMember) return false
        return userMember.role == 2
      }
    }
  })

  const coaches = computed(() => {
    return (teamID: TTeamID):ITeamMember[] => {
      let team = teams.value.get(teamID) as ITeam
      if (!team || !team.members) {
        return []
      } else {
        return team.members.filter((m: ITeamMember) => m.role == 3) as ITeamMember[]
      }
    }
  })

  const getTeamMember = computed(() => {
    return (teamID: string, memberEmail: string) => {
      return teams.value.get(teamID).members.find((m: ITeamMember) => m.email == memberEmail)
    }
  })
  
  const hasCoach = computed(() => {
    return (teamID: TTeamID): boolean => {
      return coaches.value(teamID).length > 0
    }
  })

  const teamNames = computed (() => teams.list.value.map(t => t.name))

  return {
    teams,
    isTeamlead,
    coaches,
    hasCoach,
    getTeamMember,
    teamNames,
    getTeams,
  }
})

export default useTeamStore;
