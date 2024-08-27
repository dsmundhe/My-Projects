import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg text-black p-4 flex flex-wrap items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center flex-1">
        <Link to="/" className="text-2xl font-bold no-underline font-roboto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <h1>THE CAREER COMPANY</h1>
        </Link>
      </div>

      {/* Hamburger Menu Button for Small Devices */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-black focus:outline-none">
          <div className="space-y-2">
            <div className={`w-8 h-1 bg-black transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-8 h-1 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-1 bg-black transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Navigation Links and Buttons */}
      <div
        className={`${menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto flex-1 justify-between`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0 md:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`
            }
          >
            <h2 className="text-lg">Home</h2>
          </NavLink>
          <NavLink
            to="/find"
            className={({ isActive }) =>
              `no-underline ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`
            }
          >
            <h2 className="text-lg">Mentors</h2>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `no-underline ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`
            }
          >
            <h2 className="text-lg">Resume</h2>
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
          <NavLink
            to="/mentor"
            className={({ isActive }) =>
              `no-underline ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`
            }
          >
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md">
              Join as Mentor
            </button>
          </NavLink>
          <NavLink
            to="/tranie"
            className={({ isActive }) =>
              `no-underline ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`
            }
          >
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md">
              Join as Trainee
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;