import { Navigate } from "react-router-dom";
import ShowToast from "../common/Toast";

export const ErrorHandler = (error) => {
  ShowToast({ type: "error", text: error?.response?.message });
  const navigator = (route) => {
    Navigate(route);
  };

  switch (error.response?.status) {
    case 404:
      navigator("/error/404");
      break;
    case 403:
      navigator("/auth/login");
      localStorage.removeItem("psp-tks");
      //handleLogout()
      break;

    //handle other errors

    default:
      throw error;
  }
};
