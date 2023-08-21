import { useEffect, useState } from "react";
import { data } from "../../../assets/utils/data/data";
import Button from "../Button/Button";

const ListItem = () => {
  return (
    <section>
      <img
        src={data[0].thumbnail}
        alt=""
      />
      <div>{data[0].title}</div>
      <Button
        title={"Read More"}
        path={`game/${data[0].id}`}
      />
      <a>{data[0].platform}</a>
      <a>{data[0].genre}</a>
    </section>
  );
};

export default ListItem;
