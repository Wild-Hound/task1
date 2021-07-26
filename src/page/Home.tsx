import React from "react";
import Password from "../Component/Password/Password";
import Select from "../Component/Select/Select";

import styles from "./Home.module.scss";

const Home = () => {
  const logIn = () => {
    return (
      <div className={styles.LogInWrapper}>
        <div className={styles.LogIn}>
          <h1>Let's set up your account</h1>
          <div className={styles.haveAcc}>
            Already have an account? <a href="#">Sign in</a>
          </div>
          <form>{logInForm()}</form>
          <div className={styles.aggrement}>
            By clicking the "Next" button, you agree to creating a free account,
            and to <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  };

  const logInForm = () => {
    return (
      <>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email address" />
        <Select />
        <Password />
        <input type="submit" value="Next" className={styles.submitBtn} />
      </>
    );
  };

  const loginContent = () => {
    return (
      <div className={styles.logInContentWrapper}>
        <div className={styles.logInContent}>
          <h1>Dummy Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.pageWrapper}>
      {logIn()}
      {loginContent()}
    </div>
  );
};

export default Home;
