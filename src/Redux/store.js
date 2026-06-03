import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./slices/noticeSlice";
import acoustoScanReducer from "./slices/acoustoScanSlice";

export const store = configureStore({
  reducer: {
    notice: noticeReducer,
    acoustoScan: acoustoScanReducer,
  },
});