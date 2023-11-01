import "./App.css";
// import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/auth/login/UserLogin";
import UserRegister from "./pages/auth/register/UserRegister";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import PricingPage from "./pages/PricingPage";



function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<>you're here</>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>
        <Route path="/auth/reset-password" element={<ResetPaswdPage />} />
         <Route path="/auth/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
         <Route path="/pricingpage" element={<PricingPage />} />

        
      </Routes>
    </BrowserRouter>
    // <div>
    //   <BrowserRouter>
    //    <Routes>

    //    </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
