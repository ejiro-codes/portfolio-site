import React from "react";
import resume from "../../public/Ejiros_Resume.pdf";

function Footer() {
  return (
    <div className="bottom-0 w-screen bg-violet-500 h-20">
      <div className="text-center" style={{ borderRadius: "30px" }}>
        <a
          className="text-lg text-center underline"
          href={resume}
          target="_blank"
        >
          Resume
        </a>
        <p>More to come...</p>
      </div>
    </div>
  );
}

export default Footer;
