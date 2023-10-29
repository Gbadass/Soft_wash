import axios from "axios";
import { ErrorHandler } from "./ErrorHandler";

export default function AxiosConfig() {
  const instanceConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      common: {
        Authorization: `Bearer 12|${localStorage.getItem("stucademy-tks")}`,
      },
    },
  });

  instanceConfig.interceptors.response.use(
    (response) => handleSuccess(response),
    (error) => {
      ErrorHandler(error);
    }
  );

  function handleSuccess(response) {
    return response;
  }

  return instanceConfig;
}
