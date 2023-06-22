import InputFieldContainer from "./InputFieldContainer";
import PasswordContainer from "./PasswordContainer";
import styles from "./FieldsContainer.module.css";
const FieldsContainer = () => {
  return (
    <div className={styles.fields}>
      <InputFieldContainer
        contactInfo="Email"
        contactLabel="Label Caption"
        emailAddress="Enter your mail"
      />
      <PasswordContainer
        passwordRequirements="Forgot password?"
        propColor="#0057ff"
        propTextAlign="right"
      />
      <div className={styles.labelCheckbox}>
        <div className={styles.checkbox}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.rememberMe}>Remember me</div>
      </div>
    </div>
  );
};

export default FieldsContainer;
