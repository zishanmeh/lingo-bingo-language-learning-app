import { Link, NavLink } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
      {user && (
        <li>
          <NavLink to="/profile" className="text-white">
            My Profile
          </NavLink>
        </li>
      )}
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
        {user ? (
          <div className="flex gap-2 items-center">
            <img
              src={user?.photoURL ? user.photoURL : user.displayName}
              alt={`Photo of ${user.displayName}`}
              className="w-12 h-12 rounded-full"
            />
            <button className="btn btn-neutral rounded-none" onClick={logOut}>
              Log-Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Link
              to="/auth/login"
              className="btn bg-white text-primary_color border border-white hover:bg-white hover:text-secondary_color"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// <a className="btn bg-white text-primary_color border border-white hover:bg-white hover:text-secondary_color">
// Login
// </a>
export default Navbar;
