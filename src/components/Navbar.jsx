import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center space-x-4 sm:space-x-8 text-base font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/education" className="hover:text-blue-500">Education</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
