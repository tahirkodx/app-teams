import ApiEndpoints from "@apiEndpoints";
import {
  Catched,
  invalidPayload,
  eveTechApi,
} from "@/custom/utils/actions/global";
import * as _ from "lodash";

const CmsAPI: any = {
  getReactInfo: async (payload: any) => {
    try {
      if (payload.id) {
        const response = await eveTechApi.post(
          `${ApiEndpoints.GET_REACT_INFO}`,
          {
            id: payload.id,
          }
        );
        return response;
      } else {
        return invalidPayload("No id provided");
      }
    } catch (error: any) {
      return Catched(error);
    }
  },
  rctwebinfmulti: async (payload: any) => {
    try {
      const response = await eveTechApi.post(
        `${ApiEndpoints.RCT_WEB_INF_MULTI}`,
        payload
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  joinUs: async (payload: any) => {
    try {
      const response = await eveTechApi.post(
        `${ApiEndpoints.JOIN_US}`,
        payload
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getWebInfo: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_WEB_INFO}`,
        options
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getState: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_STATE}`,
        options
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getCities: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_CITIES}`,
        options
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
  getSuburbs: async (payload: any) => {
    try {
      const options: any = {
        params: payload,
      };
      const response = await eveTechApi.get(
        `${ApiEndpoints.GET_SUBURBS}`,
        options
      );
      return response;
    } catch (error: any) {
      return Catched(error);
    }
  },
};

export default CmsAPI;
