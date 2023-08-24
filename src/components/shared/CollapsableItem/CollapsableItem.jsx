import { useContext } from "react";
import { PlatformContext } from "../../../App";

const CollapsableItem = ({options}) => {

  const {platform, setPlatform} = useContext(PlatformContext)

  return ( 
    <>
    <div className='collapsable_item' style={{color: "white"}}>
      {options.map(option => (
        <div key={option.value}>
          <input type="checkbox" name={option.value} id={option.value} onChange={(event) => setPlatform(event.target.value)} value={option.value} checked={ platform === option.value}/>
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    </>
  );
}

export default CollapsableItem;