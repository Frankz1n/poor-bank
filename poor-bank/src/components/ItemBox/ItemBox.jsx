import styles from "./ItemBox.module.css";

export default function ItemBox({ img, text }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={img} alt={text} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
