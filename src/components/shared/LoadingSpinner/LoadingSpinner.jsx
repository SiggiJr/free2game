import Bean from "../../../assets/img/bean.svg";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.bean_container}>
      <img
        className={styles.bean}
        src={Bean}
      />
    </div>
  );
};

export default LoadingSpinner;
