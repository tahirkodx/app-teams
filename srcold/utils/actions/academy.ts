import ApiEndpoints from "@/utils/apis/apiEndpoints";
import { ref, reactive, computed, ComputedRef } from 'vue'
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/utils/actions/global";
// import * as _ from "lodash";
    
const AcademyAPI: any = {
  getCourses: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_COURSES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    //   return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSingleCourse: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_COURSES}`,
        options
      );
      return response.data;
    //   return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getCoursesStatus: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_COURSES_STATUS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getCoursesScores: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_COURSES_SCORES}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  
  
};

export default AcademyAPI;
