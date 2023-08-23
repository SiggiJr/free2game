import logo from '../../../assets/img/favicon.svg';
import lupe from '../../../assets/img/Search.svg';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return ( 
    <section className={styles.searchbar_section}>
      <div className={styles.text}>
        <img src={logo} alt="free2game logo"/>
        <h1>FREE2GAME</h1>
      </div>
      <div className={styles.user}>
        <input className={styles.input} 
        type="text" 
        name="search_input" 
        id="search_input" 
        value=""
        />
      </div>
    </section>
  );
}
export default SearchBar;