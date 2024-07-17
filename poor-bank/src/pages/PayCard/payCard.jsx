import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import styles from "./payCard.module.css";

export default function PayCard() {
  const dados = [
    { data: "10 JUN", item: "Rolex", preco: "R$ 100,00" },
    { data: "10 JUN", item: "Rolex", preco: "R$ 100,00" },
    { data: "10 JUN", item: "Rolex", preco: "R$ 100,00" },
    { data: "10 JUN", item: "Rolex", preco: "R$ 100,00" },
    { data: "10 JUN", item: "Rolex", preco: "R$ 100,00" },
    { data: "10 JUN", item: "Rolex", preco: "R$ 35,12" },
  ];
  return (
    <div className={styles.container}>
      <HeaderDefault />
      <div className={styles.body}>
        <div className={styles.card}>
          <h1>R$ 535,12</h1>
          <p>Vencimento 05 JUL</p>
          <p>Fechamento em 28 JUN</p>
        </div>

        <div className={styles.tableContent}>
          <table>
            <thead></thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>{item.data}</td>
                  <td>{item.item}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ButtonDefault label="Pagar" />
      </div>
    </div>
  );
}
