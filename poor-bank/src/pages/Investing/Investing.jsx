import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./Investing.module.css";

import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import cofrinho from "../../assets/cofrinho.png";
import investGraf from "../../assets/investimentoGrafico.png";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

Modal.setAppElement("#root");

export default function Investing() {
  const [userName, setUserName] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [cofrinhoValue, setCofrinhoValue] = useState("");
  const [cdbValue, setCdbValue] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (user && user.nome) {
      setUserName(user.nome);

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.nome === user.nome
      );

      if (usuarioEncontrado && usuarioEncontrado.saldo) {
        setSaldo(usuarioEncontrado.saldo);
      }
    }
  }, []);

  const handleInvest = (type) => {
    const value =
      type === "cofrinho" ? parseFloat(cofrinhoValue) : parseFloat(cdbValue);
    if (isNaN(value) || value <= 0) {
      alert("Digite um valor válido para o investimento");
      return;
    }

    if (value > saldo) {
      alert("Saldo insuficiente");
      return;
    }

    let earnings = 0;
    if (type === "cofrinho") {
      earnings = value * 0.1;
    } else if (type === "cdb") {
      earnings = value * 0.03;
    }

    setEarnings(earnings.toFixed(2));
    setInvestmentType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCofrinhoValue("");
    setCdbValue("");

    const value =
      investmentType === "cofrinho"
        ? parseFloat(cofrinhoValue)
        : parseFloat(cdbValue);
    const newSaldo = saldo - value;
    setSaldo(newSaldo);

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioIndex = usuarios.findIndex((u) => u.nome === userName);

    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex].saldo = newSaldo;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  };

  return (
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.balance}>
              <div>SALDO</div>
              <div>R$ {saldo.toFixed(2)}</div>
            </div>
          </div>
          <div className={styles.bottom}>
            <h1>Como você quer investir?</h1>
            <div className={styles.bottomOP}>
              <div className={styles.vault}>
                <div className={styles.vaultCofrinho}>
                  <img src={cofrinho} alt="cofrinho icon" /> <h2>Cofrinho</h2>
                </div>
                <InputDefault
                  type="number"
                  name="inputCofrinho"
                  width="250px"
                  placeholder="Valor que deseja investir"
                  value={cofrinhoValue}
                  onChange={(e) => setCofrinhoValue(e.target.value)}
                />
                <ButtonDefault
                  label="Investir"
                  width="150px"
                  height="50px"
                  onClick={() => handleInvest("cofrinho")}
                />
              </div>
              <div className={styles.cdb}>
                <div className={styles.cdbInvest}>
                  <img src={investGraf} alt="investimento icon" />
                  <h2>CDB Diário</h2>
                </div>
                <InputDefault
                  type="number"
                  name="inputInvestimento"
                  width="250px"
                  placeholder="Valor que deseja investir"
                  value={cdbValue}
                  onChange={(e) => setCdbValue(e.target.value)}
                />
                <ButtonDefault
                  label="Investir"
                  width="150px"
                  height="50px"
                  onClick={() => handleInvest("cdb")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Investimento"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <h2 className={styles.modalTitle}>Detalhes do Investimento</h2>
        <p className={styles.modalText}>
          Valor Investido: R$
          {investmentType === "cofrinho" ? cofrinhoValue : cdbValue}
          <br />
          Tipo de Investimento:
          {investmentType === "cofrinho" ? "Cofrinho" : "CDB Diário"}
          <br />
          Rendimento Mensal: R$ {earnings}
        </p>
        <div className={styles.modalButtons}>
          <button onClick={closeModal}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
}
