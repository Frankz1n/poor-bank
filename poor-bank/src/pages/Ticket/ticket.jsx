import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import Input from "../../components/input/Input";
import "./styles.css";

export default function Ticket() {
  return (
    <div className="containerTicket">
      <div className="header"></div>
      <HeaderDefault />
      <div className="content">
        <div className="card">
        </div>
      </div>
    </div>
  );
}
