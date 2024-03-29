import { reactive } from "vue";
import ApiEndpoints from "@/utils/apis/apiEndpoints";
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/utils/actions/global";
// import * as _ from "lodash";

const UserAPI: any = {
  getUserSettings: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_USER_SETTINGS}`,
        options
      );
      return reactive(new Map(Object.entries(response.data)));
    } catch (error: any) {
      return Catched(error);
    }
  },
  getUserOrganization: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_USER_ORGANIZATION}`,
        options
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getUserOrganizationMembers: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_USER_ORGANIZATION_MEMBERS}`,
        options
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getUserOrganizationLeaders: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_USER_ORGANIZATION_LEADERS}`,
        options
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getUserOrganizationCoaches: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_USER_ORGANIZATION_COACHES}`,
        options
      );
      return response.data;
    } catch (error: any) {
      return Catched(error);
    }
  },
  updateValue: async (payload: any , userID: any) => {
    const url  = ApiEndpoints.GET_USER_SETTINGS + userID + "/";
    try {
      const response = await eveTechApi.patch(
        `${url}`,
        payload
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  
};

export default UserAPI;
