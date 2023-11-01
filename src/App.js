import "./App.css";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import HowItWorks from "./pages/HowItWorks";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/auth/reset-password" element={<ResetPaswdPage />} />
         <Route path="/auth/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
         <Route path="/how-it-works" element={<HowItWorks />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
