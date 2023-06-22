import { useMemo } from "react";
import styles from "./FooterContainer.module.css";
const FooterContainer = ({
  productId,
  propTop,
  propLeft,
  propCursor,
  propCursor1,
  propCursor2,
  propCursor3,
  onHomeText1Click,
  onTestText1Click,
  onAboutText1Click,
  onContactText1Click,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const home1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const testStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const aboutStyle = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const contactStyle = useMemo(() => {
    return {
      cursor: propCursor3,
    };
  }, [propCursor3]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div
        className={styles.home}
        style={home1Style}
        onClick={onHomeText1Click}
      >
        Home
      </div>
      <div className={styles.test} style={testStyle} onClick={onTestText1Click}>
        Test
      </div>
      <div className={styles.result}>Result</div>
      <div
        className={styles.about}
        onClick={onAboutText1Click}
        style={aboutStyle}
      >
        About
      </div>
      <div
        className={styles.contact}
        style={contactStyle}
        onClick={onContactText1Click}
      >
        Contact
      </div>
      <div className={styles.allRightsReserved}>All rights reserved! @2023</div>
      <img className={styles.logoIcon} alt="" src={productId} />
    </div>
  );
};

export default FooterContainer;
