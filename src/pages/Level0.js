import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import NeutralContainer from "../components/NeutralContainer";
import styles from "./Level0.module.css";
const Level0 = () => {
  const navigate = useNavigate();

  const onTestTextClick = useCallback(() => {
    navigate("/test");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onLoginButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonContainer2Click = useCallback(() => {
    navigate("/test");
  }, [navigate]);

  return (
    <div className={styles.level0}>
      <LoginContainer
        onTestTextClick={onTestTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLoginButtonContainerClick={onLoginButtonContainerClick}
      />
      <div
        className={styles.loginButton}
        onClick={onLoginButtonContainer1Click}
      >
        <b className={styles.continueLater}>Continue Later</b>
      </div>
      <div
        className={styles.loginButton1}
        onClick={onLoginButtonContainer2Click}
      >
        <b className={styles.exit}>Exit</b>
      </div>
      <b className={styles.level01}>Level 0</b>
      <NeutralContainer hobbyQuestion="Do you like going wild?" />
      <NeutralContainer hobbyQuestion="You love books?" propTop="665px" />
      <NeutralContainer
        hobbyQuestion="You often go out on picnics?"
        propTop="895px"
      />
      <NeutralContainer
        hobbyQuestion="I like to talk about life"
        propTop="1125px"
      />
      <NeutralContainer
        hobbyQuestion="I prefer deep conversations over short ones"
        propTop="1355px"
      />
      <NeutralContainer
        hobbyQuestion="You love social media?"
        propTop="1585px"
      />
      <div className={styles.loginButton2}>
        <b className={styles.submit}>Submit</b>
      </div>
    </div>
  );
};

export default Level0;
