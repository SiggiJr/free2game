import styles from "./Details.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data2 } from "../../../assets/utils/data/data.js";

import { options } from "../../../assets/utils/api/api.js";

const Details = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const detailsId = useParams().id;

  useEffect(() => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${detailsId}`, options)
      .then((response) => {
        if (!response.ok) throw new Error("fetch error details");
        return response.json();
      })
      .then(detailsData => {
        setIsLoading(false);
        setDetails(detailsData);
      })
      .catch((error) => console.error(error.message))
  }, [])

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className={styles.details}>
      <header>
        <img className={styles.img_hero}
          src={details.screenshots[0].image}
          alt={details.title}
        />
      </header>
      <div className={styles.details_div}>
        <article className={styles.main}>
          <h2>{details.title}</h2>
          <img className={styles.img_thumb}
            src={details.thumbnail}
            alt={details.title} />
          <div className={styles.general_informations}>
            <h3>Platform: {details.platform}</h3>
            <p className={styles.genre}>{details.genre}</p>
            <a href={details.game_url} target="blank" className={styles.playNow_btn}>PLAY NOW</a>
          </div>
        </article>

        <article className={styles.about}>
          <h3>About</h3>
          <p>{details.description}</p>
        </article>

        <img className={styles.img}
          src={details.screenshots[1].image}
          alt={details.title}
        />

        <img className={styles.img}
          src={details.screenshots[2].image}
          alt={details.title}
        />

        <article className={styles.info}>
          <h3>Additional Information</h3>
          <p className={styles.short_description}>{details.short_description}</p>
          <div className={styles.info_div}>
            <h4>Developer</h4>
            <p>{details.developer}</p>

            <h4>Publisher</h4>
            <p>{details.publisher}</p>

            <h4>Release Date</h4>
            <p>{details.release_date}</p>
          </div>
        </article>

        {details.minimum_system_requirements &&
        
          <article className={styles.system}>
            <div className={styles.headline_div}>
              <h3>Minimum System Requirements</h3>
            </div>
            <div className={styles.div_around}>
              <div className={styles.system_div_left}>
                <h4>OS</h4>
                <p>{details.minimum_system_requirements.os}</p>
                <h4>Memory</h4>
                <p>{details.minimum_system_requirements.memory}</p>

                <h4>Storage</h4>
                <p>{details.minimum_system_requirements.storage}</p>
              </div>

              <div className={styles.system_div_right}>
                <h4>Processor</h4>
                <p>{details.minimum_system_requirements.processor}</p>

                <h4>Graphics</h4>
                <p>{details.minimum_system_requirements.graphics}</p>

                <h4>Additional Notes</h4>
                <p>Specifications may change during development</p>
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  );
};

export default Details;
