import React from "react";
import styles from "../../styles/PageSelector.module.css";

const PageSelector = () => {
  return (
    <div className="container">
      <div className={styles.buttons__container}>
        <button className={styles.button__active}>All</button>
        <button className={styles.button}>My faves</button>
      </div>
    </div>
  );
};

export default PageSelector;
