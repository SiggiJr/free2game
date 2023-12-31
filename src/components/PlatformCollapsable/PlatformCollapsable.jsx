import { useState } from 'react';
import CollapsableItem from '../shared/CollapsableItem/CollapsableItem';
import styles from './PlatformCollapsable.module.scss'

const PlatformCollapsable = ({options}) => {
  
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
      <div className={styles.collapsable_items}>
        <div className={styles.layout_wrapper}>
          {isCollapsed ? "" : <CollapsableItem options={options[1]}/>}
        </div>
      </div>
    </div>
  );
}

export default PlatformCollapsable;