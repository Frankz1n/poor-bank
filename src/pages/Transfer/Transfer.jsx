import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import ItemBox from "../../components/ItemBox/ItemBox";
import styles from "./Transfer.module.css";
import pixIcon from "../../assets/pixIcon.png";
import InputDefault from "../../components/InputDefault/InputDefault";
import confirmIcon from "../../assets/confirme.png";

Modal.setAppElement("#root");

export default function Transfer() {
  const [saldo, setSaldo] = useState(0);
  const [valorTransferencia, setValorTransferencia] = useState("");
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const nomeUsuarioLogado = usuarioLogado?.nome;

    setNomeUsuarioLogado(nomeUsuarioLogado);

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuario = usuarios?.find((u) => u.nome === nomeUsuarioLogado);
    const saldo = usuario?.saldo ?? 0;

    setSaldo(saldo);
  }, []);

  const handleTransferencia = () => {
    const valor = parseFloat(valorTransferencia);
    if (isNaN(valor) || valor <= 0) {
      alert("Digite um valor válido para a transferência");
      return;
    }

    if (valor > saldo) {
      alert("Saldo insuficiente");
      return;
    }

    const novoSaldo = saldo - valor;
    setSaldo(novoSaldo);

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioIndex = usuarios.findIndex(
      (u) => u.nome === nomeUsuarioLogado
    );
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex].saldo = novoSaldo;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    setValorTransferencia("");

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/tela-usuario");
  };

  const toPix = () => {
    navigate("/pix");
  };

  return (
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <h1>Transferência</h1>
        <div className={styles.saldo}>
          Saldo disponível: R${saldo.toFixed(2)}
        </div>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <div className={styles.content1}>
              <div className={styles.transferArea}>
                <h2>Valor da Transferência</h2>
                <input
                  type="number"
                  value={valorTransferencia}
                  onChange={(e) => setValorTransferencia(e.target.value)}
                  placeholder="R$0,00"
                  className={styles.inputPix}
                />
              </div>
              <ItemBox onClick={toPix} img={pixIcon} text="Área Pix" />
            </div>
            <div className={styles.content2}>
              <InputDefault
                type="text"
                name="bank"
                width="100px"
                placeholder="Banco"
              />
              <InputDefault
                type="text"
                name="agencia"
                width="200px"
                placeholder="Agência"
              />
              <InputDefault
                type="text"
                name="account"
                width="200px"
                placeholder="Conta"
              />
              <button className={styles.button} onClick={handleTransferencia}>
                Transferir
              </button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Transferência Realizada"
              className={styles.modal}
              overlayClassName={styles.modalOverlay}
            >
              <h2 className={styles.modalTitle}>Transferência Realizada</h2>
              <div>
                <img
                  className={styles.modalIcon}
                  src={confirmIcon}
                  alt="Ícone de confirmação pix"
                />
              </div>
              <div className={styles.modalButtons}>
                <button onClick={closeModal}>Fechar</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
