import { useEffect, useState } from "react";
import { data } from "../../../assets/utils/data/data";
import Button from "../Button/Button";

const ListItem = () => {
  const [gameItems, setGameItems] = useState();

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
      {/* publisher muss durch den "sci-fi"-key ersetzt werden! weiss aktuell nicht den key der "sci-fi" ausgibt!*/}
      {/* <a>{data[0].publisher}</a> */}
    </section>
  );
};

export default ListItem;
