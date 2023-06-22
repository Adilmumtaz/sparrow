import styles from "./ContactContainer.module.css";
const ContactContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.reachUsOut}>Reach us out</div>
      <div className={styles.formContainer}>
        <div className={styles.mailFrame} />
        <div className={styles.nameFrame} />
        <div className={styles.messageFrame} />
        <div className={styles.mail}>Mail</div>
        <div className={styles.name}>Name</div>
        <div className={styles.message}>Message</div>
      </div>
      <div className={styles.div}>Submit</div>
      <div className={styles.frameItem} />
    </div>
  );
};

export default ContactContainer;
