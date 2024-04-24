import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { IUser } from "@/store/user";
import { useUserStore } from "@/store";

import { TTeamID } from "@/utils/types";
import { TeamAPI } from "@/utils/actions";

const userStore = useUserStore();
// ==========================================================
// Interfaces
// ==========================================================

export interface ITeamMember {
  first_name: string;
  last_name: string;
  email: string;
  role: number;
}

export interface IInvite {
  email: boolean;
  whatsapp: boolean;
  sms: boolean;
}

export interface ITeam {
  name: string;
  is_active: boolean;
  members: ITeamMember[];
}

export interface ITeams {
  [id: TTeamID]: ITeam;
}

// ==========================================================
// Constants
// ==========================================================
// ==========================================================
// Store
// ==========================================================

const useTeamStore = defineStore("Teams store", () => {
  // teams is of type Map<TTeamID, ICourse>
  const teams: any = ref(null);
  // const teams = ref<ITeam>();
  // const teams = new APIMapObject('teams', 'v1/team/', {name: '', members:[]})

  // new data
  const teamMembers = computed<ITeam>(() => {
    if (teams?.value?.has(userStore.teamID)) {
      return teams.value.get(userStore.teamID);
    } else {
      return { name: "", members: [] };
    }
  });
  async function getTeams() {
    if(teams.value === null){
    teams.value = await TeamAPI.getTeams();
    }
  }
  async function createTeam(data : any) {

    const res =  await TeamAPI.createTeam(data);
    const update = {
      memebrs : res.members,
      name : res.name
    }
    teams.value.set(res.id , update)
  }
  async function updateTeam(data : any ,teamID :string) {
    
    const res =  await TeamAPI.updateTeam(data, teamID);
    // const update = {
    //   memebrs : res.members,
    //   name : res.name
    // }
    // teams.value.set(res.id , update)
  }
  // async function fetch() {
  //   await Promise.all([
  //     teams.fetch(),
  //   ])
  // }

  const getTeamMember = computed(() => {
    return (teamID: string, memberEmail: string) => {
      return teams.value
        .get(teamID)
        .members.find((m: ITeamMember) => m.email == memberEmail);
    };
  });

  const teamNames = computed(() => teams.list.value.map((t) => t.name));

  return {
    teams,
    teamMembers,
    getTeamMember,
    teamNames,
    getTeams,
    createTeam,
    updateTeam
  };
});

export default useTeamStore;
