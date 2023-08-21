import { Link } from "react-router-dom";
import style from "./Button.module.scss";

const Button = ({ title, path }) => {
  return (
    <Link to={`/${path}`}>
      <button className={style.button}>{title}</button>
    </Link>
  );
};

export default Button;
