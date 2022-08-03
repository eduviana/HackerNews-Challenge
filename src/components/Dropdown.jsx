import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import styles from "../styles/Dropdown.module.css";

const Dropdown = () => {

// const [optionValue, setOptionValue] = useState('');
const { optionPicked } = useContext(PostContext);



  return (
    <div className="container">
      <select onChange={(e) => optionPicked(e.target.value)} className={styles.select__container}>
        <option defaultValue  hidden>
          Select your news
        </option>
        <option value="angular">Angular</option>
        <option value="reactjs">Reactjs</option>
        <option value="vuejs">Vuejs</option>
      </select>



      
    </div>
  );
};

export default Dropdown;
