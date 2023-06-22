import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import FooterContainer from "../components/FooterContainer";
import styles from "./Home.module.css";
const Home = () => {
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

  return (
    <div className={styles.home}>
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
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <div className={styles.reachUsOut}>Reach us out</div>
          <div className={styles.formContainer}>
            <div className={styles.mailFrame} />
            <div className={styles.nameFrame} />
            <div className={styles.messageFrame} />
            <div className={styles.mail}>Mail</div>
            <div className={styles.name}>Name</div>
            <div className={styles.message}>Message</div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.frameChild} />
          <div className={styles.frame2}>
          <div className={styles.reachUsOut}>Submit</div> 
          </div>
        </div>
      </div>
      <div className={styles.textFrame}>
        <div className={styles.howWeDoContainer}>
          <p className={styles.howWeDo}>How we do assessments?</p>
          <p className={styles.howWeDo}>&nbsp;</p>
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
      <div className={styles.ourTestsAreParent}>
        <div className={styles.ourTestsAre1}>Our Tests are!</div>
        <div className={styles.frameGroup}>
          <div className={styles.accurateWrapper}>
            <div className={styles.reachUsOut}>Accurate</div>
          </div>
          <div className={styles.wellResearchedWrapper}>
            <div className={styles.reachUsOut}>Well researched</div>
          </div>
          <div className={styles.advanceTechWrapper}>
            <div className={styles.reachUsOut}>Advance Tech</div>
          </div>
          <div className={styles.detailedWrapper}>
            <div className={styles.detailed}>Detailed</div>
          </div>
          <div className={styles.trustWorthyProcessWrapper}>
            <div className={styles.trustWorthyProcess}>
              Trust worthy process
            </div>
          </div>
          <div className={styles.differentSpectrumWrapper}>
            <div className={styles.differentSpectrum}>Different spectrum</div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialsParent}>
        <div className={styles.testimonials}>Testimonials</div>
        <img className={styles.containerIcon} alt="" src="/container.svg" />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.dianeAddison}>Diane Addison</div>
        <div className={styles.lovedTheExperience}>
          “Loved the experience they provide. Easy process and great outcomes”
        </div>
      </div>
      <FooterContainer
        productId="/logo.svg"
        propTop="2991px"
        propLeft="288px"
        propCursor="unset"
        propCursor1="unset"
        propCursor2="pointer"
        propCursor3="unset"
        onAboutText1Click={onAboutText1Click}
      />
    </div>
  );
};

export default Home;
