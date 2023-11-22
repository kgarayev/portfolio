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
          "A mobile-first fintech app allowing account creation, seamless transactions, live chat, obtaining macroeconomic data and personalised user customisation.",
        stack:
          "Typescript, Node, Express, React, Redux, Auth, 3rd Party API, PostgreSQL, REST, WebSockets, Validation, Material UI",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/stash4.jpg",
        code: "https://github.com/kgarayev/stash_backend",
        live: "https://stash-uwns.onrender.com/",
        color: "emerald",
      },
      {
        title: "Carbon Intensity Bot",
        description:
          "A progressive web app that delivers accurate real-time, location-based carbon intensity, and varied electricity generation mix data to users. Integrates with National Grid API.",
        tag: "js, react, rest, node",
        stack:
          "Python, Javascript, Flask, Cookies, SQLite, Jinja, 3rd Party API Integration, REST, Geolocation, Realtime, Validation",
        buttonText: "some link",
        imageLink: "/carbonintensity.jpg",
        code: "https://github.com/kgarayev/carbon_intensity",
        live: "https://gb-carbon-intensity.netlify.app/",
        color: "light yellow",
      },
      {
        title: "Easy Nutrition",
        description:
          "A nutritional web app that provides data for multiple food item entries, with sorting, filtering, and local storage capabilities for favourites. Integrates with a smart 3rd party machine learning model.",
        tag: "js, react, rest, node",
        stack:
          "Javascript, Node, Express, Next.js, MySQL, React, Redux, Caching, REST, Validation, 3rd Party API Integration",
        buttonText: "some link",
        imageLink: "/easynutrition.jpg",
        code: "https://github.com/kgarayev/easy_nutrition",
        live: "https://easy-nutrition.netlify.app/",
        color: "bg-fuchsia-100",
      },
      {
        title: "Ricks & Morties",
        description:
          "A fan web app providing the ability to select, view, sort, filter, like, remove, and reset characters. Shows all Rick & Morty characters from different multiverses that have appeared in the show.",
        tag: "js, react, rest, node",
        stack:
          "Javascript, Node, Express, MongoDB, React, Redux, REST, 3rd Party API Integration, Figma, Validation",
        buttonText: "some link",
        imageLink: "/ricksandmorties.jpg",
        code: "https://github.com/kgarayev/rick_and_morty",
        live: "https://some-ricks-and-some-mortys.netlify.app/",
        color: "green",
      },

      {
        title: "Save My Marriage",
        description:
          "A mobile first progressive web app with reminders for relationship milestones, promoting healthier relationships and primarily aimed to save marriages. Developed at a hackathon.",
        stack:
          "Typescript, Next.js, React, Redux, Axios, Datetime, 3rd Party API Integration, Tailwind, Firebase, Validation",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/savemymarriage.jpg",
        code: "https://github.com/kgarayev/anniversary-reminder",
        live: "https://save-my-marriage-team-rocket.netlify.app/",
        color: "bg-indigo-50",
      },
      {
        title: "TheCEng",
        description:
          "A website which offers help to civil engineers who want to become professionally qualified. It has register and login functionality, and ecommerce service with payment integration.",
        stack:
          "Python, Javascript, Flask, jQuery, Auth, Sessions, 3rd Party Payment API, SQLite, SSR, Jinja, Ecommerce, Tailwind",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/theceng.jpg",
        code: "https://github.com/kgarayev/theceng",
        live: "https://www.youtube.com/watch?v=snF_QyvRu6Y&feature=youtu.be",
        color: "bg-emerald-50",
      },
      {
        title: "Investment App",
        description:
          "The Investment App is a web application that allows users to manage their investments and trade shares. Allows resgistration and log in, uses local storage and cookies for ecommerce functionality.",
        stack:
          "Python, Javascript, Flask, jQuery, Auth, Cookies, 3rd Party Payment API, SQLite, SSR, Jinja, Ecommerce, Bootstrap",
        tag: "ts, react, node",
        buttonText: "some link",
        imageLink: "/investmentapp.jpg",
        code: "https://github.com/kgarayev/investment_app",
        live: "https://finance.cs50.net/login",
        color: "bg-emerald-50",
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
