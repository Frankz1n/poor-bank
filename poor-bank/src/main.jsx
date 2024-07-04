import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Ticket from "./pages/Ticket/ticket";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
