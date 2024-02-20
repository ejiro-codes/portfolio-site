import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { projects, job_experiences, roles, languages, framework, libraries } from "./ProjectDetails";
import test from "../public/profilePic.jpg";
// import Slider from "react-slick";
import { Carousel } from "@trendyol-js/react-carousel";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Navbar from "./components/Navbar";
//import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className=" font-['Chakra Petch'] shadow-lg shadow-indigo-500/50 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 w-full h-full">
        <div className="justify-end text-right pt-60 pr-20 mr-10">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-2xl font-black text-zinc-100 ">
            <ReactTyped strings={["HELLO AND WELCOME!"]} typeSpeed={120} loop />
          </h1>
          <h2 className="lg:text-6xl md:text-4xl sm:text-2xl xs:text-xl font-bold text-zinc-100 pt-8">
            I'M EJIRO IGUN...
          </h2>
        </div>
        <div className="flex ml-10 pl-10 space-x-24 xs:mt-40 lg:mt-32 pb-10">
          <div className="flex-2 lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl text-zinc-100">
            <a href="http://github.com/Ejiro-code" target="_blank">
              <FiGithub />
            </a>
          </div>
          <div className="flex-2 lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl text-zinc-100">
            <a
              href="https://www.discordapp.com/users/551921284296998932"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </div>
          <div className="flex-2 lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl text-zinc-100">
            <a href="https://www.linkedin.com/in/ejiro-igun-/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* About me section */}
      <div className="Container  pt-40 flex justify-center">
        <div
          className=" lg:flex box-border min-h-96 w-3/4 bg-gradient-to-r from-purple-400 to-indigo-400"
          style={{
            borderRadius: "80px",
            boxShadow: "-6px 7px RGB(250, 164, 255)",
          }}
        >
          <div className="lg:flex-none xs:ml-20 sm:ml-32 md:ml-48 lg:ml-10 w-1/3">
            <img
              src={test}
              alt=""
              className="about mt-12 ml-10 shadow-2xl ring-8 ring-offset-4 ring-offset-purple-400"
            />
          </div>
          <div className="lg:flex-1 lg:ml-2 md:ml-20  md:w-3/4 lg:w-1/2 pl-5">
            <h1
              id="about"
              className="md:text-3xl sm:text-2xl text-center text-zinc-100 font-bold underline pb-7 pt-10"
            >
              ABOUT ME
            </h1>
            <p className="md:text-xl sm:text-xl xs:mx-10 text-zinc-100 font-semibold lg:pr-10 pb-10 xs:pr-2">
              I'm a senior currently attending San Jose State University and
              looking to obtain my bachelors in computer science by Spring 2024.
              I possess a wide array of skills and have experience working with
              various technologies in specializations ranging from web
              development to machine learning. At SJSU, I'm an active member of
              computer science development team as well as a trainer for the
              competitive programming club. My core languages are Java, C++, and
              Python.
            </p>
          </div>
        </div>
      </div>

          {/* Skills Section */}
        <div className="container pt-10">
            <h1
          id="skills"
          className="text-center text-4xl font-bold md:pb-10 xs:pb-2 underline"
        >
          Skills
        </h1>
          <div className="pt-3 flex flex-wrap space-x-3 justify-center">
            <h2 className="md:text-2xl">Languages : </h2>
            {languages.map((l) => (
              <div className="flex">
                <p className="md:text-3xl "> {l.logo} </p>
                <p className="md:text-xl pl-1">{l.name}</p>
              </div>
            ))}
          </div>
          <div className="pt-7 flex flex-wrap space-x-3 justify-center">
            <h2 className="md:text-2xl">Frameworks : </h2>
            {framework.map((l) => (
              <div className="flex">
                <p className="md:text-3xl "> {l.logo} </p>
                <p className="md:text-xl pl-1">{l.name}</p>
              </div>
            ))}
          </div>
          <div className="pt-7 flex flex-wrap space-x-3 justify-center">
            <h2 className="md:text-2xl">Libraries : </h2>
            {libraries.map((l) => (
              <div className="flex">
                <p className="md:text-3xl "> {l.logo} </p>
                <p className="md:text-xl pl-1">{l.name}</p>
              </div>
            ))}
          </div>
        </div>


      {/* Projects Carousel */}
      <div className="pt-32 pb-20">
        <h1
          id="projects"
          className="text-center text-4xl font-bold md:pb-10 xs:pb-2 underline"
        >
          Projects
        </h1>
        <div className=" ">
          <Carousel
            show={2}
            slide={1}
            transition={0.5}
            swiping={false}
            rightArrow={
              <HiArrowSmRight className="md:text-6xl xs:text-5xl text-zinc-100 mt-44" />
            }
            leftArrow={
              <HiArrowSmLeft className="md:text-6xl xs:text-3xl text-zinc-100 mt-44" />
            }
            className="carousel"
          >
            {/* sm:outline-8 sm:outline-double sm:outline-indigo-400 sm:pl-10 sm:mx-10 md:my-10 xs:my-5  */}
            {projects.map((item) => (
              <div className="">
              <div
                className="stolen carous "
                key={item.id}
              >
                <div className="">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="carouselImage"
                  />
                </div>
                <h2 className="md:text-xl underline font-bold text-center">
                  {item.title}
                </h2>
                <div className="flex md:text-5xl sm:text-3xl xs:text-2xl pt-2 space-x-10 justify-center text-violet-400">
                  {item.stack.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>
                <p className="md:text-lg xs:text-sm font-bold px-10 pt-2 md:h-1/3">{item.description}</p>
                <p className="pt-3 px-10 underline md:text-5xl xs:text-3xl text-violet-400">
                  <a href={item.githubURL} target="_blank">
                    <FaGithub />
                  </a>
                </p>
              </div>

              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Experience section*/}
      <div className="pt-32">
        <h1
          id="experiences"
          className="text-center text-4xl font-bold pb-10 underline"
        >
          EXPERIENCE
        </h1>

        {job_experiences.map((exp, index) => (
          <div
            className="outline-8 outline-double outline-indigo-400 mx-10 mt-10 pt-10 mb-28 "
            key={index}
          >
            <div className="md:flex pl-20 pr-10 justify-center sm:pb-10 md:pb-20">
              <div className="experience md:flex-2 md:pt-20 xs:pt-10">
                {/** Sequoia EXperience */}
                <img
                  src={exp.logo}
                  alt="TARGET LOGO"
                  className="exImage md:mr-10 sm:ml-20"
                />
              </div>
              <div className="md:flex-1 text-wrap pt-10">
                {/** Target EXperience */}
                <h2 className="text-2xl underline pb-5">{exp.role}</h2>
                <p className="md:text-xl">{exp.summary}</p>
                <ul className="pt-5">
                  {exp.tasks.map((task, index) => {
                    return (
                      <li className="pt-2 md:text-xl" key={index}>
                        {task}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
