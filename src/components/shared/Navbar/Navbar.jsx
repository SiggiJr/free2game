import style from "./Navbar.module.scss";
import BurgerIcon from "../../../assets/img/BurgerIcon.svg";
import CloseIcon from "../../../assets/img/CloseIcon.png";
import HomeIcon from "../../../assets/img/HomeIcon.svg";
import AllGamesIcon from "../../../assets/img/AllGamesIcon.svg";
import RecentlyAddedIcon from "../../../assets/img/RecentlyAddedIcon.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PlatformContext, SortByContext } from "../../../App";

const Navbar = ({isNavOpen, setIsNavOpen}) => {

  const {platform, setPlatform} = useContext(PlatformContext)
  const {sortBy, setSortBy} = useContext(SortByContext)

  const toggleNav = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav
        className={isNavOpen ? `${style.nav} ${style.test}` : `${style.nav}`}
        id="nav">
        <div>
          <div
            className={style.burger_menu}
            // onClick={toggleNav}
            >
            <img
              className={`${style.nav_toggle_icon} ${
                isNavOpen ? style.close_icon : ""
              }`}
              src={isNavOpen ? CloseIcon : BurgerIcon}
              alt=""
              onClick={toggleNav}
            />
          </div>
        </div>
        <div className={style.nav_icons}>
          <div>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? `${style.active}` : "")}>
              <img
                className={style.nav_icons_home}
                src={HomeIcon}
                alt=""
              />
              <p>{isNavOpen ? "Home" : ""}</p>
            </NavLink>
            <NavLink
              to={"/allgames"}
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              onClick={() => {
                setPlatform("all")
                setSortBy("relevance")
              }}>
              <img
                className={style.nav_icons_all_games}
                src={AllGamesIcon}
                alt=""
              />
              <p>{isNavOpen ? "All Games" : ""}</p>
            </NavLink>
            <NavLink
              to={"/recentlyadded"}
              className={({ isActive }) => (isActive ? `${style.active}` : "")}>
              <img
                className={style.nav_icons_recently_added}
                src={RecentlyAddedIcon}
                alt=""
              />
              <p>{isNavOpen ? "Recently Added" : ""}</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
