import { useContext, useState } from "react";
import { PlatformContext } from "../../../App";

const CollapsableItem = () => {

  const {platform, setPlatform} = useContext(PlatformContext)

  const options = [
    {label: "All Platforms", value: "all"},
    {label: "Windows (PC)", value: "pc"},
    {label: "Browser (Web)", value: "browser"}
  ]

  console.log(options.slice(1));

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