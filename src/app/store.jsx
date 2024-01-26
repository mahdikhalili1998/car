import { configureStore } from "@reduxjs/toolkit";
import car from "../features/Car/carSlice";
const store = configureStore({ reducer: { car } });
export default store;
