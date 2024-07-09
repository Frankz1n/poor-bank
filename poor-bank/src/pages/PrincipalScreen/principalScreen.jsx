import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import ItemBox from "../../components/ItemBox/ItemBox";
import styles from "./principalScreen.module.css";

import scam from "../../assets/scanear.png";
import pix from "../../assets/pixIcon.png";
import transfer from "../../assets/transferIcon.png";
import invest from "../../assets/investIcon.png";
import emprest from "../../assets/emprestIcon.png";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

export default function UserScreen() {
  return (
    <div className={styles.container}>
      <HeaderDefault />
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.topContent}>
            <h1 className={styles.title}>Olá, Usuário</h1>
            <div className={styles.balance}>
              <div>SALDO</div>
              <div>R$ 225,25</div>
            </div>
          </div>
        </div>
        <div className={styles.midle}>
          <ItemBox img={scam} text="Pagar Boleto" />
          <ItemBox img={pix} text="Área Pix" />
          <ItemBox img={transfer} text="Transferir" />
          <ItemBox img={invest} text="Investir" />
          <ItemBox img={emprest} text="Pedir Empréstimo" />
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
            <ButtonDefault label="Pagar Cartão" width="150px" height="40px" />
            <div className={styles.bottomContent2Arrow}>{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
