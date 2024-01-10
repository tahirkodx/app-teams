import ApiEndpoints from "@/utils/apis/apiEndpoints";
import { Catched, eveTechApi } from "@/utils/actions/global";
import * as _ from "lodash";
import token from "@/utils/token";

const AuthAPI: any = {
  userLogin: async (payload: any) => {
    try {
      const response = await eveTechApi.post(`${ApiEndpoints.LOGIN}`, payload);
      // Save token in local storage if found
      if(response.key){
        token.set("user:token", response.key);
      }
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  logout: async (payload: any) => {
    try {
      const response = await eveTechApi.get(`${ApiEndpoints.LOGOUT}`);
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
};

export default AuthAPI;
