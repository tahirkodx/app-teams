import { reactive } from 'vue'
import ApiEndpoints from "@/utils/apis/apiEndpoints";
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/utils/actions/global";
// import * as _ from "lodash";

const TeamAPI: any = {
  getTeams: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_TEAMS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  createTeam: async (payload: any) => {
    try {
      console.log("Here is play load " , payload)
      const response = await eveTechApi.post(`${ApiEndpoints.GET_TEAMS}`, payload);
      console.log(response)
      return response;
    } catch (error: any) {
      console.log("Here is error " ,error)
      return Catched(error);
    }
  },
  updateTeam: async (payload: any,teamID :string) => {
    console.log(payload)
    console.log(teamID)
    const url = ApiEndpoints.GET_TEAMS + teamID + "/"
    // try {
    //   console.log("Here is play load " , payload)
      const response = await eveTechApi.put(url, payload);
    //   console.log(response)
    //   return response;
    // } catch (error: any) {
    //   console.log("Here is error " ,error)
    //   return Catched(error);
    // }
  },
  
};

export default TeamAPI;
