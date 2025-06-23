import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-10 text-center space-y-12">
      <section className="space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow">Kanishk Singh Chauhan</h1>
        <p className="text-xl text-gray-600">Information Technology Student | Aspiring Data Analyst</p>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
        <p className="text-gray-700 text-lg">
          I am currently pursuing a B.S. in Information Technology at the University of South Florida.
          I am passionate about data analytics, cloud technologies, and building scalable systems.
          I enjoy working on real-world projects and am always looking for ways to improve and learn new tools and technologies.
        </p>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800">LawyerUp</h3>
            <p className="text-gray-600">A chatbot that recommends lawyers based on user input using decision trees and keyword analysis.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800">Canvas Clone</h3>
            <p className="text-gray-600">A student information system built with a modular architecture. Features include course management, grading, and notifications.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">Resume</h2>
  <a
    href="/resume.pdf"
    target="_blank"
    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
  >
    View My Resume
  </a>
</section>


      <section className="space-y-2 text-lg text-gray-700">
        <p>Email: <a href="mailto:kanishksingh@usf.edu" className="text-blue-600 hover:underline">kanishksingh@usf.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kanishksinghchauhan" className="text-blue-600 hover:underline">kanishkchauhan</a></p>
      </section>
    </div>
  );
}
