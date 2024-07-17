import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import ItemBox from "../../components/ItemBox/ItemBox";

import styles from "./Transfer.module.css";
import pixIcon from "../../assets/pixIcon.png";
import InputDefault from "../../components/InputDefault/InputDefault";

export default function Transfer() {
  return (
    // colocar saldo do usuario na tela,
    // não deixar fazer uma transferencia maior q saldo,
    // subtrair do saldo o valor da transferencia.
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <h1>Transferência</h1>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <div className={styles.content1}>
              <div className={styles.transferArea}>
                <h2>Valor da Transferencia</h2>
                <input
                  type="number"
                  placeholder="R$0,00"
                  className={styles.inputPix}
                />
              </div>
              <ItemBox img={pixIcon} text="Área Pix" />
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
              <button className={styles.button}>Transferir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
