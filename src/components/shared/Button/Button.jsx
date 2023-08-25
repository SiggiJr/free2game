import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import { useContext } from "react";
import { GenreContext, PlatformContext, SortByContext } from "../../../App";
// import { FilterContext } from "../../../App";

const Button = ({ title, path, platformByButton, sortByByButton}) => {
  const {platform, setPlatform} = useContext(PlatformContext)
  const {sortBy, setSortBy} = useContext(SortByContext)
  const {genre, setGenre} = useContext(GenreContext)
  // const {filter, setFilter} = useContext(FilterContext)




  const handleClick = () => {
    if (platformByButton && sortByByButton) {
      setPlatform(platformByButton)
      setSortBy(sortByByButton)
    } else {
      setPlatform(platform)
      setGenre(genre)
      setSortBy(sortBy)
    }
  }

  return (
    <Link to={`/${path}`}>
      <button className={style.button} onClick={() => {handleClick()}}>{title}</button>
    </Link>
  );
};

export default Button;
