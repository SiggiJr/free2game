import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home/Home";
import AllGames from "./components/pages/AllGames/AllGames";
import RecentlyAdded from "./components/pages/RecentlyAdded/RecentlyAdded";
import Details from "./components/pages/Details/Details";
import ListItem from "./components/shared/ListItem/ListItem";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
