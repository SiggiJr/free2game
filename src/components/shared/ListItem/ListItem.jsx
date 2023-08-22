import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ListItem = ({game}) => {
  const [gameItems, setGameItems] = useState();
  // console.log(game);

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
    </section>
  );
};

export default ListItem;
