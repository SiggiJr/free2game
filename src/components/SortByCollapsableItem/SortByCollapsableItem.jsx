import { useContext } from "react";
import { SortByContext } from "../../App";
import styles from './SortByCollapsableItem.module.scss'

const SortByCollapsableItem = ({options}) => {
  const {sortBy, setSortBy} = useContext(SortByContext)

  return ( 
    <div className={styles.layout_wrapper}>
    <div className={styles.collapsable_items}>
      {options.map(option => (
        <div key={option.value} className={styles.div}>
          <input type="checkbox" name={option.value} id={option.value} onChange={(event) => setSortBy(event.target.value)} value={option.value} checked={ sortBy === option.value}/>
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SortByCollapsableItem;