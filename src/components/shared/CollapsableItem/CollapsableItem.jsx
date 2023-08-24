import { useContext } from "react";
import { PlatformContext } from "../../../App";
import styles from './CollabsableItem.module.scss';

const CollapsableItem = ({options}) => {

  const {platform, setPlatform} = useContext(PlatformContext)

  return ( 
    <>
    <div className='collapsable_item' style={{color: "white"}}>
      {options.map(option => (
        <div className={styles.div} key={option.value}>
          <input className={styles.inputs} type="checkbox" name={option.value} id={option.value} onChange={(event) => setPlatform(event.target.value)} value={option.value} checked={ platform === option.value}/>
          <label className={styles.label} htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    </>
  );
}

export default CollapsableItem;