import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import resume from "/Final_Draft.pdf";

function Footer() {
  return (
    <div className="bottom-0 w-full ">
      <nav className="container flex justify-center shadow-md mx-auto px-6 py-3">
        <div
          className="flex justify-between items-center"
          style={{ zIndex: 999, position: "relative" }}
        >
          <div className="flex gap-4 space-x-10 p-2">
            <a href={resume} className="text-4xl font-bold">
              <IoDocumentText />
            </a>
            <a href="igunejiro@gmail.com" className="text-4xl font-bold">
              <MdEmail />
            </a>
            <a href="#" className="text-4xl font-bold">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
