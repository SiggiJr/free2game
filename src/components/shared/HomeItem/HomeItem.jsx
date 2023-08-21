import Button from "../Button/Button";
import style from "./HomeItem.module.scss";

const HomeItem = ({game}) => {
  return (
    <section className={style.home_item}>
      <img
        src={game.thumbnail}
        alt=""
      />
      <div>{game.title}</div>
      <div>{game.short_description}</div>
      <Button
        title={"Read More"}
        path={`game/${game.id}`}
      />
      <a>{game.platform}</a>
      <a>{game.genre}</a>
    </section>
  );
};

export default HomeItem;
