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
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  
};

export default TeamAPI;
