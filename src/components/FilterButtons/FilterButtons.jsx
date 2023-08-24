import { useContext, useEffect, useState } from "react";
import { GenreContext } from "../../App";
import FilterButton from "../shared/FilterButton/FilterButton";


const FilterButtons = () => {

  const {genre, setGenre} = useContext(GenreContext)
  const [allFilters, setAllFilters] = useState([])

  useEffect(() => {
    setAllFilters([...genre])
  }, [genre])

  console.log(allFilters);


  return ( 
    <div style={{marginLeft: "10rem"}}>
    {allFilters.map((filter, index) => <FilterButton key={index} filter={filter} index={index}/>)}
    <p>Test</p>
    </div>
  );
}

export default FilterButtons;