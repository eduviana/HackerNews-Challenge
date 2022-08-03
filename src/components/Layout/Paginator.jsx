import React from "react";
import styles from "../../styles/Paginator.module.css";

const Paginator = () => {
  return (
    <div className={styles.paginator__container}>
      <button className={styles.button}>{"<"}</button>
      <button className={styles.button}>1</button>
      <button className={styles.button__active}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <button className={styles.button}>6</button>
      <button className={styles.button}>7</button>
      <button className={styles.button}>8</button>
      <button className={styles.button}>9</button>
      <button className={styles.button}>{">"}</button>
    </div>
  );
};

export default Paginator;
