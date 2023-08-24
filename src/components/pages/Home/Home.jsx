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
    Promise.all([
      getGamesByFilter(`sort-by=release-date`),
      getGamesByFilter(`sort-by=popularity&platform=pc`),
      getGamesByFilter(`sort-by=popularity&platform=browser`)
    ])
    .then((gamesDataArray)=>{
      setTopAddedGames(gamesDataArray[0].slice(0, 4))
      setTopPcGames(gamesDataArray[1].slice(0, 4))
      setTopBrowserGames(gamesDataArray[2].slice(0, 4))
    })
  }, []);

  const currentMonth = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

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
            sortByByButton={"release-date"}
          />
        </div>
      </section>
      <section className={styles.top_games_pc}>
        <h3>
          Top 4 PC-Games in {currentMonth}
        </h3>
        <div className={styles.home_top_games_pc_list}>
          {topPcGames.map((game, index) => {
            return (
              index === 0
                ? <TopGamesItem
                  key={game.id}
                  game={game}
                />
                : <TopGamesItemNext
                  key={game.id}
                  game={game}
                />
            )
          }
          )}
        </div>
        <div className={styles.home_button_align_right}>
          <Button
            title={"SHOW MORE"}
            path={"allgames"}
            platformByButton={"pc"}
            sortByByButton={"popularity"}

          />
        </div>
      </section>
      <section className={styles.top_games_browser}>
        <h3>
          Top 4 Browser-Games in {currentMonth}
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
            sortByByButton={"popularity"}
            platformByButton={"browser"}
            
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
