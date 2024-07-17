import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = !!localStorage.getItem("usuarioLogado");

  return isLoggedIn ? element : <Navigate to="/erro" replace />;
};

export default ProtectedRoute;
