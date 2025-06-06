import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="w-full max-sm:p-1">
      <div className="flex  ml-15 text-xl ">
        <Link to={"/"}>
          <div className="">Sony</div>
        </Link>
        <ul className="flex ml-auto">
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
      </div>
    </nav>
  );
};

export default NavBar;
