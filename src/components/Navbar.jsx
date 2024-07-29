import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 h-[10vh] items-center sticky top-0  bg-purple-300/70">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "text-red-900 font-bold text-xl"
            : "text-black font-bold text-xl";
        } }
      >
        View Projects
      </NavLink>
      <NavLink
        to="/addProject"
        className={({ isActive }) => {
          return isActive
            ? "text-red-900 font-bold text-xl"
            : "text-black font-bold text-xl";
        }}
      >
        Add Project
      </NavLink>
    </div>
  );
};

export default Navbar;
