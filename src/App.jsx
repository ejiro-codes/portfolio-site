import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {projects, job_experiences, roles} from "./projectDetails";
import test from "../public/profilePic.jpg";
// import Slider from "react-slick";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
//import "./App.css";

function App() {
  return (
    <>
      <div className=" font-['Chakra Petch'] shadow-lg shadow-indigo-500/50 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 w-full h-screen">
        <div className="justify-end text-right pt-60 pr-20 mr-10">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl font-black text-zinc-100 ">
            <ReactTyped strings={["HELLO AND WELCOME!"]} typeSpeed={120} loop />
          </h1>
          <h2 className="lg:text-6xl md:text-4xl sm:text-2xl xs:text-xl font-bold text-zinc-100 pt-8">
            I'M EJIRO IGUN...
          </h2>
        </div>
        <div className="flex ml-10 pl-10 space-x-24 mt-40">
          <div className="flex-2 lg:text-7xl text-zinc-100">
            <FiGithub />
          </div>
          <div className="flex-2 lg:text-7xl text-zinc-100">
            <FaDiscord />
          </div>
          <div className="flex-2 lg:text-7xl text-zinc-100">
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

        {/* Projects Horizontal Scroll bar */}
        <div className="container pt-32 pb-20">
          <h1 className="text-center text-4xl font-bold pb-10">Projects</h1>
          <div className="container ">
            <Carousel
              show={3.5}
              slide={2}
              transition={0.5}
              swiping={false}
              rightArrow={
                <HiArrowSmRight className="text-4xl text-black mt-32" />
              }
              leftArrow={
                <HiArrowSmLeft className="text-4xl text-black mt-32" />
              }
            >
              {projects.map((item) => (
                <div className="" key={item.id}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={200}
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      margin: "0 auto",
                      // height: "40vh",
                      // width: "80%",
                      borderRadius: "5%",
                    }}
                  />
                  <h2 className="text-sm">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
