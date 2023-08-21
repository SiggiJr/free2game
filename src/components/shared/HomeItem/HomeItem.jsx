import { useState } from "react";
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
      <div>{data[0].title}</div>
      <div>{data[0].short_description}</div>
      <Button
        title={"Read More"}
        path={`game/${data[0].id}`}
      />
      <a>{data[0].platform}</a>
      <a>{data[0].genre}</a>
    </section>
  );
};

export default HomeItem;
