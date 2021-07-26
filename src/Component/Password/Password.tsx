import React, { useState } from "react";
import styles from "./Password.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Password = () => {
  const [passState, setState] = useState("password");

  function eyeAction() {
    if (passState === "password") {
      setState("text");
    } else {
      setState("password");
    }
  }

  return (
    <div className={styles.passwordWrapper}>
      <div className={styles.password}>
        <input type={passState} placeholder="Password" />
        <span onClick={eyeAction}>
          <FontAwesomeIcon icon={faEye} />
        </span>
      </div>
      <span>Minimum 8 characters</span>
    </div>
  );
};

export default Password;
