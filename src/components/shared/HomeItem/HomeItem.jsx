import Button from "../Button/Button";
import style from "./HomeItem.module.scss";

const HomeItem = ({game}) => {
  return (
    <section className={style.home_item}>
      <img
        src={game.thumbnail}
        alt=""
      />
      <div className={style.home_item_title}>{game.title}</div>
      <div className={style.home_item_short_description}>
        {game.short_description}
      </div>
      <Button
        className={style.home_item_button}
        title={"Read More"}
        path={`game/${game.id}`}
      />
      <div>
        <a>{game.platform}</a>
        <a>{game.genre}</a>
      </div>
    </section>
  );
};

export default HomeItem;
