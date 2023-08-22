import { useContext, useEffect, useState } from 'react'

import ListItem from '../../shared/ListItem/ListItem.jsx'
import Button from '../../shared/Button/Button.jsx'

import styles from './RecentlyAdded.module.scss'
import gridStyle from '../../../modules/Grid.module.scss'
import { getGamesByFilter } from '../../../assets/utils/api/api.js'
import { FilterContext } from '../../../App.jsx'

const RecentlyAdded = () => {

  const [games, setGames] = useState([]);
  const {filter, setFilter} = useContext(FilterContext);

  useEffect(()=> {
    getGamesByFilter(filter)
    .then(gamesData => setGames(gamesData))
  }, [filter])

  setFilter(`?sort-by=release_date`)

  return (
    <section className={styles["recently-added"]}>
      <header className={styles.hero}>
        <h1>Recently Added</h1>
      </header>

      <Button title={"Back to Home"} path={``} />
      
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
    </section>
  );
}

export default RecentlyAdded;