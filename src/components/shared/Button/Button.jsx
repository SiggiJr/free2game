import { Link } from "react-router-dom";

const Button = ({title, path}) => {
  return ( 
    <Link to={`/${path}`}>
    <button>{title}</button>
    </Link>
  );
}

export default Button;