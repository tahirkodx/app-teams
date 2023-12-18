import axios, { Response, Error } from "@axios";
import * as _ from "lodash";

// export const invalidPayload = (message: string) => {
//   return {
//     success: false,
//     message:
//       message ||
//       "Invalid parameters. Please try again with correct parameters.",
//     result: [],
//   };
// };

export const Catched = (error: any) => {
  try {
    return {
      success: false,
      errorMessage: error?.message || "",
      message:
        error?.response?.data?.error?.[0] ||
        "Something went wrong. Please try again later.",
      errorData: error,
    };
  } catch (e: any) {
    return {
      success: false,
      errorMessage: e?.message || "",
      message: "Something went wrong. Please try again later.",
      errorData: e,
    };
  }
};

// const convertValuesToUrl = (values: string) => {
//   return Object.values(values)
//     .map((value) => encodeURIComponent(value))
//     .join("/");
// };

// ======================================================
// Create functions for handling succes and failure
// ======================================================

const handler = {
  succes(response: Response, nametag: String, log: Boolean = false) {
    if (log) {
      console.log("Succesful connection for " + nametag);
      console.log(response);
    }
    return response;
  },

  failure(error: Error, nametag: String, json: Object | undefined = undefined) {
    if (error.response) {
      console.log("Failur in connection");
      console.log(nametag);
      if (!(json === undefined)) {
        console.log(json);
      }
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response.config);
      console.log(error.response.headers);
      return error.response;
    }
    return error;
  },
};

// ======================================================
// Create get and post functions that handle key
// ======================================================

const appTeamsAPI = {
  get: async (url: string, nametag: string = "", log: boolean = false) => {
    // console.log('get ', url)
    try {
      const response = await axios.get(url);
      return handler.succes(response, nametag, log);
    } catch (error: any) {
      handler.failure(error, nametag);
      throw error;
    }
  },

  post: async (
    url: string,
    json: object,
    nametag: string,
    log: boolean = false
  ) => {
    console.log("post at ", url, " : ", json);
    try {
      const response = await axios.post(url, json);
      return handler.succes(response, nametag, log);
    } catch (error: any) {
      handler.failure(error, nametag);
      throw error;
    }
  },

  put: async (
    url: string,
    json: object,
    nametag: string,
    log: boolean = false
  ) => {
    console.log("put at ", url, " : ", json);
    try {
      const response = await axios.put(url, json);
      return handler.succes(response, nametag, log);
    } catch (error: any) {
      handler.failure(error, nametag);
      throw error;
    }
  },

  patch: async (
    url: string,
    json: object,
    nametag: string,
    log: boolean = false
  ) => {
    console.log("patch at ", url, " : ", json);
    try {
      const response = await axios.patch(url, json);
      return handler.succes(response, nametag, log);
    } catch (error: any) {
      handler.failure(error, nametag);
      throw error;
    }
  },

  delete: async (url: string, nametag: string, log: boolean=false) => {
    console.log('delete ', url)
    try {
        const response = await axios.delete(url)
        return handler.succes(response, nametag, log)
    }
    catch (error: any) {
      handler.failure(error, nametag)
        throw error
    }
},
};
export default appTeamsAPI;
// const handleApiError = (error: any) => {
//   return Catched(error);
// };
