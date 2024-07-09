import "./styles.css";

export default function Input({ type, name }) {
  return (
    <div className="inputContainer">
      <label htmlFor={name} className="inputLabel">
        {name}
      </label>
      <input className="input" type={type} name={name} />
    </div>
  );
}
