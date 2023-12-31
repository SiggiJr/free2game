import { useEffect, useState } from "react";
import ListItem from "../../shared/ListItem/ListItem.jsx";
import styles from "./RecentlyAdded.module.scss";
import gridStyle from "../../../modules/Grid.module.scss";
import { getGamesByFilter } from "../../../assets/utils/api/api.js";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

const RecentlyAdded = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGamesByFilter(`games?sort-by=release-date`)
      .then((gamesData) => setGames(gamesData))
      .then(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={styles["recently-added"]}>
      <header className={styles.hero}>
        <div className={styles.hero_div}>
          <h1>Recently Added</h1>
        </div>
      </header>
      <div className={styles.grid_div}>
        <div className={gridStyle["list-wrapper"]}>
          {games.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
