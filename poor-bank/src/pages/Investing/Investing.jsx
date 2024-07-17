import styles from "./Investing.module.css";

import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import cofrinho from "../../assets/cofrinho.png";
import investGraf from "../../assets/investimentoGrafico.png";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

export default function Investing() {
  // ajeitar saldo do usuario para que puxe do localStorage,
  // mostrar modal confirmando o investimento
  return (
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.balance}>
              <div>SALDO</div>
              <div>R$ 225,25</div>
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
                  type="text"
                  name="inputCofrinho"
                  width="250px"
                  placeholder="Valor que deseja investir"
                />
                <ButtonDefault label="investir" width="150px" height="50px" />
              </div>
              <div className={styles.cdb}>
                <div className={styles.cdbInvest}>
                  <img src={investGraf} alt="investimento icon" />
                  <h2>CDB Diário</h2>
                </div>
                <InputDefault
                  type="text"
                  name="inputInvestimento"
                  width="250px"
                  placeholder="Valor que deseja investir"
                />
                <ButtonDefault label="investir" width="150px" height="50px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
