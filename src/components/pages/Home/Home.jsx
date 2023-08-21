import styles from './Home.module.scss'
import {data} from '../../../assets/utils/data/data.js'
import ListItem from '../../shared/ListItem/ListItem';
import HomeItem from '../../shared/HomeItem/HomeItem';
import Button from '../../shared/Button/Button';
import gridStyle from '../../../modules/Grid.module.scss'

const Home = () => {
  const recentlyAddedData = data.filter((game, index) => index < 4)

  console.log(recentlyAddedData);
  return ( 
    <section className={styles.home}>
      <header>
        <h1>
        Find & track the best free-to-play games!
        </h1>
      </header>
      <section className={styles.recently_added}>
        <h3>
          Recently Added
        </h3>
        <div className={gridStyle["list-wrapper"]}>
          {recentlyAddedData.map(game => <HomeItem key={game.id} game={game}/>)}
        </div>
        <Button title={"SHOW MORE"} path={"recentlyadded"}/>
      </section>
      <section className={styles.test}>
        {recentlyAddedData.map(game => <ListItem key={game.id} game={game}/>)}
      </section>
    </section>
  );
}

export default Home;