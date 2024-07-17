import React, { useEffect, useState } from "react";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import ItemBox from "../../components/ItemBox/ItemBox";
import styles from "./principalScreen.module.css";

import scam from "../../assets/scanear.png";
import pix from "../../assets/pixIcon.png";
import transfer from "../../assets/transferIcon.png";
import invest from "../../assets/investIcon.png";
import emprest from "../../assets/emprestIcon.png";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { useNavigate } from "react-router-dom";

export default function UserScreen() {
  const [userName, setUserName] = useState("");
  const [saldo, setSaldo] = useState(0);
  const navigate = useNavigate();
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

  const handleToPage = (op) => {
    switch (op) {
      case 1:
        navigate("/boletos");
        break;
      case 2:
        navigate("/pix");
        break;
      case 3:
        navigate("/transferencia");
        break;
      case 4:
        navigate("/investimento");
        break;
      case 5:
        navigate("/emprestimo");
        break;
      case 6:
        navigate("/fatura-cartao");
        break;
    }
  };

  return (
    // arrumar valor da fatura do cartao de credito para que passe para a tela
    // da fatura do cartao
    <div className={styles.container}>
      <HeaderDefault />
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.topContent}>
            <h1 className={styles.title}>Olá, {userName}</h1>
            <div className={styles.balance}>
              <div>SALDO</div>
              <div>R$ {saldo}</div>
            </div>
          </div>
        </div>

        <div className={styles.icons}>
          <ItemBox
            onClick={() => handleToPage(1)}
            img={scam}
            text="Pagar Boleto"
          />
          <ItemBox onClick={() => handleToPage(2)} img={pix} text="Área Pix" />
          <ItemBox
            onClick={() => handleToPage(3)}
            img={transfer}
            text="Transferir"
          />
          <ItemBox
            onClick={() => handleToPage(4)}
            img={invest}
            text="Investir"
          />
          <ItemBox
            onClick={() => handleToPage(5)}
            img={emprest}
            text="Pedir Empréstimo"
          />
        </div>

        <div className={styles.separation}></div>
        <div className={styles.bottom}>
          <div className={styles.bottomContent1}>
            <div className={styles.information}>
              <h2>Cartão de crédito</h2>
              <div className={styles.invoice}>
                <h3>Fatura atual</h3>
                <h2>R$ 225,00</h2>
              </div>
            </div>
          </div>
          <div className={styles.bottomContent2}>
            <ButtonDefault
              onClick={() => handleToPage(6)}
              label="Pagar Cartão"
              width="150px"
              height="40px"
            />
            <div className={styles.bottomContent2Arrow}>{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
