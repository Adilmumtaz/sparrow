import { useMemo } from "react";
import styles from "./NeutralContainer.module.css";
const NeutralContainer = ({ hobbyQuestion, propTop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.stronglyAgree}>Strongly Agree</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.frameChild} />
        <div className={styles.agree}>Agree</div>
      </div>
      <div className={styles.frameInner} />
      <div className={styles.doYouLike}>{hobbyQuestion}</div>
      <div className={styles.ellipseContainer}>
        <div className={styles.frameChild} />
        <div className={styles.stronglyDisagree}>Strongly Disagree</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <div className={styles.disagree}>Disagree</div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameIcon} alt="" src="/frame-26.svg" />
        <div className={styles.neutral}>Neutral</div>
      </div>
    </div>
  );
};

export default NeutralContainer;
