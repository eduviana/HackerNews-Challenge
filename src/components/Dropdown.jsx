import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { capitalizeFirstChar } from "../helpers/capitalizeFirstChar";
import styles from "../styles/Dropdown.module.css";

const lastPickedOption = JSON.parse(localStorage.getItem("filter")) || "";

const Dropdown = () => {
  const { optionPicked } = useContext(PostContext);

  return (
    <div className="container">
      <select
        id="frameworks"
        onChange={(e) => optionPicked(e.target.value)}
        className={styles.select__container}
      >
        <option hidden>
          {lastPickedOption === ""
            ? "Select your news"
            : capitalizeFirstChar(lastPickedOption)}
        </option>
        <option defaultValue="Angular">Angular</option>
        <option value="Reactjs">Reactjs</option>
        <option value="Vuejs">Vuejs</option>
      </select>
    </div>
  );
};

export default Dropdown;
