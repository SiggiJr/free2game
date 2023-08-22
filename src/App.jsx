import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home/Home";
import AllGames from "./components/pages/AllGames/AllGames";
import RecentlyAdded from "./components/pages/RecentlyAdded/RecentlyAdded";
import Details from "./components/pages/Details/Details";
import ListItem from "./components/shared/ListItem/ListItem";
import HomeItem from "./components/shared/HomeItem/HomeItem";
import { createContext, useState } from "react";

export const FilterContext = createContext()

function App() {
  const [filter, setFilter] = useState("")
  return (
    <>
    <FilterContext.Provider value={{filter, setFilter}}>
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
      </Routes>
          </FilterContext.Provider>
    </>
  );
}
export default App;