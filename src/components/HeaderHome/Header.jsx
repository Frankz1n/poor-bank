import styles from "./HeaderHome.module.css";
import logoWallet from "../../assets/poorbankLogoWallet.png";
import logoText from "../../assets/logoText.png";
import arrowRight from "../../assets/arrowRight.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logoWallet} src={logoWallet} alt="logo-img" />
        <img className={styles.logoText} src={logoText} alt="logo-text" />
      </div>
      <div onClick={() => toLogin()} className={styles.login}>
        <h1>Login</h1>
        <img src={arrowRight} alt="seta para direita" />
      </div>
    </div>
  );
}
