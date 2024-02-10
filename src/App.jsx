import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import test from "../public/profilePic.jpg";
import target from "../public/Target_logo.svg.png";
import sequoia from "../public/sequoia.png";
//import "./App.css";

//const profilePic = require("../public/profilePic.jpg");

const job_experiences = [
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

function App() {
  return (
    <>
      <div className=" font-['Chakra Petch'] shadow-lg shadow-indigo-500/50 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 w-full h-screen">
        <div className="justify-end text-right pt-60 pr-20 mr-10">
          <h1 className="text-7xl font-black text-zinc-100 ">
            <ReactTyped strings={["HELLO AND WELCOME!"]} typeSpeed={120} loop />
          </h1>
          <h2 className="text-6xl font-bold text-zinc-100 pt-8">
            I'M EJIRO IGUN...
          </h2>
        </div>
        <div className="flex ml-10 pl-10 space-x-24 mt-40">
          <div className="flex-2 text-7xl text-zinc-100">
            <FiGithub />
          </div>
          <div className="flex-2 text-7xl text-zinc-100">
            <FaDiscord />
          </div>
          <div className="flex-2 text-7xl text-zinc-100">
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* About me section */}
      <div className="Container pt-40 flex justify-center">
        <div
          className=" flex box-border  min-h-96 w-3/4 bg-gradient-to-r from-purple-400 to-indigo-400"
          style={{
            borderRadius: "80px",
            boxShadow: "-9px 10px RGB(230, 194, 255)",
          }}
        >
          <div className="flex-none w-1/3">
            <img
              src={test}
              alt=""
              className="mt-12 ml-10 shadow-2xl ring-8 ring-offset-4 ring-offset-purple-400"
              style={{
                borderRadius: "50%",
                height: "300px",
                width: "300px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-1 w-1/2 pl-5">
            <h1 className="text-3xl text-zinc-100 font-bold underline pb-10 pt-10">
              ABOUT ME
            </h1>
            <p className="text-2xl text-zinc-100 font-semibold pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure,
              corrupti facere tempore qui aliquam obcaecati incidunt nostrum
              eaque magni libero molestiae soluta, ut tempora illum recusandae
              perspiciatis, repellendus error. Cum nostrum quos sunt autem animi
              ea impedit expedita quasi, numquam eos, nobis ducimus natus vero
              eius hic error incidunt, vel nihil culpa. Nobis blanditiis
              explicabo ipsam sapiente et delectus?
            </p>
          </div>
        </div>
      </div>

      {/* Experience section*/}
      <div className="container pt-32">
        <h1 className="text-center text-4xl font-bold pb-10">EXPERIENCE</h1>

        {job_experiences.map((exp, index) => (
          <>
            <div className="flex pb-20">
              <div
                className="flex-2 px-32 pt-20"
                style={{
                  borderRight: "3px",
                  borderRightColor: "black",
                  borderRightStyle: "groove",
                }}
              >
                {/** Target EXperience */}
                <img
                  src={exp.logo}
                  alt="TARGET LOGO"
                  style={{
                    minHeight: "300px",
                    minWidth: "300px",
                    maxHeight: "400px",
                    maxWidth: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="flex-1 pl-10 pr-32 pt-10">
                {/** Target EXperience */}
                <h2 className="text-2xl underline pb-5">{exp.role}</h2>
                <p>{exp.summary}</p>
                <ul className="pt-5">
                  {exp.tasks.map((task, index) => {
                    return (
                      <li className="pt-2" key={index}>
                        {task}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
