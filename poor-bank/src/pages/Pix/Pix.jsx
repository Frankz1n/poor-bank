import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [valorPix, setValorPix] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState("");
  const [tipoChave, setTipoChave] = useState("CPF");
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

  const openModal = () => {
    const valor = parseFloat(valorPix);
    if (isNaN(valor) || valor <= 0) {
      alert("Digite um valor válido para a transferência");
      return;
    }

    if (valor > saldo) {
      alert("Saldo insuficiente");
      return;
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputValue = (e) => {
    setCodPix(e.target.value);
  };

  const handleValorPix = (e) => {
    setValorPix(e.target.value);
  };

  const handleTipoChave = (e) => {
    setTipoChave(e.target.value);
  };

  const confirmPix = () => {
    const valor = parseFloat(valorPix);
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

        <div className={style.saldoContainer}>
          <h3 className={style.saldo}>
            Saldo disponível: R${saldo.toFixed(2)}
          </h3>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <select
                name="Tipo"
                className={style.select}
                value={tipoChave}
                onChange={handleTipoChave}
              >
                <option value="CPF">CPF</option>
                <option value="Celular">Celular</option>
                <option value="Email">Email</option>
              </select>
              <div className={style.space}></div>
              <InputDefault
                placeholder={"Chave Pix"}
                name={"Chave"}
                width={"25%"}
                onChange={handleInputValue}
              />
              <div className={style.space}></div>
              <InputDefault
                placeholder={"Valor do Pix"}
                name={"Valor"}
                width={"25%"}
                onChange={handleValorPix}
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
                  <p>Tipo de chave: {tipoChave}</p>
                  <p>Valor: R${valorPix}</p>
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
