import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import styles from "./Loan.module.css";

Modal.setAppElement("#root");

export default function Loan() {
  const [loanValue, setLoanValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [installmentValue, setInstallmentValue] = useState(0);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const usuarioLogadoData = JSON.parse(localStorage.getItem("usuarioLogado"));
    setUsuarioLogado(usuarioLogadoData);
  }, []);

  const calculateInstallments = (value) => {
    const interestRate = 0.15;
    const installments = 12;
    const installmentAmount = (value * (1 + interestRate)) / installments;
    return installmentAmount.toFixed(2);
  };

  const handleLoanRequest = () => {
    const value = parseFloat(loanValue);
    if (isNaN(value) || value <= 0) {
      alert("Digite um valor válido para o empréstimo");
      return;
    }

    const installmentAmount = calculateInstallments(value);
    setInstallmentValue(installmentAmount);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleConfirm = () => {
    if (usuarioLogado) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
      const usuarioIndex = usuarios.findIndex(
        (u) => u.nome === usuarioLogado.nome
      );

      if (usuarioIndex !== -1) {
        const novoSaldo = usuarios[usuarioIndex].saldo + parseFloat(loanValue);
        usuarios[usuarioIndex].saldo = novoSaldo;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      }

      setIsModalOpen(false);
      setIsConfirmModalOpen(true);
    }
  };

  return (
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <h1>Empréstimo</h1>
        <div className={styles.loanContainer}>
          <h2>Valor do Empréstimo</h2>
          <InputDefault
            type="number"
            name="inputEmpValue"
            width="100px"
            placeholder="R$ 0,00"
            value={loanValue}
            onChange={(e) => setLoanValue(e.target.value)}
          />
          <div className={styles.empSoli}>
            <div className={styles.empSoliInput}>
              <label htmlFor="opts">Motivo do Empréstimo</label>
              <select className={styles.select} name="opts">
                <option value="consumo">Consumo</option>
                <option value="investimento">Investimento</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <ButtonDefault
              label="Solicitar Empréstimo"
              onClick={handleLoanRequest}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Empréstimo"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <h2 className={styles.modalTitle}>Detalhes do Empréstimo</h2>
        <p className={styles.modalText}>
          Valor do Empréstimo: R${loanValue}
          <br />
          Valor das Parcelas (12x com 15% de juros): R${installmentValue}
        </p>
        <div className={styles.modalButtons}>
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={handleConfirm}>Confirmar</button>
        </div>
      </Modal>
      <Modal
        isOpen={isConfirmModalOpen}
        onRequestClose={closeConfirmModal}
        contentLabel="Empréstimo Realizado"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <h2 className={styles.modalTitle}>Empréstimo Realizado</h2>
        <p className={styles.modalText}>
          Seu empréstimo foi realizado com sucesso!
        </p>
        <div className={styles.modalButtons}>
          <button onClick={closeConfirmModal}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
}
