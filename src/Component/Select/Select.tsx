import React, { useState } from "react";
import styles from "./Select.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = () => {
  const [selectedVal, setSelectedVal] = useState("");

  function selectAction() {
    const temp: HTMLElement | null = document.querySelector(
      `.${styles.optionsWrapper}`
    );

    if (temp!.style.display != "flex") {
      temp!.style.display = "flex";
    } else {
      temp!.style.display = "none";
    }
  }

  function optionAction(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setSelectedVal((e.target as HTMLElement).innerText);
    const temp: HTMLElement | null = document.querySelector(
      `.${styles.selectWrapper}`
    );
    temp!.style.color = "#000";
  }

  const options = () => {
    return (
      <ul className={styles.optionsWrapper}>
        <li className={styles.option} onClick={optionAction}>
          Front End Developer
        </li>
        <li className={styles.option} onClick={optionAction}>
          Full Stack Developer
        </li>
        <li className={styles.option} onClick={optionAction}>
          Back End Engineer
        </li>
      </ul>
    );
  };

  return (
    <div className={styles.componentWrapper} onClick={selectAction}>
      <div className={styles.selectWrapper}>
        <div>
          {selectedVal ? selectedVal : "I would describe my user role as"}
        </div>
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      {options()}
    </div>
  );
};

export default Select;
