import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import FooterContainer from "../components/FooterContainer";
import styles from "./Test.module.css";
const Test = () => {
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

  const onAboutText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/level-0");
  }, [navigate]);

  return (
    <div className={styles.test}>
      <LoginContainer
        onTestTextClick={onTestTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLoginButtonContainerClick={onLoginButtonContainerClick}
      />
      <b className={styles.testLevels}>Test Levels</b>
      <div className={styles.frameParent}>
        <div className={styles.basicWrapper}>
          <b className={styles.basic}>Basic</b>
        </div>
        <div className={styles.level0Wrapper} onClick={onFrameContainer5Click}>
          <b className={styles.level0}>Level 0</b>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.basicWrapper}>
          <b className={styles.intermediate}>Intermediate</b>
        </div>
        <div className={styles.level3Wrapper}>
          <b className={styles.level0}>Level 3</b>
        </div>
        <div className={styles.level4Wrapper}>
          <b className={styles.level0}>Level 4</b>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.basicWrapper}>
          <b className={styles.intermediate}>Intermediate</b>
        </div>
        <div className={styles.level1Wrapper}>
          <b className={styles.level0}>Level 1</b>
        </div>
        <div className={styles.level2Wrapper}>
          <b className={styles.level0}>Level 2</b>
        </div>
      </div>
      <FooterContainer
        productId="/logo.svg"
        onAboutText1Click={onAboutText1Click}
      />
    </div>
  );
};

export default Test;
