import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./TopGamesItem.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";

const TopGamesItem = ({ game }) => {
  const inlineImage = {
    backgroundImage: `url(${game.screenshots[0].image})`,
  };

  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

  const [gameItems, setGameItems] = useState();

  return (
    <section
      className={style.top_games_item}
      style={inlineImage}>
      <div className={style.top_games_item_title}>{game.title}</div>
      <div className={style.top_games_item_button}>
        <Button
          title={"Read More"}
          path={`game/${game.id}`}
        />
      </div>
      <div className={style.top_games_item_filter}>
        <Link
          to="/allgames"
          className={style.top_games_item_platform}>
          {platformIcon}
        </Link>
        <Link
          to="/allgames"
          className={style.top_games_item_genre}>
          {game.genre}
        </Link>
      </div>
    </section>
  );
};

export default TopGamesItem;
