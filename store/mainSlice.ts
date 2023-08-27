import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { HYDRATE } from "next-redux-wrapper";

// export the reducer functions
export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    // save the registration input values
    setRegisterInput: (state, action) => {
      state.registerInput = action.payload;
    },

    // record the joi validation errors
    setErrors: (state, action) => {
      state.errors = action.payload;
    },

    // save the registration input values
    setLoginInput: (state, action) => {
      state.loginInput = action.payload;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    // set account balance
    setBalance: (state, action) => {
      state.account.balance = action.payload;
    },

    // pay input
    setPayInput: (state, action) => {
      state.payInput = action.payload;
    },

    // debit card input
    setDebitInput: (state, action) => {
      state.debitInput = action.payload;
    },

    // change password
    changePassword: (state, action) => {
      state.passwordChange = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

// exporting the reducer functions
export const {
  setRegisterInput,
  setErrors,
  setLoginInput,
  setScreenMode,
  setPayInput,
  setBalance,
  setDebitInput,
  changePassword,
} = mainSlice.actions;

// exporting the selectors
export const selectRegisterInput = (state: { main: typeof initialState }) =>
  state.main.registerInput;
export const selectErrors = (state: { main: typeof initialState }) =>
  state.main.errors;
export const selectLoginInput = (state: { main: typeof initialState }) =>
  state.main.loginInput;
export const selectScreenMode = (state: { main: typeof initialState }) =>
  state.main.screenMode;
export const selectAccount = (state: { main: typeof initialState }) =>
  state.main.account;
export const selectTransactions = (state: { main: typeof initialState }) =>
  state.main.account.transactions;
export const selectPayInput = (state: { main: typeof initialState }) =>
  state.main.payInput;
export const selectDebitInput = (state: { main: typeof initialState }) =>
  state.main.debitInput;
export const selectPasswordChange = (state: { main: typeof initialState }) =>
  state.main.passwordChange;

export default mainSlice.reducer;
