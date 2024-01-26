import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/Car/carSlice";
import Header from "../components/Header";
import HowWork from "../components/HowWork";

function Homepage() {
  const [car, setCar] = useState([]);
  const result = useSelector((state) => state.car);
  const dispatch = useDispatch();
  console.log(car);
  useEffect(() => {
    dispatch(fetchData());
    setCar(result.car);
  }, []);
  return (
    <div>
      <Header />
      <HowWork />
    </div>
  );
}

export default Homepage;
