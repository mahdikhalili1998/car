import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import styles from "../css/detail.module.css";
import Swiper from "../components/Swiper";
import { v4 as uuidv4 } from "uuid";
import DetailTable from "../components/DetailTable";
function Detail() {
  const [car, setCar] = useState([]);
  const { data } = useQuery(GET_DATA);
  const [detail, setDetail] = useState([]);
  const [timer, setTimer] = useState(3000);
  // console.log(detail);
  const { id } = useParams();

  useEffect(() => {
    if (data) {
      setCar(data.carInfos);
      const selectedCar = (id) => {
        if (car) {
          const newcar = car.filter((item) => item.id === id);
          setDetail([
            {
              ...newcar[0],
              images: newcar.map((item) =>
                item.images.map((sub) => ({ id: uuidv4(), url: sub.url }))
              ),
              features: newcar.map((item) =>
                item.features.map((sub) => ({ id: uuidv4(), options: sub }))
              ),
            },
          ]);
        }
      };
      selectedCar(id);
    }
  }, [data, car]);

  const timerHandler = (e) => {
    const categories = e.target.value;
    console.log(categories);
  };
  return (
    <>
      {!detail ? (
        <Loader />
      ) : (
        detail.map((item) => (
          <div
            className={styles.detailContainer}
            key={item.images.map((num) => num.id)}
          >
            <Swiper detail={detail} timer={timer} />
            <div>
              <div>
                <label htmlFor="cars">Set Slider Time : </label>
                <select
                  onChange={(e) => setTimer(+e.target.value)}
                  name="cars"
                  id="cars"
                >
                  <option value={3000}>3 </option>
                  <option value={6000}>6 </option>
                  <option value={9000}>9 </option>
                  <option value={12000}>12 </option>
                </select>
              </div>
            </div>
            <DetailTable detail={detail} />
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
