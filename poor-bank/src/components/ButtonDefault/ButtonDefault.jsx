import style from "./ButtonDefault.module.css";

export default function ButtonDefault({ label, width, height }) {
    return (
        <div className={style.container} onChange={(e) => setInputValue(e.target.value)} style={{ width: width, height: height}} >
            <button className={style.button}  > {label} </button>
        </div>
    );
}