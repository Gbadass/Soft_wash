import { axiosInstance } from "./AxiosInstance";

export async function validateEmail(payload) {
  if (!payload) return false;
  let { data, error } = "";
  try {
    await axiosInstance.post("/auth/validate-email", payload).then((resp) => {
      data = resp.data.data;
    });
  } catch (err) {
    error = err;
  }

  return { data, error };
}

{
  /*
Use this to send verification code to any email.
 this updates the user's verification code
*/
}