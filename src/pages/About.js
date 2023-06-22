import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import FooterContainer from "../components/FooterContainer";
import styles from "./About.module.css";
const About = () => {
  const navigate = useNavigate();

  const onMenuButtonsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTestText1Click = useCallback(() => {
    navigate("/test");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <LoginContainer
        frameCursor="pointer"
        testCursor="pointer"
        onMenuButtonsContainerClick={onMenuButtonsContainerClick}
        onHomeTextClick={onHomeTextClick}
        onTestTextClick={onTestTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLoginButtonContainerClick={onLoginButtonContainerClick}
      />
      <div className={styles.aboutChild} />
      <div className={styles.personalityAssessorIsContainer}>
        <p className={styles.personalityAssessorIs}>
          Personality Assessor is a platform aimed to automate personality
          assessments, different psychological problems identification and
          personal growth.
        </p>
        <p className={styles.personalityAssessorIs}>
          We do all this very professionally through scientific methods and
          human putted efforts.
        </p>
      </div>
      <div className={styles.textFrame}>
        <div className={styles.howWeDoContainer}>
          <p className={styles.personalityAssessorIs}>How we do assessments?</p>
          <p className={styles.personalityAssessorIs}>&nbsp;</p>
          <p
            className={styles.weUseVery}
          >{`We use very precise, authentic and latest personality related researched assessment techniques to make sure that our assessments are precise and accurate. `}</p>
          <p className={styles.weUseVery}>
            Our tests are based on algorithms that are very detailed and helpful
            on user’s end and are designed to help you understand your
            personality on various levels
          </p>
        </div>
      </div>
      <div className={styles.ourTeamParent}>
        <div className={styles.ourTeam}>Our Team</div>
        <div className={styles.sakinaBibiParent}>
          <div className={styles.sakinaBibi}>Sakina Bibi</div>
          <div className={styles.bsse8thStudentContainer}>
            <p className={styles.personalityAssessorIs}>{`BSSE 8th `}</p>
            <p className={styles.personalityAssessorIs}>student.</p>
            <p className={styles.personalityAssessorIs}>
              Frontend and Designer.
            </p>
          </div>
        </div>
        <div className={styles.adilMumtazParent}>
          <div className={styles.adilMumtaz}>Adil Mumtaz</div>
          <div className={styles.bsse8thStudentContainer}>
            <p className={styles.personalityAssessorIs}>{`BSSE 8th `}</p>
            <p className={styles.personalityAssessorIs}>student.</p>
            <p className={styles.personalityAssessorIs}>
              Backend and Designer.
            </p>
          </div>
        </div>
      </div>
      <FooterContainer
        productId="/logo.svg"
        propTop="2175px"
        propLeft="265px"
        propCursor="pointer"
        propCursor1="pointer"
        propCursor2="unset"
        propCursor3="pointer"
        onHomeText1Click={onHomeText1Click}
        onTestText1Click={onTestText1Click}
        onContactText1Click={onContactText1Click}
      />
    </div>
  );
};

export default About;
