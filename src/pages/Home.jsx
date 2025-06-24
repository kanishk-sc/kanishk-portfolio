import React from "react";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/background.jpg')" }} // your background image path
    >
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-10 max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Kanishk Singh Chauhan</h1>
        <p className="text-gray-700 text-lg">
          Information Technology Student | Aspiring Data Analyst
        </p>

        <div className="flex justify-center">
          <img
            src="/kani.jpg"
            alt="Tech illustration"
            className="max-w-xs w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
            View My Resume
          </button>
        </a>
      </div>
    </main>
  );
}
