import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./slices/noticeSlice";

export const store = configureStore({
  reducer: {
    notice: noticeReducer,
  },
});