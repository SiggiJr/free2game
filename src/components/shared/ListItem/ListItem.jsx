import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ListItem = ({game}) => {
  const [gameItems, setGameItems] = useState();
  console.log(game);

  return (
    <section>
      <img
        src={game.thumbnail}
        alt=""
      />
      <div>{game.title}</div>
      <Button
        title={"Read More"}
        path={`game/${game.id}`}
      />
      <a>{game.platform}</a>
      <a>{game.genre}</a>
      {/* publisher muss durch den "sci-fi"-key ersetzt werden! weiss aktuell nicht den key der "sci-fi" ausgibt!*/}
      {/* <a>{data[0].publisher}</a> */}
    </section>
  );
};

export default ListItem;