import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const form = useRef(); // Create a reference to the form
  const [status, setStatus] = useState(''); // State to hold the status message
  const [loading, setLoading] = useState(false); // State to manage loading status

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading to true when starting the email send process
    setStatus(''); // Reset any previous status messages

    try {
      const response = await emailjs.sendForm('service_o8puhbu', 'template_mrv8yn5', form.current, 'hWRZVtfz5AdP4QiKM');
      console.log('Email sent successfully:', response);
      setStatus('Message sent successfully!'); // Set success status
      form.current.reset(); // Reset the form after submission
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message. Please try again.'); // Set error status
    } finally {
      setLoading(false); // Set loading to false once the process is complete
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4 text-gray-700">
        I'm always open to collaboration and networking with like-minded individuals. If you have a project in mind or just want to connect, feel free to reach out!
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="from_name" // Ensure this matches your EmailJS template
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // Ensure this matches your EmailJS template
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message" // Ensure this matches your EmailJS template
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          disabled={loading} // Disable the button while loading
        >
          {loading ? 'Sending...' : 'Send Message'} {/* Show loading text */}
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <div className={`mb-4 ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </div>
      )}

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
