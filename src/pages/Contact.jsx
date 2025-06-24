import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 px-4 py-16 flex justify-center items-start">
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-6 w-full max-w-md text-center border border-white/30 animate-fade-in transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">Let’s connect and collaborate!</p>

        <div className="flex flex-wrap justify-center gap-6 text-3xl text-gray-700">
          <a
            href="mailto:kanishksingh@usf.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/kanishksinghchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kanishk-sc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/kanishk.singh.chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.snapchat.com/add/kanishk2669"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition transform hover:scale-110"
          >
            <FaSnapchatGhost />
          </a>
        </div>
      </div>
    </main>
  );
}
