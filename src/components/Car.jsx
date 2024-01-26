import React, { useEffect } from "react";
import { fetchData } from "../features/Car/carSlice";
import { useDispatch, useSelector } from "react-redux";
function Car() {
  const result = useSelector((state) => state);
  // console.log(result)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return <div>sdsdC</div>;
}

export default Car;
