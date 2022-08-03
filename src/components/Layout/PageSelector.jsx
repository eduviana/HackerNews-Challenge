import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/PageSelector.module.css";

const PageSelector = () => {
  return (
    <div className="container">
      <div className={styles.buttons__container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "button__active" : "button")}
          
        >
          All
        </NavLink>
        <NavLink
          to="/faves"
          className={({ isActive }) => (isActive ? "button__active" : "button")}
          
        >
          My faves
        </NavLink>
      </div>
    </div>
  );
};

export default PageSelector;
