import { useEffect, useState } from 'react'
import { data } from '../../../assets/utils/data/data.js'

import ListItem from '../../shared/ListItem/ListItem';
import Button from '../../shared/Button/Button.jsx'

import styles from './AllGames.module.scss'
import gridStyle from '../../../modules/Grid.module.scss'

const AllGames = () => {

  const [games, setGames] = useState([]);

  // const fetchURL = 

  // useEffect(() => {
  //   fetch(fetchURL)
  //     .then((response) => {
  //       if(!response.ok) throw new Error(`recently added fetch failed ${response.statusText}`);
  //       return response.json();
  //     })
  //     .then(gameData => setGames(gameData))
  //     .catch((error) => console.error(error.message));
  // }, [])

  return (
    <section className={styles["all-games"]}>
      <header className={styles.hero}>
        <h1>All Games</h1>
      </header>

      <Button title={"Back to Home"} path={``} />

      <div className={styles["list-controls"]}>

      </div>
      
      <div className={gridStyle["list-wrapper"]}>
        {/* {games.map((game) => { */}
        {data.map((game) => {
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

export default AllGames;