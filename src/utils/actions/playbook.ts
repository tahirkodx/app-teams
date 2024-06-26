import ApiEndpoints from "@/utils/apis/apiEndpoints";
import { ref, reactive, computed, ComputedRef } from 'vue'
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/utils/actions/global";
// import * as _ from "lodash";
    
const PlaybookAPI: any = {
  getPlaybook: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_PLAYBOOK}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    //   return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getExercises: async (payload: any) => {
    console.log("payload is here " , payload)
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_EXERCISES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSingleExercise: async (payload: any) => {
    console.log("Here is palload" , payload)
    const options: any = {
      params: payload,
    };
    // console.log("Here is palload" , exerciseID)
    // const url = ApiEndpoints.GET_EXERCISES + teamID + "/" + exerciseID 
    try {
      
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_EXERCISES}`,
        options
        
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSuggestedExercise: async (payload: any) => {
    console.log("Here is palload" , payload)
    const options: any = {
      params: payload,
    };
    const url = ApiEndpoints.GET_SUGGESTED_EXERCISES + payload.teamId +"/" + payload.exerciseID + "/"
    // console.log("Here is palload" , payload)
    // const url = ApiEndpoints.GET_EXERCISES + teamID + "/" + exerciseID 
    try {
      
      const response = await eveTechApi.get(
        url,
        // options
        
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getExerciseResponses: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_EXERCISES_RESPONSES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSuggestedExercises: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      // `${ApiEndpoints.GET_SUGGESTED_EXERCISES}`,
      const url = ApiEndpoints.GET_SUGGESTED_EXERCISES + "1d53775de8a9421aa2f1327cb4d3d87e/"
      const response = await eveTechApi.get(
        url,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getTeamExerciseScores: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_TEAM_EXERCISE_SCORES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getTeamExerciseNotes :async (payload:any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_TEAM_EXERCISE_NOTES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  createSurveyExerciseResponse: async (payload: any) => {
    try {
      // console.log("here is data" , payload.data)
      // return 
      
      const response = await eveTechApi.post(`${ApiEndpoints.CREATE_EXERCISES_RESPONSES}`, payload);
      // Save token in local storage if found
      console.log(response)
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },

  
};

export default PlaybookAPI;
