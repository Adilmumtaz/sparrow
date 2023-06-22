import { useMemo } from "react";
import styles from "./PasswordContainer.module.css";
const PasswordContainer = ({
  passwordRequirements,
  propColor,
  propTextAlign,
}) => {
  const orMoreCharactersStyle = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [propColor, propTextAlign]);

  return (
    <div className={styles.password}>
      <div className={styles.inputField}>
        <div className={styles.label}>
          <div className={styles.label1}>Password</div>
          <div className={styles.labelCaption}>Label Caption</div>
        </div>
        <div className={styles.input}>
          <div className={styles.input1}>
            <div className={styles.text}>{` `}</div>
            <img className={styles.inputIcon} alt="" src="/input-icon.svg" />
          </div>
        </div>
      </div>
      <div className={styles.orMoreCharacters} style={orMoreCharactersStyle}>
        {passwordRequirements}
      </div>
    </div>
  );
};

export default PasswordContainer;
