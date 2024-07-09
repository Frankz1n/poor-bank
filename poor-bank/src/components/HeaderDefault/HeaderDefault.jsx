import "./styles.css";

import logoWallet from "../../assets/poorbankLogoWallet.png";
import logoText from "../../assets/logoText.png";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import helpIcon from "../../assets/helpIcon.png";

export default function HeaderDefault() {
  return (
    <div className="container">
      <div className="leftContent">
        <img className="userIcon" src={userIcon} alt="user-icon"></img>
      </div>

      <div className="logo">
        <img className="logoWallet" src={logoWallet} alt="logo-img" />
        <img className="logoText" src={logoText} alt="logo-text" />
      </div>

      <div className="rightContent">
        <img className="helpIcon" src={helpIcon} alt="help-icon" />
        <img className="emailIcon" src={emailIcon} alt="email-icon" />
      </div>
    </div>
  );
}
