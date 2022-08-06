import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/PageSelector.module.css";

const PageSelector = () => {
  return (
    <div className="container">
      <div className={styles.buttons__container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.button__active : styles.button)}

          // className={({ isActive }) => (isActive ? styles.button__active : styles.button)}

          // className={`${styles.button} ${currentPage === pgNumber ? styles.button__active : ""}`}
          
        >
          All
        </NavLink>
        <NavLink
          to="/faves"
          className={({ isActive }) => (isActive ? styles.button__active : styles.button)}
          
        >
          My faves
        </NavLink>
      </div>
    </div>
  );
};

export default PageSelector;
