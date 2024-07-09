import style from "./InputDefault.module.css";

export default function InputDefault({ type, name, width, placeholder }) {
  return (
    <div
      className={style.inputContainer}
      onChange={(e) => setInputValue(e.target.value)}
      style={{ width: width }}
    >
      <input
        placeholder={placeholder}
        className={style.input}
        type={type}
        name={name}
      />

      <div className={style.line}></div>
    </div>
  );
}
