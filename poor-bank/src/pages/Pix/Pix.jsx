import Modal from "react-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar useNavigate se estiver usando react-router

import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";

import style from "./Pix.module.css";
import confirmIcon from "../../assets/confirme.png";

Modal.setAppElement("#root");

export default function Pix() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [codPix, setCodPix] = useState("");
  const navigate = useNavigate(); // Use o hook useNavigate do react-router

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputValue = (e) => {
    setCodPix(e.target.value);
  };

  const confirmPix = () => {
    setIsOpen(false);
    setSecondModalIsOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalIsOpen(false);
    navigate("/tela-usuario");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <HeaderDefault />
      </div>

      <div className={style.content}>
        <h1 className={style.tituloPix}>Área Pix</h1>
        <h2 className={style.subTituloPix}>
          Envie e receba pagamentos a qualquer hora e dia da{" "}
        </h2>
        <h2 className={style.subTituloPix}>
          semana, sem pagar nada por isso.{" "}
        </h2>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <InputDefault
                placeholder={"Tipo de chave"}
                name={"Tipo"}
                width={"15%"}
              />
              <div className={style.space}></div>
              <InputDefault
                placeholder={"Chave Pix"}
                name={"Chave"}
                width={"25%"}
                onChange={handleInputValue}
              />
              <div className={style.space}></div>
              <ButtonDefault
                onClick={openModal}
                label={"Pagar"}
                width={"150px"}
                height={"40px"}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal de exemplo"
                className="modal"
                overlayClassName="modal-overlay"
              >
                <h2 className="modal-title">Deseja confirmar Pix?</h2>
                <div className="modal-text">
                  <p>Chave pix: {codPix}</p>
                  <p>Instituição de pagamento: PoorBank</p>
                  <p>Nome: Robertinho RJ</p>
                </div>
                <div className="modal-buttons">
                  <button onClick={closeModal}>Cancelar</button>
                  <button onClick={confirmPix}>Confirmar</button>
                </div>
              </Modal>
              <Modal
                isOpen={secondModalIsOpen}
                onRequestClose={closeSecondModal}
                contentLabel="Modal de exemplo"
                className="modal"
                overlayClassName="modal-overlay"
              >
                <h2 className="modal-title">Pagamento Pix Confirmado</h2>
                <div>
                  <img
                    className={style.modalIcon}
                    src={confirmIcon}
                    alt="icone de confirmação pix"
                  />
                </div>
                <div className="modal-buttons">
                  <button onClick={closeSecondModal}>Fechar</button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
