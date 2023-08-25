import SortByCollapsableItem from "../SortByCollapsableItem/SortByCollapsableItem";
import { useState } from 'react';
import styles from '../PlatformCollapsable/PlatformCollapsable.module.scss'


const SortByCollapsable = ({options}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handelCollapsable = () => {
    setIsCollapsed(!isCollapsed)
  }

  return ( 
    <div className={styles.collapsable_wrapper}>
    <div className={styles.collapsable} onClick={() => handelCollapsable()}>
      <p>{options[0]}</p>
      <p className={isCollapsed ? "" : styles.v}>V</p>
    </div>
    {isCollapsed ? "" : <SortByCollapsableItem options={options[1]}/>}
    </div>
  );
}
export default SortByCollapsable;