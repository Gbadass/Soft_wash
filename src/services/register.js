import {axiosInstance} from "./AxiosInstance"

export async function registerUser(payload) {
  let {data, error} = "";
  try {
    await axiosInstance.post(`/auth/user/register`,payload).then((resp)=>{
      data = resp.data.data;
      localStorage.setItem("softwashUser", JSON.stringify(data));

    })
  } catch (error) {
    error = error;
  }
  return {data, error};
}