import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";


const Header = () => {
  return (
    <div className={styles.boxShadow}>
      <div className="container">
        <Link to="/" className={styles.link} >
          <h1 className={styles.title}>HACKER NEWS</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
