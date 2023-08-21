import { data } from "../../../assets/utils/data/data";
import Button from "../Button/Button";
import style from "./HomeItem.module.scss";

const HomeItem = () => {
  return (
    <section className={style.home_item}>
      <img
        src={data[0].thumbnail}
        alt=""
      />
      <div className={style.home_item_title}>{data[0].title}</div>
      <div className={style.home_item_short_description}>
        {data[0].short_description}
      </div>
      <Button
        className={style.home_item_button}
        title={"Read More"}
        path={`game/${data[0].id}`}
      />
      <div>
        <a>{data[0].platform}</a>
        <a>{data[0].genre}</a>
      </div>
    </section>
  );
};

export default HomeItem;
