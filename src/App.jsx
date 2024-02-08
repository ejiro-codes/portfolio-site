import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import test from "../public/profilePic.jpg";
//import "./App.css";

//const profilePic = require("../public/profilePic.jpg");

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
        <h1 className="text-center text-4xl font-bold">EXPERIENCE</h1>
        <div className="flex">
          <div className="flex-1">
            {/** Target EXperience */}
            <img src="" alt="HEYOO" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
