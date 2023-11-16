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
        code: "https://github.com/kgarayev/stash_backend",
        live: "https://stash-uwns.onrender.com/",
      },
      {
        title: "Carbon Intensity Bot",
        description: "cabron intensity bot",
        tag: "js, vanilla, rest, node",
        buttonText: "some link",
        imageLink: "/carbon.png",
        code: "something",
        live: "",
      },
      {
        title: "Ricks & Morties",
        description: "fan App",
        tag: "js, react, rest, node",
        buttonText: "some link",
        imageLink: "/ricks.png",
      },
      {
        title: "Chat App Backend",
        description: "Realtime Chat App using WebSockets",
        tag: "js, react, node",
        buttonText: "some link",
        imageLink: "/websocketBack.png",
      },
    ],

    skillsList: [
      {
        title: ["Frontend", "Development"],
        iconLink: ["/frontend5.svg"],
        techUsed: [
          { name: "Typescript", link: "/ts.svg" },
          { name: "Javascript", link: "/js.svg" },
          { name: "React.js", link: "/react.svg" },
          { name: "Redux", link: "/redux.svg" },
          { name: "Jest", link: "/jest.svg" },
          { name: "Cypress", link: "/cypress.svg" },
          { name: "Next.js", link: "/next.svg" },
          { name: "GraphQL", link: "/graphql.svg" },
          { name: "Firebase", link: "/firebase.svg" },
          { name: "D3.js", link: "/d3.svg" },
          { name: "HTML", link: "/html.svg" },
          { name: "CSS", link: "/css.svg" },
          { name: "SCSS", link: "/sass.svg" },
          { name: "Tailwind", link: "/tailwind.svg" },
          { name: "Material UI", link: "/mui.svg" },
        ],
      },
      {
        title: ["Backend", "Development"],
        iconLink: ["/backend4.svg"],
        techUsed: [
          { name: "Typescript", link: "/ts.svg" },
          { name: "Javascript", link: "/js.svg" },
          { name: "Python", link: "/python.svg" },
          { name: "C", link: "/c.svg" },
          { name: "Node", link: "/node.svg" },
          { name: "Express", link: "/express.svg" },
          { name: "Flask", link: "/flask.svg" },
          { name: "Django", link: "/django.svg" },
          { name: "MySQL", link: "/mysql.svg" },
          { name: "Postgre", link: "/postgres.svg" },
          { name: "MongoBD", link: "/mongo.svg" },
          { name: "Redis", link: "/redis.svg" },
          { name: "Socket.io", link: "/socket.svg" },
          { name: "GraphQL", link: "/graphql.svg" },
          { name: "Apache", link: "/apache.svg" },
        ],
      },
      {
        title: ["DevOps"],
        iconLink: ["/cloud3.svg"],
        techUsed: [
          { name: "AWS", link: "/aws.svg" },
          { name: "GCP", link: "/gcp.svg" },
          { name: "Azure", link: "/azure.svg" },
          { name: "Github Actions", link: "/github.svg" },
          { name: "Github CI/CD", link: "/gitlab.svg" },
          { name: "Docker", link: "/docker.svg" },
          { name: "Kubernetes", link: "/k8.svg" },
          { name: "Vercel", link: "/vercel.svg" },
          { name: "Netlify", link: "/netlify.svg" },
          { name: "Heroku", link: "/heroku.svg" },
          { name: "Apache", link: "/apache.svg" },
          { name: "Jenkins", link: "/jenkins.svg" },
          { name: "Terraform", link: "/terraform.svg" },
          { name: "Jira", link: "/jira.svg" },
          { name: "Splunk", link: "/splunk.svg" },
        ],
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
