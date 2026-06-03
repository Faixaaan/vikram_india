import { createSlice } from "@reduxjs/toolkit";
import acoustoScanDummyData from "../../Data/acoustoScanDummyData";

const initialState = {
  locations: acoustoScanDummyData,
  selectedLocation: null,
};

const acoustoScanSlice = createSlice({
  name: "acoustoScan",

  initialState,

  reducers: {
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSelectedLocation } = acoustoScanSlice.actions;

export default acoustoScanSlice.reducer;