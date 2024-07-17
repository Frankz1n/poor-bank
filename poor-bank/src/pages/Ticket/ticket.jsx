import Modal from "react-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";

import "./styles.css";

Modal.setAppElement("#root");

export default function Ticket() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [codTicket, setCodTicket] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputValue = (e) => {
    setCodTicket(e.target.value);
  };

  const toUserScreen = () => {
    navigate("/tela-usuario");
  };

  return (
    <div className="containerTicket">
      <div className="header"></div>
      <HeaderDefault />
      <div className="content">
        <div className="card">
          <h1>Pagar Boleto</h1>
          <InputDefault
            type={"number"}
            name={"Número do Boleto"}
            width={"80%"}
            onChange={handleInputValue}
          />
          <div className="spaceBetween"></div>
          <ButtonDefault onClick={openModal} label={"Pagar"} />

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal de exemplo"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2 className="modal-title">Boleto Pago com Sucesso!</h2>
            <div className="modal-text">
              Seu boleto de código: {codTicket} foi pago com sucesso
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal}>Pagar outro boleto</button>
              <button onClick={toUserScreen}>Finalizar</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
