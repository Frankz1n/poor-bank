import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.errorPage}>
      <h1>Erro: Acesso Negado</h1>
      <p>Você precisa estar logado para acessar esta página.</p>
      <button onClick={handleGoHome}>Voltar para Home</button>
    </div>
  );
};

export default ErrorPage;
