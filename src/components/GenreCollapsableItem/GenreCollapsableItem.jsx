import { GenreContext } from "../../App";
import { useContext } from "react";
import style from './GenreCollapsableItem.module.scss'

const GenreCollapsableItem = ({options}) => {
  
  const {genre, setGenre} = useContext(GenreContext)

  // (event) => setGenre(event.target.value)

  const handleGenre = (event) => {
    const clickedGenre = event.target.value;
    const currentGenres = [...genre];
    const genreInGenres = currentGenres.includes(clickedGenre)
    const indexOfGenre = currentGenres.indexOf(clickedGenre)
    if (genreInGenres) {
      currentGenres.splice(indexOfGenre, 1)
      setGenre(currentGenres)
    } else {
      setGenre([...currentGenres, clickedGenre])
    }
  }

  return ( 
    <>
    <div className={style.genre_collapsable_item}>
      <div className={style.item_wrapper}>
        {options.map(option => (
          <div key={option.value} className={style.div}>
            <input type="checkbox" name={option.value} id={option.value} onChange={(event) => handleGenre(event)} value={option.value} />
            <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default GenreCollapsableItem;