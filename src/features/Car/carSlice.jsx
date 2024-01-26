import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/Confige";
const initialState = { loading: false, car: [], error: "" };
const fetchData = createAsyncThunk("car/fetchData", () => {
  return api.get();
});
const carSlice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.car = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.car = [];
      state.error = action.error.message;
    });
  },
});
export default carSlice.reducer;
export { fetchData };
