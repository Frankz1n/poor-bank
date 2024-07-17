import style from "./ButtonDefault.module.css";

export default function ButtonDefault({ label, width, height, onClick }) {
  return (
    <div
      className={style.container}
      onChange={(e) => setInputValue(e.target.value)}
      style={{ width: width, height: height }}
    >
      <button onClick={onClick} className={style.button}>
        {label}{" "}
      </button>
    </div>
  );
}
