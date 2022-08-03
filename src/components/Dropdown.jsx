import React from "react";
import styles from "../styles/Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className="container">
      <select className={styles.select__container}>
        <option defaultValue  hidden>
          Select your news
        </option>
        <option value="angular">Angular</option>
        <option value="react">Reactjs</option>
        <option value="vuejs">Vuejs</option>
      </select>



      
    </div>
  );
};

export default Dropdown;
