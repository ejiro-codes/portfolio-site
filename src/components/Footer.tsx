import React from "react";
import resume from "/Ejiros_Resume.pdf";

function Footer() {
  return (
    <div className="bottom-0 w-full bg-violet-500 h-20">
      <div className="text-center" style={{ borderRadius: "30px" }}>
        <a
          className="text-2xl text-center underline"
          href={resume}
          target="_blank"
        >
          Resume
        </a>
        <p className="text-lg">More to come...</p>
      </div>
    </div>
  );
}

export default Footer;
