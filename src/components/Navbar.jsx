import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-violet-500 bg-opacity-30" >
      <nav className="container mx-auto px-6 py-3" style={{ zIndex: 1, position: "relative" }}>
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl text-zinc-100 opacity-100">
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
