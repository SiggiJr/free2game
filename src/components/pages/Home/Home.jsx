import styles from './Home.module.scss'
import {data} from '../../../assets/utils/data/data.js'
import ListItem from '../../shared/ListItem/ListItem';
import HomeItem from '../../shared/HomeItem/HomeItem';
import Button from '../../shared/Button/Button';

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
        <div className={styles.grid_container}>
          {recentlyAddedData.map(game => <HomeItem key={crypto.randomUUID()}/>)}
        </div>
        <Button title={"SHOW MORE"} path={"recentlyadded"}/>
      </section>
    </section>
  );
}

export default Home;