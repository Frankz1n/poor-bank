import styles from "./HeaderDefault.module.css";

import logoWallet from "../../assets/poorbankLogoWallet.png";
import logoText from "../../assets/logoText.png";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import helpIcon from "../../assets/helpIcon.png";

export default function HeaderDefault() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img className={styles.userIcon} src={userIcon} alt="user-icon"></img>
      </div>

      <div className={styles.logo}>
        <img className={styles.logoWallet} src={logoWallet} alt="logo-img" />
        <img className={styles.logoText} src={logoText} alt="logo-text" />
      </div>

      <div className={styles.rightContent}>
        <img className={styles.helpIcon} src={helpIcon} alt="help-icon" />
        <img className={styles.emailIcon} src={emailIcon} alt="email-icon" />
      </div>
    </div>
  );
}
