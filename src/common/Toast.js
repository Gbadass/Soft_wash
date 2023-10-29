import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowToast({ type, text, progress, theme }) {
 //text is required
  return type === "success"
    ? toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: progress || undefined,
        theme: theme || "light",
      })
    : type === "error"
    ? toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: progress || undefined,
        theme: theme || "light",
      })
    : type === "warning"
    ? toast.warning(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: progress || undefined,
        theme: theme || "light",
      })
    : toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: progress || undefined,
        theme: theme || "light",
      });
}
