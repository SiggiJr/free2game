import { useContext } from "react";
import { SortByContext } from "../../App";

const SortByCollapsableItem = ({options}) => {
  const {sortBy, setSortBy} = useContext(SortByContext)

  return ( 
    <>
    <div className='collapsable_item' style={{color: "white"}}>
      {options.map(option => (
        <div key={option.value}>
          <input type="checkbox" name={option.value} id={option.value} onChange={(event) => setSortBy(event.target.value)} value={option.value} checked={ sortBy === option.value}/>
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    </>
  );
}

export default SortByCollapsableItem;