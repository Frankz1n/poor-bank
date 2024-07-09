import "./styles.css";

import arrow from "../../assets/arrowRight.png";
import InputDefault from "../../components/InputDefault/InputDefault";

export default function Register() {
  return (
    <div className="containerRegister">
      <div className="contentLeft">ola</div>
      <div className="separation"></div>
      <div className="contentRight">
        <div className="cadContainer">
          <h1>Cadastro</h1>
          <div className="cadContainer-inputs">
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu nome"
              width="300px"
            />
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu CPF"
              width="300px"
            />
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu telefone"
              width="300px"
            />
            <InputDefault
              type="text"
              name="name"
              placeholder="Digite seu E-mail"
              width="300px"
            />
            <InputDefault
              type="password"
              name="name"
              placeholder="Digite sua senha"
              width="300px"
            />
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
