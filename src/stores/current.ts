import { computed } from 'vue'
import { defineStore } from "pinia";
import { useUserStore } from '@/stores/user'
import { useTeamStore, ITeam } from './teams'
import { TRoleString, TRoleNumber, TTeamID, TUserID } from '@/utils/types';
const userStore = useUserStore();
const teamStore = useTeamStore();

export const teamID = computed<TTeamID>(() => {
    if (userStore.settings.value.get('last_team_used')) {
      return userStore.settings.value.get('last_team_used')
    } else if (teamStore.teams.value.size > 0) {
      setNextActiveTeam()
    } else {
      return ''
    }
  })

export const team = computed<ITeam>(() => {
    if (teamStore.teams.value.has(teamID.value)){
      return teamStore.teams.value.get(teamID.value)
    } else {
      return {name: '', members: []}
    }
  })

export function setActiveTeam(teamID: TTeamID) {
    userStore.settings.update_value('last_team_used', teamID)
}

export function setNextActiveTeam() {
    if (teamStore.teams.value.size > 0) {
        let newActiveTeamID = teamStore.teams.value.keys().next().value
        userStore.settings.update_value('last_team_used', newActiveTeamID)
    }
}

export function deleteActiveTeam() {
    teamStore.teams.delete(teamID.value)
    setNextActiveTeam()
}

export async function fetchCurrent(force: boolean = false){
    Promise.all([
        // teamStore.teams.fetch(force),
        // userStore.settings.fetch(force),
    ])
}