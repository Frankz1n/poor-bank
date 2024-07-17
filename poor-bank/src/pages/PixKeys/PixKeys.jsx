import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";
import style from "./pixKeys.module.css";

export default function PixKeys() {
  // colocar o saldo nessa tela,
  // nao deixar fazer um pix maior que o saldo,
  // subtrair o valor do pix do saldo do usuario
  return (
    <div className={style.container}>
      <div className={style.header}>
        <HeaderDefault />
      </div>

      <div className={style.content}>
        <h1 className={style.tituloPix}>Minhas chaves</h1>
        <div class="container">
          <details>
            <summary>CPF/CNPJ</summary>
            <p>
              CPF ou CNPJ: <span>123.456.789-00</span>
            </p>
          </details>
          <details open>
            <summary>Número de telefone</summary>
            <p>
              Chave: <span>(55) 51 98765-4321</span>
            </p>
          </details>
          <details open>
            <summary>E-mail</summary>
            <p>
              E-mail: <span>email@email.com</span>
            </p>
          </details>
          <details open>
            <summary>Chave Aleatória</summary>
            <p>
              Chave: <span>xxxx-xxxx-xxxx</span>
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
