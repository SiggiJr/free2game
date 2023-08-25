import Button from "../Button/Button";
import style from "./HomeItem.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GenreContext, PlatformContext, SortByContext } from "../../../App";

const HomeItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

  const {platform, setPlatform} = useContext(PlatformContext)
  const {genre, setGenre} = useContext(GenreContext)
  const {sortBy, setSortBy} = useContext(SortByContext)

  console.log(game.genre);

  return (
    <section className={style.home_item}>
      <img
        className={style.home_item_img}
        src={game.thumbnail}
        alt=""
      />
      <div className={style.home_item_title}>{game.title}</div>
      <div className={style.home_item_short_description}>{game.short_description}</div>
      <div className={style.home_item_button}>
        <Button
          title={"READ MORE"}
          path={`game/${game.id}`}
        />
      </div>
      <div className={style.home_item_filter}>
        <Link
          to="/allgames"
          className={style.home_item_platform}
          onClick={() => {
            setPlatform(game.platform === "PC (Windows)" ? "pc" : "browser")
            setSortBy("relevance")
          }}
          >
          {platformIcon}
        </Link>
        <Link
          to="/allgames"
          className={style.home_item_genre}
          onClick={() => {
            setPlatform("all")
            setGenre([`${game.genre.toLowerCase()}`])
            setSortBy("relevance")
          }}
          >
          {game.genre}
        </Link>
      </div>
    </section>
  );
};

export default HomeItem;
