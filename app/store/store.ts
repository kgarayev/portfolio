import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import { createWrapper } from "next-redux-wrapper";

// setting up the store
export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  devTools: true,
});

export const wrapper = createWrapper(() => store);
s;
