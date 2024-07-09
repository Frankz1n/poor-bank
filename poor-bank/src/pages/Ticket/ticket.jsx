import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import InputDefault from "../../components/InputDefault/InputDefault";
import "./styles.css";

export default function Ticket() {
  return (
    <div className="containerTicket">
      <div className="header"></div>
      <HeaderDefault />
      <div className="content">
        <div className="card">
          <h1>Pagar Boleto</h1>
          <InputDefault type={'number'} name={'Número do Boleto'} width={'80%'} />
          <div className="spaceBetween"></div>
          <ButtonDefault label={'Pagar'}/>
        </div>        
      </div>
    </div>
  );
}
