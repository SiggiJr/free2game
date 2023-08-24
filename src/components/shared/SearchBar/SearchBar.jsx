import logo from "../../../assets/img/favicon.svg";
import styles from "./SearchBar.module.scss";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [games, setGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiHost = import.meta.env.VITE_API_HOST;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  useEffect(() => {
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("error fetch searchbar");
        }
        return response.json();
      })
      .then((gamesData) => setGames(gamesData))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const searchGames = [...games].filter((game) => {
      return game.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    // console.log(searchGames);
  }, [searchInput]);

  return (
    <section className={styles.searchbar_section}>
      <div className={styles.text}>
        <img
          src={logo}
          alt="free2game logo"
        />
        <h1>FREE2GAME</h1>
      </div>
      <div className={styles.user}>
        <input
          className={styles.input}
          type="text"
          name="search_input"
          id="search_input"
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
      </div>
    </section>
  );
};
export default SearchBar;
