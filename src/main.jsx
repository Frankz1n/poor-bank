import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.css";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import UserScreen from "./pages/PrincipalScreen/principalScreen";
import Ticket from "./pages/Ticket/ticket";
import Register from "./pages/Register/register";
import Investing from "./pages/Investing/Investing";
import Pix from "./pages/Pix/Pix";
import Transfer from "./pages/Transfer/Transfer";
import Loan from "./pages/Loan/Loan";
import PixKeys from "./pages/PixKeys/PixKeys";
import PayCard from "./pages/PayCard/payCard";
import ErrorPage from "./pages/Error/Error";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/erro" element={<ErrorPage />} />
        <Route
          path="/tela-usuario"
          element={<ProtectedRoute element={<UserScreen />} />}
        />
        <Route
          path="/investimento"
          element={<ProtectedRoute element={<Investing />} />}
        />
        <Route path="/pix" element={<ProtectedRoute element={<Pix />} />} />
        <Route
          path="/boletos"
          element={<ProtectedRoute element={<Ticket />} />}
        />
        <Route
          path="/transferencia"
          element={<ProtectedRoute element={<Transfer />} />}
        />
        <Route
          path="/emprestimo"
          element={<ProtectedRoute element={<Loan />} />}
        />
        <Route
          path="/fatura-cartao"
          element={<ProtectedRoute element={<PayCard />} />}
        />
        <Route
          path="/chaves-pix"
          element={<ProtectedRoute element={<PixKeys />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
