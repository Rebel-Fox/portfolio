import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass =
    "relative uppercase font-semibold hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:bottom-[-1px] hover:after:w-0 hover:after:h-1 hover:after:bg-red-600 hover:after:animate-underline";
  const activeLinkClass =
    "relative uppercase font-semibold after:absolute after:content-[''] after:left-0 after:bottom-[-1px] after:w-full after:h-1 after:bg-red-600";
  return (
    <header className="flex justify-between items-center px-6 py-6 border-b-2 border-neutral-200">
      <NavLink to="/" className="text-4xl font-bold">
        Vineet.
      </NavLink>
      <nav className="flex text-md gap-3.5">
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}
