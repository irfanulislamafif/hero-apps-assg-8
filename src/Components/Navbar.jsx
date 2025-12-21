import React from "react";
import { Link, NavLink } from "react-router";
import GithubIcon from "../assets/github.png";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className=" dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <img className="w-8" src={Logo} alt="" />
        <Link
          to="/"
          className="font-semibold shadow-amber-50 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent text-xl">
          Hero.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink
              className="
    bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] 
    bg-clip-text 
    text-gray-600 
    transition-colors 
    hover:text-transparent 
    hover:underline 
    hover:decoration-[#632EE3] 
    focus:text-transparent 
    focus:underline 
    focus:decoration-[#632EE3]
  "
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="apps"
              className="
    bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] 
    bg-clip-text 
    text-gray-600 
    transition-colors 
    hover:text-transparent 
    hover:underline 
    hover:decoration-[#632EE3] 
    focus:text-transparent 
    focus:underline 
    focus:decoration-[#632EE3]
  ">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className="
    bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] 
    bg-clip-text 
    text-gray-600 
    transition-colors 
    hover:text-transparent 
    hover:underline 
    hover:decoration-[#632EE3] 
    focus:text-transparent 
    focus:underline 
    focus:decoration-[#632EE3]
  "
              to="installation">
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/irfanulislamafif"
          className="btn btn-outline bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white">
          <span>
            <img className=" w-6" src={GithubIcon} alt="" />
          </span>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
