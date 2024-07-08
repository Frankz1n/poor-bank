import style from "./ButtonDefault.module.css";

export default function ButtonDefault({ label }) {
    return (
        <div className={style.container} >
            <button className={style.button}> {label} </button>
        </div>
    );
}