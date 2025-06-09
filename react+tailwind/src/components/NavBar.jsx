import { Link } from "react-router-dom";
import DropDown from "../assets/icons/settings.png";
import { useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="w-full max-sm:p-1 bg-neutral-100 fixed z-50">
      <div className="flex text-xl ">
        <Link to={"/"}>
          <div className="text-2xl ml-5">Sony</div>
        </Link>
        <ul className="flex ml-auto max-sm:hidden">
          <Link to={"/"}>
            <li className="mr-5 cursor-pointer">Home</li>
          </Link>
          <Link to={"/About_Page"}>
            <li className="mr-5  cursor-pointer">About</li>
          </Link>
          <Link to={""}>
            <li className=" mr-5 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div
          className="flex max-sm:w-full  max-sm:relative  "
          onClick={() => setIsVisible(!isVisible)}
        >
          <img
            src={DropDown}
            alt=""
            className=" max-sm:absolute max-sm:right-2 sm:hidden cursor-pointer "
          />
          <div className="flex flex-col  sm:hidden w-full">
            <ul
              className={`${
                isVisible ? "block" : "hidden"
              } text-neutral-300 rounded-lg bg-neutral-600 absolute right-10  top-12 w-full z-50  `}
            >
              <Link to={"/"}>
                <li className="cursor-pointer p-2 hover:bg-neutral-500 hover:rounded-t-lg">
                  Home
                </li>
              </Link>
              <Link to={"/About_Page"}>
                <li className="cursor-pointer p-2 hover:bg-neutral-500">
                  About
                </li>
              </Link>
              <Link to={""}>
                <li className="cursor-pointer p-2 hover:bg-neutral-500  hover:rounded-b-lg">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
