import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4 text-gray-700">
        I'm always open to collaboration and networking with like-minded individuals. If you have a project in mind or just want to connect, feel free to reach out!
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="text-gray-700 mb-4">
        <p><strong>Email:</strong> <a href="mailto:ashutoshshukla8970@gmail.com" className="text-blue-500 hover:text-blue-400">ashutoshshukla8970@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 7483562755</p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://github.com/Ashutosh-Shukla-036" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl text-gray-400 hover:text-blue-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/ashutosh-shukla-1189b625b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl text-gray-400 hover:text-blue-500 transition" />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
