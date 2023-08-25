import { useContext } from "react";
import { GenreContext } from "../../../App";
import GenreX from "../../../assets/img/GenreX.png"
import styles from './FilterButton.module.scss' 


const FilterButton = ({filter, index}) => {

  const {genre, setGenre} =useContext(GenreContext)

  const handleDelete = () => {
    const newGenres = [...genre].filter(genre => {
      return genre !== filter
    })
    setGenre(newGenres)
  }
  console.log();

  return ( 
    <p className={styles.filter_button}>
      <span onClick={() => handleDelete()}>
        <img src={GenreX} alt="" />
      </span> {filter.toUpperCase()}
    </p>
  );
}

export default FilterButton;