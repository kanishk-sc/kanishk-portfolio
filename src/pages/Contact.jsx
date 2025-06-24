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
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-10 flex flex-col items-center text-center">
      <div className="bg-white/60 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-8 max-w-2xl w-full space-y-6 transition duration-700 ease-in-out transform animate-fade-in hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-lg text-gray-700">Let’s connect!</p>

        <div className="flex justify-center gap-6 text-3xl text-gray-700">
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
