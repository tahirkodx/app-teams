import ApiEndpoints, { NameTags } from "@/utils/apis/apiEndpoints";
import { Catched, appTeamsAPI } from "@/utils/actions";
import * as _ from "lodash";
import token from "@/utils/token";

const AuthAPI: any = {
  apiregister: async (user: any) => {
    try {
      let json = JSON.parse(JSON.stringify(user));
      json.username = json.email;
      const response = await appTeamsAPI.post(
        ApiEndpoints.REGISTRATION,
        json,
        NameTags.REGISTER
      );
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  login_prod: async (email: string, password: string) => {
    try {
      const json = {
        email: email,
        password: password,
      };
      let res = await appTeamsAPI.post(ApiEndpoints.LOGIN, json, NameTags.LOGIN);
      if(res?.data?.key){
        token.set("user:token", res.data.key);
      }
      let response = await appTeamsAPI.get(ApiEndpoints.GET_USER, "get user");
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  login_dev: async (email: string, password: string) => {
    try {
      const json = {
        email: email,
        password: password,
      };
      let res = await appTeamsAPI.post(ApiEndpoints.LOGIN, json, NameTags.LOGIN);
      if(res?.data?.key){
          token.set("user:token", res.data.key);
      }
      let response = await appTeamsAPI.get(ApiEndpoints.GET_USER, "get user");
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  apilogin: async (email: string, password: string) => {
    
    try {
      console.log("hfjshdkfhasdkjfhdskjfaskdj")
      console.log(import.meta.env.DEV)
      if (import.meta.env.DEV) {
        let response = await AuthAPI.login_dev(email, password);
        console.log("Here is resone" , response.data.key)
        if(response?.data?.key){
          token.set("user:token", response.data.key);
        }
        return response;
      } else {
        const response = await AuthAPI.login_prod(email, password);
        if(response?.data?.key){
          token.set("user:token", response.data.key);
        }
        console.log("Here is resone1" , response.data.key)
        
        return response;
      }
    } catch (error) {
      console.log("Here is eh dataaasdfasdfads")
      Catched(error);
    }
  },

  logout_prod: async () => {
    try {
      let response = await appTeamsAPI
        .post(ApiEndpoints.LOGOUT, {}, NameTags.LOGIN)
        .then((reponse) => {
          token.remove("user:token");
        });
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  logout_dev: async () => {
    try {
      let response = await appTeamsAPI
        .post(ApiEndpoints.LOGOUT, {}, NameTags.LOGIN)
        .then((reponse) => {
          token.remove("user:token");
        });
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  apilogout: async () => {
    try {
      if (import.meta.env.DEV) {
        var response = await AuthAPI.logout_dev();
      } else {
        var response = await AuthAPI.logout_prod();
      }
      return response;
    } catch (error) {
      Catched(error);
    }
  },
};

export default AuthAPI;
