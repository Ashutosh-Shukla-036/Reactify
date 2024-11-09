import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { userAtom } from '../Atoms/userAtom';
import { useRecoilState } from 'recoil';
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode was previously set in localStorage or by the system preference
  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else if (darkModePreference === 'false') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      // Check system dark mode preference if nothing is stored
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      }
    }
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, [setUser]);

  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    if (newDarkModeState) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const MenuItemLink = ({ to, children }) => (
    <li className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb] dark:text-white">
      <Link to={to} className="text-black hover:text-white">{children}</Link>
    </li>
  );

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 p-4 flex items-center justify-evenly shadow-lg">
      {/* Logo and App Name */}
      <div className="flex items-center gap-3">
        <FaReact className="text-black h-auto w-7 animate-rotate dark:text-white" />
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc]">
          <Link to="/">Reactify</Link>
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <ul className="flex space-x-4">
          {user ? (
            <>
              <MenuItemLink to="/dashboard">Dashboard</MenuItemLink>
              <MenuItemLink to="/history">History</MenuItemLink>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb] hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <MenuItemLink to="/signup">Register</MenuItemLink>
              <MenuItemLink to="/login">Login</MenuItemLink>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none dark:text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 dark:bg-gray-800">
          <ul className="flex flex-col space-y-2 p-4 animate-fade-in dark:text-white">
            {user ? (
              <>
                <MenuItemLink to="/dashboard">Dashboard</MenuItemLink>
                <MenuItemLink to="/history">History</MenuItemLink>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb] dark:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <MenuItemLink to="/signup">Register</MenuItemLink>
                <MenuItemLink to="/login">Login</MenuItemLink>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <div className="ml-4">
        <button
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? <MdDarkMode className="inline-block mr-2 text-white h-auto w-7 hover:text-blue-500" /> : <MdLightMode className="inline-block mr-2 text-black h-auto w-7 hover:text-blue-500"/>}
        </button>
      </div>
    </nav>
  );
};
