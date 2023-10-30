import {axiosInstance} from "./AxiosInstance"

export async function registerUser(payload) {
  let {data, error} = "";
  try {
    await axiosInstance.post(`/auth/user/register`,payload).then((resp)=>{
      data = resp.data;
      localStorage.setItem("softwashUser", JSON.stringify(data));
      localStorage.setItem("softwashUserToken", data.token);

    })
  } catch (error) {
    error = error;
  }
  return {data, error};
}