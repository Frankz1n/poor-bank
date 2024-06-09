import "./styles.css";

import logoWallet from "../../assets/poorbankLogoWallet.png";
import logoText from "../../assets/logoText.png";
import arrowRight from "../../assets/arrowRight.png";

export default function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img className="logoWallet" src={logoWallet} alt="logo-img" />
        <img className="logoText" src={logoText} alt="logo-text" />
      </div>
      <div className="login">
        <h1>Login</h1>
        <img src={arrowRight} alt="seta para direita" />
      </div>
    </div>
  );
}
