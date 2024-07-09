import styles from "./Login.module.css";

import InputDefault from "../../components/InputDefault/InputDefault";
import arrow from "../../assets/arrowRight.png";

export default function Login() {
  return (
    <div className={styles.containerRegister}>
      <div className={styles.contentLeft}>ola</div>
      <div className={styles.separation}></div>
      <div className={styles.contentRight}>
        <div className={styles.cadContainer}>
          <h1>Login</h1>
          <div className={styles.cadContaineInputs}>
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu CPF"
              width="300px"
            />
            <InputDefault
              type="password"
              name="name"
              placeholder="Digite sua senha"
              width="300px"
            />
          </div>
          <button className={styles.button}>
            <p className={styles.buttonText}>Continuar</p>
            <img className={styles.buttonArrow} src={arrow} alt="seta" />
          </button>
        </div>
        <p className={styles.textAlternative}>
          Já possui uma conta? <span>Clique aqui</span>
        </p>
      </div>
    </div>
  );
}
