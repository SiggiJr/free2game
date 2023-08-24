import styles from "./Home.module.scss";
import ListItem from "../../shared/ListItem/ListItem";
import HomeItem from "../../shared/HomeItem/HomeItem";
import Button from "../../shared/Button/Button";
import gridStyle from "../../../modules/Grid.module.scss";
import { useEffect, useState } from "react";
import { data } from "../../../assets/utils/data/data";

import { getGamesByFilter } from "../../../assets/utils/api/api";
import TopGamesItem from "../../shared/TopGamesItem/TopGamesItem";
import TopGamesItemNext from "../../shared/TopGamesItemNext/TopGamesItemNext";

const Home = () => {
  const [topAddedGames, setTopAddedGames] = useState([]);
  const [topPcGames, setTopPcGames] = useState([]);
  const [topBrowserGames, setTopBrowserGames] = useState([]);

  useEffect(() => {
    getGamesByFilter(`sort-by=release-date`).then((gamesData) =>
      setTopAddedGames(gamesData.slice(0, 4))
    );
  }, []);

  useEffect(() => {
    getGamesByFilter(`sorty-by=popularity&platform=pc`).then((gamesData) =>
      setTopPcGames(gamesData.slice(0, 4))
    );
  }, []);

  useEffect(() => {
    getGamesByFilter(`sorty-by=popularity&platform=browser`).then((gamesData) =>
      setTopBrowserGames(gamesData.slice(0, 4))
    );
  }, []);

  const date = new Date();

  return (
    <section className={styles.home}>
      <header>
        <h1>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
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
        <div className={styles.home_button_align_right}>
          <Button
            title={"SHOW MORE"}
            path={"recentlyadded"}
            filterByButton={"sorty-by=release-date"}
          />
        </div>
      </section>
      <section className={styles.top_games_pc}>
        <h3>
          Top 4 Games for PC in{" "}
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <div className={styles.home_top_games_pc_list}>
          {/* {topPcGames.map((game, index) => (

          // index === 0 && (
          //   <Top1/>
          // )
          // <Top2-4/>

          <ListItem
            key={game.id}
            game={game}
            />
          ))} */}
          <TopGamesItem game={data[0]} />
          <TopGamesItemNext game={data[0]} />
          <TopGamesItemNext game={data[0]} />
          <TopGamesItemNext game={data[0]} />
        </div>
        <div className={styles.home_button_align_right}>
          <Button
            title={"SHOW MORE"}
            path={"allgames"}
            filterByButton={"sorty-by=popularity&platform=pc"}
          />
        </div>
      </section>
      <section className={styles.top_games_browser}>
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
        <div className={styles.home_button_align_right}>
          <Button
            title={"SHOW MORE"}
            path={"allgames"}
            filterByButton={"sorty-by=popularity&platform=browser"}
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
