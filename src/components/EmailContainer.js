import InputFieldContainer from "./InputFieldContainer";
import PasswordContainer from "./PasswordContainer";
import styles from "./EmailContainer.module.css";
const EmailContainer = () => {
  return (
    <div className={styles.fields}>
      <InputFieldContainer
        contactInfo="Email"
        contactLabel="Label Caption"
        emailAddress="mymail@gmail.com"
      />
      <InputFieldContainer
        contactInfo="Phone"
        contactLabel="No spam guaranteed"
        emailAddress="+1 ___ ___-__-__"
      />
      <PasswordContainer passwordRequirements="8 or more characters, at leadt 1 letter and 1 number  " />
      <div className={styles.labelcheckbox}>
        <div className={styles.checkbox}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.iAgreeWithContainer}>
          <span>{`I agree with `}</span>
          <span className={styles.termsconditions}>{`Terms&Conditions`}</span>
        </div>
      </div>
    </div>
  );
};

export default EmailContainer;
