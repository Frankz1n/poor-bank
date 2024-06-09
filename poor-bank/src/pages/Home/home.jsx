import "./styles.css";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="textContainer">
        <p className="firstText">
          101 trilhões de clientes. <span>Você no centro de tudo.</span>
        </p>
        <p className="secondText">
          Em cada produto ou solução que lançamos, tudo é{" "}
          <span>pensado para abrir N possibilidades na sua vida.</span>
        </p>
      </div>
      <div className="register">
        <h3>Crie sua conta aqui!</h3>
        <input type="text" placeholder="Digite seu CPF" />
        <button>Continuar</button>
      </div>
    </div>
  );
}
