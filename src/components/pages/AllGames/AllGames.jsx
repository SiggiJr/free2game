import { data } from '../../../assets/utils/data/data.js'

import ListItem from '../../shared/ListItem/ListItem';
import Button from '../../shared/Button/Button.jsx'

import styles from './AllGames.module.scss'
import gridStyle from '../../../modules/Grid.module.scss'

const AllGames = () => {

  console.log(data);

  return (
    <section className={styles["all-games"]}>
      <header className={styles.hero}>
        <h1>All Games</h1>
      </header>

      <Button title={"Back to Home"} path={``} />

      <div className={styles["list-controls"]}>

      </div>
      <div className={gridStyle["list-wrapper"]}>
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