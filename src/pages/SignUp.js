import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EmailContainer from "../components/EmailContainer";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onCloseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.header}>
        <div className={styles.close} onClick={onCloseClick} />
        <b className={styles.signUp1}>Sign Up</b>
      </div>
      <EmailContainer />
      <div className={styles.buttons}>
        <div className={styles.div}>
          <b className={styles.signUp2}>Sign Up</b>
        </div>
        <div className={styles.signUp3}>
          <div className={styles.alreadyHaveAn}>Already have an account?</div>
          <b className={styles.logIn} onClick={onLogInTextClick}>
            Log In
          </b>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
