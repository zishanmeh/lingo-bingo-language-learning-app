import { NavLink } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/learn" className="text-white">
          Start-learning
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutorials" className="text-white">
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-white">
          About-us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar font-poppins mb-5 bg-primary_color sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-secondary_color"
          >
            {links}
          </ul>
        </div>
        <div className="hidden md:block">
          <a className="btn btn-ghost text-xl text-white">
            Lingo Bingo <IoLanguageSharp size={25}></IoLanguageSharp>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-white text-primary_color border border-white hover:bg-white hover:text-secondary_color">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
