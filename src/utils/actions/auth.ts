import ApiEndpoints, { NameTags } from "@/utils/apis/apiEndpoints";
import { Catched, appTeamsAPI } from "@actions";
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
      await appTeamsAPI.post(ApiEndpoints.LOGIN, json, NameTags.LOGIN);
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
      await appTeamsAPI.post(ApiEndpoints.LOGIN, json, NameTags.LOGIN);
      let response = await appTeamsAPI.get(ApiEndpoints.GET_USER, "get user");
      return response;
    } catch (error) {
      Catched(error);
    }
  },

  apilogin: async (email: string, password: string) => {
    try {
      if (import.meta.env.DEV) {
        let response = await AuthAPI.login_dev(email, password);
        return response;
      } else {
        const response = await AuthAPI.login_prod(email, password);
        return response;
      }
    } catch (error) {
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
