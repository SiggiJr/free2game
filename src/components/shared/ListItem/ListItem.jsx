import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./ListItem.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";

const ListItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

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
          title={"Read More"}
          path={`game/${game.id}`}
        />
      </div>
      <div className={style.list_item_filter}>
        <Link
          to="/allgames"
          className={style.list_item_platform}>
          {platformIcon}
        </Link>
        <Link
          to="/allgames"
          className={style.list_item_genre}>
          {game.genre}
        </Link>
      </div>
    </section>
  );
};

export default ListItem;
