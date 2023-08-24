import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./TopGamesItemNext.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";

const TopGamesItemNext = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

  const [gameItems, setGameItems] = useState();

  return (
    <section className={style.top_games_item_next}>
      <img
        className={style.top_games_item_next_img}
        src={game.thumbnail}
        alt=""
      />
      <div>
        <div className={style.top_games_item_next_title}>{game.title}</div>
        <div className={style.top_games_item_next_button}>
          <Button
            title={"READ MORE"}
            path={`game/${game.id}`}
          />
        </div>
        <div className={style.top_games_item_next_filter}>
          <Link
            to="/allgames"
            className={style.top_games_item_next_platform}>
            {platformIcon}
          </Link>
          <Link
            to="/allgames"
            className={style.top_games_item_next_genre}>
            {game.genre}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopGamesItemNext;
