import MoviDex from  "./assets/MoviDex.png"
import day from "./assets/day-planner.png"
import Quiz from "./assets/Quiz.png"
import Weather from "./assets/Weather dashboard.png"
import JATE from "./assets/JATE.png"
import passwordGenerator from "./assets/Password Generator.png"


export const projects= [
    {
        title: "MoviDex",
        subtitle: "Technologies: HTML, Tailwind, Javascript, node",
        description:
          "Using web APIs this application allows users to search for movies and return reviews, streaming platforms, links to those platforms as well as trailers",
        image: MoviDex,
        link: "https://gkal14.github.io/MoviDex/",
      },
      {
        title: "Day Scheduler",
        subtitle: "Technologies: HTML,CSS,JavaScript",
        description:
          "This day planner updates the HTML depending on the time of the day",
        image: day,
        link: "https://gkal14.github.io/day-planner/",
      },
      {
        title: "Coding Quiz",
        subtitle: "Technologies: HTML,CSS,JavaScript",
        description:
          "The Coding Quiz uses JavaScript to update HTML in real time and set parameters for the game",
        image: Quiz,
        link: "https://gkal14.github.io/coding-quiz/",
      },
      {
        title: "Weather dashboard",
        subtitle: "Technologies: HTML, CSS, JavaScript, Web API",
        description:
          "The weather dashboard uses a web API to generate multi-day weather forecasts for users with a responsive design",
        image: Weather,
        link: "https://gkal14.github.io/weather-dashboard/",
      },
      {
        title: "Just Another Text Editor",
        subtitle: "Technologies: HTML, CSS, JavaScript, Nodejs, Expressjs",
        description:
          "This text editor functions online and is downloadable so that the user is able to store and edit text offline.",
        image: JATE,
        link: "https://jate-t-editor.herokuapp.com/",
      },
      {
        title: "Password Generator",
        subtitle: "Technologies: HTML, CSS, JavaScript",
        description:
          "This application is a random password generator",
        image: passwordGenerator,
        link: "https://gkal14.github.io/javascript-password-generator/",
      },
]