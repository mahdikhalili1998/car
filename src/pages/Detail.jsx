import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import Loader from "../components/Loader";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "../css/detail.module.css";
import Swiper from "../components/Swiper";
import { v4 as uuidv4 } from "uuid";
import DetailTable from "../components/DetailTable";
import { IoMdTime } from "react-icons/io";
import Cm from "../components/Cm";
import ShowComment from "../components/ShowComment";
import cx from "classnames";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

function Detail() {
  const [car, setCar] = useState([]);
  const { data } = useQuery(GET_DATA);
  const [detail, setDetail] = useState([]);
  const [timer, setTimer] = useState(3000);
  const navigate = useNavigate();
  // console.log(detail);
  const { id } = useParams();
  // console.log(id);
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
            <div className={styles.moreChooses}>
              <div>
                <span style={{ color: "var(--detail)" }}>{<IoMdTime />}</span>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon sx={{ fontSize: "5rem", color: "#1976d2" }} />
                <Typography component={"p"} variant="p">
                  Back to last page
                </Typography>
              </div>
              <div>
                <h3> Do You Have Question ?</h3>
                <Link
                  style={{ backgroundColor: "#e7b939" }}
                  className={styles.link}
                >
                  Connect To Consultants{" "}
                </Link>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <h3>Do You Like This Car ?</h3>
                <Link className={cx(styles.link, styles.buy)}>
                  Go To Payment & Purchase
                </Link>
              </div>
            </div>
            <DetailTable detail={detail} />
            <Cm id={id} />
            <div
              style={{
                gridColumn: "1/3",
              }}
            >
              <ShowComment id={id} />
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
