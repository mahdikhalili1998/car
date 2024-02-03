import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { InfoContext } from "./homepage";
import Swiper from "../components/Swiper";
import { v4 as uuidv4 } from "uuid";
function Detail() {
  const [car, setCar] = useState([]);
  const { data } = useQuery(GET_DATA);
  const [detail, setDetail] = useState([]);
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
            },
          ]);
        }
      };
      selectedCar(id);
    }
  }, [data, car]);

  // console.log(detail);
  return (
    <>
      {!detail ? (
        <Loader />
      ) : (
        detail.map((item) => (
          <div key={item.images.map((num) => num.id)}>
            <Swiper detail={detail} />
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
