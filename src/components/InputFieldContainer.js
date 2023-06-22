import styles from "./InputFieldContainer.module.css";
const InputFieldContainer = ({ contactInfo, contactLabel, emailAddress }) => {
  return (
    <div className={styles.inputField}>
      <div className={styles.label}>
        <div className={styles.label1}>{contactInfo}</div>
        <div className={styles.labelCaption}>{contactLabel}</div>
      </div>
      <div className={styles.input}>
        <div className={styles.input1}>
          <div className={styles.mymailgmailcom}>{emailAddress}</div>
          <img className={styles.inputIcon} alt="" src="/input-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default InputFieldContainer;
