import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home/Home";
import AllGames from "./components/pages/AllGames/AllGames";
import RecentlyAdded from "./components/pages/RecentlyAdded/RecentlyAdded";
import Details from "./components/pages/Details/Details";
import ListItem from "./components/shared/ListItem/ListItem";
import HomeItem from "./components/shared/HomeItem/HomeItem";
import Navbar from "./components/shared/Navbar/Navbar";
import TopGamesItem from "./components/shared/TopGamesItem/TopGamesItem";
import { createContext, useState } from "react";
import SearchBar from "./components/shared/SearchBar/SearchBar";

export const FilterContext = createContext();
export const PlatformContext = createContext();
export const GenreContext = createContext();
export const SortByContext = createContext();

function App() {
  // const [filter, setFilter] = useState("");
  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    {/* <FilterContext.Provider value={{filter, setFilter}}> */}
    <PlatformContext.Provider value={{platform, setPlatform}}>
    <GenreContext.Provider value={{genre, setGenre}}>
    <SortByContext.Provider value={{sortBy, setSortBy}}>
    <SearchBar isNavOpen={isNavOpen}/>
    <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          />
          <Route
            path="/allgames"
            element={<AllGames />}
          />
          <Route
            path="/recentlyadded"
            element={<RecentlyAdded />}
          />
          <Route
            path="/game/:id"
            element={<Details />}
          />
          <Route
            path="/listitem"
            element={<ListItem />}
          />
          <Route
            path="/homeitem"
            element={<HomeItem />}
          />
          <Route
            path="/topgamesitem"
            element={<TopGamesItem />}
          />
        </Routes>
      </SortByContext.Provider>
      </GenreContext.Provider>
      </PlatformContext.Provider>
      {/* </FilterContext.Provider> */}
    </>
  );
}
export default App;
