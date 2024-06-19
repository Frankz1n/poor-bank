import Input from "../../components/input/Input";
import "./styles.css";

import arrow from "../../assets/arrowRight.png";

export default function Register() {
  return (
    <div className="containerRegister">
      <div className="contentLeft">ola</div>
      <div className="separation"></div>
      <div className="contentRight">
        <div className="cadContainer">
          <h1>Cadastro</h1>
          <div className="cadContainer-inputs">
            <Input type="text" name="Digite seu nome completo" />
            <Input type="text" name="Digite seu cpf" />
            <Input type="text" name="Digite seu numero de telefone" />
            <Input type="text" name="Digite seu E-mail" />
            <Input type="text" name="Digite sua senha" />
          </div>
          <button className="button">
            <p className="button-text">Continuar</p>
            <img className="button-arrow" src={arrow} alt="seta" />
          </button>
        </div>
        <p className="text-alternative">
          Já possui uma conta? <span>Clique aqui</span>
        </p>
      </div>
    </div>
  );
}
