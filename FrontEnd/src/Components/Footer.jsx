import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc]">
            <Link to="/">Reactify</Link>
          </span>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/Ashutosh-Shukla-036" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl text-black hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-shukla-1189b625b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-black hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/ashutosh__shukla07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-black hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p className="mb-1">
            <span className="font-semibold">Phone:</span> +91 7483562755
          </p>
          <p className="mb-1">
            <span className="font-semibold">Email:</span>
            <br />
            <a href="mailto:ashutoshshukla8970@gmail.com" className="text-blue-400 hover:text-blue-300 transition dark:text-blue-500 dark:hover:text-blue-400">
              ashutoshshukla8970@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Location:</span> Bangalore, Karnataka 560077
          </p>
        </div>

        {/* Collaboration Section */}
        <div className="text-center mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Collaborate With Me</h2>
          <p className="mb-2">I’m open to collaboration on exciting projects. If you have an idea or would like to work together, feel free to reach out!</p>
          <Link to="/contact" className="text-blue-500 hover:text-blue-400 transition dark:text-blue-400 dark:hover:text-blue-300">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Additional Links Section */}
      <div className="text-center mb-6">
        <Link to="/about" className="text-blue-500 hover:text-blue-400 transition dark:text-blue-400 dark:hover:text-blue-300">About Me</Link> 
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 space-y-3 mt-6 dark:text-gray-500">
        <p className="text-sm">&copy; {new Date().getFullYear()} Reactify. All rights reserved.</p>
      </div>
    </footer>
  );
};
