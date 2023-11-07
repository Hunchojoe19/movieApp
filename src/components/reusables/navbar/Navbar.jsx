import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState("");
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/");
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2 w-36 h-32">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] mt-4 md:w-[100px] md cursor-pointer"
            onClick={handleRoute}
          />
        </div>
        <div className="hidden md:flex space-x-10">
          <Link className="hover:text-darkGrayishBlue cursor-pointer text-lg">
            <button onClick={handleRoute}>Home</button>
          </Link>

          <Link
            activeClass="active"
            to="suggestion"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer text-lg"
          >
            Make a Suggestion
          </Link>
        </div>
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            open ? "open" : !open
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            open ? "" : "hidden"
          } absolute flex flex-col items-center self-end z-50 py-8 mt-10 space-y-6 font-bold bg-sky-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="suggestion"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Make a Suggestion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
