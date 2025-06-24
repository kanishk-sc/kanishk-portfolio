import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 px-4 py-16 flex justify-center items-start">
      <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-2xl text-center animate-fade-in transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Hi, I'm <strong>Kanishk</strong> – an Information Technology student at the University of South Florida.
          I love diving into real-world projects and solving problems with code.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          My interests include data analytics, cloud technologies like AWS, and building scalable systems.
          I’m constantly learning and enjoy working with tools that bring ideas to life.
        </p>
      </div>
    </main>
  );
}
