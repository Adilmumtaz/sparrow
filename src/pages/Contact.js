import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import ContactContainer from "../components/ContactContainer";
import FooterContainer from "../components/FooterContainer";
import styles from "./Contact.module.css";
const Contact = () => {
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

  return (
    <div className={styles.contact}>
      <LoginContainer
        onTestTextClick={onTestTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLoginButtonContainerClick={onLoginButtonContainerClick}
      />
      <div className={styles.heroTextParent}>
        <div className={styles.heroText}>
          <div className={styles.personalityAssessmentIs}>
            Personality assessment is very helpful in reaching your full
            potential and become better version of yourself!
          </div>
        </div>
        <div className={styles.heroImageSection}>
          <img
            className={styles.heroImageIcon}
            alt=""
            src="/hero-image@2x.png"
          />
        </div>
      </div>
      <ContactContainer />
      <FooterContainer
        productId="/logo1.svg"
        propTop="2319px"
        propLeft="248px"
        propCursor="unset"
        propCursor1="unset"
        propCursor2="unset"
        propCursor3="unset"
      />
      <div className={styles.contactChild} />
      <div className={styles.weBelieveThat}>We believe that</div>
      <div className={styles.technologyImprovesEvery}>
        “ technology improves every field, if applied properly. Personality
        assessments and different issues can be easily discussed if you know
        that the listener is not a human. ”
      </div>
    </div>
  );
};

export default Contact;
