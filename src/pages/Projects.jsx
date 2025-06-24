import React from "react";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 px-4 py-16 flex justify-center items-start">
      <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-3xl animate-fade-in transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Projects</h2>
        <div className="space-y-6">
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">LawyerUp</h3>
            <p className="text-gray-700">
              A chatbot that recommends lawyers based on user input using decision trees and keyword analysis.
            </p>
          </div>
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Canvas Clone</h3>
            <p className="text-gray-700">
              A student information system with course management, grading, and notifications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
