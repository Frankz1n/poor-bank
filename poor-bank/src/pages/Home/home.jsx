import Header from "../../components/HeaderHome/Header";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <Header />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.firstText}>
            101 trilhões de clientes. <span>Você no centro de tudo.</span>
          </p>
          <p className={styles.secondText}>
            Em cada produto ou solução que lançamos, tudo é
            <span>pensado para abrir N possibilidades na sua vida.</span>
          </p>
        </div>
        <div className={styles.register}>
          <h3>Crie sua conta aqui!</h3>
          <input type="text" placeholder="Digite seu CPF" />
          <button>Continuar</button>
        </div>
      </div>
    </div>
  );
}
