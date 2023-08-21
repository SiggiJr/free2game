import { data } from '../../../assets/utils/data/data.js'

import ListItem from '../../shared/ListItem/ListItem.jsx'
import Button from '../../shared/Button/Button.jsx'

import styles from './RecentlyAdded.module.scss'
import gridStyle from '../../../modules/Grid.module.scss'

const RecentlyAdded = () => {

  console.log(data);

  return (
    <section className={styles["recently-added"]}>
      <header className={styles.hero}>
        <h1>Recently Added</h1>
      </header>
      <Button title={"Back to Home"} path={`/`} />
      <div className={gridStyle["list-wrapper"]}>
        {data.map((game) => {
          return (
            <ListItem
              key={game.id}
              data={game}
            />
            //   <article>
            //   <h3>{game.title}</h3>
            //   <p>{game.genre}</p>
            // </article>
          )
        })}
      </div>
    </section>
  );
}

export default RecentlyAdded;