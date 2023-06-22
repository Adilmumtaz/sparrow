import { useCallback } from "react";
import FieldsContainer from "../components/FieldsContainer";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
const LogIn = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <div className={styles.header}>
        <div className={styles.close} />
        <b className={styles.logIn1}>Log In</b>
      </div>
      <FieldsContainer />
      <div className={styles.buttons}>
        <div className={styles.loginButton}>
          <b className={styles.logIn2}>Log In</b>
        </div>
        <div className={styles.signUp}>
          <div className={styles.dontHaveAn}>Don’t have an account?</div>
          <b className={styles.signUp1} onClick={onSignUpTextClick}>
            Sign Up
          </b>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
