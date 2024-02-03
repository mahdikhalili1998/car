import styles from "../css/car.module.css";
import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import Loader from "./Loader";
import engineSound from "../sound/sound.mp3";

function Car({ display }) {
  let audio = new Audio(engineSound);
  const start = () => {
    audio.play();
  };
  return (
    <>
      <h1 className={styles.h1}>See cars ...</h1>
      <div id={("car", "searchCar")}  className={styles.cardContainer}>
        {!display.lenght ? (
          display.map((item) => (
            <div className={styles.cardContent} key={item.id}>
              <img src={item.cover.url} alt={item.make} />
              <h2> {item.make}</h2>
              <div className={styles.shortInfo}>
                <p>Model : {item.model}</p>
                <p>Year : {item.year}</p>
                <p>Mileage : {item.mileage}</p>
                <p>Price : {item.price}</p>
              </div>
              <div onClick={start}>
                <Link to="/detail-continue-to-buy " className={styles.link}>
                  <span className={styles.icon}>
                    <FaCarSide />
                  </span>
                  <span className={styles.order}> See more & Order</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Car;
