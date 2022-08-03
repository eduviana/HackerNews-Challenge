import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.background}>
      <div className="container">
        <h1 className={styles.title}>HACKER NEWS</h1>
      </div>
    </div>
  );
};

export default Header;
