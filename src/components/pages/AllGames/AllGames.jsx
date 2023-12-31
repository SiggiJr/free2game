import { useContext, useEffect, useState } from "react";
import ListItem from "../../shared/ListItem/ListItem";
import styles from "./AllGames.module.scss";
import gridStyle from "../../../modules/Grid.module.scss";
import { getGamesByFilter } from "../../../assets/utils/api/api.js";
import { GenreContext, PlatformContext, SortByContext } from "../../../App.jsx";
import PlatformCollapsable from "../../PlatformCollapsable/PlatformCollapsable";
import GenreCollapsable from "../../GenreCollapsable/GenreCollapsable";
import SortByCollapsable from "../../SortByCollapsable/SortByCollasable";
import FilterButtons from "../../FilterButtons/FilterButtons";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const { platform, setPlatform } = useContext(PlatformContext);
  const { genre, setGenre } = useContext(GenreContext);
  const { sortBy, setSortBy } = useContext(SortByContext);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(filter);

  useEffect(() => {
    if (genre.length === 0) {
      console.log(genre.length);
      setFilter(
        `games?platform=${platform}${sortBy !== "" ? `&sort-by=${sortBy}` : ""}`
      );
    } else {
      const genreString = genre.join(".");
      setFilter(
        `filter?platform=${platform}${
          sortBy !== "" ? `&sort-by=${sortBy}` : ""
        }&tag=${genreString}`
      );
    }
  }, [platform, sortBy, genre]);

  useEffect(() => {
    if (filter !== "") {
      getGamesByFilter(filter)
        .then((gamesData) => {
          console.log(gamesData);
          setGames(gamesData)
        })
        .then(setIsLoading(false));
    }
  }, [filter]);

  // const handlePlatform = (event) => {
  //   setPlatform(event.target.value);
  // };

  // const handleGenre = (event) => {
  //   setGenre(event.target.value);
  // };

  // const handleSortBy = (event) => {
  //   setSortBy(event.target.value);
  // };

  const platformOptions = [
    "PLATFORM",
    [
      { label: "All Platforms", value: "all" },
      { label: "Windows (PC)", value: "pc" },
      { label: "Browser (Web)", value: "browser" },
    ],
  ];

  const text =
    "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts";
  const textToArray = text.split(", ");
  const genreValues = textToArray.map((entry) => {
    return {
      label: `${entry.toUpperCase()}`,
      value: entry,
    };
  });

  const genreOptions = ["GENRE/TAG", genreValues];

  const sortByOptions = [
    "SORT BY",
    [
      { label: "Relevance", value: "relevance" },
      { label: "Popularity", value: "popularity" },
      { label: "Release Date", value: "release-date" },
      { label: "Alphabetical", value: "alphabetical" },
    ],
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={styles["all-games"]}>
      <header className={styles.hero}>
        <div className={styles.bg_div}>
          <h1>ALL GAMES</h1>
        </div>
      </header>
      <div className={styles["list-controls"]}>
        <PlatformCollapsable options={platformOptions} />
        <GenreCollapsable options={genreOptions} />
        <SortByCollapsable options={sortByOptions} />
      </div>

      {/* {genre.map((genre, index) => <FilterButton key={index} genre={genre} index={index}/>)} */}
      <FilterButtons />

      {games.status === 0 ? <h1 className={styles.error_message}>No Results Found</h1> : <div className={styles.grid_div}>
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
      </div>}

      {/* <div className={styles.grid_div}>
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
      </div> */}
    </section>
  );
};

export default AllGames;
