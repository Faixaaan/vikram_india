import { createSlice } from "@reduxjs/toolkit";
import worldMapDummyData from "../../Data/worldMapDummyData";

const initialState = {
  locations: worldMapDummyData,
  selectedLocation: null,
};

const worldMapSlice = createSlice({
  name: "worldMap",

  initialState,

  reducers: {
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSelectedLocation } = worldMapSlice.actions;

export default worldMapSlice.reducer;