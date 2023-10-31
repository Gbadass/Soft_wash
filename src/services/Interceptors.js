import { useContext, useEffect } from "react";
import { axiosInstance } from "./AxiosInstance";
import { variableManager } from "../context/VariablesContext";

export default function Interceptors() {
  const { operation, setOperation } = useContext(variableManager);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        setOperation({ ...operation, pending: true });
        return config;
      },
      (error) => {
        setOperation({ ...operation, pending: false });
        throw error;
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        setOperation({ ...operation, pending: false });
        return response;
      },
      (error) => {
        setOperation({ ...operation, pending: false });
        throw error;
      }
    );

    // Clean up the interceptors when the component is unmounted
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [operation, setOperation]);

  // No need to return anything or specify an outlet
  return null;
}
