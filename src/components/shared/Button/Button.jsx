import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import { useContext } from "react";
import { FilterContext } from "../../../App";

const Button = ({ title, path, filterByButton }) => {
  const {filter, setFilter} = useContext(FilterContext)
  return (
    <Link to={`/${path}`}>
      <button className={style.button} onClick={() => setFilter(filterByButton)}>{title}</button>
    </Link>
  );
};

export default Button;
