import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<>you're here</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
