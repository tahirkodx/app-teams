import ApiEndpoints from "@/utils/apis/apiEndpoints";
import { ref, reactive, computed, ComputedRef } from 'vue'
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/utils/actions/global";
// import * as _ from "lodash";
    
const StatusAPI: any = {
    getQuestionNaire: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_QUESTION_NAIRE}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    //   return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getDimensions: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_DIMENSIONS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSchedulers: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_SCHEDULERS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getRequests: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
        
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_REQUESTS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getLastResponse: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
        
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_LAST_RESPONSE}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  submitSurvey: async (payload: any) => {
    try {
      console.log("Here is play load " , payload)
      // return 
      const response = await eveTechApi.post(`${ApiEndpoints.SURVEY_SUBMIT}`, payload.data);
      // Save token in local storage if found
      console.log(response)
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  
  

  
};

export default StatusAPI;
