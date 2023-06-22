import { useMemo } from "react";
import styles from "./LoginContainer.module.css";
const LoginContainer = ({
  frameCursor,
  testCursor,
  onMenuButtonsContainerClick,
  onHomeTextClick,
  onTestTextClick,
  onAboutTextClick,
  onContactTextClick,
  onLoginButtonContainerClick,
}) => {
  const menuButtonsStyle = useMemo(() => {
    return {
      cursor: frameCursor,
    };
  }, [frameCursor]);

  const homeStyle = useMemo(() => {
    return {
      cursor: testCursor,
    };
  }, [testCursor]);

  return (
    <div className={styles.header}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.frame}>
        <div className={styles.navigationBar}>
          <div
            className={styles.menuButtons}
            style={menuButtonsStyle}
            onClick={onMenuButtonsContainerClick}
          >
            <div className={styles.frame1}>
              <b
                className={styles.home}
                style={homeStyle}
                onClick={onHomeTextClick}
              >
                Home
              </b>
              <b className={styles.test} onClick={onTestTextClick}>
                Test
              </b>
            </div>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <b className={styles.home}>Results</b>
                <b
                  className={styles.test}
                  onClick={onAboutTextClick}
                >{`About `}</b>
              </div>
              <b className={styles.test} onClick={onContactTextClick}>
                Contact
              </b>
            </div>
          </div>
        </div>
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <b className={styles.login}>Login</b>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
