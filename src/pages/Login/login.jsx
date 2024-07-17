import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import InputDefault from "../../components/InputDefault/InputDefault";
import arrow from "../../assets/arrowRight.png";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.cpf === cpf && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({ nome: usuarioEncontrado.nome })
      );

      alert("Login realizado com sucesso");
      navigate("/tela-usuario");
    } else {
      alert("Conta não existente");
    }
  };

  return (
    <div className={styles.containerRegister}>
      <div className={styles.contentLeft}>ola</div>
      <div className={styles.separation}></div>
      <div className={styles.contentRight}>
        <div className={styles.cadContainer}>
          <h1>Login</h1>
          <form className={styles.cadContaineInputs} onSubmit={handleSubmit}>
            <InputDefault
              type="text"
              name="cpf"
              placeholder="Digite seu CPF"
              width="300px"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <InputDefault
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              width="300px"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className={styles.button} type="submit">
              <p className={styles.buttonText}>Continuar</p>
              <img className={styles.buttonArrow} src={arrow} alt="seta" />
            </button>
          </form>
        </div>
        <p className={styles.textAlternative}>
          Não possui uma conta?{" "}
          <span onClick={() => navigate("/register")}>Clique aqui</span>
        </p>
      </div>
    </div>
  );
}
