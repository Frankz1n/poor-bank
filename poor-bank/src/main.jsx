import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.css";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import UserScreen from "./pages/PrincipalScreen/principalScreen";
import Ticket from "./pages/Ticket/ticket";
import Register from "./pages/Register/register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="userscreen" element={<UserScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
