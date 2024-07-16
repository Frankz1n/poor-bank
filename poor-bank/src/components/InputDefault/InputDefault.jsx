import style from "./InputDefault.module.css";

export default function InputDefault({
  type,
  name,
  value,
  onChange,
  width,
  placeholder,
}) {
  return (
    <div className={style.inputContainer} style={{ width: width }}>
      <input
        placeholder={placeholder}
        className={style.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className={style.line}></div>
    </div>
  );
}
