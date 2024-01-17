import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "@/store";
import {
  TUserID,
  TTeamID,
  TPlayID,
  TRoleString,
  TRoleNumber,
  TKnownVia,
  TTeamRequestID,
  TExerciseID,
  TExerciseScoresID,
  TRequestID,
  TPlayUsageID,
} from "@/utils/types";
import { PlaybookAPI } from "@/utils/actions";
import { forEach } from "lodash";
const userStore = useUserStore();

// ==========================================================
// Interfaces
// ==========================================================

export interface IPlay {
  initial_scores: {
    [key: string]: number;
  };
  title: string;
  description: string;
  video: string | null;
  frequency: [string, string]; // e.g. "('X', 'X times')"
  information_url: string;
  information_text: string;
  created_at: string;
  updated_at: string;
  when: [string, string]; // e.g. "('TE', 'Team')"
}

export interface IPlaybookScores {
  [teamID: TTeamID]: {
    [playID: TPlayID]: number;
  };
}

export interface IRep {
  id: string;
  date: Date;
  amount: number;
  score: number;
  note?: string;
}

export interface IExercise {
  team: TTeamID;
  play: TPlayID;
  responsible: string; // e-mail
  completed: boolean;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface IExerciseResponse {
  id?: string;
  exercise: TExerciseID;
  team_request: TTeamRequestID;
  score: number;
  note?: string;
}

export interface IExerciseCompletion {
  team?: string;
  date: Date;
  role: string;
}

export interface ICompletedExercise {
  playID: TPlayID;
  completions: IExerciseCompletion[];
  lastCompletion: string;
  roles: TRoleString[];
  highestRole: TRoleString;
}

export interface IExerciseHelp {
  userID: TUserID;
  first_name: string;
  last_name: string;
  email: string;
  lastExperienceDate: Date;
  experienceAs: TRoleNumber[];
  knownVia: TKnownVia[];
  fit: number;
}

export interface IScores {
  id: TExerciseScoresID;
  request: TRequestID;
  exercise: TExerciseID;
  notes: string[];
  request_end_date: string;
  score: number;
  created_at: string;
}

export interface IUsage {
  id: TPlayUsageID;
  play: TPlayID;
  love: boolean;
  created_at: string;
  updated_at: string;
}

// ==========================================================
// Store
// ==========================================================

const usePlaybookStore = defineStore("Playbook", () => {
  const playbook = ref<any>();
  const exercises: any = ref(null);
  const filteredTeamExercises: any = ref(null);
  const exerciseResponses: any = ref(null);
  const teamExerciseScores: any = ref(null);
  async function getPlaybook() {
    playbook.value = await PlaybookAPI.getPlaybook();
  }
  async function getExercises() {
    exercises.value = await PlaybookAPI.getExercises();
  }
  // Only for POST, not for GET Todo need to set new map to something esle
  async function getExerciseResponses() {
    exerciseResponses.value = await PlaybookAPI.getExerciseResponses();
  }
  async function exerciseHelp() {
    // const exerciseHelp = new APIListObject('exerciseHelp', 'v1/playbook/team/exercises/help/')
  }

  // teamPlayScores is of type Map<TTeamID, {[key: TPlayID]: number}>
  async function teamPlayScores() {
    // const teamPlayScores = new APIMapObject('playScores', 'v1/playbook/team/plays/scores/')
  }
  async function getTeamExerciseScores() {
    // const teamExerciseScores = new APIMapObject('exerciseScores', 'v1/playbook/team/exercises/scores/')
    teamExerciseScores.value = await PlaybookAPI.getTeamExerciseScores();
  }
  // teamExerciseScores is of type Map<TTeamID, IScores>

  // usage is of type TPlayUsageID[]
  // const usage = new APIListObject('playbookusage', 'v1/playbook/team/plays/usage/')

  const filteredExercises = computed(() => {
    const iterableArray = Array.from(exercises.value);
    return iterableArray.filter(([key, valueArray]) => {
      return key === userStore.teamID;
    });
  });
  function teamExerciseScore(teamID: TTeamID, exerciseID: string) {
    let currentTeamExercisesScores = teamExerciseScores?.value?.get(teamID);
    for (const key in currentTeamExercisesScores) {
      if (key === exerciseID) {
        return currentTeamExercisesScores[key][0].score;
      }
    }
  }
  return {
    playbook,
    exercises,
    exerciseResponses,
    filteredExercises,
    teamExerciseScore,
    getPlaybook,
    getExercises,
    getExerciseResponses,
    getTeamExerciseScores,
  };
});

export default usePlaybookStore;
