import Header from "../components/Header";
import HowWork from "../components/HowWork";
import WhyUs from "../components/WhyUs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/Car/carSlice";
import Car from "../components/car";

function Homepage() {
  // const result = useSelector((state) => state.car.car);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // console.log(result);
  return (
    <div>
      <Header />
      <HowWork />
      <WhyUs />
      <Car  />
    </div>
  );
}

export default Homepage;
