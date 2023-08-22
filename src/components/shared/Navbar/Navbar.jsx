import style from "./Navbar.module.scss";
import BurgerIcon from "../../../assets/img/BurgerIcon.svg";
import HomeIcon from "../../../assets/img/HomeIcon.svg";
import AllGamesIcon from "../../../assets/img/AllGamesIcon.svg";
import RecentlyAddedIcon from "../../../assets/img/RecentlyAddedIcon.svg";
import { useState } from "react";

const Navbar = () => {
  const [homeIconActive, setHomeIconActive] = useState(false);

  const handleHomeIconClick = () => {
    setHomeIconActive(!homeIconActive);
  };

  return (
    <>
      <nav className={style.nav}>
        <div>
          <img
            src={BurgerIcon}
            alt=""
          />
        </div>
        <div className={style.nav_icons}>
          <div>
            <img
              className={`${style.nav_icons_home} ${
                homeIconActive ? style.active : ""
              }`}
              src={HomeIcon}
              alt=""
            />
            <img
              className={style.nav_icons_all_games}
              src={AllGamesIcon}
              alt=""
            />
            <img
              className={style.nav_icons_recently_added}
              src={RecentlyAddedIcon}
              alt=""
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
