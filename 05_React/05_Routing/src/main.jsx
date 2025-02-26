import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/:username" element={<Student/>} />
        <Route path="/404" element={<NotFound/>} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
);
