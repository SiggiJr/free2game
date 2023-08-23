import style from "./Navbar.module.scss";
import BurgerIcon from "../../../assets/img/BurgerIcon.svg";
import CloseIcon from "../../../assets/img/CloseIcon.png";
import HomeIcon from "../../../assets/img/HomeIcon.svg";
import AllGamesIcon from "../../../assets/img/AllGamesIcon.svg";
import RecentlyAddedIcon from "../../../assets/img/RecentlyAddedIcon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navWidth, setNavWidth] = useState("5vw");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const openNav = () => {
    setNavWidth("250px");
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setNavWidth("5vw");
    setIsNavOpen(false);
  };

  return (
    <>
      <nav
        className={style.nav}
        style={{ width: navWidth }}
        id="nav">
        <div>
          <div onClick={toggleNav}>
            <img
              className={`${style.nav_toggle_icon} ${
                isNavOpen ? style.close_icon : ""
              }`}
              src={isNavOpen ? CloseIcon : BurgerIcon}
              alt=""
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
              className={({ isActive }) => (isActive ? `${style.active}` : "")}>
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
