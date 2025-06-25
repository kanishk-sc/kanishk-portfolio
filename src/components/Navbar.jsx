import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800">Kanishk</h1>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/education" className="hover:text-blue-500">Education</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-4 text-lg font-medium text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Projects</Link>
          <Link to="/education" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Education</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
