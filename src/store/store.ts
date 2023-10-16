import { configureStore } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice";

const store = configureStore({
  reducer: mainSliceReducer,
});

export { store };
