import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import styles from "../css/car.module.css";
import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import Loader from "./Loader";
import { useState } from "react";
function Car() {
  const { data } = useQuery(GET_DATA);
  const [time, setTime] = useState(false);

  console.log(time);

  return (
    <>
      <h1 id="car" className={styles.h1}>
        See cars ...
      </h1>
      <div className={styles.cardContainer}>
        {data ? (
          data.carInfos.map((item) => (
            <div className={styles.cardContent} key={item.id}>
              <img src={item.cover.url} alt={item.make} />
              <h2> {item.make}</h2>
              <div className={styles.shortInfo}>
                <p>Model : {item.model}</p>
                <p>Year : {item.year}</p>
                <p>Mileage : {item.mileage}</p>
                <p>Price : {item.price}</p>
              </div>
              <Link to="/detail-continue-to-buy " className={styles.link}>
                <span className={styles.icon}>
                  <FaCarSide />
                </span>
                <span className={styles.order}> See more & Order</span>
              </Link>
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
