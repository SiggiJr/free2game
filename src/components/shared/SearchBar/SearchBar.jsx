import logo from "../../../assets/img/favicon.svg";
import styles from "./SearchBar.module.scss";
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getGamesByFilter } from "../../../assets/utils/api/api";
import SearchItem from "../SearchItem/SearchItem";

const SearchBar = ({isNavOpen}) => {
  const [games, setGames] = useState([]);
  const [gamesFound, setGamesFound] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const location = useLocation().pathname;

  useEffect(()=> {
    setSearchInput("")
  }, [location])

  useEffect(() => {
    getGamesByFilter("games")
      .then((gamesData) => {
        setGames(gamesData)
        const result = [...games].filter((game) => {
          return game.title.toLowerCase().includes(searchInput.toLowerCase());
        }).slice(0, 10);
        setGamesFound(result)
      });
  }, [searchInput]);

  return (
    <section className={styles.searchbar_section}>
        <Link to="/">
      <div className={styles.text} style={isNavOpen ? {marginLeft: "250px"} : {}}>
          <img
            src={logo}
            alt="free2game logo"
          />
          <h1>FREE2GAME</h1>
      </div>
        </Link>
      <div className={styles.user}>
        <input
          className={styles.input}
          type="text"
          name="search_input"
          id="search_input"
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
        <div>
          {searchInput &&
            gamesFound.map((game) => (
              <SearchItem
                key={game.id}
                game={game}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default SearchBar;
