import { useState } from 'react';
import CollapsableItem from '../shared/CollapsableItem/CollapsableItem';
import styles from './PlatformCollapsable.module.scss'

const PlatformCollapsable = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handelCollapsable = () => {
    setIsCollapsed(!isCollapsed)
  }

  return ( 
    <>
    <div className={styles.collapsable} onClick={() => handelCollapsable()}>
      <p>PLATFORM</p>
      <p className={isCollapsed ? "" : styles.v}>V</p>
    </div>
    {isCollapsed ? "" : <CollapsableItem/>}
    </>
  );
}

export default PlatformCollapsable;