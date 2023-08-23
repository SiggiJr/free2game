import styles from "./Home.module.scss";
import ListItem from "../../shared/ListItem/ListItem";
import HomeItem from "../../shared/HomeItem/HomeItem";
import Button from "../../shared/Button/Button";
import gridStyle from "../../../modules/Grid.module.scss";
import { useEffect, useState } from "react";

import { getGamesByFilter } from "../../../assets/utils/api/api";

const Home = () => {
  const [topAddedGames, setTopAddedGames] = useState([]);
  const [topPcGames, setTopPcGames] = useState([]);
  const [topBrowserGames, setTopBrowserGames] = useState([]);

  useEffect(() => {
    getGamesByFilter(`sort-by=release-date`)
      .then(gamesData => setTopAddedGames(gamesData.slice(0, 4)))
  }, []);

  useEffect(() => {
    getGamesByFilter(`sorty-by=popularity&platform=pc`)
      .then(gamesData => setTopPcGames(gamesData.slice(0, 4)))
  }, []);

  useEffect(() => {
    getGamesByFilter(`sorty-by=popularity&platform=browser`)
      .then(gamesData => setTopBrowserGames(gamesData.slice(0, 4)))
  }, []);

  const date = new Date();

  return (
    <section className={styles.home}>
      <header>
        <h1>Find & track the best free-to-play games!</h1>
      </header>
      <section className={styles.recently_added}>
        <h3>Recently Added</h3>
        <div className={gridStyle["list-wrapper"]}>
          {topAddedGames.map((game) => (
            <HomeItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
        <Button
          title={"SHOW MORE"}
          path={"recentlyadded"}
          filterByButton={"sorty-by=release-date"}
        />
      </section>
      <section className={styles.test}>
        <h3>
          Top 4 Games for PC in{" "}
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        {topPcGames.map((game, index) => (

          // index === 0 && (
          //   <Top1/>
          // )
          // <Top2-4/>

          <ListItem
            key={game.id}
            game={game}
          />
        ))}
        <Button
          title={"SHOW MORE"}
          path={"allgames"}
          filterByButton={"sorty-by=popularity&platform=pc"}
        />
      </section>
      <section className="top4_browser_games">
        <h3>
          Top 4 Games for Browser in{" "}
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <div className={gridStyle["list-wrapper"]}>
          {topBrowserGames.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
        <Button
          title={"SHOW MORE"}
          path={"allgames"}
          filterByButton={"sorty-by=popularity&platform=browser"}
        />
      </section>
    </section>
  );
};

export default Home;