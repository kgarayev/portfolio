import { createSlice } from "@reduxjs/toolkit";

const mainSlice: any = createSlice({
  name: "main",

  initialState: {
    count: 0,

    screenMode: "",

    projectList: [
      {
        title: "Stash",
        description:
          "A fintech app for account creation, transactions, obtaining macroeconomic data, user customisation and live chat.",
        stack:
          "Typescript, Node, Express, React, Redux, Auth, 3rd Party API, PostgreSQL, REST, WebSockets, Validation, Material UI",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/stash4.jpg",
        code: "https://github.com/kgarayev/stash_backend",
        live: "https://stash-uwns.onrender.com/",
        color: "bg-emerald-100",
      },
      {
        title: "Carbon Intensity Bot",
        description:
          "Provides real-time, location-specific carbon intensity and electricity mix data in the UK.",
        tag: "js, react, rest, node",
        stack:
          "Python, Flask, Cookies, SQLite, Javascript, Jinja, 3rd Party APIs, REST, Geolocation, Realtime, Validation",
        buttonText: "some link",
        imageLink: "/easynutrition.jpg",
        code: "https://github.com/kgarayev/carbon_intensity",
        live: "https://gb-carbon-intensity.netlify.app/",
        color: "bg-yellow-50",
      },
      {
        title: "Easy Nutrition",
        description:
          "A nutritional data app for with smart multiple food item entry, sorting, filtering, and favourite-saving functionality.",
        tag: "js, react, rest, node",
        stack:
          "Javascript, Node, Express, MySQL, React, Redux, Caching, REST, Validation, API Integration",
        buttonText: "some link",
        imageLink: "/easynutrition.jpg",
        code: "https://github.com/kgarayev/easy_nutrition",
        live: "https://easy-nutrition.netlify.app/",
        color: "bg-fuchsia-100",
      },
      {
        title: "AI",
        description:
          "Provides real-time, location-specific carbon intensity and electricity mix data in the UK.",
        tag: "js, react, rest, node",
        stack:
          "Python, Flask, Cookies, SQLite, Javascript, Jinja, 3rd Party APIs, REST, Geolocation, Realtime, Validation",
        buttonText: "some link",
        imageLink: "/easynutrition.jpg",
        code: "https://github.com/kgarayev/carbon_intensity",
        live: "https://gb-carbon-intensity.netlify.app/",
        color: "bg-blue-100",
      },
    ],

    skillsList: [
      {
        title: ["Frontend"],
        iconLink: ["/frontend2.svg"],
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
        title: ["Backend"],
        iconLink: ["/backend11.svg"],
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
          { name: "Actions", link: "/github.svg" },
          { name: "Gitlab CI/CD", link: "/gitlab.svg" },
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
