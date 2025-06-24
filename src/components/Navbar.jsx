import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-4 bg-white shadow text-lg font-medium">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      <Link to="/about" className="hover:text-blue-500">About</Link>
      <Link to="/projects" className="hover:text-blue-500">Projects</Link>
      <Link to="/education" className="hover:text-blue-500">Education</Link>
      <Link to="/contact" className="hover:text-blue-500">Contact</Link>
    </nav>
  );
}
