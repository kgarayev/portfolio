import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    count: 0,
  },

  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },

    // change password
    // changePassword: (state, action) => {
    //   state.passwordChange = action.payload;
    // },

    // save the registration input values
    // setLoginInput: (state, action) => {
    //   state.loginInput = action.payload;
    // },
  },
});

export const { increment, decrement } = mainSlice.actions;

export const selectCount = (state: any) => state.main.count;

export default mainSlice.reducer;
