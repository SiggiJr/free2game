import { useContext } from "react";
import { GenreContext } from "../../../App";



const FilterButton = ({filter, index}) => {

  const {genre, setGenre} =useContext(GenreContext)

  const handleDelete = () => {
    const newGenres = [...genre].filter(genre => {
      return genre !== filter
    })
    setGenre(newGenres)
  }

  return ( 
    <p style={{color: "white"}}>{filter}<span onClick={() => handleDelete()}>X</span></p>
  );
}

export default FilterButton;