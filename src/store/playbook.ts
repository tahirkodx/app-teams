import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useTeamStore, useUserStore } from "@/store";
import {
  TTeamID,
  
} from "@/utils/types";
import { PlaybookAPI } from "@/utils/actions";
import { find, forEach } from "lodash";
const userStore = useUserStore();
const teamStore = useTeamStore();

// ==========================================================
// Interfaces
// ==========================================================
// ==========================================================
// Store
// ==========================================================

const usePlaybookStore = defineStore("Playbook", () => {
  const playbook = ref<any>(null);
  const singleExercise = ref<any>();
  const exercises: any = ref(null);
  const surveyExercises: any = ref(null);
  
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
  async function getExercises(teamID: any) {
    if (exercises.value === null) {
      let payload = null;
      if (teamID) {
        payload = {
          teamID: teamID,
        };
      }
      exercises.value = await PlaybookAPI.getExercises(payload);
    }
  }
  // Only for POST, not for GET Todo need to set new map to something esle
  async function getExerciseResponses() {
    exerciseResponses.value = await PlaybookAPI.getExerciseResponses();
  }
  async function createSurveyExerciseResponse(data :any) {
    return await PlaybookAPI.createSurveyExerciseResponse(data)
    
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
  const responsiblePersonName = computed(() => {
    return (teamID: any, email : string) => {
      let data = teamStore.teams.get(teamID);
      const result = Array.from(data.members).find(
        (element) => element.email === email
      );
      return result.first_name + " " + result.last_name
      
    };
  });
  async function getSingleExercise(teamID: TTeamID, exerciseID: string) {
    // todo need to change this prams
    const payload = {
      teamId: teamID,
      exerciseID: exerciseID,
    };
    singleExercise.value = await PlaybookAPI.getSingleExercise(payload);
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
  
  function defaultExerciseResponse(teamId : any,surveyID: any) {
    let returnList = [];
    for (let exercise of exercises.value) {
      returnList.push({
        exId : exercise[0],
        id: teamId,
        score: 7,
        note: "",
        exercise: exercise[1].id,
        team_request: surveyID,
      });
    }
    surveyExercises.value = reactive(new Map(Object.entries(returnList)));
  }

  return {
    playbook,
    exercises,
    singleExercise,
    responsiblePerson,
    notesByDate,
    exerciseResponses,
    surveyExercises,
    filteredExercises,
    responsiblePersonName,
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
    defaultExerciseResponse,
    createSurveyExerciseResponse,
  };
});

export default usePlaybookStore;
