import GenreCollapsableItem from "../GenreCollapsableItem/GenreCollapsableItem";
import { useState } from "react";
import styles from '../PlatformCollapsable/PlatformCollapsable.module.scss'


const GenreCollapsable = ({options}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handelCollapsable = () => {
    setIsCollapsed(!isCollapsed)
  }

  return ( 
    <div className={styles.collapsable_wrapper}>
    <div className={styles.collapsable} onClick={() => handelCollapsable()}>
      <p>{options[0]}</p>
      <p className={isCollapsed ? "" : styles.v}>V</p>
    </div>
    {isCollapsed ? "" : <GenreCollapsableItem options={options[1]}/>}
    </div>
  );
}


export default GenreCollapsable;