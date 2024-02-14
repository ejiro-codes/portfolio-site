import test from "../public/profilePic.jpg";
import target from "../public/Target_logo.svg.png";
import sequoia from "../public/sequoia.png";

const projects = [
  {
    id: 1,
    src: test,
    alt: "First Project",
    title: "ASL Finger Spelling Classifier",
    description: "",
    stack: "React JS, Python",
    githubURL: "",
  },
  {
    id: 2,
    src: target,
    alt: "Second Project",
    title: "Sorting Algorithm Visualizer",
    description: "",
    stack: "Java (Java Swing API)",
    githubURL: "",
  },
  {
    id: 3,
    src: sequoia,
    alt: "Third Project",
    title: "Featherweight Javascript Intepreter",
    description: "",
    stack: "Java (ANTLR)",
    githubURL: "",
  },
  {
    id: 4,
    src: test,
    alt: "Fourth Project",
    title: "DBMS Interface System",
    description: "",
    stack: "Python, MYSQL, Docker",
    githubURL: "",
  },
  {
    id: 5,
    src: target,
    alt: "Fifth Project",
    title: "Recipe Site",
    description: "",
    stack: "Python (Django)",
    githubURL: "",
  },
  {
    id: 6,
    src: sequoia,
    alt: "Sixth Project",
    title: "DFS/BFS Visualizer",
    description: "",
    stack: "Java (Java Swing)",
    githubURL: "",
  },
  {
    id: 7,
    src: test,
    alt: "Seventh Project",
    title: "Letter of Recommendation Template generator",
    description: "",
    stack: "Java (Java FX), Sqlite",
    githubURL: "",
  },
];

const roles = [
  {
    id: 1,
    logo: "",
    title: "Backend Developer",
    where: "San Jose State University Development Team",
    summary:
      "Tasks often involve constructing REST APIs that interface with front end applications, designing database schemas and on occasion contributing on the front-end. Have so far contributed to the development of the Computer Science Club Website ",
    technologies: ["React JS", "Next JS", "Django", "Mongo DB"],
  },
  {
    id: 2,
    logo: "",
    title: "Trainer",
    where: "Competitve Programming Team",
    summary:
      "Tasked with hosting meetings where I tutor curious students on introductory to intermediate algorithms as well as problem-solving techniques that prioritize efficiency, all usually done in C++",
    technologies: ["C++", "Java", "Python"],
  },
];

export default projects;
