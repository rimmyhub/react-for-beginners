import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// 타입 설정하기
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
