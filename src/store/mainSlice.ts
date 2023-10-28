import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",

  initialState: {
    count: 0,

    screenMode: 0,

    projectList: [
      {
        title: "Stash",
        description: "fintech App",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/stash2.png",
      },
      {
        title: "Carbon Intensity Bot",
        description: "cabron intensity bot",
        tag: "js, vanilla, rest, node",
        buttonText: "some link",
        imageLink: "/carbon.png",
      },
      {
        title: "Ricks & Morties",
        description: "fan App",
        tag: "js, react, rest, node",
        buttonText: "some link",
        imageLink: "/ricks.png",
      },
    ],

    skillsList: [
      {
        title: ["Frontend", "Development"],
        iconLink: ["/frontend5.svg"],
      },
      {
        title: ["Backend", "Development"],
        iconLink: ["/backend4.svg"],
      },
      {
        title: ["DevOps"],
        iconLink: ["/cloud3.svg"],
      },
      {
        title: ["Coaching"],
        iconLink: ["/target.svg"],
      },
    ],
  },

  // these are functions
  reducers: {
    increment: (state) => {
      state.count++;
    },

    decrement: (state) => {
      state.count--;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
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

export const { increment, decrement, setScreenMode } = mainSlice.actions;

export const selectCount = (state: any) => state.count;
export const selectProjectList = (state: any) => state.projectList;
export const selectSkillsList = (state: any) => state.skillsList;
export const selectScreenMode = (state: any) => state.screenMode;

export default mainSlice.reducer;
