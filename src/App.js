import "./App.css";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<ResetPaswdPage />} />
         <Route path="/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
