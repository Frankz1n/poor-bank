import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import ItemBox from "../../components/ItemBox/ItemBox";
import styles from "./principalScreen.module.css";

import scam from "../../assets/scanear.png";

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
          <ItemBox img={scam} text="Pagar Boleto" />
          <ItemBox img={scam} text="Pagar Boleto" />
          <ItemBox img={scam} text="Pagar Boleto" />
          <ItemBox img={scam} text="Pagar Boleto" />
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
