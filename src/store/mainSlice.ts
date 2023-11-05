import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",

  initialState: {
    count: 0,

    screenMode: "",

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
      {
        title: "Easy Nutrition",
        description: "Food App",
        tag: "js, react, rest, node",
        buttonText: "some link",
        imageLink: "/js.png",
      },
    ],

    skillsList: [
      {
        title: ["Frontend", "Development"],
        iconLink: ["/frontend5.svg"],
        techUsed: [
          "/ts.svg",
          "/js.svg",
          "/react.svg",
          "/redux.svg",
          "/jest.svg",
          "/next.svg",
          "/d3.svg",
          "/firebase.svg",
          "/html.svg",
          "/css.svg",
          "/sass.svg",
          "/tailwind.svg",
        ],
      },
      {
        title: ["Backend", "Development"],
        iconLink: ["/backend4.svg"],
        techUsed: ["/ts.svg", "/js.svg", "/jest.svg", "/html.svg", "/css.svg"],
      },
      {
        title: ["DevOps"],
        iconLink: ["/cloud3.svg"],
        techUsed: ["/ts.svg", "/js.svg", "/jest.svg", "/html.svg", "/css.svg"],
      },
      {
        title: ["Coaching"],
        iconLink: ["/target.svg"],
        techUsed: ["/ts.svg", "/js.svg", "/jest.svg", "/html.svg", "/css.svg"],
      },
    ],

    targetId: null,
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

    setTargetId: (state, action) => {
      state.targetId = action.payload;
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

export const { increment, decrement, setScreenMode, setTargetId } =
  mainSlice.actions;

export const selectCount = (state: any) => state.count;
export const selectProjectList = (state: any) => state.projectList;
export const selectSkillsList = (state: any) => state.skillsList;
export const selectScreenMode = (state: any) => state.screenMode;
export const selectTargetId = (state: any) => state.targetId;

export default mainSlice.reducer;
