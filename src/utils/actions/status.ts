import { Catched, appTeamsAPI } from "@actions";
import * as _ from "lodash";

const StatusAPI: any = (endpoint: string, tag: string, model: any) => {
  return {
    fetch: async () => {
      try {
        const response = await appTeamsAPI.get(endpoint, tag);
        return response;
      } catch (error) {
        Catched(error);
      }
    },
    create: async (payload: object) => {
      try {
        const response = await appTeamsAPI.post(
          endpoint,
          payload,
          "post" + tag
        );
        return response;
      } catch (error) {
        Catched(error);
      }
    },
    update_object: async (id: string, payload: object) => {
      try {
        const response = await appTeamsAPI.put(
          endpoint + id + "/",
          payload,
          "put" + tag
        );
        return response;
      } catch (error) {
        Catched(error);
      }
    },
    update_values: async (id: string, payload: object) => {
      try {
        const response = await appTeamsAPI.patch(
          endpoint + id + "/",
          payload,
          "patch" + tag
        );
        return response;
      } catch (error) {
        Catched(error);
      }
    },
    delete: async (id: string, payload: object) => {
      try {
        const response = await appTeamsAPI.delete(
          endpoint + id + "/",
          "delete" + tag
        );
        return response;
      } catch (error) {
        Catched(error);
      }
    },
  };
};

export default StatusAPI;
