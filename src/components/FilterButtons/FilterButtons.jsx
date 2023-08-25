import { useContext, useEffect, useState } from "react";
import { GenreContext } from "../../App";
import FilterButton from "../shared/FilterButton/FilterButton";
import styles from './FilterButtons.module.scss'


const FilterButtons = () => {

  const {genre, setGenre} = useContext(GenreContext)
  const [allFilters, setAllFilters] = useState([])

  useEffect(() => {
    setAllFilters([...genre])
  }, [genre])

  console.log(allFilters);


  return ( 
    <div className={styles.filter_buttons_wrapper}>
    {allFilters.map((filter, index) => <FilterButton key={index} filter={filter} index={index}/>)}
    <p>Test</p>
    </div>
  );
}

export default FilterButtons;