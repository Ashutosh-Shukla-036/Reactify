import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await emailjs.sendForm('service_o8puhbu', 'template_mrv8yn5', form.current, 'hWRZVtfz5AdP4QiKM');
      console.log('Email sent successfully:', response);
      setStatus('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I'm always open to collaboration and networking with like-minded individuals. If you have a project in mind or just want to connect, feel free to reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg p-6 mb-4 dark:bg-gray-800 dark:text-white">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-500"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <div className={`mb-4 ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </div>
      )}

      <div className="text-gray-700 mb-4 dark:text-gray-300">
        <p><strong>Email:</strong> <a href="mailto:ashutoshshukla8970@gmail.com" className="text-blue-500 hover:text-blue-400 dark:text-blue-400">{'ashutoshshukla8970@gmail.com'}</a></p>
        <p><strong>Phone:</strong> +91 7483562755</p>
      </div>

      <div className="flex space-x-4">
        <a href="https://github.com/Ashutosh-Shukla-036" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl text-gray-400 hover:text-blue-500 transition dark:text-gray-500 dark:hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/ashutosh-shukla-1189b625b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition dark:text-gray-500 dark:hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl text-gray-400 hover:text-blue-500 transition dark:text-gray-500 dark:hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
