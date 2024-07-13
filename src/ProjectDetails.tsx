// import test from "/profilePic.jpg";
import bfs from "/bfs.gif";
import fsc from "/FSC.gif";
import sorting from "/sorting.gif";
import statics from "/statics.gif";
import target from "/Target-logo.png";
import sequoia from "/sequoia.png";
import cooksite from "/cooksite.png";
import mentor from "/mentorMind.png";
import { FaJava, FaReact, FaPython, FaDocker,FaHtml5,FaCss3Alt,FaFlask,FaBootstrap } from "react-icons/fa";
import { SiJunit5, SiMysql, SiDjango, SiSqlite,SiTailwindcss,SiScikitlearn,SiPandas,SiNumpy,SiTensorflow } from "react-icons/si";
import { DiCode,DiDjango,DiJavascript,DiJsBadge,DiPostgresql,DiMongodb } from "react-icons/di";

const logos = {
  java: <FaJava />,
  react: <FaReact />,
  python: <FaPython />,
  docker: <FaDocker />,
  junit: <SiJunit5 />,
  mysql: <SiMysql />,
  django: <SiDjango />,
  sqlite: <SiSqlite />,
};

export const languages = [{
  name: "Java",
  logo: <FaJava/>
},
{
  name: "Python",
  logo: <FaPython/>
},
{
  name: "C++",
  logo: <DiCode/>
},
{
  name: "Javascript",
  logo: <DiJsBadge/>
},
{
  name: "HTML",
  logo: <FaHtml5/>
},
{
  name: "CSS",
  logo: <FaCss3Alt/>
},
{
  name: "PostgreSQL",
  logo: <DiPostgresql/>
},
{
  name: "MySQL",
  logo: <SiMysql/>
},

]

export const libraries = [
  {
    name: "JUnit",
    logo: <SiJunit5/>
  },
  {
    name: "SciKit Learn",
    logo: <SiScikitlearn/>
  },
  {
    name: "Pandas",
    logo: <SiPandas/>
  },
  {
    name: "Numpy",
    logo: <SiNumpy/>
  },
  {
    name: "Tensorflow",
    logo: <SiTensorflow/>
  },
  {
    name: "Seaborn",
    logo: <FaPython/>
  },
  {
    name: "MatPlotlib",
    logo: <FaPython/>
  },
]
export const framework = [
  {
    name: "Django",
    logo: <DiDjango/>
  },
  {
    name: "React",
    logo: <FaReact/>
  },
  {
    name: "Flask",
    logo: <FaFlask/>
  },
  {
    name: "Bootstrap",
    logo: <FaBootstrap/>
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss/>
  },
]


export const projects = [
  {
    id: 1,
    src: fsc,
    alt: "First Project",
    title: "ASL Finger Spelling Classifier",
    description:
      "This project was built to supplement a Convolutional Neural Network I built and trained to decipher between different American Sign Language Finger Spellings via a front-end interface that allows users to capture images of their own finger spellings and send that over to the model via an API designed with python's Flask Framework",
    stack: [logos.react, logos.python],
    githubURL: "https://github.com/Ejiro-code/ASLFingerSpelling",
  },
  {
    id: 2,
    src: sorting,
    alt: "Second Project",
    title: "Sorting Algorithm Visualizer",
    description:
      "Capable of displaying visualizations of bubble, insertion and merge sort. Utilized the Java swing worker in order to properly communicate the concurrent merge sort operations via the allocation of multiple threads. Made use of an Object-Oriented approach in order to preserve the organization of the project.",
    stack: [logos.java],
    githubURL: "https://github.com/Ejiro-code/Sorting-Algorithm-Visualizer",
  },
  {
    id: 3,
    src: statics,
    alt: "Third Project",
    title: "Featherweight Javascript Intepreter",
    description:
      "This project involved writing a lexer and parser that was used to construct an abstract syntax tree with the aid of the ANTLR package. Semantics of the language were validated with adequate JUnit testing. The language was built to support conditions, loops, binary operation expressions, closures, functions, variable declarations and a few more functionalities.",
    stack: [logos.java, logos.junit],
    githubURL: "#",
  },
  {
    id: 4,
    src: statics,
    alt: "Fourth Project",
    title: "DBMS Interface System",
    description:
      "Built a User Interface for a MYSQL DBMS as a final project for my Introduction to Databases course. The UI was designed and maintained using the streamlit python library which was used during the project to support basic operations such as lookups, insertions, deletions, and filtering. The application was containerized using docker to allow for easy porting between local systems.",
    stack: [logos.python, logos.mysql, logos.docker],
    githubURL: "https://github.com/Ejiro-code/SKIWI",
  },
  {
    id: 5,
    src: cooksite,
    alt: "Fifth Project",
    title: "Recipe Site",
    description:
      "In an attempt to garner some experience using the Django Framework I built this project which was simply intended to provide recipes to popular dishes. Users were able to write up and delete recipes but also had access to all other user posts on the site. Unfortunately, as of now, a search function has not been implemented but I may eventually return to the project and make some ramifications.",
    stack: [logos.python, logos.django, logos.sqlite],
    githubURL: "https://github.com/Ejiro-code/cooksite",
  },
  {
    id: 6,
    src: bfs,
    alt: "Sixth Project",
    title: "DFS/BFS Visualizer",
    description:
      "The visualizer displays a large grid with two set points (which for now have to be modified in the source code..) and depending on the selected option will display the operations involved in traversing the grid from the first point to the second. ",
    stack: [logos.java],
    githubURL: "https://github.com/Ejiro-code/BFS-DFS-Visualizer-",
  },
  {
    id: 7,
    src: mentor,
    alt: "Seventh Project",
    title: "Letter of Recommendation Template generator",
    description:
      "Built a desktop application that allowed professors to create customized templates for students whom they intended to draft letter of recommendation. This project was carried out in a team of four and I primarily took charge of the front-end design and implementation using the Java FX Framework as well as design a protion of the sqlite database.",
    stack: [logos.java, logos.sqlite],
    githubURL: "https://github.com/Ejiro-code/MentorMind",
  },
];

export const roles = [
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

export const job_experiences = [
  {
    logo: sequoia,
    role: "Data Analyst",
    summary:
      "Tasked with maintaining a large database utilizing postgreSQL as well as various data manipulation libraries in python. Constucted dashboards and created reports that were instantly made accessible through automated emails and web applications that I designed using the streamlit framework.",
    tasks: [
      "Data Analysis: Primarily conducted through Python libraries such as Pandas and Numpy which aid with exploratory data analysis.",
      "Data Cleaning and Transformation: Working with and cleansing data, ensuring consistency and proper articulation using Postgresql coincided with SQL toolkit SQLAlchemy integrated with Python.",
      "Data Visualization and Presentation: Providing coherent summaries identifying patterns and trends in provided data. Creating visualizations including charts and dashboards with the aid of the Python library Streamlit, in order to convey said trends in an effective manner.",
    ],
  },
  {
    logo: target,
    role: "Fulfillment Expert",
    summary:
      "Tasked primarily with locating and neatly packaging online orders that were to be shipped from the store and or picked up by guests. Very fast-paced environment as we were to always meet the assigned deadline for orders to be processed/due for pickup from the store. This entailed continuously pacing through the entirety of the store, searching for the items within our respective batches of orders whilst also attending to guests in need along the way",
    tasks: [
      "Picking and Packaging orders in a timely fashion",
      "Training and supervising new members of staff",
      "Ensuring that aisles were kept tidy and devoid of anything that could ruin the guest experience",
      "Occasionally stocking shelves",
    ],
  },
];
