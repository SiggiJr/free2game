import { useContext, useEffect, useState } from "react";

import ListItem from "../../shared/ListItem/ListItem";
import Button from "../../shared/Button/Button.jsx";

import styles from "./AllGames.module.scss";
import gridStyle from "../../../modules/Grid.module.scss";
import { getGamesByFilter } from "../../../assets/utils/api/api.js";
import { FilterContext } from "../../../App.jsx";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState("platform=all");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { filter, setFilter } = useContext(FilterContext);

  useEffect(() => {
    getGamesByFilter(filter).then((gamesData) => setGames(gamesData));
  }, [filter]);

  const handlePlatform = (event) => {
    setPlatform(event.target.value);
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  console.log(platform);

  setFilter(`${platform}&${genre}&${sortBy}`);

  return (
    <section className={styles["all-games"]}>
      <header className={styles.hero}>
        <div className={styles.bg_div}>
        <h1>ALL GAMES</h1>
        </div>
      </header>
      <div className={styles.btn_div}>
      <Button
        title={"HOME"}
        path={``}
      />
      </div>


      <div className={styles["list-controls"]}>
        <select
          name="platform"
          id="platform"
          onChange={(event) => handlePlatform(event)}>
          <option value="platform=all">ALL PLATFORMS</option>
          <option value="platform=pc">Windows (PC)</option>
          <option value="platform=browser">Browser (Web)</option>
        </select>
        <select
          name="genre"
          id="genre"
          onChange={(event) => handleGenre(event)}>
          <option value="">GENRE/TAG</option>
          <option value="category=mmorpg">MMORPG</option>
          <option value="category=shooter">Shooter</option>
          <option value="category=strategy">Strategy</option>
          <option value="category=racing">Racing</option>
          <option value="category=sports">Sports</option>
          <option value="category=survival">Survival</option>
        </select>
        <select
          name="platform"
          id="platform"
          onChange={(event) => handleSortBy(event)}>
          <option value="sort-by=relevance">SORT BY</option>
          <option value="sort-by=relevance">Relevance</option>
          <option value="sort-by=popularity">Popularity</option>
          <option value="sort-by=release-date">Release Date</option>
          <option value="sort-by=alphabetical">Alphabetical</option>
        </select>
        {/* 
      moba, social, sandbox, open-world, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts */}
      </div>


      <div className={styles.grid_div}>
      <div className={gridStyle["list-wrapper"]}>
        {games.map((game) => {
          return (
            <ListItem
              key={game.id}
              game={game}
            />
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default AllGames;
