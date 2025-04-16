import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary px-4 sm:px-10 py-6 border-b border-gray-400">
      <div className="flex justify-between items-center">
        <div className="text-3xl">
          <Link to="/">Password Manager</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <SlMenu />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/manager"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
          >
            Manager
          </NavLink>
          <NavLink
            to="/generater"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
          >
            Generate Password
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/manager"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Manager
          </NavLink>
          <NavLink
            to="/genreter"
            className={({ isActive }) =>
              isActive ? "text-gray-600" : "text-black"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Generate Password
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
