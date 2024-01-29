import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useTeamStore, useUserStore } from "@/store";
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
import { find, forEach } from "lodash";
const userStore = useUserStore();
const teamStore = useTeamStore();

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
  const playbook = ref<any>(null);
  const singleExercise = ref<any>();
  const exercises: any = ref(null);
  const allNotes: any = ref(null);
  const singleExerciseNotes: any = ref(null);
  const notesByDate: any = ref(null);
  const filteredTeamExercises: any = ref(null);
  const exerciseResponses: any = ref(null);
  const teamExerciseScores: any = ref(null);
  const responsiblePerson: any = ref(null);
  async function getPlaybook() {
    if (playbook.value === null) {
      playbook.value = await PlaybookAPI.getPlaybook();
    }
  }
  async function getExercises() {
    if (exercises.value === null) {
      exercises.value = await PlaybookAPI.getExercises();
    }
  }
  // Only for POST, not for GET Todo need to set new map to something esle
  async function getExerciseResponses() {
    exerciseResponses.value = await PlaybookAPI.getExerciseResponses();
  }
  async function exerciseHelp() {
    // const exerciseHelp = new APIListObject('exerciseHelp', 'v1/playbook/team/exercises/help/')
  }

  // teamPlayScores is of type Map<TTeamID, {[key: TPlayID]: number}>
  async function getTeamExerciseNotes() {
    if (allNotes.value === null) {
      allNotes.value = await PlaybookAPI.getTeamExerciseNotes();
    }
    // const teamPlayScores = new APIMapObject('playScores', 'v1/playbook/team/plays/scores/')
  }
  async function getTeamExerciseScores() {
    if (teamExerciseScores.value === null) {
      teamExerciseScores.value = await PlaybookAPI.getTeamExerciseScores();
    }
  }
  // teamExerciseScores is of type Map<TTeamID, IScores>

  // usage is of type TPlayUsageID[]
  // const usage = new APIListObject('playbookusage', 'v1/playbook/team/plays/usage/')

  const filteredExercises = computed(() => {
    return (filter: any) => {
      const teamExercises = exercises.value.get(userStore.teamID);
      if (filter === "all") {
        return teamExercises;
      } else {
        const filteredData = Object.entries(teamExercises).reduce(
          (acc, [key, value]) => {
            if (value.is_active === filter) {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );

        return filteredData;
      }
    };
  });
  function getFilteredTeamExercises() {}

  async function getSingleExercise(teamID: TTeamID, exerciseID: string) {
    // todo need to change this prams 
    singleExercise.value = await PlaybookAPI.getSingleExercise(
      teamID,
      exerciseID
    );
    // if (exercises.value.has(teamID)) {
    //   const teamExercises = exercises.value.get(teamID);
    //   const arrayFromTeamExercises = Array.from(teamExercises);
    //   console.log(arrayFromTeamExercises)
    //   singleExercise.value = arrayFromTeamExercises.find(exercise => exercise.id === exerciseID);
  }
  function teamExerciseScore(teamID: TTeamID, exerciseID: string) {
    let currentTeamExercisesScores = teamExerciseScores?.value?.get(teamID);
    for (const key in currentTeamExercisesScores) {
      if (key === exerciseID) {
        return currentTeamExercisesScores[key][0].score;
      }
    }
  }
  function teamExerciseScoreChart(teamID: TTeamID, exerciseID: string) {
    let currentTeamExercisesScores = teamExerciseScores?.value?.get(teamID);
    console.log("Here are you", currentTeamExercisesScores);
    for (const key in currentTeamExercisesScores) {
      if (key === exerciseID) {
        return currentTeamExercisesScores[key];
      }
    }
  }
  function getResponsiblePerson(teamID: TTeamID, emailID: any) {
    let data = teamStore.teams.get(teamID);
    responsiblePerson.value = Array.from(data.members).find(
      (element) => element.email === emailID
    );
  }
  function getSingleExerciseNotes(teamID: TTeamID, exerciseID: any) {
    const data = allNotes.value.get(teamID);
    for (const key in data) {
      if (key === exerciseID) {
        singleExerciseNotes.value = data[key];
        // const test = Array.from(data[key]).find(element => element.date ==="2023-09-21T21:25:34.744123Z");
      }
    }
  }
  function filteredNotesByDate(date: any) {
    notesByDate.value = Array.from(singleExerciseNotes.value).find(
      (element) => element.date === date
    );
  }

  return {
    playbook,
    exercises,
    singleExercise,
    responsiblePerson,
    notesByDate,
    exerciseResponses,
    filteredExercises,
    getSingleExercise,
    teamExerciseScore,
    getPlaybook,
    getExercises,
    getExerciseResponses,
    getTeamExerciseScores,
    teamExerciseScoreChart,
    getResponsiblePerson,
    getTeamExerciseNotes,
    getSingleExerciseNotes,
    filteredNotesByDate,
  };
});

export default usePlaybookStore;
