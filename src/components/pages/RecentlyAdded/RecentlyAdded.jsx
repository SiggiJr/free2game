import { useContext, useEffect, useState } from 'react'

import ListItem from '../../shared/ListItem/ListItem.jsx'
import Button from '../../shared/Button/Button.jsx'

import styles from './RecentlyAdded.module.scss'
import gridStyle from '../../../modules/Grid.module.scss'
import { getGamesByFilter } from '../../../assets/utils/api/api.js'
// import { FilterContext } from '../../../App.jsx'

const RecentlyAdded = () => {

  const [games, setGames] = useState([]);
  // const {filter, setFilter} = useContext(FilterContext);

  // useEffect(()=> {
  //   getGamesByFilter(filter)
  //   .then(gamesData => setGames(gamesData))
  // }, [filter])

  useEffect(() => {
    getGamesByFilter(`sort-by=release-date`)
      .then(gamesData => {
        setGames(gamesData)
        console.log(gamesData.slice(0, 4))
      })
  }, []);

  return (
    <section className={styles["recently-added"]}>
      <header className={styles.hero}>
        <div className={styles.hero_div}>
        <h1>Recently Added</h1>
        </div>
      </header>
      <div className={styles.btn_div}>
      <Button title={"HOME"} path={``} />
      </div>
      <div className={styles.grid_div}>
      <div className={gridStyle["list-wrapper"]}>
        {games.map((game) => {
          return (
            <ListItem
              key={game.id}
              game={game}
            />
          )
        })}
      </div>
      </div>
    </section>
  );
}

export default RecentlyAdded;