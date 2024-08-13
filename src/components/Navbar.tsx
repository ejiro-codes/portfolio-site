import { IoHome } from "react-icons/io5";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-violet-500 ">
      <nav className="container shadow-md mx-auto px-6 py-3">
        <div
          className="flex justify-between items-center"
          style={{ zIndex: 999, position: "relative" }}
        >
          <a
            href="#"
            className="text-2xl text-zinc-100 opacity-100 xs:mr-5 md:mr-0"
          >
            <IoHome />
          </a>
          <div className="flex space-x-4">
            <a href="#resume" className="text-xl font-bold text-zinc-100">
              Resume
            </a>
            <a href="#projects" className="text-xl font-bold text-zinc-100">
              Projects
            </a>
            <a href="#experiences" className="text-xl font-bold text-zinc-100">
              Experiences
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
