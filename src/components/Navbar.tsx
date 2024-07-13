import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-violet-500 bg-opacity-30">
      <nav className="container mx-auto px-6 py-3">
        <div
          className="flex justify-between items-center"
          style={{ zIndex: 999, position: "relative" }}
        >
          <a
            href="#"
            className="text-2xl text-zinc-100 opacity-100 xs:mr-5 md:mr-0"
          >
            Ejiro
          </a>
          <div className="flex space-x-4">
            <a href="#about" className="text-lg text-zinc-100">
              About
            </a>
            <a href="#projects" className="text-lg text-zinc-100">
              Projects
            </a>
            <a href="#experiences" className="text-lg text-zinc-100">
              Experiences
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
