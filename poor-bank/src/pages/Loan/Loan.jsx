import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

import styles from "./Loan.module.css";
export default function Loan() {
  return (
    // fazer uma lógica para emprestimo,
    // depois de solicitar emprestimo mostrar modal com numero de parcelas e valor total,
    // mostrar modal com pedido de emprestimo concluido e adicionar valor ao saldo do usuario
    <div>
      <HeaderDefault />
      <div className={styles.container}>
        <h1>Empréstimo</h1>
        <div className={styles.loanContainer}>
          <h2>Valor do Empréstimo</h2>
          <InputDefault
            type="number"
            name="inputEmpValue"
            width="100px"
            placeholder="R$ 0,00"
          />
          <div className={styles.empSoli}>
            <div className={styles.empSoliInput}>
              <label htmlFor="opts">Motivo do Empréstimo</label>
              <select className={styles.select} name="opts" />
            </div>
            <ButtonDefault label="Solicitar Empréstimo" />
          </div>
        </div>
      </div>
    </div>
  );
}
