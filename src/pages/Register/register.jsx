import React, { useState } from "react";
import "./styles.css";

import arrow from "../../assets/arrowRight.png";
import InputDefault from "../../components/InputDefault/InputDefault";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarioCadastrado, setUsuarioCadastrado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !cpf || !telefone || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novoUsuario = { nome, cpf, telefone, email, senha, saldo: 1000 };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setNome("");
    setCpf("");
    setTelefone("");
    setEmail("");
    setSenha("");

    setUsuarioCadastrado(true);
    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="containerRegister">
      <div className="contentLeft">ola</div>
      <div className="separation"></div>
      <div className="contentRight">
        <div className="cadContainer">
          <h1>Cadastro</h1>
          <form className="cadContainer-inputs" onSubmit={handleSubmit}>
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu nome"
              width="300px"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputDefault
              type="text"
              name="cpf"
              placeholder="Digite seu CPF"
              width="300px"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <InputDefault
              type="text"
              name="telefone"
              placeholder="Digite seu telefone"
              width="300px"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <InputDefault
              type="text"
              name="email"
              placeholder="Digite seu E-mail"
              width="300px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputDefault
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              width="300px"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="button" type="submit">
              <p className="button-text">Continuar</p>
              <img className="button-arrow" src={arrow} alt="seta" />
            </button>
          </form>
        </div>
        <p className="text-alternative">
          Já possui uma conta?{" "}
          <span
            onClick={() => {
              if (usuarioCadastrado) {
                navigate("/login");
              } else {
                alert("Você precisa cadastrar um usuário primeiro.");
              }
            }}
            style={{
              cursor: usuarioCadastrado ? "pointer" : "default",
              color: usuarioCadastrado ? "blue" : "gray",
            }}
          >
            Clique aqui
          </span>
        </p>
      </div>
    </div>
  );
}
