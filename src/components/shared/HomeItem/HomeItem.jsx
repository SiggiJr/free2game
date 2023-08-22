import Button from "../Button/Button";
import style from "./HomeItem.module.scss";
import IconWindows from "../../../assets/img/icon_windows.png";
import IconBrowser from "../../../assets/img/icon_browser.png";
import { Link } from "react-router-dom";

const HomeItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "PC (Windows)" ? IconWindows : IconBrowser} />
  );

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero totam culpa a maiores excepturi nesciunt veniam dolorem possimus non sunt eligendi nobis, aspernatur similique.";

  return (
    <section className={style.home_item}>
      <img
        className={style.home_item_img}
        src={game.thumbnail}
        alt=""
      />
      <div className={style.home_item_title}>{game.title}</div>
      <div className={style.home_item_short_description}>{lorem}</div>
      <div className={style.home_item_button}>
        <Button
          title={"Read More"}
          path={`game/${game.id}`}
        />
      </div>
      <div className={style.home_item_filter}>
        <Link
          to="/allgames"
          className={style.home_item_platform}>
          {platformIcon}
        </Link>
        <Link
          to="/allgames"
          className={style.home_item_genre}>
          {game.genre}
        </Link>
      </div>
    </section>
  );
};

export default HomeItem;
