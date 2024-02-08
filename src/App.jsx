import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
//import "./App.css";

function App() {
  return (
    <div className=" font-['Chakra Petch'] bg-gradient-to-r from-purple-500 to-indigo-500 w-screen h-screen">
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
  );
}

export default App;
