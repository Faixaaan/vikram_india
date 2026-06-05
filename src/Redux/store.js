import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./slices/noticeSlice";
import worldMapReducer from "./slices/worldMapSlice";

export const store = configureStore({
  reducer: {
    notice: noticeReducer,
    worldMap: worldMapReducer,
  },
});