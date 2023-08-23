import { useContext, useEffect, useState } from "react";

import ListItem from "../../shared/ListItem/ListItem";
import Button from "../../shared/Button/Button.jsx";

import styles from "./AllGames.module.scss";
import gridStyle from "../../../modules/Grid.module.scss";
import { getGamesByFilter } from "../../../assets/utils/api/api.js";
import { GenreContext, PlatformContext, SortByContext } from "../../../App.jsx";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const {platform, setPlatform} = useContext(PlatformContext)
  const {genre, setGenre} = useContext(GenreContext)
  const {sortBy, setSortBy} = useContext(SortByContext)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    setFilter(`platform=${platform}${genre !== "" ? `&category=${genre}` : ""}${sortBy !== "" ? `&sort-by=${sortBy}` : ""}`)
    // getGamesByFilter(filter).then((gamesData) => setGames(gamesData));
  }, [platform, genre, sortBy]);

  useEffect(() => {
    getGamesByFilter(filter).then((gamesData) => setGames(gamesData));
  }, [filter])

  const handlePlatform = (event) => {
    setPlatform(event.target.value);
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className={styles["all-games"]}>
      <header className={styles.hero}>
        <h1>All Games</h1>
      </header>

      <Button
        title={"Back to Home"}
        path={``}
      />

      <div className={styles["list-controls"]}>
        <select
          name="platform"
          id="platform"
          onChange={(event) => handlePlatform(event)}>
          <option value="all">ALL PLATFORMS</option>
          <option value="pc">Windows (PC)</option>
          <option value="browser">Browser(Web)</option>
        </select>
        <select
          name="genre"
          id="genre"
          onChange={(event) => handleGenre(event)}>
          <option value="">GENRE/TAG</option>
          <option value="mmorpg">MMORPG</option>
          <option value="shooter">Shooter</option>
          <option value="strategy">Strategy</option>
          <option value="racing">Racing</option>
          <option value="sports">Sports</option>
          <option value="survival">Survival</option>
        </select>
        <select
          name="platform"
          id="platform"
          onChange={(event) => handleSortBy(event)}>
          <option value="">SORT BY</option>
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="release-date">Release Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        {/* 
      moba, social, sandbox, open-world, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts */}
      </div>

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
    </section>
  );
};

export default AllGames;
