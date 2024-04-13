import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WelcomePage from "./pages/Welcome";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ticketing from "./pages/Ticketing";
import Upcoming from "./pages/Upcoming";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/Ticketing" element={<Ticketing />} />
      <Route path="/Upcoming" element={<Upcoming />} />
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <WelcomePage />
  // </React.StrictMode>
);
