import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./ListItem.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";
import { GenreContext, PlatformContext, SortByContext } from "../../../App";

const ListItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

  const {platform, setPlatform} = useContext(PlatformContext)
  const {genre, setGenre} = useContext(GenreContext)
  const {sortBy, setSortBy} = useContext(SortByContext)

  const [gameItems, setGameItems] = useState();
  // console.log(game);

  return (
    <section className={style.list_item}>
      <img
        className={style.list_item_img}
        src={game.thumbnail}
        alt=""
      />
      <div className={style.list_item_title}>{game.title}</div>
      <div className={style.list_item_button}>
        <Button
          title={"READ MORE"}
          path={`game/${game.id}`}
        />
      </div>
      <div className={style.list_item_filter}>
        <Link
          to="/allgames"
          className={style.list_item_platform}
          onClick={() => {
            setPlatform(game.platform === "PC (Windows)" ? "pc" : "browser")
            setSortBy("relevance")
          }}
          >
          {platformIcon}
        </Link>
        <Link
          to="/allgames"
          className={style.list_item_genre}
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

export default ListItem;
