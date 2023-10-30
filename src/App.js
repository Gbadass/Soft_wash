import "./App.css";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
// import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <div><h1>hello</h1></div>
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<ResetPaswdPage />} />
         <Route path="/new-password" element={<NewPaswdPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
