import React from 'react'
import styles from "../styles/Dropdown.module.css";

const Dropdown = () => {
  return (
    
    <select>
       <option value="none" selected disabled hidden>Select your news</option>
        <option value="angular">Angular</option>
        <option value="react">Reactjs</option>
        <option value="vuejs">Vuejs</option>
    </select>
  )
}

export default Dropdown